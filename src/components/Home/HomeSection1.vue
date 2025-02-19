<template>

    <div class="alpha">

      <div class="header">
        <p class="text-1">Trade your <span style="color: #3760ff">favourite markets</span></p>
        <p class="text-2">Want to buy Bitcoin outright or trade CFDs on Gold or EUR/USD? We’ve got you covered with
          access to 100+ global markets on one platform.</p>
      </div>
      <div class="header-select">
        <p @click="changeScreen3" class="btn">Stocks</p>
        <p @click="changeScreen2" class="btn">Forex</p>
        <p @click="changeScreen" class="btn">Cryptos</p>
      </div>

      <stock-table v-show="this.screen === 'stocks'"/>

      <forex-table v-show="this.screen === 'forex'"/>

      <crypto-table v-show="this.screen === 'crypto'"/>

    </div>

</template>

<script>
import CryptoTable from "@/components/BaseComponents/tables/CryptoTable.vue";
import ForexTable from "@/components/BaseComponents/tables/ForexTable.vue";
import StockTable from "@/components/BaseComponents/tables/StockTable.vue";

export default {
  name: "HomeSection1",
  components: {StockTable, ForexTable, CryptoTable},
  data() {
    return {
      screen: "stocks",
    };
  },
  methods: {
    changeScreen() {
      this.screen = "crypto"
    },
    changeScreen2() {
      this.screen = "forex"
    },
    changeScreen3() {
      this.screen = "stocks"
    },
  }
}
</script>

<style scoped>
/*.alpha{*/
/*  margin-top: 3%;*/
/*  margin-bottom: 5%;*/
/*}*/

.alpha{
  height: 100%;
  padding-bottom: 5%;
  padding-top: 2%;
}

.header-select{
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 1%;
}

.btn{
  background: #3760ff;
  border: 1px solid #3760ff;
  color: #ffffff;
  padding: 0.6em 40px 0.5em 40px;
  border-radius: 10px;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
}
/*.btn:hover{*/
/*  background-color: #ffcf01;*/
/*  border: 1px solid #ffcf01;*/
/*  color: #FFFFFF;*/
/*}*/

.text-1{
  font-weight: 700;
  font-size: 38px;
  line-height: 58px;
  color: #FFFFFF;
  padding-bottom: 5px;
  text-align: center;
}

.text-2{
  font-size: 18px;
  color: #8599a6;
  margin-bottom: 2%;
  text-align: center;
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}


@media (max-width: 990px) {

}

@media (max-width: 700px){

  .header{
    width: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .text-1{
    font-size: 31px;
    padding-bottom: unset;
  }

  .text-2{
    font-size: 17px;
    width: 80%;
  }

  .header-select{
    gap: 5px;
    margin-top: 3%;
    margin-bottom: 5%;
  }

  .btn{
    padding: 0.5em 30px 0.4em 30px;
  }

}

@media (max-width: 500px){

}

</style>