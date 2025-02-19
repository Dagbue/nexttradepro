<template>
  <div style="color: white;" class="section-2-alpha">
    <p class="text-1">Change Password</p>
    <hr/>
    <div class="form">
      <form @submit.prevent="updatePassword">



          <div class="space">
            <label>Enter Old Password</label>
            <input type="text" required="required"  class="form-input"/>
          </div>




          <div class="space">
            <label>Enter New Password</label>
            <input type="text" required="required" v-model="model.newPassword" class="form-input"/>
          </div>



          <div class="space">
            <label>Confirm New Password</label>
            <input type="text" required="required"  class="form-input"/>
          </div>



        <div class="btn-alpha">
          <base-button style="  background-color: #5d78ff;border: 1px solid #5d78ff;" :loading="loading">Proceed</base-button>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import {mapState} from "vuex";
import StoreUtils from "@/utility/StoreUtils";
import AuthenticationRequest from "@/model/request/AuthenticationRequest";
export default {
  name: "DashBoardChangePassword",
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
      await this.$router.push("/over-view")
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

.section-2-alpha{
  margin-top: 4%;
  float: left;
  margin-left: 20px;
  background-color: #0f171c;
  padding: 30px 40px;
  width: 50%;
}

.separate{
  display: flex;
  justify-content: space-around;
}

.form-input{
  background-color: #000000;
  border: 1px solid #000000;
  border-radius: 5px ;
  width: 100%;
  max-width: 500px;
  height: 35px;
  color: white;
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

/*input{*/
/*  padding-top: 14px;*/
/*  padding-bottom: 14px;*/
/*  padding-left: 10px;*/
/*  background-color: rgba(247, 247, 249, 1);*/
/*  border: none;*/
/*  border-radius: 5px;*/
/*}*/
/*select{*/
/*  padding-top: 14px;*/
/*  padding-bottom: 14px;*/
/*  padding-left: 10px;*/
/*  background-color: rgba(247, 247, 249, 1);*/
/*  border: none;*/
/*  border-radius: 5px;*/
/*}*/


@media (max-width: 700px) {
  .section-2-alpha{
    margin-top: 5%;
    float: unset;
    background-color: #0f171c;
    padding: 30px 40px;
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-alpha{
    margin-top: 8%;
  }
}
</style>