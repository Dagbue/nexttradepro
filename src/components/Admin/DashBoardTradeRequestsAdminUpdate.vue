<template>
  <div class="alpha">

    <!--    <div style="color: white;" class="section-1-alpha">-->
    <!--      <p class="text-1">User Profile</p>-->
    <!--      <hr/>-->
    <!--      <div class="section-1-part-1">-->
    <!--        <img src="@/assets/Avatar.svg" alt="avatar" class="avatar" />-->
    <!--        <div>-->
    <!--          <p>User Name</p>-->
    <!--          <p>User Email</p>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="referral-part">-->
    <!--        <input type="text" v-model="reflink" class="link-box"/>-->
    <!--        <button class="link-button">Copy Link</button>-->
    <!--      </div>-->
    <!--    </div>-->


    <div style="color: white;" class="section-2-alpha">
      <div class="lawrence">
        <p class="text-1">Update Trade Request</p>
        <p class="btn-2" @click="back">Back</p>
      </div>
      <hr/>
      <div class="form">
        <form @submit.prevent="updateDetails">



            <div class="space">
              <label>Trade ID </label>
              <input type="text" v-model="tradeReference" class="form-input"/>
            </div>

            <div class="space">
              <label>User</label>
<!--              <input type="text"   class="form-input"/>-->
              <p  class="form-input" >{{this.firstName}} {{this.lastName}}</p>
            </div>





            <div class="space">
              <label>Trade Type</label>
              <input type="text" v-model="tradeType"  class="form-input"/>
            </div>

            <div class="space">
              <label>End Price</label>
              <input type="text" v-model="endPrice"    class="form-input"/>
            </div>





            <div class="space">
              <label>Leverage</label>
              <input type="text" v-model="leverage"  class="form-input"/>
            </div>

            <div class="space">
              <label>Amount</label>
              <input type="text" v-model="amountTrade"   class="form-input"/>
            </div>





            <div class="space">
              <label>Symbol</label>
              <input type="text" v-model="symbolTraded"   class="form-input"/>
            </div>

            <div class="space">
              <label>Payout [Can be Edited]</label>
              <input type="text" v-model="expectedPayout"  class="form-input"/>
            </div>

          <div class="space">
            <label>Market Type</label>
            <input type="text" v-model="marketType" class="form-input"/>
          </div>




          <div  class="space">
              <label>Trade End Time: [Can be Edited]</label>
              <p style="padding-bottom: 5px;"> Current : {{this.tradeTime}}</p>
              <input type="date" v-model="tradeTime" class="date-time" >
            </div>

            <div class="space">
              <label>Trade Status: [Can be Edited]</label>
<!--              <input type="text"  v-model="tradeStatus"  class="form-input"/>-->
              <select name="TradeStatus" id="TradeStatus" class="form-input" required v-model="tradeStatus" >
                <option selected disabled value="">Trade Status</option>
                <option :value="null" disabled>Trade Status</option>
                <option value="pending">Pending</option>
                <option value="won">Won</option>
                <option value="lost">Lost</option>
              </select>
            </div>



          <div class="btn-alpha">
<!--            <p class="btn">Update Details</p>-->
            <base-button
                style="
                  background-color: #5d78ff;
                  border: 1px solid #5d78ff;"
                class="btn"
                :loading="loading"
            >Update Details</base-button>
          </div>

        </form>

      </div>
    </div>

  </div>
</template>

<script>
import StoreUtils from "@/utility/StoreUtils";
import router from "@/router";
import {mapState} from "vuex";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";

export default {
  name: "DashBoardTradeRequestsAdminUpdate",
  components: {BaseButton},
  data()  {
    return {
      contacts: [],
      tradeTime: "",
      symbolTraded: "",
      amountTrade: "",
      expectedPayout:"",
      leverage: "",
      marketType: "",
      endPrice: "",
      endTime: "",
      tradeStatus: "",
      convertedDate: '',
      tradeReference : "",
      firstName : "",
      lastName : "",
      tradeType : "",
    }
  },
  computed:{
    getAdminUserId() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getAdminUserId)
    },
    readTradeById() {
      return StoreUtils.rootGetters(StoreUtils.getters.trade.getReadTradeById)
    },
    ...mapState({
      loading: state => state.trade.loading,
      auth: state => state.auth,
    }),
  },
  methods: {
    back() {
      this.$router.push("/trade-request-admin");
    },


    convertDateFormat(dateStr) {
      const dateObj = new Date(dateStr);
      // Formatting the date manually
      const year = dateObj.getFullYear();
      const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
      const day = dateObj.getDate().toString().padStart(2, '0');
      const hours = dateObj.getHours().toString().padStart(2, '0');
      const minutes = dateObj.getMinutes().toString().padStart(2, '0');
      const seconds = dateObj.getSeconds().toString().padStart(2, '0');

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },

    populateForm() {
      this.tradeReference = this.readTradeById.trade.tradeReference;
      this.tradeTime = this.readTradeById.trade.tradeTime;
      this.symbolTraded = this.readTradeById.trade.symbolTraded;
      this.amountTrade = this.readTradeById.trade.amountTrade;
      this.expectedPayout = this.readTradeById.trade.expectedPayout;
      this.leverage = this.readTradeById.trade.leverage;
      this.endPrice = this.readTradeById.trade.endPrice;
      this.marketType = this.readTradeById.trade.marketType;
      this.endTime = this.readTradeById.trade.endTime;
      this.tradeStatus = this.readTradeById.trade.tradeStatus;
      this.firstName = this.readTradeById.trade.firstName;
      this.lastName = this.readTradeById.trade.lastName;
      this.tradeType = this.readTradeById.trade.tradeType;
    },

    async updateDetails() {
      await StoreUtils.dispatch(StoreUtils.actions.trade.updateTrade, {
        tradeId: this.$route.query.tradeId,
        userId : this.$route.query.userId,
        tradeTime : this.convertedDate,
        symbolTraded : this.symbolTraded,
        amountTrade : this.amountTrade,
        expectedPayout : this.expectedPayout,
        leverage : this.leverage,
        endPrice : this.endPrice,
        marketType : this.marketType,
        endTime : this.convertedDate,
        tradeStatus : this.tradeStatus,
        tradeReference : this.tradeReference,
        firstName : this.firstName,
        lastName : this.lastName,
        tradeType : this.tradeType
      })
      await StoreUtils.dispatch(StoreUtils.actions.trade.readAllTrade)
      await router.push("/trade-request-admin")
    }
  },
  async created() {

    await StoreUtils.dispatch(StoreUtils.actions.trade.readTradeById, {
      tradeId: this.$route.query.tradeId,
    })

    this.populateForm();

    StoreUtils.rootGetters(StoreUtils.getters.trade.getReadTradeById)

    StoreUtils.rootGetters(StoreUtils.getters.auth.getAdminUserId)

    // Convert and store the formatted date
    this.convertedDate = this.convertDateFormat(this.tradeTime);

  },

  async mounted() {
    await StoreUtils.dispatch(StoreUtils.actions.trade.readTradeById, {
      tradeId: this.$route.query.tradeId,
    })
    this.populateForm();

    StoreUtils.rootGetters(StoreUtils.getters.trade.getReadUserTrade)

    StoreUtils.rootGetters(StoreUtils.getters.auth.getAdminUserId)

    // Convert and store the formatted date
    this.convertedDate = this.convertDateFormat(this.tradeTime);

  }
}
</script>

<style scoped>
.alpha{
  display: flex;
  flex-direction: column;
}
.section-2-alpha{
  margin-top: 4%;
  float: left;
  /*margin-left: 20px;*/
  background-color: #3C4A57FF;
  padding: 30px 40px;
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 1%;
}
.section-1-alpha{
  margin-top: 4%;
  float: left;
  margin-left: 20px;
  background-color: #0f171c;
  padding: 30px 40px;
  width: 100%;
  max-width: 500px;
}
.section-1-part-1{
  display: flex;
  align-content: center;
  align-items: center;
}
.link-box{
  background-color: #000000;
  border: 1px solid #000000;
  border-radius: 5px 0 0 5px;
  width: 350px;
  height: 33px;
  color: white;
  padding: 5px 20px;
}

.separate{
  display: flex;
  justify-content: space-around;
}

.form-input{
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px ;
  width: 100%;
  height: 40px;
  color: #071333;
  padding: 5px 20px;
}
.date-time{
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  color: #071333;
  border-radius: 5px ;
  padding: 5px 20px;
}
.link-button{
  background-color: #5d78ff;
  border: 1px solid #5d78ff;
  display: inline-block;
  font-weight: 400;
  width: 130px;
  padding: 5px 20px;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  /*background-color: transparent;*/
  /*border: 1px solid transparent;*/
  /*padding: 0.375rem 0.75rem;*/
  font-size: 0.875rem;
  height: 35px;
  line-height: 1.4;
  border-radius: 0 5px 5px 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.text-1{
  text-align: left;
}

.referral-part{
  padding-top: 20px;
  display: flex;
}
hr {
  border-top: 1px solid #ffffff;
  margin-bottom: 20px;
  margin-top: 20px;
}
.avatar{
  padding-right: 10px;
  width: 13%;
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
.btn{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  background-color: #007aff;
  border: 1px solid #007aff;
}

.btn-2{
  width: 100px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.175rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  background-color: #007aff;
  border: 1px solid #007aff;
}

.btn-alpha{
  display: flex;
  float: left;
  margin-top: 3%;
}

.lawrence{
  display: flex;
  justify-content: space-between;
}
@media (max-width: 700px) {

  .separate{
    display: block;
    justify-content: space-around;
  }

  .section-2-alpha{
    padding: 20px 25px;
    width: 95%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    max-width: 500px;
  }
  .section-1-alpha{
    margin-left: unset;
    padding: 20px 20px;
    width: 100%;
    max-width: 500px;
  }
  .form-input{
    width: 100%;
  }
  .link-button{
    font-size: 10px;
  }
  .btn-alpha{
    margin-top: 8%;
  }
}
</style>