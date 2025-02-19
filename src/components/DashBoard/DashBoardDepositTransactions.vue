<template>
  <div class="alpha">
    <div class="body">
<!--      <h2>Transactions</h2>-->
      <div class="row trans-mgt">


        <div class="form-group fg--search">
          <button type="submit" @click.prevent="searchTransactions"><i class="fa fa-search"></i></button>
          <input style="color: #FFFFFF;" type="text" class="input" placeholder="Search transaction..." v-model="searchQuery" @input="searchTransactions"/>
        </div>


        <div class="row filter_group">
          <!--          <div class="blue">Download transactions</div>-->
          <div class="action-content">
            <img src="@/assets/Filterslines.svg"  alt="Export"/>
            <p>Filter</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-5">
            <div class="empty-state-container" v-if="this.UserDeposit.deposits.length === 0">
              <img src="@/assets/empty.svg" alt="empty" class="empty-state">
              <p class="empty-state-text-1">You have nothing to see</p>
              <p class="empty-state-text-2">This is where your Deposits will appear</p>
            </div>


      <div class="table" v-if="this.UserDeposit.deposits.length >0">
        <table>
          <tr>
            <th>S/N</th>
            <th>Amount</th>
            <th>Transaction Type</th>
            <th>Transaction Reference</th>
            <th>Date</th>
            <th>Status</th>
          </tr>


          <div v-if="loading">
            <div class="table-content">
              <div class="name-wrapper-body">
                <p
                    class="table-body-text"
                    style="position: absolute;
                    margin-left: 43%"
                >
                  <base-loader/>
                </p>
              </div>
            </div>
          </div>

          <tbody v-else v-for="child in paginatedItems" :key="child.key">
            <tr>
              <td data-label="S/N">{{child.index}}</td> <!-- Assuming 'child.index' is your serial number or similar -->
              <td data-label="Amount">{{child.amount}}</td>
              <td data-label="Transaction Type">{{child.transactionType}}</td>
              <td data-label="Transaction Reference">{{child.transactionReference}}</td>
              <td data-label="Date">{{child.createdAt | formatDate}}</td>
              <td data-label="Status">
                <div>
                  <p class="status-won" v-if="child.depositStatus === 'approved'">{{child.depositStatus | lowercase}}</p>
                  <p class="status-lost" v-if="child.depositStatus === 'declined'">{{child.depositStatus | lowercase}}</p>
                  <p class="status-pending" v-if="child.depositStatus === 'PENDING'">{{child.depositStatus | lowercase}}</p>
                </div>
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
import BaseLoader from "@/components/BaseComponents/BaseLoader.vue";

export default {
  name: "DashBoardDepositTransactions",
  components: {BaseLoader},
  data () {
    return {
      history: [],
      investments: [],
      currentPage: 1,
      itemsPerPage: 10,
      userId: "",
      searchQuery: ""  // Data property to hold the search input
    }
  },
  computed:{
    ...mapState({
      loading: state => state.deposit.loading,
      auth: state => state.auth,
    }),
    // paginatedItems() {
    //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    //   const endIndex = startIndex + this.itemsPerPage;
    //   return this.UserDeposit.deposits.slice(startIndex, endIndex);
    // },
    // totalPages() {
    //   return Math.ceil(this.UserDeposit.deposits.length / this.itemsPerPage);
    // },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      // Filter deposits based on searchQuery first, then slice for pagination
      const filteredDeposits = this.searchQuery
          ? this.UserDeposit.deposits.filter(deposit =>
              deposit.transactionType.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              deposit.transactionReference.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              deposit.amount.toString().includes(this.searchQuery) ||
              deposit.createdAt.includes(this.searchQuery) ||
              deposit.status.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
          : this.UserDeposit.deposits;
      return filteredDeposits.slice(startIndex, endIndex);
    },
    totalPages() {
      // Calculate total pages based on filtered deposits
      const filteredDeposits = this.searchQuery
          ? this.UserDeposit.deposits.filter(deposit =>
              deposit.transactionType.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              deposit.transactionReference.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              deposit.amount.toString().includes(this.searchQuery) ||
              deposit.createdAt.includes(this.searchQuery) ||
              deposit.status.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
          : this.UserDeposit.deposits;
      return Math.ceil(filteredDeposits.length / this.itemsPerPage);
    },
    UserDeposit() {
      return StoreUtils.rootGetters(StoreUtils.getters.deposit.getReadUserDeposit)
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

    searchTransactions() {
      this.currentPage = 1; // Reset to first page on new search
    },

  },

  beforeMount() {
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.rootGetters(StoreUtils.getters.deposit.getReadUserDeposit)
    StoreUtils.dispatch(StoreUtils.actions.deposit.readUserDeposit, {
      userId : localStorage.getItem('userId'),
    })
  },

  created() {
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.rootGetters(StoreUtils.getters.deposit.getReadUserDeposit)

  },

  mounted() {
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

     StoreUtils.dispatch(StoreUtils.actions.deposit.readUserDeposit, {
      userId : localStorage.getItem('userId'),
    })
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
}
.body{
  padding: 20px;
}
h2{
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #ffffff;
}
.row{
  display: flex;

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
  background: #0f171c;
  border: 0.5px solid #3C4A57FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;
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
  color: #ffffff;
  margin-right: 10px;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
}
.table{
  margin-left: 2%;
  margin-right: 3%;
}

tr{
  border: 0.5px solid #3C4A57FF;
}

th {

  background-color: #0f171c;
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
}

td {
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 12px 8px;
  /*letter-spacing: 1px;*/
  color: #ffffff;
  font-weight: 200;
  font-size: 12px;
  /*border-bottom: 1px solid #E3EBF6;*/
}

.empty-state-container{
  text-align: center;
  margin-top: 7%;
  margin-right: 8%;
}


.empty-state-text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #FFFFFF;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}

.empty-state-text-2{
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
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
  background: #0f171c;
  border: 0.5px solid #3C4A57FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  margin-right: 13px;
}

.action-content:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.action-content p {
  color: #FFFFFF;
  font-size: 13px;
}

tr td:first-child:before
{
  counter-increment: Serial;      /* Increment the Serial counter */
  content:counter(Serial); /* Display the counter */
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
  color: #ffffff;
  /*border: 1px solid #1570EF;*/
  border: 0.5px solid #3C4A57FF;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}

.previous:hover{
  box-shadow: 0 0 5px rgba(16, 24, 40, 0.2);
}

.page-indicator{
  color: #ffffff;
  font-weight: 200;
  font-size: 13px;
}

input::placeholder{
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

  .fg--search {
    margin-left: unset;
  }

  .body{
    padding: 10px 20px 10px 5px;
  }
  .empty-state-container{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  .empty-state{
    width: 35%;
  }
}

</style>