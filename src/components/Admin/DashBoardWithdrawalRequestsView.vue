<template>
  <div class="alpha">
    <div class="body">
      <h2>Withdrawal Requests</h2>
      <div class="row trans-mgt">
        <div class="form-group fg--search">
          <button type="submit" @click.prevent="filterWithdrawals"><i class="fa fa-search"></i></button>
          <input type="text" class="input" placeholder="Search Withdrawal Requests..." v-model="searchQuery" @input="filterWithdrawals"/>
        </div>
<!--        <div class="form-group fg&#45;&#45;search">-->
<!--          <button type="submit"><i class="fa fa-search"></i></button>-->
<!--          <input type="text" class="input" placeholder="Search Withdrawal Requests..."/>-->
<!--        </div>-->
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
<!--      {{allWithdrawals}}-->
      <div class="empty-state" v-if="this.allWithdrawals.withdrawal.length === 0">
        <img src="@/assets/empty.svg" alt="empty">
        <p class="empty-state-text-1">You have nothing to see</p>
        <p class="empty-state-text-2">This is where your Withdrawal Requests will appear</p>
        <!--        <p class="empty-state-text-3">-->
        <!--          <i class='bx bx-plus' ></i>-->
        <!--          Transaction-->
        <!--        </p>-->
      </div>


      <div class="table" v-if="this.allWithdrawals.withdrawal.length >0" >
        <table>
          <tr>
            <th>Client Name</th>
            <th>Amount</th>
            <th>Payment Mode</th>
            <th>Date Applied</th>
            <th>Wallet Address</th>
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
            <td data-label="Client Name">{{child.firstName}} {{child.lastName}}</td>
            <td data-label="Amount">{{child.amount}}</td>
            <td data-label="Payment Mode">{{child.transactionMethod}}</td>
            <td data-label="Date Applied">{{child.createdAt | formatDate}}</td>
            <td data-label="Wallet Address">{{child.walletAddress}}</td>
            <td data-label="Status">
              <div>
                <p v-if="child.withdrawalStatus === 'approved'" class="status-approved">{{child.withdrawalStatus | lowercase}}</p>
                <p v-if="child.withdrawalStatus === 'declined'" class="status-declined">{{child.withdrawalStatus | lowercase}}</p>
                <p v-if="child.withdrawalStatus === 'pending'" class="status-pending">{{child.withdrawalStatus | lowercase}}</p>
              </div>
            </td>
            <td data-label="Action">
              <div v-if="child.withdrawalStatus === 'pending'">
                <button class="btn" @click="approve(child)">Approve</button>
                <button class="btn-2" @click="decline(child)">Decline</button>
              </div>
              <p class="status-declined-2" v-if="child.withdrawalStatus === 'declined'">Already Declined</p>
              <p class="status-approved-2" v-if="child.withdrawalStatus === 'approved'">Already Approved</p>
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
import {mapState} from "vuex";
import BaseLoader2 from "@/components/BaseComponents/tables/BaseLoader2.vue";

export default {
  name: "DashBoardWithdrawalRequestsView",
  components: {BaseLoader2},
  data () {
    return {
      SelectEmail: "",
      history: [],
      statusUpdate:"approved",
      statusUpdate2:"declined",
      depositValue: 0,
      currentPage: 1,
      itemsPerPage: 10,
      searchQuery: "", // Data property to hold the search input
    }
  },
  computed:{
    ...mapState({
      loading: state => state.withdrawal.loading,
      auth: state => state.auth,
    }),
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      // Filter withdrawals based on searchQuery before slicing for pagination
      const filteredWithdrawals = this.searchQuery.trim() ?
          this.allWithdrawals.withdrawal.filter(wd =>
              wd.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              wd.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              wd.amount.toString().includes(this.searchQuery) ||
              wd.transactionMethod.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              wd.walletAddress.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              wd.withdrawalStatus.toLowerCase().includes(this.searchQuery.toLowerCase())
          ) : this.allWithdrawals.withdrawal;
      return filteredWithdrawals.slice(startIndex, endIndex);
    },
    totalPages() {
      // Recalculate total pages based on filtered withdrawals
      const filteredWithdrawals = this.searchQuery.trim() ?
          this.allWithdrawals.withdrawal.filter(wd =>
              wd.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              wd.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              wd.amount.toString().includes(this.searchQuery) ||
              wd.transactionMethod.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              wd.walletAddress.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              wd.withdrawalStatus.toLowerCase().includes(this.searchQuery.toLowerCase())
          ) : this.allWithdrawals.withdrawal;
      return Math.ceil(filteredWithdrawals.length / this.itemsPerPage);
    },
    allWithdrawals() {
      return StoreUtils.rootGetters(StoreUtils.getters.withdrawal.getAllWithdrawal)
    },
  },


  methods: {

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

    filterWithdrawals() {
      // Reset to the first page when filtering
      this.currentPage = 1;
    },

    async approve(child) {
      await StoreUtils.dispatch(StoreUtils.actions.withdrawal.updateWithdrawalStatus, {
        withdrawalId: child.withdrawalId,
        withdrawalStatus: "approved",
      });
      await StoreUtils.dispatch(StoreUtils.actions.withdrawal.readAllWithdrawal)
    },

    async decline(child) {
      await StoreUtils.dispatch(StoreUtils.actions.withdrawal.updateWithdrawalStatus, {
        withdrawalId: child.withdrawalId,
        withdrawalStatus: "declined",
      });
      await StoreUtils.dispatch(StoreUtils.actions.withdrawal.readAllWithdrawal)
    },
  },

  created() {
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.rootGetters(StoreUtils.getters.withdrawal.getAllWithdrawal)
  },

  mounted() {

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.dispatch(StoreUtils.actions.withdrawal.readAllWithdrawal)
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
  color: #ffffff;
}
.status-approved{
  background-color: #10d876;
  border-radius: 5px;
  font-size: 12px;
  width: 70px;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
}
.status-declined{
  background-color: #E50202;
  border-radius: 5px;
  font-size: 12px;
  width: 70px;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
}

.status-pending-2{
  background-color: #FE9431;
  border-radius: 5px;
  font-size: 12px;
  width: 65%;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
}
.status-approved-2{
  background-color: #10d876;
  border-radius: 5px;
  font-size: 12px;
  width: 65%;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
}
.status-declined-2{
  background-color: #E50202;
  border-radius: 5px;
  font-size: 12px;
  width: 65%;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
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
}

tr{
  border: 1px solid #E3EBF6;
}

th {
  background-color: #0f171c;
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 14px;
  color: #FFFFFF;
  text-align: center;
}

td {
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 7px;
  /*letter-spacing: 1px;*/
  color: #071333;
  font-weight: 200;
  font-size: 15px;
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
  color: #222222;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}

.empty-state-text-2{
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #222222;
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
  background: #ffffff;
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
  padding-top: 10px;
  padding-bottom: 10px;
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
  /*margin-top: 3%;*/
  color: #ffffff;
  background-color: #007aff;
  border: 1px solid #007aff;
  padding: 4px 10px;
  /*display: block;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  text-align: center;
  width: 80px;
  border-radius: 5px;
  transition: all 0.3s ease-in;
  margin-right: 5px;
}

.btn:hover{
  background-color: #007aff;
  border: 1px solid #007aff;
  color: #ffffff;
}

.btn-2{
  /*margin-top: 3%;*/
  color: #ffffff;
  background-color: #fb483a;
  border: 1px solid #fb483a;
  padding: 4px 10px;
  /*display: block;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  text-align: center;
  width: 80px;
  border-radius: 5px;
  transition: all 0.3s ease-in;
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
  border: 1px solid #071333;
  /*box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);*/
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
label{
  color: #FFFFFF;
}
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