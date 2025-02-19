<template>
  <div class="alpha">
<!--    <p class="section-header-1">Focus on trading. We’ll handle the rest.</p>-->
<!--    <p class="section-header">You decide what to trade and when to trade it. We’re hard at work behind the scenes to-->
<!--      minimize your costs and improve your execution.</p>-->


    <div class="section-alpha">

      <div class="section-2">

          <p class="text-1-size" >Trusted by over
            <span style="color: #0bccbf">1,000,000</span> traders</p>

        <p class="text-2" style="text-align: center;">Here is what our customers have to say</p>

<!--        <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/md_exness_deposits_4516a9f627.jpg" alt="image" class="image" />-->

      </div>


      <div class="section-1">

        <div class="text-part">
          <div class="video-container">
          <video controls width="100%" height="340" >
            <source :src="videoSrc" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          </div>
          <p style="padding-top: 10px;" class="text-2">Anna Morgan
            <span><img src="https://primexbt.com/_next/static/media/stars.7112243b.svg"></span>
          </p>
          <hr class="new"/>
        </div>


        <div class="text-part">
          <p class="text-1">
            The support I receive from this broker has been very welcoming. I thought I’ll be very confused with
            getting my way around the financial instruments and other tools but the educational and analytical
            materials have been helpful.
          </p>
          <p class="text-2">Anh Vu
            <span><img src="https://primexbt.com/_next/static/media/stars.7112243b.svg"></span>
          </p>
          <hr class="new"/>
        </div>


        <div class="text-part">
          <p class="text-1">
            So, I'll start by saying that I like trading Stocks, Option , CFD, Forex , Crypto Bonds and Real Estate
            and I like this platform! It has cool features:
            Low fees. This is the coolest feature of this platform.
            High leverage. Obviously in second place. But it's also cool!
            Set of Stocks, Option , CFD, Forex , Crypto Bonds and Real Estate. Nice selection of stocks that I can trade.
          </p>
          <p class="text-2">Pravat Jongjitirat
            <span><img src="https://primexbt.com/_next/static/media/stars.7112243b.svg"></span>
          </p>
          <hr class="new"/>
        </div>



        <div class="text-part">
          <p class="text-1">
            I think it is one of the top-notch Stocks, Option , CFD, Forex , Crypto Bonds and Real Estate exchanges in
            the industry in my opinion. I'm saying that because I have worked with many other crypto platforms and I
            have something to compare with EWT . There is
            literally everything great starting from trading options, financial assets and
            the technical support. Everything is top notch.
          </p>
          <p class="text-2">
            Hieu Hoang
            <span><img src="https://primexbt.com/_next/static/media/stars.7112243b.svg"></span>
          </p>
          <hr class="new"/>
        </div>



      </div>
    </div>




  </div>
</template>

<script>
export default {
  name: "HomeSection7",
  data() {
    return {
      // Import the video file here
      videoSrc: require('@/assets/testivideo1.mp4'),
      videoSrc2: require('@/assets/testivideo2.mp4'),
      videoSrc3: require('@/assets/testivideo3.mp4'),
    }
  }
}
</script>


<style scoped>

.alpha{
  padding-bottom: 5%;
  padding-top: 5%;
}

.section-1{
  width: 65%;
}

.section-2{
  width: 35%;
}

.text-1-size{
  text-align: center;
  font-size: 28px;
  color: #FFFFFF;
}

.section-header{
  font-size: 17px;
  color: #0f171c;
  text-align: center;
  font-weight: 300;
  margin-left: 23%;
  margin-right: 23%;
  padding-bottom: 1%;
}
.section-header-1{
  font-size: 30px;
  color: #222222;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.5%;
  font-family: 'BR-Firma-Bold', sans-serif;
}
.section-alpha{
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin-top: 3%;
}

.image{
  width: 75%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border-radius: 12px;
}

.text-part{
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 3%;
}

.text-1{
  font-size: 18px;
  line-height: 30px;
  font-weight: 500;
  white-space: pre-line;
  margin-bottom: 10px;
  color: #ffffff;
}

.text-2{
  margin: 0;
  color: #8599a6;
  font-size: 17px;
  white-space: pre-line;
  line-height: 1.4;
}

.new{
  margin-top: 10px;
}

@media (max-width: 700px) {
  .section-header{
    font-size: 16px;
    margin-left: 8%;
    margin-right: 8%;
  }
  .section-header-1{
    font-size: 28px;
  }
  .section-alpha{
    display: block;
  }
  .section-1{
    width: 100%;
  }

  .section-2{
    width: 100%;
    margin-bottom: 5%;
  }

  .text-1{
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 13px;
  }

  .text-2{
    font-size: 16px;
    line-height: 1.3;
  }
  .image{
    width: 90%;
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