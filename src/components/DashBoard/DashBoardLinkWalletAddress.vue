<template>
  <div style="color: white;" class="section-2-alpha">
    <p class="text-1">Set Withdrawal Wallet Address</p>
    <hr/>
    <div class="form">
      <form @submit.prevent="updateDetails">



          <div class="space">
            <label>Wallet Name</label>
            <input type="text" v-model="walletName"  required="required"  class="form-input"/>
          </div>





          <div class="space">
            <label>Wallet Address</label>
            <input type="text" v-model="walletAddress" required="required" class="form-input"/>
          </div>



<!--        <div class="separate">-->

<!--          <div class="space">-->
<!--            <label>Confirm New Wallet Address</label>-->
<!--            <input type="text"  class="form-input"/>-->
<!--          </div>-->

<!--          &lt;!&ndash;          <div class="space">&ndash;&gt;-->
<!--          &lt;!&ndash;            <label>Phone Number</label>&ndash;&gt;-->
<!--          &lt;!&ndash;            <input type="text"  class="form-input"/>&ndash;&gt;-->
<!--          &lt;!&ndash;          </div>&ndash;&gt;-->

<!--        </div>-->

        <div class="btn-alpha">
          <!--          <p class="btn">Update Details</p>-->
          <base-button :loading="loading" style="  background-color: #5d78ff;border: 1px solid #5d78ff;" >Set Wallet Address</base-button>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import {mapState} from "vuex";
import StoreUtils from "@/utility/StoreUtils";

export default {
  name: "DashBoardLinkWalletAddress",
  components: {BaseButton},
  data () {
    return {
      userId: "",
      userInfo: "",
      walletName: "",
      walletAddress: "",
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
        walletAddress: this.walletAddress,
        walletName: this.walletName,
      })
      await this.clear();
    },

    clear(){
      this.walletName = ""
      this.walletAddress = ""
    }
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