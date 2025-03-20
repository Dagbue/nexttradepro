<template>
  <div class="alpha">
    <p class="section-title">More ways to Trade</p>
    <p class="section-title-2">Join 1M+ traders who choose
      <span style="color: #3760ff;">TopShares Pro</span>
      as their go-to trading platform.</p>

    <div class="section-alpha">
      <div class="section-content">
        <div class="content">
          <p class="content-title">Fx & CFDs</p>
          <p class="content-text">Trade 100+ markets like BTCUSD, EURUSD & SP500.</p>
        </div>
        <img src="https://primexbt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-cdfsforex.96d5315a.png&w=750&q=75" alt="icon" class="section-image-1" />
      </div>

      <div class="section-content">
        <div class="content">
          <p class="content-title">Buy Crypto</p>
          <p class="content-text">Easily buy Crypto with Visa or Mastercard.</p>
        </div>
        <img src="https://primexbt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-buycrypto.cb1d64a5.png&w=750&q=75" alt="icon" class="section-image" />
      </div>
    </div>

    <div class="section-alpha">
      <div class="section-content">
        <div class="content">
          <p class="content-title">Crypto Futures</p>
          <p class="content-text">Trade Crypto Futures Contracts incl. BTC & ETH.</p>
        </div>
        <img src="https://primexbt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-cryptofutures.54b24ddf.png&w=750&q=75" alt="icon" class="section-image" />
      </div>

      <div class="section-content">
        <div class="content">
          <p class="content-title">Copy Trading</p>
          <p class="content-text">Profit from the markets by following the experts.</p>
        </div>
        <img src="https://primexbt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-copytrading.26fcad00.png&w=750&q=75" alt="icon" class="section-image" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomeSection2"
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
  align-items: center;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 5%;
}
.section-title {
  font-weight: 700;
  font-size: 38px;
  line-height: 58px;
  color: #FFFFFF;
  text-align: center;
}
.section-title-2 {
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #8599a6;
  padding-bottom: 3%;
  text-align: center;
}
.section-content{
  display: flex;
  width: 100%;
  background-color: #f8f8f8;
  padding-top: 2%;
  padding-bottom: 2.5%;
  padding-right: 2%;
  padding-left: 1%;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  margin-right: 2%;
  margin-left: 2%;
  border-radius: 10px;
}
.content-title{
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #3760ff;
  transition: color .5s;
}
.content-text{
  margin-top: 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  white-space: pre-line;
  color: #8599a6;
  width: 90%;
}
.content{
  padding-left: 20px;
  padding-top: 10px;
}
.section-image{
  width: 20%;
}

.section-image-1{
  width: 20%;
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

  .section-image{
    width: 100px;
    height: 100px;
  }
}


@media (max-width: 500px) {


}
</style>