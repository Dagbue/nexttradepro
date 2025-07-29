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
          <p class="text-1">Delete TradeBot</p>
          <p class="text-2">Are you sure?</p>
        </div>


        <br/>
        <div class="btn">
          <button @click="deleteTradeBot">Delete</button>
          <button @click="close">cancel</button>
        </div>


      </div>

    </dialog>
  </div>
</template>

<script>
import StoreUtils from "@/utility/StoreUtils";

export default {
  name: "DeleteTradeBotModal",
  emits: ['close'],
  props: {
    selectedItem: {
      type: Object,
      default: null
    }
  },
  methods:{
    async close() {
      await this.$emit('close')
      // await Swal.fire({
      //   icon: 'success',
      //   title: 'Pending',
      //   text: 'Withdrawal Request Pending',
      // });
    },

    async deleteTradeBot() {
      await StoreUtils.dispatch(StoreUtils.actions.tradeBot.deleteTradeBot, {
        botId: this.selectedItem
      })
      await StoreUtils.dispatch(StoreUtils.actions.tradeBot.readAllTradeBot)
      await this.$emit('close')
    }
  },
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
  top: 18vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 9rem);
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
  width: 400px;
  height: 290px;
  /*height: auto;*/
  padding: 24px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 0 34px 0 rgba(3, 28, 67, 0.13);
  border: 0.5px solid #3C4A57FF;
}

.first-part{
  display: flex;
  justify-content: space-between;
}

.bx-x{
  font-size: 25px;
  padding-top: 2px;
  color: #0f171c;
}

.text-1{
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;
  color: #0f171c;
  padding-top: 2.5%;
  padding-bottom: 1%;
  text-align: center;
}

.text-2{
  font-weight: 400;
  font-size: 19px;
  line-height: 24px;
  color: #0f171c;
  padding-top: 1%;
  padding-bottom: 2%;
  text-align: center;
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
button:hover{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  color: #0f171c;
  background-color: #ffffff;
  border: 0.5px solid #3C4A57FF;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.btn{
  display: flex;
  justify-content: center;
  gap: 10px;
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
    top: 14vh;
    width: 27rem;
    height: 20rem;
    left: calc(50% - 10.5rem);
    right: 30px;
  }
  h3{
    font-size: 20px;
  }
  p{
    font-size: unset;
  }
  .alpha{
    width: 340px;
    height: 280px;
  }
}
</style>