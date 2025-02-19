<template>
  <div class="alpha">
    <p class="section-header-1">Access <span style="color: #007aff">more products </span>from a single  account</p>
    <p class="section-header">Get access to a wide range of trading, investing, and Crypto services from <br/>
      a single platform.</p>


    <div class="section-alpha">

      <div class="section-1">

        <div class="text-part">
          <p class="text-1">Many markets to trade</p>
          <p class="text-2">Trade Apple,Amazon,Tesla,BTC/USD, EUR/USD, SP500, Gold, Oil & more.</p>
        </div>

        <div class="text-part">
          <p class="text-1">Maximize Your Trading Potential</p>
          <p class="text-2">
            Unlock higher rewards with larger investments on our advanced trading platform.
          </p>
          <br/>

<!--          <p class="text-1">Multiple regulatory licenses</p>-->
<!--          <p class="text-2">We are licensed and regulated by leading international governing bodies. Trade knowing-->
<!--            your financial data is protected.</p>-->
        </div>



      </div>

      <div class="section-2">

        <img src="https://primexbt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcfds.ff42b703.png&w=3840&q=75" alt="image" class="image" />
<!--        <video autoplay="" muted="" loop="" width="70%" height="70%"  style="-->
<!--        border-radius: 10px;-->
<!--        display: block;-->
<!--        margin-right: auto;-->
<!--        margin-left: auto;-->
<!--">-->
<!--          <source :src="videoSrc" type="video/mp4">-->
<!--          Your browser does not support the video tag.-->
<!--        </video>-->

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "HomeSection9",
  data() {
    return {
      // Import the video file here
      // videoSrc: require('@/assets/Hero_noring.mp4'),
    }
  }
}
</script>

<style scoped>

.alpha{
  padding-top: 5%;
  padding-bottom: 5%;

}

.section-1{
  width: 50%;
}

.section-2{
  width: 50%;
}

.section-header{
  font-size: 17px;
  color: #8599a6;
  font-weight: 300;
  text-align: center;
  padding-bottom: 1%;
}
.section-header-1{
  font-size: 35px;
  color: #ffffff;
  font-weight: bold;
  padding-bottom: 0.5%;
  text-align: center;
}
.section-alpha{
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin-top: 3%;
  margin-right: 5%;
}

.image{
  width: 100%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.text-part{
  width: 75%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5%;
}

.text-1{
  font-size: 26px;
  line-height: 24px;
  font-weight: 500;
  white-space: pre-line;
  margin-bottom: 10px;
  color: #FFFFFF;
}

.text-2{
  margin: 0;
  font-size: 17px;
  white-space: pre-line;
  line-height: 1.4;
  color: #8599a6;
}

@media (max-width: 700px) {
  .section-header{
    font-size: 16px;
    margin-left: 8%;
    margin-right: 8%;
  }
  .section-header-1{
    font-size: 26px;
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
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
}


@media (max-width: 500px) {

  .text-part{
    width: 85%;
  }
  .section-header-1{
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

}
</style>
