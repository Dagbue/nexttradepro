<template>
  <div class="alpha">

    <form @submit.prevent="updateDetails" style="color: white;" class="section-1-alpha">
      <p class="text-1">Two Factor Authentication Settings
        {{ userInfo.twoFactorAuthenticationCode === "" }}
      </p>
      <hr/>
      <div class="section-1-part-1">
        <div>
          <p v-if="this.userInfo.twoFactorAuthenticationCode === ''" class="text-2">Two Factor Authentication is Turned Off.</p>
          <p v-else class="text-2 on">Two Factor Authentication is Turned On.</p>
        </div>

        <div>
          <p v-if="this.userInfo.twoFactorAuthenticationCode === ''" class="text-3">Two Factor Authentication is currently turned off and your Account / Assets are not totally secured.</p>
          <p v-else class="text-3">Two Factor Authentication is currently turned on and your Account / Assets are totally secured.</p>
        </div>

          <p class="text-4">Turn on Two Factor Authentication <span style="color: rgb(0, 128, 0);"> (Highly Recommended) </span> Set Two Factor Authentication for Your Account</p>
      </div>

      <div class="referral-part">
        <input type="text" required="required" v-model="twoFactorAuthenticationCode" placeholder="ENTER TWO FACTOR AUTHENTICATION CODE"  class="link-box"/>
        <base-button
            :loading="loading"
            class="link-button"
        >Save</base-button>

      </div>

      <p style="margin-top: 1%;" class="link-button-2" @click="sendTwoFactor">
        Generate Code
      </p>
    </form>



  </div>
</template>

<script>
import {mapState} from "vuex";
import StoreUtils from "@/utility/StoreUtils";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";

export default {
  name: "DashBoardSetup2FA",
  components: {BaseButton},
  data () {
    return {
      twoFactorAuthenticationCode: "",
      userId: "",
      userInfo: "",
    }
  },
  computed:{
    ...mapState({
      loading: state => state.auth.loading,
      auth: state => state.auth,
    }),
  },

  methods: {
    async updateDetails() {
      await StoreUtils.dispatch(StoreUtils.actions.auth.updateUser, {
        userId: this.userId,
        twoFactorAuthenticationCode: this.twoFactorAuthenticationCode,
      })
      await this.clear()
    },
    clear() {
      this.twoFactorAuthenticationCode = ""
    },
    sendTwoFactor(){
      StoreUtils.dispatch(StoreUtils.actions.auth.sendTwoFactor, {
        email: this.userInfo.email,
      })
    },
  },

  beforeMount() {
    this.userId = localStorage.getItem('userId')

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
  },

  mounted() {

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  }
}
</script>

<style scoped>
.alpha{
  display: flex;
  flex-direction: column;
}
.section-1-alpha{
  margin-top: 4%;
  float: left;
  margin-left: 20px;
  background-color: #0f171c;
  padding: 35px 40px;
  width: 85%;
}
.section-1-part-1{
  display: block;
  text-align: left;
}
.link-box{
  background-color: #000000;
  border: 1px solid #000000;
  border-radius: 5px 0 0 5px;
  width: 370px;
  height: 35px;
  color: white;
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

.link-button-2{
  float: right;
  background-color: #5d78ff;
  border: 1px solid #5d78ff;
  display: block;
  margin: auto;
  /*display: inline-block;*/
  font-weight: 400;
  width: 155px;
  padding: 5px 20px;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  font-size: 0.875rem;
  height: 35px;
  line-height: 1.4;
  border-radius:  5px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.text-1{
  text-align: left;
}

.text-2{
  color: #770101;
  background-color: #facccc;
  border-color: #f8b8b8;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
}

.on{
  color: #ffffff;
  background-color: rgba(0, 128, 0, 0.5);
  border-color: rgb(0, 128, 0);
}

.text-3{
  color: #142c78;
  background-color: #d4ddfa;
  border-color: #c3cff8;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
}


.referral-part{
  padding-top: 30px;
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

label{
  padding-bottom: 5px;
  padding-top: 25px;
}

@media (max-width: 700px) {
  .section-1-alpha{
    margin-top: 5%;
    float: unset;
    background-color: #0f171c;
    padding: 30px 40px;
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .referral-part{
    margin-bottom: 3%;
  }
}

@media (max-width: 500px) {
  .section-1-alpha{
    margin-left: unset;
    padding: 20px 20px;
    width: 100%;
    max-width: 500px;
  }
}

</style>