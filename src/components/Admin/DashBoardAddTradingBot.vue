<template>
  <div class="alpha">
    <div class="body">
      <h2>Trading Bot</h2>
      <div class="row trans-mgt">
        <!--        <div class="form-group fg&#45;&#45;search">-->
        <!--          <button type="submit"><i class="fa fa-search"></i></button>-->
        <!--          <input type="text" class="input" placeholder="Search Deposit Requests..."/>-->
        <!--        </div>-->
        <div class="form-group fg--search">
          <button type="submit" @click.prevent="searchTransactions" ><i class="fa fa-search"></i></button>
          <input style="color: #FFFFFF;" type="text" class="input" placeholder="Search Trading Bot..." v-model="searchQuery" @input="searchTransactions" />
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
    <delete-trade-bot-modal @close="hideDialog" v-if="dialogIsVisible" :selected-item="selectedItem"/>
    <div class="section-5">
      <div class="empty-state" v-if="this.getAllTradeBot.tradingBots.length === 0" >
        <img src="@/assets/empty.svg" alt="empty">
        <p class="empty-state-text-1">You have nothing to see</p>
        <p class="empty-state-text-2">This is where your Trading Bot will appear</p>
        <!--        <p class="empty-state-text-3">-->
        <!--          <i class='bx bx-plus' ></i>-->
        <!--          Transaction-->
        <!--        </p>-->
      </div>

      <div class="table" v-if="this.getAllTradeBot.tradingBots.length >0">
        <table>
          <tr>
            <th>Bot Name</th>
            <th>Bot Image</th>
            <th>WinRate</th>
            <th>Price</th>
            <th>Date</th>
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
            <td data-label="Bot Name">{{child.botName}}</td>
            <td data-label="Bot Image">{{child.botImage | formatTextWithEllipsis}}</td>
            <td data-label="WinRate">{{child.botWinRate}}</td>
            <td data-label="Price">{{child.botPrice}}</td>
            <td data-label="Date">{{child.createdAt | formatDate}}</td>
            <td data-label="Action">
              <button class="btn-2" @click="showDialog(child)">Delete</button>
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

    <div style="color: white;" class="section-2-alpha">
      <p class="text-1">Add Trading Bot</p>
      <hr/>

      <form class="form" @submit.prevent="createUser">


        <div class="space">
          <label>Bot Name</label>
          <input type="text" v-model="model.botName"  required="required"  class="form-input"/>
        </div>

        <div class="space">
          <label>win rate</label>
          <input type="text" v-model="model.botWinRate" required="required"  class="form-input"/>
        </div>


        <div class="space">
          <label>Price</label>
          <input type="text" v-model="model.botPrice"  required="required" class="form-input"/>
        </div>



        <div class="space">
          <label>Bot Image</label>
          <input
              type="file"
              id="files"
              name="files"
              @change="uploadFile"
              accept="image/*"
              ref="file"
              required
              style="color: #071333;"
          />
        </div>


        <div class="btn-alpha">
          <!--          <p @click="press" class="btn">Get Current Payment details</p>-->
          <!--          <base-button  style="  background-color: #5d78ff;border: 1px solid #5d78ff;" :loading="loading">Get Current Payment details</base-button>-->
          <!--          <br/>-->
          <!--          <base-button @click="update" style=" background-color: #5d78ff;border: 1px solid #5d78ff;" :loading="loading">Update Payment details</base-button>-->

          <base-button
              style="
                    border: 0.5px solid #5d78ff;
                    margin-top: 30px;
                    background-color: #5d78ff;"
              :loading="loading || loading2"
          >Add Trader</base-button>
          <!--          <p @click="showDialog"  class="btn">Add Trader</p>-->

        </div>


      </form>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import StoreUtils from "@/utility/StoreUtils";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import S3Request from "@/model/request/S3Request";
import BaseLoader2 from "@/components/BaseComponents/loaders/BaseLoader2.vue";
import TradeBotRequest from "@/model/request/TradeBotRequest";
import DeleteTradeBotModal from "@/components/BaseComponents/modal/DeleteTradeBotModal.vue";

export default {
  name: "DashBoardAddTradingBot",
  components: {DeleteTradeBotModal, BaseLoader2, BaseButton},

  data () {
    return {
      model: new TradeBotRequest().createTradeBot,
      base64: "",
      uploadmodel: S3Request.prototype.uploadBase64(),
      url: "",
      currentPage: 1,
      itemsPerPage: 10,
      userId: "",
      searchQuery: "",
      dialogIsVisible: false,
      selectedItem: null,
    }
  },

  computed:{
    ...mapState(["sbucket"]),
    ...mapState({
      loading: state => state.tradeBot.loading,
      loading2: state => state.sbucket.s3bucketLoading,
      auth: state => state.auth,
    }),
    paginatedItems() {
      return this.getAllTradeBot.tradingBots.filter(tradeBot =>
          Object.values(tradeBot).some(value =>
              value.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
          )
      ).slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
    },

    totalPages() {
      const filteredTradeBotCount = this.getAllTradeBot.tradingBots.filter(tradeBot =>
          Object.values(tradeBot).some(value =>
              value.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
          )
      ).length;
      return Math.ceil(filteredTradeBotCount / this.itemsPerPage);
    },


    getAllTradeBot() {
      return StoreUtils.rootGetters(StoreUtils.getters.tradeBot.getAllTradeBot)
    },
  },

  methods: {

    clearForm(){
      this.model = "";
      this.$refs.file = "";
    },

    async hideDialog() {
      this.dialogIsVisible = false;
    },

    async showDialog(child) {
      this.selectedItem = child.botId;
      this.dialogIsVisible = true;
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

    searchTransactions() {
      this.currentPage = 1; // Reset to first page on new search
    },

    async createUser() {
      await StoreUtils.dispatch(StoreUtils.actions.tradeBot.tradeBotCreate, {
        userId: 1,
        botImage: this.url,
        botName: this.model.botName,
        botWinRate: this.model.botWinRate,
        botPrice: this.model.botPrice,
        botStatus: "pending",
      })
      this.clearForm();
      await StoreUtils.dispatch(StoreUtils.actions.tradeBot.readAllTradeBot)
    },

    uploadFile() {
      let input = this.$refs.file;
      let files = input.files;
      //console.log(size);
      const reader = new FileReader();
      try {
        reader.onload = (e) => {
          this.base64 = e.target.result;
          this.uploadOfficerImage();
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      } catch (e) {
        console.warn(e.message);
      }
    },
    async uploadOfficerImage() {

      this.uploadmodel.username = `${
          this.auth.userInfo.userFirstName + this.auth.userInfo.userLastName
      }_${Date.now()}`;
      this.uploadmodel.base64 = this.base64;
      await StoreUtils.dispatch(StoreUtils.actions.sbucket.uploadEncodedFile, this.uploadmodel, { root: true });
      this.url = this.sbucket.s3bucketResponse.url;

    },
  },

  created() {
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.rootGetters(StoreUtils.getters.tradeBot.getAllTradeBot)

  },

  mounted() {
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.dispatch(StoreUtils.actions.tradeBot.readAllTradeBot)
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
  margin-top: 2%;
}

.empty-state-text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #0f171c;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}

.empty-state-text-2{
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #0f171c;
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
  background-color: #1f91f3;
  border: 1px solid #1f91f3;
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
  background-color: #1f91f3;
  border: 1px solid #1f91f3;
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

.section-2-alpha{
  margin-top: 4%;
  /*float: left;*/
  /*margin-left: 20px;*/
  background-color: #3C4A57FF;
  padding: 30px 40px;
  width: 55%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
  border-radius: 12px;
}

.form-input{
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px ;
  width: 590px;
  height: 35px;
  color: #071333;
  padding: 5px 20px;
}

.text-1{
  text-align: left;
}


hr {
  border-top: 1px solid #ffffff;
  margin-bottom: 20px;
  margin-top: 20px;
}

.space{
  display: flex;
  flex-direction: column;
  text-align: left;
}
label{
  padding-bottom: 5px;
  padding-top: 25px;
}


.btn-alpha{
  /*display: flex;*/
  /*float: left;*/
  margin-top: 3%;
}

input{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
}

/*select{*/
/*  padding-top: 14px;*/
/*  padding-bottom: 14px;*/
/*  padding-left: 10px;*/
/*  background-color: rgba(247, 247, 249, 1);*/
/*  border: none;*/
/*  border-radius: 5px;*/
/*}*/

.btn{
  padding: 15px 55px;
  color: white;
  background-color: #071333;
  border: 0.5px solid #071333;
  border-radius: 5px;
  font-size: 13px;
  text-decoration: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

@media (max-width: 700px) {
  .form-input{
    width: 100%;
  }

  .section-2-alpha{
    padding: 30px 30px;
    width: 95%;
  }
  .btn-alpha{
    margin-top: 8%;
  }
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