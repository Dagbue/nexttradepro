<template>
  <div class="alpha">
    <div class="body">
      <h2>Copy Experts</h2>
      <div class="row trans-mgt">

        <div class="form-group fg--search">
          <button type="submit" @click.prevent="searchTransactions" ><i class="fa fa-search"></i></button>
          <input style="color: #FFFFFF;" type="text" class="input" placeholder="Search Experts..." v-model="searchQuery" @input="searchTransactions" />
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

    <div class="empty-state-container" v-if="this.getAllExpert.experts.length === 0">
      <img src="@/assets/empty.svg" alt="empty" class="empty-state">
      <p class="empty-state-text-1">You have nothing to see</p>
      <p class="empty-state-text-2">This is where Trade Expert's will appear</p>
    </div>

    <div v-if="this.getAllExpert.experts.length >0" class="section-alpha">

      <div v-for="child in paginatedItems" :key="child.key" class="section-1">

        <img :src="child.expertImage" alt="" class="image-section-1" />

        <p class="text-1-section-1">{{child.expertName}}</p>

        <div class="rate-part-alpha">

          <div class="rate-inner">
            <p class="text-2">Win rate</p>
            <p class="text-3">{{child.expertWinRate}}</p>
          </div>

          <div class="rate-inner">
            <p class="text-2">Profit share</p>
            <p class="text-3">{{child.profitShare}}</p>
          </div>

          <div class="rate-inner">
            <p class="text-2">Wins</p>
            <p class="text-3">{{child.Wins}}</p>
          </div>

        </div>

        <div class="loss-alpha">
          <div class="loss-inner">
            <p class="text-4">Losses</p>
            <p class="text-5">{{child.Losses}}</p>
          </div>
        </div>

        <div class="btn-part">
          <br/>
         <base-button
             style="
                    border: 0.5px solid #5d78ff;
                    background-color: #5d78ff;"
         >Copy Expert</base-button>
        </div>

      </div>

    </div>

    <div class="pagination"  v-if="this.getAllExpert.experts.length >0">
      <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
      <div class="page-indicator">
        Page {{ currentPage }} of {{ totalPages }}
      </div>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
    </div>

  </div>
</template>

<script>
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import {mapState} from "vuex";
import StoreUtils from "@/utility/StoreUtils";

export default {
  name: "DashBoardCopyExperts",
  components: {BaseButton},
  data () {
    return {
      history: [],
      investments: [],
      currentPage: 1,
      itemsPerPage: 6,
      userId: "",
      searchQuery: ""  // Data property to hold the search input
    }
  },

  computed:{
    ...mapState({
      loading: state => state.expert.loading,
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
      return this.getAllExpert.experts.filter(expert =>
          Object.values(expert).some(value =>
              value.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
          )
      ).slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
    },

    totalPages() {
      const filteredExpertCount = this.getAllExpert.experts.filter(expert =>
          Object.values(expert).some(value =>
              value.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
          )
      ).length;
      return Math.ceil(filteredExpertCount / this.itemsPerPage);
    },


    getAllExpert() {
      return StoreUtils.rootGetters(StoreUtils.getters.expert.getAllExpert)
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
    this.generateRandomString()

    this.userId = localStorage.getItem('userId')

    StoreUtils.dispatch(StoreUtils.actions.expert.readAllExpert)

    StoreUtils.rootGetters(StoreUtils.getters.expert.getAllExpert)

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  },

  created() {
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.rootGetters(StoreUtils.getters.expert.getAllExpert)

  },

  mounted() {
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.dispatch(StoreUtils.actions.expert.readAllExpert)
  }
}
</script>

<style scoped>
i{
  font-size: 13px;
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

.fg--search {
  background: none;
  position: relative;
  width: 400px;
  margin-left: 1%;
  color: #FFFFFF;
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
  color: #FFFFFF;
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
  color: #ffffff;
  font-size: 13px;
}

.section-alpha{
  white-space: initial;
  word-wrap: break-word;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  margin-right: 1.5%;
}

.section-1{
  color: #FFFFFF;
  text-align: center;
  background: #0f171c;
  padding: 35px 20px;
  width: 360px;
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  margin-bottom: 10px;
}

.image-section-1{
  width: 20%;
  border-radius: 150%;
  padding-bottom: 3%;
}

.rate-part-alpha{
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 3%;
}

.text-1-section-1{
  padding-bottom: 5%;
  font-size: 20px;
}



.empty-state-container{
  text-align: center;
  margin-top: 7%;
  /*margin-right: 8%;*/
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

.pagination{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  margin-left: 2%;
  margin-right: 3%;
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



@media (max-width: 700px) {

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
  h2{
    padding-left: 10px;
  }
  .section-1{
    width: 390px;
  }
}

</style>