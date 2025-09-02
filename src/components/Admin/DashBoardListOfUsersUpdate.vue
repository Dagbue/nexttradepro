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
        <p class="text-1">UPDATE USER INFO</p>
        <p class="btn-2" @click="back">Back</p>
      </div>
      <hr/>
      <div class="form">
        <form @submit.prevent="updateDetails">

          <div class="separate">

            <div class="space">
              <label>First Name</label>
              <input type="text" v-model="firstName"  class="form-input"/>
            </div>

            <div class="space">
              <label>Last Name</label>
              <input type="text" v-model="lastName"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label>Email</label>
              <input type="text" v-model="email" class="form-input"/>
            </div>

            <div class="space">
              <label>Country</label>
              <input type="text" v-model="country"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label>Password</label>
              <input type="text" v-model="password"   class="form-input"/>
            </div>

            <div class="space">
              <label>Phone Number</label>
              <input type="text" v-model="phoneNumber"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label>Invested Amount</label>
              <input type="number" v-model="totalDepositedAmount"  class="form-input"/>
            </div>

            <div class="space">
              <label>withdrawn Amount</label>
              <input type="number" v-model="totalWithdrawals"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label>Profit</label>
              <input type="number" v-model="profit"  class="form-input"/>
            </div>

            <div class="space">
              <label>Loss</label>
              <input type="number" v-model="loss"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label>status</label>
              <p class="edit">current status {{userStatus}}</p>
<!--              <input type="text" v-model="userStatus" required="required" class="form-input"/>-->
              <select v-model="userStatus"  class="form-input">
                <option selected disabled value="">select status</option>
                <option :value="null" disabled>select status</option>
                <option value="verified">Verified</option>
                <option value="unVerified">UnVerified</option>
              </select>
            </div>

            <div class="space">
              <label>Date Created</label>
              <input type="text" v-model="createdAt"   class="form-input"/>
            </div>

          </div>


            <div style="margin-left: 3%;" class="space">
              <label>Deposit Method</label>
              <p class="edit">current Method {{depositMethod}}</p>
              <!--              <input type="text" v-model="userStatus" required="required" class="form-input"/>-->
              <select v-model="depositMethod"  class="form-input">
                <option selected disabled value="">select Method</option>
                <option :value="null" disabled>select Method</option>
                <option value="Bitcoin">Bitcoin</option>
                <option value="Ethereum">Ethereum</option>
                <option value="Dogecoin">Dogecoin</option>
                <option value="Litecoin">Litecoin</option>
                <option value="Xrp">Xrp</option>
                <option value="ERC20">USDT ( ERC20 NETWORK )</option>
                <option value="TRC20">USDT ( TRC20 NETWORK )</option>
                <option value="BankTransfer">Bank Transfer</option>
              </select>
            </div>



          <div class="btn-alpha">
<!--            <p class="btn">Update Details</p>-->
            <base-button
                style="
                  background-color: #007aff;
                  border: 1px solid #007aff;"
                :loading="loading" class="btn">Update Details</base-button>
          </div>

        </form>

      </div>
    </div>

  </div>
</template>

<script>
import StoreUtils from "@/utility/StoreUtils";
import {mapState} from "vuex";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import router from "@/router";

export default {
  name: "DashBoardListOfUsersUpdate",
  components: {BaseButton},
  data()  {
    return {
      contacts: [],
      firstName: "",
      lastName: "",
      email: "",
      country:"",
      address: "",
      phoneNumber: "",
      password: "",
      profit: "",
      loss: "",
      totalDepositedAmount: "",
      totalWithdrawals:"",
      twoFactorAuthenticationCode: "",
      createdAt: "",
      userStatus: "",
      depositMethod: "",
    }
  },
  computed:{
    allUsers() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadAllUsers)
    },
    getAdminUserId() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getAdminUserId)
    },
    readUserById() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    },
    ...mapState({
      loading: state => state.auth.loading,
      auth: state => state.auth,
    }),
  },
  methods: {
    back() {
      this.$router.push("/list-of-users");
    },

    // getUserInfo() {
    //   StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
    //     userId: this.getAdminUserId.userId
    //   })
    // },

    populateForm() {
      this.firstName = this.readUserById.user.firstName;
      this.lastName = this.readUserById.user.lastName;
      this.email = this.readUserById.user.email;
      this.country = this.readUserById.user.country;
      this.phoneNumber = this.readUserById.user.phoneNumber;
      this.password = this.readUserById.user.password;
      this.profit = this.readUserById.user.profit;
      this.loss = this.readUserById.user.loss;
      this.totalDepositedAmount = this.readUserById.user.totalDepositedAmount;
      this.totalWithdrawals = this.readUserById.user.totalWithdrawals;
      this.twoFactorAuthenticationCode = this.readUserById.user.twoFactorAuthenticationCode;
      this.createdAt = this.readUserById.user.createdAt;
      this.userStatus = this.readUserById.user.userStatus;
      this.depositMethod = this.readUserById.user.depositMethod;
    },

    async updateDetails() {
      await StoreUtils.dispatch(StoreUtils.actions.auth.updateUser, {
        userId: this.getAdminUserId.userId,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        country: this.country,
        password: this.password,
        profit: this.profit,
        loss: this.loss,
        totalDepositedAmount: this.totalDepositedAmount,
        totalWithdrawals: this.totalWithdrawals,
        twoFactorAuthenticationCode: this.twoFactorAuthenticationCode,
        // createdAt: this.createdAt,
        userStatus: this.userStatus,
        depositMethod: this.depositMethod,
      })
      await StoreUtils.dispatch(StoreUtils.actions.auth.allUsers)
      await StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
        userId: this.getAdminUserId.userId,
      })
      await router.push("/list-of-users")
    }
  },

  created() {
    this.populateForm();
    // this.getUserInfo();
    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

    StoreUtils.rootGetters(StoreUtils.getters.auth.getAdminUserId)

    // StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
    //   userId: this.getAdminUserId.userId
    // })
  },

  mounted() {
    this.populateForm();
    // this.getUserInfo();
    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

    StoreUtils.rootGetters(StoreUtils.getters.auth.getAdminUserId)

    // StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
    //   userId: this.getAdminUserId.userId
    // })
  }
}
</script>

<style scoped>
.edit{
  color: #ffffff;
  font-size: 13px;
  padding-bottom: 3px;
}
.alpha{
  display: flex;
  flex-direction: column;
}
.section-2-alpha{
  margin-top: 4%;
  float: left;
  margin-left: 20px;
  background-color: #3C4A57FF;
  padding: 30px 40px;
  width: 93%;
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
  width: 460px;
  height: 35px;
  color: #071333;
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