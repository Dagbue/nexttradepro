<template>
  <div class="alpha">
    <p class="section-title"><span style="color: #0bccbf;">Comprehensive</span>&nbsp;Trading Tools</p>

    <div class="section-alpha">
      <div class="section-content">
        <img src="@/assets/Web 5.png" alt="icon" class="section-image" />

        <p class="content-title">Seamless Asset Management</p>
        <p class="content-text">Buy and sell Stocks, Forex, Options, Bonds, and Real Estate effortlessly with support
          for multiple fiat currencies. No need for complex transfers—your trades are simplified.</p>

      </div>

      <div class="section-content">
        <img src="@/assets/cex.png" alt="icon" class="section-image" />

        <p class="content-title">Secure Centralized Trading</p>
        <p class="content-text">
          Experience a highly secure and trustworthy trading platform designed for stock and forex traders. Execute
          trades confidently with robust security measures.
        </p>

      </div>

      <div class="section-content">
        <img src="@/assets/Web 4.png" alt="icon" class="section-image" />
        <p class="content-title">Advanced Charting and Analysis</p>
        <p class="content-text">
          Leverage tools like TradingView and MetaTrader 4 (MT4) to access real-time data, perform in-depth technical
          analysis, and create custom trading strategies.
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomeSection3"
}
</script>

<style scoped>
.alpha{
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
}
.section-alpha{
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-bottom: 5%;
}
.section-title {
  font-weight: 700;
  font-size: 40px;
  line-height: 58px;
  color: #FFFFFF;
  padding-bottom: 3%;
}
.section-content{
  display: block;
  width: 32%;
  margin-top: 1%;
}
.content-title{
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #FFFFFF;
  transition: color .5s;
}
.content-text{
  margin-top: 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  white-space: pre-line;
  color: #8599a6;
}
.content{
  padding-left: 20px;
  padding-top: 10px;
}
.section-image{
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 700px) {
  .section-title {
    font-size: 30px;
    line-height: 48px;
  }

  .section-alpha{
    display: block;
  }

  .section-content{
    margin-bottom: 30px;
  }

  .section-content{
    width: 100%;
  }
}


@media (max-width: 500px) {


}
</style>