<template>
  <div class="tradingview-widget-container">

<!--    <div class="header">-->
<!--      <p class="text-1">Stay ahead of the <span style="color: #0bccbf">markets.</span></p>-->
<!--      <p class="text-2">Get the latest market news, trading analysis, and feature updates.</p>-->
<!--    </div>-->

    <div id="tradingview-widget" class="tradingview-widget"></div>
  </div>
</template>
<script>
export default {
  name: "BlogTable",
  mounted() {
    this.loadTradingViewScript();
  },
  methods: {
    loadTradingViewScript() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "feedMode": "all_symbols",
        "isTransparent": false,
        "largeChartUrl": "http://www.assettrademarkets.com",
        "displayMode": "regular",
        "width": "97%",
        "height": "100%",
        "colorTheme": "dark",
        "locale": "en"
      });

      document.getElementById('tradingview-widget').appendChild(script);
    }
  }
}
</script>

<style scoped>
.tradingview-widget-container{

  padding-bottom: 5%;
}

.tradingview-widget {
  width: 96%; /* Adjust width as needed */
  height: 700px; /* Adjust height as needed */
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.text-2{
  font-size: 18px;
  text-align: left;
  color: #8599a6;
  margin-bottom: 3%;
  margin-left: 6%;
}
.text-1{
  font-weight: 700;
  font-size: 40px;
  line-height: 58px;
  color: #FFFFFF;
  padding-bottom: 10px;
  margin-left: 6%;
  text-align: left;
}


.header{
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {


  .text-1{
    font-size: 30px;
    line-height: 45px;
    margin-bottom: unset;
  }

  .text-2{
    font-size: 15px;
    line-height: 10px;
  }

}

@media (max-width: 500px) {
  .text-1{
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 9px;
  }

  .text-2{
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }

  .text-2{
    line-height: 18px;
  }
}
</style>