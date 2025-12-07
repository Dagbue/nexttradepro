<!--suppress UnnecessaryLocalVariableJS -->
<template>
  <div class="alpha">
    <div class="body">
      <h2>Trade Requests</h2>
      <div class="row trans-mgt">
<!--        <div class="form-group fg&#45;&#45;search">-->
<!--          <button type="submit"><i class="fa fa-search"></i></button>-->
<!--          <input type="text" class="input" placeholder="Search Trade Requests..."/>-->
<!--        </div>-->
        <div class="form-group fg--search">
          <button type="submit" @click.prevent="filterTrades"><i class="fa fa-search"></i></button>
          <input type="text" class="input" placeholder="Search Trade Requests..." v-model="searchQuery" @input="filterTrades"/>
        </div>
        <div class="pageNumbers">
          <p>show</p>
          <select v-model="itemsPerPage">
            <option :value="10">10</option>
            <option :value="25">25</option>
            <option :value="50">50</option>
            <option :value="100">100</option>
          </select>
          <p>entries</p>
        </div>
<!--        <div class="row filter_group">-->
<!--          &lt;!&ndash;          <div class="blue">Download transactions</div>&ndash;&gt;-->
<!--          <div class="action-content">-->
<!--            <img src="@/assets/Filterslines.svg"  alt="Export"/>-->
<!--            <p>Filter</p>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
    <div class="section-5">
      <div class="empty-state"  v-if="this.allTrades.trades.length === 0">
        <img src="@/assets/empty.svg" alt="empty">
        <p class="empty-state-text-1">You have nothing to see</p>
        <p class="empty-state-text-2">This is where your Trade Requests will appear</p>
        <!--        <p class="empty-state-text-3">-->
        <!--          <i class='bx bx-plus' ></i>-->
        <!--          Transaction-->
        <!--        </p>-->
      </div>

      <div class="table" v-if="this.allTrades.trades.length > 0" >
        <table>
          <tr>
            <th>Trade ID</th>
            <th>User</th>
            <th>Trade Type</th>
            <th>End Price</th>
            <th>Leverage</th>
            <th>Market Type</th>
            <th>Stop Loss</th>
            <th>Take Profit</th>
            <th>Entry Price</th>
            <th>Payout</th>
            <th>Amount</th>
            <th>Symbol</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

          <div v-if="loading">
            <div class="table-content">
              <div class="name-wrapper-body">
                <p
                    class="table-body-text"
                    style="position: absolute;
                    margin-left: 45%"
                >
                  <base-loader2/>
                </p>
              </div>
            </div>
          </div>

          <tbody v-else v-for="child in paginatedItems" :key="child.key">
          <tr>
            <td data-label="Trade ID">{{child.tradeReference}}</td>
            <td data-label="User">{{child.firstName}} {{child.lastName}}</td>
            <td data-label="Trade Type">{{child.tradeType}}</td>
            <td data-label="End Price">$ {{child.endPrice| formatAmount}}</td>
            <td data-label="Leverage">{{child.leverage}}</td>
            <td data-label="Market Type">{{child.marketType}}</td>
            <td data-label="Stop Loss">$ {{child.stopLoss| formatAmount}}</td>
            <td data-label="Take Profit">$ {{child.takeProfit| formatAmount}}</td>
            <td data-label="End Price">$ {{child.entryPrice| formatAmount}}</td>
            <td data-label="Payout">$ {{child.expectedPayout | formatAmount}}</td>
            <td data-label="Amount">$ {{child.amountTrade | formatAmount}}</td>
            <td data-label="Symbol">{{child.symbolTraded}}</td>
            <td data-label="Date">{{child.createdAt | formatDate}}</td>
            <td data-label="Status">
              <div>
                <p class="status-won" v-if="child.tradeStatus === 'won'">{{child.tradeStatus | lowercase}}</p>
                <p class="status-lost" v-if="child.tradeStatus === 'lost'">{{child.tradeStatus | lowercase}}</p>
                <p class="status-pending" v-if="child.tradeStatus === 'pending'">{{child.tradeStatus | lowercase}}</p>
              </div>
            </td>
            <td data-label="Action">
<!--              <button  class="btn" @click="navigateWithParams(child)">Edit</button>-->
              <a
                  :href="urlWithParams(child)"
                 class="btn" target="_blank"
              >Edit</a>
              <button class="btn-2">Delete</button>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="pagination">
          <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
          <div class="page-indicator">
            Page {{ currentPage }} of {{ totalPages }}
          </div>
          <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import StoreUtils from "@/utility/StoreUtils";
import router from "@/router";
import BaseLoader2 from "@/components/BaseComponents/tables/BaseLoader2.vue";
import {mapState} from "vuex";

export default {
  name: "DashBoardTradeRequestAdmin",
  components: {BaseLoader2},
  data () {
    return {
      SelectEmail: "",
      history: [],
      statusUpdate:"won",
      statusUpdate2:"lost",
      depositValue: 0,
      currentPage: 1,
      itemsPerPage: 8,
      searchQuery: "", // Data property to hold the search input
    }
  },
  computed:{
    ...mapState({
      loading: state => state.trade.loading,
      auth: state => state.auth,
    }),
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      // Filter trades based on searchQuery before slicing for pagination
      const filteredTrades = this.searchQuery.trim() ?
          this.allTrades.trades.filter(trade =>
              trade.tradeReference.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeType.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.symbolTraded.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeStatus.toLowerCase().includes(this.searchQuery.toLowerCase())
          ) : this.allTrades.trades;
      return filteredTrades.slice(startIndex, endIndex);
    },
    totalPages() {
      // Recalculate total pages based on filtered trades
      const filteredTrades = this.searchQuery.trim() ?
          this.allTrades.trades.filter(trade =>
              trade.tradeReference.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeType.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.symbolTraded.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeStatus.toLowerCase().includes(this.searchQuery.toLowerCase())
          ) : this.allTrades.trades;
      return Math.ceil(filteredTrades.length / this.itemsPerPage);
    },

    // paginatedItems() {
    //   return this.allTrades.trades.filter(trade =>
    //       Object.values(trade).some(value =>
    //           value.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
    //       )
    //   ).slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
    // },
    //
    // totalPages() {
    //   const filteredTradeCount = this.allTrades.trades.filter(trade =>
    //       Object.values(trade).some(value =>
    //           value.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
    //       )
    //   ).length;
    //   return Math.ceil(filteredTradeCount / this.itemsPerPage);
    // },



    allTrades() {
      return StoreUtils.rootGetters(StoreUtils.getters.trade.getAllTrade)
    },
  },

  methods: {


    urlWithParams(child) {
      const basePath = this.$router.resolve({
        name: 'tradeRequestAdminUpdate',
        query: { tradeId: child.tradeId, userId: child.userId}
      }).href;
      return basePath;
    },



    filterTrades() {
      // Reset to the first page when filtering
      this.currentPage = 1;
    },
    async next(child) {
      await StoreUtils.commit(StoreUtils.mutations.auth.updateAdminUserId, {
        tradeId: child.tradeId,
        userId: child.userId
      })
      await StoreUtils.dispatch(StoreUtils.actions.trade.readTradeById, {
        tradeId: child.tradeId
      })
      await router.push("/trade-request-admin-update");
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    goToPage(pageNumber) {
      if (pageNumber > 0 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
  },

  created() {
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.rootGetters(StoreUtils.getters.trade.getAllTrade)
  },

  mounted() {

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.dispatch(StoreUtils.actions.trade.readAllTrade)
  }
}
</script>

<style scoped>
.status-pending{
  background-color: #FE9431;
  border-radius: 5px;
  font-size: 12px;
  width: 70px;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #FFFFFF;
}
.status-won{
  background-color: #10d876;
  border-radius: 5px;
  font-size: 12px;
  width: 70px;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #FFFFFF;
}
.status-lost{
  background-color: #E50202;
  border-radius: 5px;
  font-size: 12px;
  width: 70px;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #FFFFFF;
}
.body{
  padding: 32px;
}
h2{
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #071333;
}
.row{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.pageNumbers{
  display: flex;
  gap: 5px;
  align-content: center;
  align-items: center;
  padding-right: 2%;
}
.trans-mgt{
  margin-top: 17px;
  /* align-items: center; */
}
.filter_group{
  margin-left: auto;
  gap: 16px;
}

.white{
  display: flex;
  align-items: center;
  align-content: center;
  background-color: #FFFFFF;
  border: 0.5px solid #3C4A57FF;
  font-size: 13px;
  padding:  6px 14px;
  border-radius: 5px;
  gap: 10px;
}
.blue{
  display: flex;
  align-items: center;
  align-content: center;
  padding: 6px 14px;
  border-radius: 5px;
  font-size: 13px;
  background-color: #1570EF;
  border: 1px solid #1570EF;
  color: #ffffff;
}

.fg--search {
  background: none;
  position: relative;
  width: 400px;
  margin-left: 1%;
}
.fg--search input {
  width: 100%;
  padding: 10px;
  padding-left: 15px;
  display: block;
  background: #FFFFFF;
  border: 0.5px solid #3C4A57FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;
}

.fg--search input::placeholder {
  color: #071333;
}

.fg--search button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 10px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  margin-top: 5px;
}

.fa-search{
  color: #071333;
  margin-right: 10px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
.table{
  margin-left: 2%;
  margin-right: 3%;
  margin-bottom: 10px;
}

tr{
  border: 1px solid #E3EBF6;
}

th {
  background-color: #0f171c;
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 13px;
  color: #ffffff;
  text-align: center;
}

td {
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 5px;
  /*letter-spacing: 1px;*/
  color: #071333;
  font-weight: 200;
  font-size: 13px;
  /*border-bottom: 1px solid #E3EBF6;*/
}

.empty-state{
  text-align: center;
  margin-top: 7%;
  margin-right: 8%;
}

.empty-state-text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #071333;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}

.empty-state-text-2{
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #071333;
  padding-bottom: 1.25%;
}

.empty-state-text-3{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 8px;
  width: 130px;
  margin-right: auto;
  margin-left: auto;
  height: 35px;
  background: #0765FF;
  color: #FFFFFF;
  border: 1px solid #0765FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 5px;
  font-size: 13px;
}

.empty-state-text-3:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.action-content{
  display: flex;
  align-items: center;
  align-content: center;
  padding: 8px 14px;
  gap: 8px;
  width: 88px;
  height: 36px;
  background: #FFFFFF;
  border: 0.5px solid #3C4A57FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  margin-right: 13px;
}

.action-content:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.action-content p {
  color: #071333;
  font-size: 13px;
}

.fields-alpha-2{
  background-color: #0f171c;
  padding: 10px 20px;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 5px;
  margin-top: 2%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;

}

.fields-alpha-2-label{
  color: #ffffff;
}

.btn{
  color: #ffffff;
  background-color: #007aff;
  border: 0.5px solid #007aff;
  padding: 4px 5px;
  font-size: 11px;
  text-align: center;
  width: 90px;
  border-radius: 5px;
  transition: all 0.3s ease-in;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
}

.btn:hover{
  background-color: #007aff;
  border: 1px solid #007aff;
  color: #ffffff;
}

.btn-2{
  color: #ffffff;
  background-color: #fb483a !important;
  border: 0.5px solid #fb483a;
  padding: 4px 5px;
  font-size: 11px;
  text-align: center;
  width: 90px;
  border-radius: 5px;
  transition: all 0.3s ease-in;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.btn-2:hover{
  background-color: #fb483a;
  border: 1px solid #fb483a;
  color: #ffffff;
}



select {
  width: 45%;
  padding: 4px;
  /*padding-left: 15px;*/
  display: block;
  background: #FFFFFF;
  border: 0.5px solid #3C4A57FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 5px;
}

.pagination{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
}

.previous{
  /*display: flex;*/
  /*align-content: center;*/
  /*align-items: center;*/
  text-align: center;
  padding: 8px 14px;
  gap: 8px;
  font-size: 12px;
  width: 100px;
  height: 30px;
  background: transparent;
  color: #071333;
  /*border: 1px solid #1570EF;*/
  border: 1px solid #E3EBF6;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}

.previous:hover{
  box-shadow: 0 0 5px rgba(16, 24, 40, 0.2);
}

.page-indicator{
  color: #071333;
  font-weight: 200;
  font-size: 13px;
}
/*tr td:first-child:before*/
/*{*/
/*  counter-increment: Serial;      !* Increment the Serial counter *!*/
/*  content:counter(Serial); !* Display the counter *!*/
/*}*/

.name-wrapper-body {
  width: 12%;
  height: 100%;
  align-items: center;
  padding-left: 16px;
  display: flex;
}
.table-content {
  height: 35px;
  /*border-bottom: 1px solid rgba(0, 0, 0, .13);*/
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  display: flex;
  align-content: center;
}

@media (max-width: 700px) {
  .table{
    margin-left: unset;
  }
  th {
    display: none;
  }

  table, thead, tbody, td, tr {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 0.5px solid #ccc;
  }

  td {
    /* Each cell is now a full-width row */
    border: none;
    position: relative;
    padding-left: 60%;
    text-align: center;
    margin-bottom: 10px;
    font-size: 15px;
  }

  td:before {
    /* Use the data-label for the pseudo-element content */
    content: attr(data-label);
    position: absolute;
    left: 10px;
    padding-left: 5%;
    font-weight: bold;
  }
}

@media (max-width: 500px) {
  .filter_group{
    display: none;
  }

  .row{
    display: block;
  }

  .pageNumbers{
    padding-top: 10px;
    padding-left: 2px;
    padding-right: unset;
  }

  .fg--search {
    margin-left: unset;
  }

  .body{
    padding: 10px 20px 10px 5px;
  }
  h2{
    padding-left: 10px;
  }
  .empty-state-container{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
}
</style>