<template>
  <div class="admin">

    <form v-show="this.tradeName === 'Forex'" class="form-part" @submit.prevent="placeTrade">

      <div class="form-header">
        <p style="font-weight: bold;color: #FFFFFF;">PLACE TRADE</p>
      </div>

      <div class="form-group">
        <label class="label">Select User Email</label>
        <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>
          <option v-for="option in allUsers" :key="option" :value="option" >
            {{ option.email }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Select Trade</label>
        <select name="tradeType" id="tradeType" required v-model="tradeName">
          <option selected disabled value="">Select Trade</option>
          <option value="Forex">Forex</option>
          <option value="Crypto">Crypto</option>
          <option value="CFD">CFD</option>
          <option value="Stocks">Stocks</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Amount</label>
        <input type="number" placeholder="Enter Amount"  name="Amount" v-model="tradeAmount" required/>
      </div>

      <div class="form-group">
        <label class="label">Market</label>
        <select name="Market" id="Market" required v-model="tradePair" >
          <option selected disabled value="">Select Market</option>
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
        <label class="label">Stop Loss</label>
        <input type="number" placeholder="Enter Stop Loss"  name="Stop Loss"  required/>
      </div>

      <div class="form-group">
        <label class="label">Take Profit</label>
        <input type="number" placeholder="Enter Take Profit"  name="Take Profit"  required/>
      </div>

      <div class="form-group">
        <label class="label">Entry Price</label>
        <input type="number" placeholder="Enter Entry Price"  name="Entry Price"  required/>
      </div>

      <div class="form-group">
        <label class="label">Trade Interval (Time)</label>
        <select name="tradeInterval" id="tradeInterval" required v-model="tradeInterval" >
          <option selected disabled value="">Trade Interval (Time)</option>
          <option value="1 min">1 min</option>
          <option value="3 min">3 min</option>
          <option value="5 min">5 min</option>
          <option value="15 mins">15 mins</option>
          <option value="30 mins">30 mins</option>
          <option value="1 hr">1 hr</option>
          <option value="2 hr">2 hr</option>
          <option value="1 day">1 day</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Type</label>
        <select name="tradeType" id="tradeType" required v-model="tradeType">
          <option selected disabled value="">Trade Type</option>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Leverage</label>
        <select name="tradeType" id="tradeType" required v-model="tradeLeverage" >
          <option selected disabled value="">Trade Type</option>
          <option value="0.5X">0.5X</option>
          <option value="1.0X">1.0X</option>
          <option value="1.5X">1.5X</option>
          <option value="2.0X">2.0X</option>
          <option value="5X">5X</option>
          <option value="10X">10X</option>
        </select>
      </div>

      <base-button :loading="loading" style="background-color: #007aff;border: 1px solid #007aff;">Place Trade</base-button>
    </form>

    <form v-show="this.tradeName === 'Crypto'" class="form-part" @submit.prevent="placeTrade">

      <div class="form-header">
        <p style="font-weight: bold;color: #FFFFFF;">PLACE TRADE</p>
      </div>

      <div class="form-group">
        <label class="label">Select User Email
          {{tradePair}}</label>
        <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>
          <option v-for="option in allUsers" :key="option" :value="option" >
            {{ option.email }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Select Trade</label>
        <select name="tradeType" id="tradeType" required v-model="tradeName">
          <option selected disabled value="">Select Trade</option>
          <option value="Forex">Forex</option>
          <option value="Crypto">Crypto</option>
          <option value="CFD">CFD</option>
          <option value="Stocks">Stocks</option>
        </select>
      </div>


      <div class="form-group">
        <label class="label">Amount</label>
        <input type="number" placeholder="Enter Amount"  name="Amount" v-model="tradeAmount" required/>
      </div>

      <div  class="form-group">
              <label class="label">Markets</label>
              <select name="tradingPair" id="tradingPair" required v-model="tradePair" >
                <option selected disabled value="">Select Market</option>
                <option value="BCH/BTC">BCH/BTC</option>
                <option value="BCH/EUR">BCH/EUR</option>
                <option value="BCH/GBP">BCH/GBP</option>
                <option value="BTC-EOS">BTC-EOS</option>
                <option value="BTC/EUR">BTC/EUR</option>
                <option value="BTC/GBP">BTC/GBP</option>
                <option value="BTC/USD">BTC/USD</option>
                <option value="BTC/USDC">BTC/USDC</option>
                <option value="EOS/BTC">EOS/BTC</option>
                <option value="EOS/EUR">EOS/EUR</option>
                <option value="EOS/USD">EOS/USD</option>
                <option value="ETC/BTC">ETC/BTC</option>
                <option value="ETC/EUR">ETC/EUR</option>
                <option value="ETC/GBP">ETC/GBP</option>
                <option value="ETC/USD">ETC/USD</option>
                <option value="ETH/BTC">ETH/BTC</option>
                <option value="ETH/EUR">ETH/EUR</option>
                <option value="ETH/GBP">ETH/GBP</option>
                <option value="ETH/USD">ETH/USD</option>
                <option value="LTC/BTC">LTC/BTC</option>
                <option value="LTC/EUR">LTC/EUR</option>
                <option value="LTC/GBP">LTC/GBP</option>
                <option value="LTC/USD">LTC/USD</option>
                <option value="MKR/BTC">MKR/BTC</option>
                <option value="PCP-BTC">PCP-BTC</option>
                <option value="REP/BTC">REP/BTC</option>
                <option value="REP/USD">REP/USD</option>
                <option value="TXR/GBP">TXR/GBP</option>
                <option value="XLM/BTC">XLM/BTC</option>
                <option value="XLM/EUR">XLM/EUR</option>
                <option value="XLM/USD">XLM/USD</option>
                <option value="XRP/BTC">XRP/BTC</option>
                <option value="XRP/EUR">XRP/EUR</option>
                <option value="XRP/USD">XRP/USD</option>
                <option value="ZEC/BTC">ZEC/BTC</option>
                <option value="ZRX/BTC">ZRX/BTC</option>
                <option value="ZRX/EUR">ZRX/EUR</option>
                <option value="ZRX/USD">ZRX/USD</option>
              </select>
            </div>

      <div class="form-group">
        <label class="label">Stop Loss</label>
        <input type="number" placeholder="Enter Stop Loss"  name="Stop Loss"  required/>
      </div>

      <div class="form-group">
        <label class="label">Take Profit</label>
        <input type="number" placeholder="Enter Take Profit"  name="Take Profit"  required/>
      </div>

      <div class="form-group">
        <label class="label">Entry Price</label>
        <input type="number" placeholder="Enter Entry Price"  name="Entry Price"  required/>
      </div>

      <div class="form-group">
        <label class="label">Trade Interval (Time)</label>
        <select name="tradeInterval" id="tradeInterval" required v-model="tradeInterval" >
          <option selected disabled value="">Trade Interval (Time)</option>
          <option value="1 min">1 min</option>
          <option value="3 min">3 min</option>
          <option value="5 min">5 min</option>
          <option value="15 mins">15 mins</option>
          <option value="30 mins">30 mins</option>
          <option value="1 hr">1 hr</option>
          <option value="2 hr">2 hr</option>
          <option value="1 day">1 day</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Type</label>
        <select name="tradeType" id="tradeType" required v-model="tradeType">
          <option selected disabled value="">Trade Type</option>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Leverage</label>
        <select name="tradeType" id="tradeType" required v-model="tradeLeverage" >
          <option selected disabled value="">Trade Type</option>
          <option value="0.5X">0.5X</option>
          <option value="1.0X">1.0X</option>
          <option value="1.5X">1.5X</option>
          <option value="2.0X">2.0X</option>
          <option value="5X">5X</option>
          <option value="10X">10X</option>
        </select>
      </div>

      <base-button :loading="loading" style="background-color: #007aff;border: 1px solid #007aff;">Place Trade</base-button>
    </form>

    <form v-show="this.tradeName === 'CFD'" class="form-part" @submit.prevent="placeTrade">

      <div class="form-header">
        <p style="font-weight: bold;color: #FFFFFF;">PLACE TRADE</p>
      </div>

      <div class="form-group">
        <label class="label">Select User Email
          {{tradePair}}</label>
        <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>
          <option v-for="option in allUsers" :key="option" :value="option" >
            {{ option.email }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Select Trade</label>
        <select name="tradeType" id="tradeType" required v-model="tradeName">
          <option selected disabled value="">Select Trade</option>
          <option value="Forex">Forex</option>
          <option value="Crypto">Crypto</option>
          <option value="CFD">CFD</option>
          <option value="Stocks">Stocks</option>
        </select>
      </div>


      <div class="form-group">
        <label class="label">Amount</label>
        <input type="number" placeholder="Enter Amount"  name="Amount" v-model="tradeAmount" required/>
      </div>
      <div  class="form-group">
                <label class="label">Markets</label>
                <select name="tradingPair" id="tradingPair" required v-model="tradePair" >
                  <option selected disabled value="">Select Market</option>
                  <option value="US 30">US 30</option>
                  <option value="UKX">UKX</option>
                  <option value="VIX Volatility Index">VIX Volatility Index</option>
                  <option value="Germany 30">Germany 30</option>
                  <option value="USA 500">USA 500</option>
                  <option value="US Tech 100">US Tech 100</option>
                  <option value="Japan 225">Japan 225</option>
                  <option value="Europe 50">Europe 50</option>
                  <option value="US Wall St 30">US Wall St 30</option>
                  <option value="AUXAUD">AUXAUD</option>
                  <option value="BCOUSD">BCOUSD</option>
                  <option value="WEST TEXAS OIL">WEST TEXAS OIL</option>
                  <option value="CAC40">CAC40</option>
                  <option value="DXY">DXY</option>
                  <option value="EU50">EU50</option>
                  <option value="FR40">FR40</option>
                  <option value="GRXEUR">GRXEUR</option>
                  <option value="HELCHF">HELCHF</option>
                  <option value="JPXJPY">JPXJPY</option>
                  <option value="KRUUSD">KRUUSD</option>
                  <option value="LTNEUR">LTNEUR</option>
                  <option value="RUA">RUA</option>
                  <option value="TR03">TR03</option>
                  <option value="USDBRO">USDBRO</option>
                  <option value="S&amp;P 100">S&amp;P 100</option>
                  <option value="SXE5">SXE5</option>
                  <option value="DOECHF">DOECHF</option>
                  <option value="FAANG">FAANG</option>
                  <option value="GRXEUR">GRXEUR</option>
                  <option value="VRLCHF">VRLCHF</option>
                  <option value="XPTUSD">XPTUSD</option>
                  <option value="ZA20">ZA20</option>
                  <option value="HK50">HK50</option>
                  <option value="ID05Y">ID05Y</option>
                </select>
            </div>

      <div class="form-group">
        <label class="label">Stop Loss</label>
        <input type="number" placeholder="Enter Stop Loss"  name="Stop Loss"  required/>
      </div>

      <div class="form-group">
        <label class="label">Take Profit</label>
        <input type="number" placeholder="Enter Take Profit"  name="Take Profit"  required/>
      </div>

      <div class="form-group">
        <label class="label">Entry Price</label>
        <input type="number" placeholder="Enter Entry Price"  name="Entry Price"  required/>
      </div>

      <div class="form-group">
        <label class="label">Trade Interval (Time)</label>
        <select name="tradeInterval" id="tradeInterval" required v-model="tradeInterval" >
          <option selected disabled value="">Trade Interval (Time)</option>
          <option value="1 min">1 min</option>
          <option value="3 min">3 min</option>
          <option value="5 min">5 min</option>
          <option value="15 mins">15 mins</option>
          <option value="30 mins">30 mins</option>
          <option value="1 hr">1 hr</option>
          <option value="2 hr">2 hr</option>
          <option value="1 day">1 day</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Type</label>
        <select name="tradeType" id="tradeType" required v-model="tradeType">
          <option selected disabled value="">Trade Type</option>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Leverage</label>
        <select name="tradeType" id="tradeType" required v-model="tradeLeverage" >
          <option selected disabled value="">Trade Type</option>
          <option value="0.5X">0.5X</option>
          <option value="1.0X">1.0X</option>
          <option value="1.5X">1.5X</option>
          <option value="2.0X">2.0X</option>
          <option value="5X">5X</option>
          <option value="10X">10X</option>
        </select>
      </div>

      <base-button :loading="loading" style="background-color: #007aff;border: 1px solid #007aff;">Place Trade</base-button>
    </form>

    <form v-show="this.tradeName === 'Stocks'" class="form-part" @submit.prevent="placeTrade">

      <div class="form-header">
        <p style="font-weight: bold;color: #FFFFFF;">PLACE TRADE</p>
      </div>

      <div class="form-group">
        <label class="label">Select User Email
          {{tradePair}}</label>
        <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>
          <option v-for="option in allUsers" :key="option" :value="option" >
            {{ option.email }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Select Trade</label>
        <select name="tradeType" id="tradeType" required v-model="tradeName">
          <option selected disabled value="">Select Trade</option>
          <option value="Forex">Forex</option>
          <option value="Crypto">Crypto</option>
          <option value="CFD">CFD</option>
          <option value="Stocks">Stocks</option>
        </select>
      </div>


      <div class="form-group">
        <label class="label">Amount</label>
        <input type="number" placeholder="Enter Amount"  name="Amount" v-model="tradeAmount" required/>
      </div>

      <div  class="form-group">
              <label class="label">Markets</label>
              <select name="tradingPair" id="tradingPair" required v-model="tradePair" >
                <option selected disabled value="">Select Markets</option>
                <option value="AMAZON">AMAZON</option>
                <option value="APPLE">APPLE</option>
                <option value="COCA COLA">COCA COLA</option>
                <option value="DAX30">DAX30</option>
                <option value="AIRBNB INC">AIRBNB INC</option>
                <option value="BOEING CO">BOEING CO</option>
                <option value="GME STOCKS">GME STOCKS</option>
                <option value="AMC ENTERTAINMENT">AMC ENTERTAINMENT</option>
                <option value="BLACKBERRY">BLACKBERRY</option>
                <option value="CITIGROUP INC">CITIGROUP INC</option>
                <option value="CISCO SYSTEMS INC">CISCO SYSTEMS INC</option>
                <option value="FACEBOOK">FACEBOOK</option>
                <option value="TWITTER">TWITTER</option>
                <option value="TESLA INC">TESLA INC</option>
                <option value="SONY ENT">SONY ENT</option>
                <option value="NASDAQ">NASDAQ</option>
                <option value="ENTERPRISE GROUP INC">ENTERPRISE GROUP INC</option>
                <option value="FORD MOTOR">FORD MOTOR</option>
                <option value="GAZPROM">GAZPROM</option>
                <option value="GLOBE LIFE INC">GLOBE LIFE INC</option>
                <option value="HYDRO ONE LTD">HYDRO ONE LTD</option>
                <option value="LOTUS VENTURES INC">LOTUS VENTURES INC</option>
                <option value="KELLOGG COMPANY">KELLOGG COMPANY</option>
                <option value="WAYFAIR INC">WAYFAIR INC</option>
                <option value="WALMART INC">WALMART INC</option>
                <option value="WALT DISNEY CO">WALT DISNEY CO</option>
                <option value="MACY'S INC">MACY'S INC</option>
                <option value="MCDONALD'S CORPORATIONS">MCDONALD'S CORPORATIONS</option>
                <option value="VISA INC">VISA INC</option>
                <option value="VERIZON">VERIZON</option>
                <option value="TMX GROUP LTD">TMX GROUP LTD</option>
                <option value="ALPHABET INC">ALPHABET INC</option>
                <option value="ORGANIGRAM HOLDINGS">ORGANIGRAM HOLDINGS</option>
                <option value="PFIZER INC">PFIZER INC</option>
              </select>
            </div>

      <div class="form-group">
        <label class="label">Stop Loss</label>
        <input type="number" placeholder="Enter Stop Loss"  name="Stop Loss"  required/>
      </div>

      <div class="form-group">
        <label class="label">Take Profit</label>
        <input type="number" placeholder="Enter Take Profit"  name="Take Profit"  required/>
      </div>

      <div class="form-group">
        <label class="label">Entry Price</label>
        <input type="number" placeholder="Enter Entry Price"  name="Entry Price"  required/>
      </div>

      <div class="form-group">
        <label class="label">Trade Interval (Time)</label>
        <select name="tradeInterval" id="tradeInterval" required v-model="tradeInterval" >
          <option selected disabled value="">Trade Interval (Time)</option>
          <option value="1 min">1 min</option>
          <option value="3 min">3 min</option>
          <option value="5 min">5 min</option>
          <option value="15 mins">15 mins</option>
          <option value="30 mins">30 mins</option>
          <option value="1 hr">1 hr</option>
          <option value="2 hr">2 hr</option>
          <option value="1 day">1 day</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Type</label>
        <select name="tradeType" id="tradeType" required v-model="tradeType">
          <option selected disabled value="">Trade Type</option>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Leverage</label>
        <select name="tradeType" id="tradeType" required v-model="tradeLeverage" >
          <option selected disabled value="">Trade Type</option>
          <option value="0.5X">0.5X</option>
          <option value="1.0X">1.0X</option>
          <option value="1.5X">1.5X</option>
          <option value="2.0X">2.0X</option>
          <option value="5X">5X</option>
          <option value="10X">10X</option>
        </select>
      </div>

      <base-button :loading="loading" style="background-color: #007aff;border: 1px solid #007aff;">Place Trade</base-button>
    </form>

  </div>
</template>

<script>
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import StoreUtils from "@/utility/StoreUtils";
import {mapState} from "vuex";
import router from "@/router";


export default {
  name: "DashBoardAddTrade",
  components: {BaseButton},
  data()  {
    return {
      contacts: [],
      SelectEmail: "",
      tradeName: "Forex",
      tradeAmount: "",
      tradePair: "",
      tradeInterval: "",
      tradeType: "",
      tradeLeverage: "",
      currentDate: "",
      currentDate2: "",
      randomString: "",
      randomString2: "",
    }
  },
  computed:{
    allUsers() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadAllUsers)
    },
    ...mapState({
      loading: state => state.trade.loading,
      auth: state => state.auth,
    }),
  },
  methods: {

    async placeTrade() {
      await StoreUtils.dispatch(StoreUtils.actions.trade.tradeCreate, {
        userId: this.SelectEmail.userId,
        tradeTime: this.currentDate,
        symbolTraded: this.tradePair,
        amountTrade: this.tradeAmount,
        expectedPayout: 0,
        leverage: this.tradeLeverage,
        endPrice: this.randomString2,
        marketType: this.tradeName,
        endTime: this.currentDate2,
        tradeStatus: "pending",
        tradeReference : this.randomString,
        tradeType : this.tradeType
      });
      await StoreUtils.dispatch(StoreUtils.actions.trade.readAllTrade);
      this.SelectEmail = "";
      this.tradeName = "";
      this.tradeAmount = "";
      this.tradePair = "";
      this.tradeInterval = "";
      this.tradeType = "";
      this.tradeLeverage = "";
      this.getCurrentDate();
      this.getCurrentDateTime();
      this.generateRandomString();
      this.generateRandomString2();
      await router.push("/trade-request-admin")
    },

    getCurrentDate() {
      const today = new Date();

      // Format the date as needed, for example: YYYY-MM-DD
      const formattedDate = today.toISOString().split('T')[0];

      // Save the formatted date to the data property
      this.currentDate2 = formattedDate;
    },


    getCurrentDateTime() {
      const today = new Date();

      // Format the date as YYYY-MM-DD HH:mm:ss
      const formattedDateTime = today.toISOString().slice(0, 19).replace("T", " ");

      // Save the formatted date and time to the data property
      this.currentDate = formattedDateTime;
    },

    generateRandomString() {
      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString = result;
    },

    generateRandomString2() {
      const characters = '0123456789';
      let result = '';
      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString2 = result;
    }
  },
  created() {
    this.getCurrentDate();
    this.getCurrentDateTime();
    this.generateRandomString();
    this.generateRandomString2();

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadAllUsers)
  },
  mounted() {
    this.getCurrentDate();
    this.getCurrentDateTime();
    this.generateRandomString();
    this.generateRandomString2();

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.dispatch(StoreUtils.actions.auth.allUsers)
  }
}
</script>

<style scoped>

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