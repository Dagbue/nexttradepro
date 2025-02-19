<template>
  <div class="alpha">
    <p class="header">Our Core Products</p>

    <div class="section-alpha">

      <div class="section-1">
        <img src="@/assets/forex.webp" alt="" class="image">
        <p class="text-1">FX & CFDs</p>
        <p class="text-2">Trade 100+ markets like BTCUSD, EURUSD & SP500.</p>
      </div>


      <div class="section-1">
        <img src="@/assets/buyCrypto.webp" alt="" class="image">
        <p class="text-1">Buy Crypto</p>
        <p class="text-2">Easily buy 60+ Crypto with Visa or Mastercard.</p>
      </div>

      <div class="section-1">
        <img src="@/assets/cf.webp" alt="" class="image">
        <p class="text-1">Crypto Futures</p>
        <p class="text-2">Trade Crypto Futures Contracts incl. BTC & ETH.</p>
      </div>


      <div class="section-1">
        <img src="@/assets/ct.webp" alt="" class="image">
        <p class="text-1">Copy Trading</p>
        <p class="text-2">Profit from the markets by following the experts.</p>
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "AboutSection4"
}
</script>

<style scoped>
.alpha{
  margin-top: 5%;
  margin-bottom: 5%;
}

.header{
  text-align: center;
  color: #FFFFFF;
  font-size: 35px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-1{
  color: #FFFFFF;
  text-align: center;
  font-size: 25px;
  margin-top: 1%;
  margin-bottom: 3%;
}

.text-2{
  color: #FFFFFF;
  font-size: 14px;
  text-align: center;
}

.section-alpha{
  display: flex;
  justify-content: space-evenly;
  margin-top: 4%;
  margin-bottom: 4%;
}

.section-1{
  width: 320px;
}

.image{
  width: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 900px) {

}

@media (max-width: 700px) {
  .section-alpha{
    display: block;
  }

  .section-1{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
  }
}

@media (max-width: 500px) {

}
</style>