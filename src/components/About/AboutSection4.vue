<template>
  <div class="alpha">
    <p class="header">Our Core <span style="color: #2563EB;">Products</span></p>

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
  margin-bottom: 3%;
}

.header{
  text-align: center;
  color: #0A0A0AFF;
  font-size: 2.25rem;
  font-weight: 700;
}

.text-1{
  color: #0A0A0AFF;
  text-align: center;
  font-size: 21px;
  margin-top: 0.5%;
  margin-bottom: 3%;
  font-weight: 600;
}

.text-2{
  color: #8599a6;
  font-size: 14px;
  text-align: center;
  font-weight: 300;
  line-height: 1.3;
}

.section-alpha{
  display: flex;
  justify-content: space-evenly;
  margin-top: 2%;
  margin-bottom: 2%;
}

.section-1{
  width: 260px;
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