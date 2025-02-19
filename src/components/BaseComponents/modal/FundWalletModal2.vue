<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <div class="alpha">

        <div class="first-part">
          <img src="@/assets/fund-wallet-icon.svg" alt="fund-wallet-icon"/>
          <i class='bx bx-x' @click="close"></i>
        </div>
        <div class="second-part">
          <p class="text-1">Fund your wallet</p>
          <p class="text-2">How to fund your wallet:</p>
          <p class="text-3">Transfer desired amount to the details displayed below and have your balance funded</p>
          <p class="text-3">Note: After making your deposit,kindly send a screenshot/proof of deposit to
            <span class="note-span">
              <a style="color: rgba(219,101,123,0.6);" href="mailto:support@incomeandassetslimited.com" class="para-last">support@incomeandassetslimited.com</a>
            </span> for documentation and to boost the funding process
          </p>
          <br/>
          <div v-if="this.selectedItem === 'Bitcoin' ">
            <p class="text-4">Wallet Name: {{selectedItem}}</p>
            <p class="text-5">Wallet Address: {{this.bitcoinAddress}}</p>
          </div>

          <div v-if="this.selectedItem === 'Ethereum' ">
            <p class="text-4">Wallet Name: {{selectedItem}}</p>
            <p class="text-5">Wallet Address: {{this.ethereumAddress}}</p>
          </div>

          <div v-if="this.selectedItem === 'BankTransfer' ">
            <p class="text-4">Bank Name: {{this.bankName}}</p>
            <p class="text-5">Bank Address: {{this.accountNumber}}</p>
            <p class="text-5">Bank Routing Number: {{this.routingNumber}}</p>
          </div>

          <div v-if="this.selectedItem === 'Bitcoin' ">
            <vue-qrcode :value="bitcoinAddress"></vue-qrcode>
          </div>

          <div v-if="this.selectedItem === 'Ethereum' ">
            <vue-qrcode :value="ethereumAddress"></vue-qrcode>
          </div>

<!--          <div v-if="this.selectedItem === 'USDT' ">-->
<!--            <vue-qrcode :value="bankName"></vue-qrcode>-->
<!--          </div>-->

        </div>


        <br/>
        <button style="background-color: #5d78ff;border: 1px solid #5d78ff;">Copy</button>

      </div>

    </dialog>
  </div>
</template>

<script>
import VueQrcode from "@xkeshi/vue-qrcode";
import Swal from "sweetalert2";
import StoreUtils from "@/utility/StoreUtils";
import {mapState} from "vuex";

export default {
  name: "FundWalletModal2",
  emits: ['close'],
  components: {
    VueQrcode // Register the component
  },
  props: {
    selectedItem: {
      type: Object,
      default: null
    }
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
    async close() {
      this.$emit('close');
      await Swal.fire({
        icon: 'success',
        title: 'Pending',
        text: 'Loan Request Pending',
      });
    },
    populateForm() {
      this.bitcoinAddress = this.readPaymentWalletById.paymentWallet.bitcoinAddress;
      this.ethereumAddress = this.readPaymentWalletById.paymentWallet.ethereumAddress;
      this.bankName = this.readPaymentWalletById.paymentWallet.bankName;
      this.accountNumber = this.readPaymentWalletById.paymentWallet.accountNumber;
      this.routingNumber = this.readPaymentWalletById.paymentWallet.routingNumber;
    },
  },
  data() {
    return {
      contacts: [],
      accountNumber: '',
      bankName: '',
      bitcoinAddress: '',
      ethereumAddress: '',
      routingNumber: '',
    };
  },
  created() {
    this.populateForm();

    StoreUtils.rootGetters(StoreUtils.getters.paymentWallet.getReadPaymentWalletById)

  },

  mounted() {
    this.populateForm();


    StoreUtils.dispatch(StoreUtils.actions.paymentWallet.readPaymentWalletById, {
      walletId: 1,
    })
  }
}
</script>

<style scoped >

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
}


dialog {
  position: fixed;
  top: 10vh;
  width: 32rem;
  height: 30rem;
  left: calc(50% - 8.5rem);
  margin: 0;
  background-color: transparent;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}

.alpha{
  position: relative;
  display: block;
  overflow: hidden;
  width: 420px;
  height: 630px;
  /*height: auto;*/
  padding: 24px;

  border-radius: 5px;
  background-color: #0f171c;
  border: 0.5px solid #3C4A57FF;
  box-shadow: 0 0 34px 0 rgba(3, 28, 67, 0.13);
}

.first-part{
  display: flex;
  justify-content: space-between;
}

.bx-x{
  font-size: 25px;
  padding-top: 2px;
  color: #ffffff;
}

.text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0f171c;
  padding-top: 2.5%;
  padding-bottom: 1%;
}

.text-2{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding-top: 1%;
  padding-bottom: 2%;
}

.text-3{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding-top: 1.5%;
  padding-bottom: 2%;
}

.text-4{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
}

.text-5{
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
  padding-top: 2%;
  padding-bottom: 2%;
  word-wrap: break-word; /* or overflow-wrap: break-word; */
}

button{
  padding: 8px 55px;
  color: white;
  background-color: #0f171c;
  border: 0.5px solid #3C4A57FF;
  border-radius: 5px;
  font-size: 13px;
  text-decoration: none;
  /*display: block;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
}


@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@media (max-width: 500px) {
  dialog {
    top: 11vh;
    width: 25rem;
    height: 18rem;
    left: calc(50% - 11rem);
    right: 30px;
  }
  .alpha{
    width: 360px;
    height: 610px;
  }
  h3{
    font-size: 18px;
  }
  p{
    font-size: unset;
  }

  .text-1{
    font-size: 17px;
    line-height: 26px;
    padding-top: 2%;
  }

  .text-2{
    font-size: 15px;
    line-height: 22px;
    padding-top: unset;
    padding-bottom: unset;
  }

  .text-3{
    font-size: 15px;
    line-height: 22px;
    padding-top: 1%;
    padding-bottom: 1%;
  }

  .text-4, .text-5, .text-6{
    font-size: 15px;
    line-height: 22px;
    padding-top: 1%;
    padding-bottom: 1%;
  }

}
</style>