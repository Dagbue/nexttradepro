<template>
  <div>
  <div style="color: white;" class="section-2-alpha">
    <p class="text-1">Payment Details</p>
    <hr/>
    <div class="form">

      <div class="space">
            <label>Enter Bitcoin Address</label>
            <input type="text" v-model="bitcoinAddress"  class="form-input"/>
          </div>
      <div class="space">
            <label>Enter Ethereum Address</label>
            <input type="text" v-model="ethereumAddress"   class="form-input"/>
          </div>

      <div class="space">
        <label>Enter Litecoin Address</label>
        <input type="text" v-model="litecoinAddress"  class="form-input"/>
      </div>
      <div class="space">
        <label>Enter Dogecoin Address</label>
        <input type="text" v-model="dogecoinAddress"   class="form-input"/>
      </div>
      <div class="space">
        <label>Enter Xrp Address</label>
        <input type="text" v-model="xrpAddress"  class="form-input"/>
      </div>

      <div class="space">
        <label>USDT ( ERC20 NETWORK ) Address</label>
        <input type="text" v-model="ERC20"   class="form-input"/>
      </div>
      <div class="space">
        <label>USDT ( TRC20 NETWORK ) Address</label>
        <input type="text" v-model="TRC20"  class="form-input"/>
      </div>

      <div class="space">
        <label>Bank Name</label>
        <input type="text" v-model="bankName"  class="form-input"/>
      </div>
      <div class="space">
            <label>Account Number</label>
            <input type="text" v-model="accountNumber"  class="form-input"/>
          </div>
      <div class="space">
            <label>Routing Number</label>
            <input type="text" v-model="routingNumber"  class="form-input"/>
          </div>


        <div class="btn-alpha">
<!--          <p @click="press" class="btn">Get Current Payment details</p>-->
<!--          <base-button  style="  background-color: #5d78ff;border: 1px solid #5d78ff;" :loading="loading">Get Current Payment details</base-button>-->
<!--          <br/>-->
<!--          <base-button @click="update" style=" background-color: #5d78ff;border: 1px solid #5d78ff;" :loading="loading">Update Payment details</base-button>-->

          <p @click="update" class="btn">Update Payment details</p>

        </div>
    </div>
  </div>

  </div>
</template>

<script>
// import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import StoreUtils from "@/utility/StoreUtils";
import {mapState} from "vuex";
export default {
  name: "DashBoardPaymentDetails",
  // components: {BaseButton},
  data() {
    return {
      contacts: [],
      accountNumber: '',
      bankName: '',
      bitcoinAddress: '',
      ethereumAddress: '',
      routingNumber: '',

      litecoinAddress: '',
      dogecoinAddress: '',
      xrpAddress: '',
      ERC20: '',
      TRC20: '',
    };
  },
  computed:{
    readPaymentWalletById() {
      return StoreUtils.rootGetters(StoreUtils.getters.paymentWallet.getReadPaymentWalletById)
    },
    ...mapState({
      loading: state => state.paymentWallet.loading,
      auth: state => state.auth,
    }),
  },
  methods:{
    async update() {
      await StoreUtils.dispatch(StoreUtils.actions.paymentWallet.updatePaymentWallet, {
        walletId: 1,
        bitcoinAddress: this.bitcoinAddress,
        ethereumAddress: this.ethereumAddress,
        bankName: this.bankName,
        accountNumber: this.accountNumber,
        routingNumber: this.routingNumber,
        LitecoinAddress: this.litecoinAddress,
        DogecoinAddress: this.dogecoinAddress,
        XRPAddress: this.xrpAddress,
        UsdtERC20Address: this.ERC20,
        UsdtTRC20Address: this.TRC20,
      })

      await StoreUtils.dispatch(StoreUtils.actions.paymentWallet.readPaymentWalletById, {
        walletId: 1,
      })

      await StoreUtils.rootGetters(StoreUtils.getters.paymentWallet.getReadPaymentWalletById)

      await this.populateForm()
    },
    press(){
      StoreUtils.dispatch(StoreUtils.actions.paymentWallet.readPaymentWalletById, {
        walletId: 1,
      })

      StoreUtils.rootGetters(StoreUtils.getters.paymentWallet.getReadPaymentWalletById)

      this.populateForm()
    },
    populateForm() {
      this.bitcoinAddress = this.readPaymentWalletById.paymentWallet.bitcoinAddress;
      this.ethereumAddress = this.readPaymentWalletById.paymentWallet.ethereumAddress;
      this.bankName = this.readPaymentWalletById.paymentWallet.bankName;
      this.accountNumber = this.readPaymentWalletById.paymentWallet.accountNumber;
      this.routingNumber = this.readPaymentWalletById.paymentWallet.routingNumber;

      this.litecoinAddress = this.readPaymentWalletById.paymentWallet.LitecoinAddress;
      this.dogecoinAddress = this.readPaymentWalletById.paymentWallet.DogecoinAddress;
      this.xrpAddress = this.readPaymentWalletById.paymentWallet.XRPAddress;
      this.ERC20 = this.readPaymentWalletById.paymentWallet.UsdtERC20Address;
      this.TRC20 = this.readPaymentWalletById.paymentWallet.UsdtTRC20Address;
    },
  },
  async created() {
    await StoreUtils.dispatch(StoreUtils.actions.paymentWallet.readPaymentWalletById, {
      walletId: 1,
    })
    await StoreUtils.rootGetters(StoreUtils.getters.paymentWallet.getReadPaymentWalletById)

    // await StoreUtils.dispatch(StoreUtils.actions.paymentWallet.readAllPaymentWallet)

    await StoreUtils.rootGetters(StoreUtils.getters.paymentWallet.getReadPaymentWalletById)
    await this.populateForm();
  },

  async mounted() {
    await StoreUtils.dispatch(StoreUtils.actions.paymentWallet.readPaymentWalletById, {
      walletId: 1,
    })

    // await StoreUtils.dispatch(StoreUtils.actions.paymentWallet.readAllPaymentWallet)

    await StoreUtils.rootGetters(StoreUtils.getters.paymentWallet.getReadPaymentWalletById)

    await this.populateForm();
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
select{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
}

.btn{
  padding: 15px 55px;
  color: white;
  background-color: #007aff;
  border: 0.5px solid #007aff;
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
}
</style>

