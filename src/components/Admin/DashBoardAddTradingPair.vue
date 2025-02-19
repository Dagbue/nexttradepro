<template>
  <div class="alpha">
    <div class="body">
      <h2>Add Trading Pairs</h2>
    </div>

      <form class="form-part" >

        <div class="form-header">
          <p style="font-weight: bold;color: #FFFFFF;"></p>
        </div>

<!--        <div class="form-group">-->
<!--          <label class="label">Select User Email</label>-->
<!--          <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>-->
<!--            <option v-for="option in allUsers" :key="option" :value="option" >-->
<!--              {{ option.email }}-->
<!--            </option>-->
<!--          </select>-->
<!--        </div>-->

        <div class="form-group">
          <label class="label">Select Trade Type</label>
          <select name="tradeType" id="tradeType" required >
            <option selected disabled value="">Select Trade</option>
            <option value="Forex">Forex</option>
            <option value="Crypto">Crypto</option>
            <option value="CFD">CFD</option>
            <option value="Stocks">Stocks</option>
            <option value="RealEstate">RealEstate</option>
          </select>
        </div>

        <div class="form-group">
          <label class="label">View Current Trading Pairs </label>
          <select name="Market" id="Market" required >
            <option selected disabled value="">View Current Trading Pairs</option>
            <option value="USD/CAD">USD/CAD</option>
            <option value="USD/CHF">USD/CHF</option>
            <option value="USD/JPY">USD/JPY</option>
            <option value="EUR/USD">EUR/USD</option>
            <option value="GBP/USD">GBP/USD</option>
            <option value="NZD/USD">NZD/USD</option>
            <option value="AUD/CAD">AUD/CAD</option>
            <option value="AUD/USD">AUD/USD</option>
            <option value="EUR/GBP">EUR/GBP</option>
            <option value="GBP/AUD">GBP/AUD</option>
            <option value="EUR/AUD">EUR/AUD</option>
            <option value="AUD/CHF">AUD/CHF</option>
            <option value="GBP/CHF">GBP/CHF</option>
            <option value="GBP/JPY">GBP/JPY</option>
            <option value="AUD/JPY">AUD/JPY</option>
            <option value="EUR/JPY">EUR/JPY</option>
            <option value="AUD/NZD">AUD/NZD</option>
            <option value="EUR/CHF">EUR/CHF</option>
            <option value="NZD/JPY">NZD/JPY</option>
            <option value="CAD/CHF">CAD/CHF</option>
            <option value="GBP/NZD">GBP/NZD</option>
            <option value="CHF/JPY">CHF/JPY</option>
            <option value="NZD/CAD">NZD/CAD</option>
            <option value="NZD/CHF">NZD/CHF</option>
          </select>
        </div>

        <div class="form-group">
          <label class="label">Add Trading Pairs</label>
          <input type="number" placeholder="Enter Trading Pair"  name="Amount"  required/>
        </div>


<!--        <div class="form-group">-->
<!--          <label class="label">Stop Loss</label>-->
<!--          <input type="number" placeholder="Enter Stop Loss"  name="Stop Loss"  required/>-->
<!--        </div>-->

<!--        <div class="form-group">-->
<!--          <label class="label">Take Profit</label>-->
<!--          <input type="number" placeholder="Enter Take Profit"  name="Take Profit"  required/>-->
<!--        </div>-->

<!--        <div class="form-group">-->
<!--          <label class="label">Entry Price</label>-->
<!--          <input type="number" placeholder="Enter Entry Price"  name="Entry Price"  required/>-->
<!--        </div>-->

<!--        <div class="form-group">-->
<!--          <label class="label">Trade Interval (Time)</label>-->
<!--          <select name="tradeInterval" id="tradeInterval" required v-model="tradeInterval" >-->
<!--            <option selected disabled value="">Trade Interval (Time)</option>-->
<!--            <option value="1 min">1 min</option>-->
<!--            <option value="3 min">3 min</option>-->
<!--            <option value="5 min">5 min</option>-->
<!--            <option value="15 mins">15 mins</option>-->
<!--            <option value="30 mins">30 mins</option>-->
<!--            <option value="1 hr">1 hr</option>-->
<!--            <option value="2 hr">2 hr</option>-->
<!--            <option value="1 day">1 day</option>-->
<!--          </select>-->
<!--        </div>-->

<!--        <div class="form-group">-->
<!--          <label class="label">Trade Type</label>-->
<!--          <select name="tradeType" id="tradeType" required v-model="tradeType">-->
<!--            <option selected disabled value="">Trade Type</option>-->
<!--            <option value="Buy">Buy</option>-->
<!--            <option value="Sell">Sell</option>-->
<!--          </select>-->
<!--        </div>-->

<!--        <div class="form-group">-->
<!--          <label class="label">Trade Leverage</label>-->
<!--          <select name="tradeType" id="tradeType" required v-model="tradeLeverage" >-->
<!--            <option selected disabled value="">Trade Type</option>-->
<!--            <option value="0.5X">0.5X</option>-->
<!--            <option value="1.0X">1.0X</option>-->
<!--            <option value="1.5X">1.5X</option>-->
<!--            <option value="2.0X">2.0X</option>-->
<!--            <option value="5X">5X</option>-->
<!--            <option value="10X">10X</option>-->
<!--          </select>-->
<!--        </div>-->

        <base-button  style="background-color: #007aff;border: 1px solid #007aff;">Add Trading Pair</base-button>
      </form>


    </div>
</template>

<script>

import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";

export default {
  name: "DashBoardAddTradingPair",
  components: {BaseButton},
}
</script>

<style scoped>
.body{
  padding: 32px;
}
h2{
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #071333;
}

.form-header{
  padding-top: 5px;
  padding-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 13px 16px;
  height: 45px;
  border: 0.5px solid #3C4A57FF;
  box-shadow: none;
  width: 430px;
  background: #ffffff;
  margin-top: 1.5%;
  color: #071333;
  border-radius: 8px;
}

.form-group input:focus {
  outline: none;
}

.form-group input::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.form-group select {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 13px 16px;
  height: 45px;
  border-radius: 8px;
  border: 0.5px solid #3C4A57FF;
  box-shadow: none;
  width: 430px;
  background: #ffffff;
  margin-top: 1.5%;
  color: #071333;
}

option{
  color: #071333;
}

.form-group select:focus {
  outline: none;
}

.form-group select::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.form-part{
  max-width: 550px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border: 0.5px solid #3C4A57FF;
  padding: 22px 25px;
  border-radius: 5px;
  background: #3C4A57FF;
  margin-top: 2%;
  margin-bottom: 2%;
}

.label{
  margin-left: 3%;
  font-size: 14px;
  color: #FFFFFF;
}



@media (max-width: 700px) {
  .form-part{
    max-width: unset;
    width: 95%;
    margin-top: 5%;
  }

  .form-group input {
    width: 100%;
  }

  .form-group select {
    width: 100%;
  }



}
</style>