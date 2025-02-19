<template>
  <div class="alpha">
    <p class="text-1">Making sure our customers can operate safely and calmly is a top priority. We are constantly
      adding new offerings that will give you a better, more diverse investment experience, accessible from anywhere
      and on any device.</p>

    <div class="section">

      <div class="inner">
        <img src="@/assets/multi-asset-platform.svg" alt=""  class="image" />
        <p class="text-2">Multi-Asset platform</p>
        <p class="text-3">Stocks, ETFs, Crypto, indices and more</p>
      </div>

      <div class="inner">
        <img src="@/assets/time-tested.svg" alt=""  class="image" />
        <p class="text-2">Time-tested</p>
        <p class="text-3">established company and experienced broker, since 2007</p>
      </div>

      <div class="inner">
        <img src="@/assets/insurance.svg" alt=""  class="image" />
        <p class="text-2">Investment Insurance</p>
        <p class="text-3">up to 1 million euros/AUD to eligible clients**</p>
      </div>

    </div>

    <div class="section">

      <div class="inner">
        <img src="@/assets/social-trading.svg" alt=""  class="image" />
        <p class="text-2">Social Trading</p>
        <p class="text-3">a community of over 30 million users</p>
      </div>

      <div class="inner">
        <img src="@/assets/investing-with-experts.svg" alt=""  class="image" />
        <p class="text-2">Investing with experts</p>
        <p class="text-3">Unique portfolios and the ability to copy top traders</p>
      </div>

      <div class="inner">
        <img src="@/assets/protecting-your-funds.svg" alt=""  class="image" />
        <p class="text-2">Protecting your funds</p>
        <p class="text-3">and personal information</p>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: "AboutSection1"
}
</script>

<style scoped>
.alpha{
  margin-top: 13%;
}
.text-1{
  font-size: 18px;
  color: #8599a6;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.inner{
  background-color: #FFFFFF;
  width: 250px;
  height: 300px;
  margin-top: 3%;
  border-radius: 10px;
}

.section{
  display: flex;
  justify-content: center;
  gap: 40px;
}

.image{
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6%;
  margin-bottom: 5%;
}

.text-2{
  font-size: 19px;
  color: #000000;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 10%;
}

.text-3{
  font-size: 16px;
  color: #000000;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}


@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .alpha{
    margin-top: 25%;
  }


  .inner{
    background-color: #FFFFFF;
    width: 200px;
    margin-top: 5%;
  }
  .section{
    gap: 20px;
  }
  .text-1{
    font-size: 17px;
    width: 85%;
  }
}

@media (max-width: 500px) {
  .section{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .inner{
    width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1%;
  }

  .alpha{
    margin-top: 33%;
  }
}
</style>