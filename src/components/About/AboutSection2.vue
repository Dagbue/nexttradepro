<template>
  <div class="alpha">
    <p class="section-header-1">We’re on a mission to democratize <br class="breaker"/> finance for all.</p>
    <p class="section-header">At <span style="color: #3760ff;">TopShares Pro </span>Markets, our values are in service of our customers. We strive to
      uphold our <br/> values every day.</p>


    <div class="section-alpha">

      <div class="section-1">

        <div class="text-part">
          <p class="text-1">About <span style="color: #3760ff;">TopShares Pro</span></p>
          <p class="text-2">Crypto creates economic freedom by ensuring that people can participate fairly in the
            economy, and TopShares Pro is on a mission to increase economic freedom for more than 1 billion people.
            We’re updating the century-old financial system by providing a trusted platform that makes it easy for
            people and institutions to engage with crypto assets, including trading, staking, safekeeping, spending,
            and fast, free global transfers. We also provide critical infrastructure for onchain activity and support
            builders who share our vision that onchain is the new online. And together with the crypto community, we
            advocate for responsible rules to make the benefits of crypto available around the world.</p>
        </div>

<!--        <div class="text-part">-->
<!--          <p class="text-1">Maximize Your Trading Potential</p>-->
<!--          <p class="text-2">-->
<!--            Unlock higher rewards with larger investments on our advanced trading platform.-->
<!--          </p>-->
<!--          <br/>-->
<!--          <p class="text-1">Multiple regulatory licenses</p>-->
<!--          <p class="text-2">We are licensed and regulated by leading international governing bodies. Trade knowing-->
<!--            your financial data is protected.</p>-->
<!--        </div>-->



      </div>

      <div class="section-2">

        <img src="@/assets/aboutimag1.jpg" alt="image" class="image" />

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "AboutSection2",
  data() {
    return {
      // Import the video file here
    }
  }
}
</script>


<style scoped>

.alpha{
  padding-top: 5%;
  padding-bottom: 2%;
}


.section-header{
  font-size: 17px;
  color: #8599a6;
  font-weight: 300;
  text-align: center;
  padding-bottom: 1%;
}
.section-header-1{
  font-size: 30px;
  color: #0A0A0AFF;
  font-weight: bold;
  padding-bottom: 0.5%;
  text-align: center;
}
.section-alpha{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 2%;
  margin-right: 5%;
}

.image{
  width: 100%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.text-part{
  width: 75%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5%;
}

.text-1{
  font-size: 28px;
  line-height: 24px;
  white-space: pre-line;
  margin-bottom: 10px;
  color: #0A0A0AFF;
  font-weight: 700;
}

.text-2{
  margin: 0;
  font-size: 18px;
  white-space: pre-line;
  line-height: 1.3;
  color: #8599a6;
  font-weight: 300;
}

@media (max-width: 700px) {
  .section-header{
    font-size: 16px;
    margin-left: 8%;
    margin-right: 8%;
  }
  .section-header-1{
    font-size: 25px;
    margin-bottom: 10px;
  }
  .section-alpha{
    display: block;
  }
  .section-1{
    width: 100%;
  }

  .section-2{
    width: 100%;
  }

  .text-1{
    font-size: 26px;
    line-height: 24px;
    margin-bottom: 13px;
  }

  .text-2{
    font-size: 16px;
    line-height: 1.3;
  }

  .image{
    width: 95%;
  }

  .text-part{
    width: 85%;
  }
  .breaker{
    display: none;
  }
}


@media (max-width: 500px) {

  .text-part{
    width: 95%;
  }
  .section-header-1{
    width: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

}
</style>