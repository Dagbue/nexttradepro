<template>
  <div style="color: white;" class="section-2-alpha">
    <p class="text-1">Change Password</p>
    <hr/>
    <div class="form">
      <form @submit.prevent="updatePassword">



          <div class="space">
            <label>Enter Old Password</label>
            <input type="text" required class="form-input"/>
          </div>



          <div class="space">
            <label>Enter New Password</label>
            <input type="text" v-model="model.newPassword" required  class="form-input"/>
          </div>



          <div class="space">
            <label>Confirm New Password</label>
            <input type="text" required class="form-input"/>
          </div>



        <div class="btn-alpha">
          <!--          <p class="btn">Update Details</p>-->
          <base-button style="  background-color: #007aff;border: 1px solid #007aff;" :loading="loading">Proceed</base-button>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import {mapState} from "vuex";
import AuthenticationRequest from "@/model/request/AuthenticationRequest";
import StoreUtils from "@/utility/StoreUtils";
import router from "@/router";

export default {
  name: "DashBoardChangePasswordAdmin",
  components: {BaseButton},
  computed:{
    ...mapState({
      loading: state => state.auth.loading,
      auth: state => state.auth,
    }),
  },
  data() {
    return {
      model: new AuthenticationRequest().resetPassword,
      userId: "",
      userInfo: "",

    };
  },
  methods: {

    async updatePassword() {
      await StoreUtils.dispatch(StoreUtils.actions.auth.resetPassword, {
        userId : this.userId,
        newPassword: this.model.newPassword
      })
      await router.push("/list-of-users")
    },

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
select{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
}


@media (max-width: 700px) {

  .form-input{
    width: 100%;
  }

  .section-2-alpha{
    width: 95%;
  }

  .btn-alpha{
    margin-top: 8%;
  }
}
</style>