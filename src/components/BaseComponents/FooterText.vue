<template>
  <div class="alpha">
    <div class="section-1-alpha">
      <div class="section-1">
        <p class="text-1">Join Rubies and <br/> experience greatness</p>
        <p class="text-2">Embrace the power of unified communication and financial management with Rubies. Chat,
          send money, pay bills, and more—all within one  innovative app for ultimate convenience and control.</p>
        <p class="text-2">Download the Rubies app</p>
        <!--        <div class="btn-1">-->
        <!--          Get Started-->
        <!--        </div>-->
        <div class="play-store">
          <img src="@/assets/applestore.svg" alt="" class="store-image" />
          <img src="@/assets/gogleplay.svg" alt="" class="store-image" />
        </div>
      </div>

      <div class="image-section">
        <img src="@/assets/footer-image.svg" alt="" class="image"/>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: "FooterText"
}
</script>

<style scoped>
.section-1{
  /*margin-top: 75px;*/
  width: 50%;
  margin-left: 10%;
}

.image-section{
  width: 50%;
  margin-right: 4%;
}

.image{
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.section-1-alpha{
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin-top: 5%;
  margin-bottom: 5%;
}

.text-1{
  font-size: 50px;
  line-height: 60px;
  letter-spacing: -0.01em;
  text-align: left;
  margin-bottom: 10px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-2{
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: left;
  color: #697582;
  margin-bottom: 15px;
}


.play-store{
  display: flex;
  gap: 20px;
}

span{
  padding: 3px 15px;
  align-items: center;
  gap: 4px;
  background-color: #EFFAF6;
  color: #2D9F75;
  border-radius: 100px;
  margin-left: 5px;
}
@media (max-width: 990px) {
}

@media (max-width: 700px) {

  .text-1{
    font-size: 45px;
    line-height: 50px;
    margin-bottom: 8px;
    text-align: center;
    margin-top: 5%;
  }

  .text-2{
    font-size: 17px;
    line-height: 22px;
    text-align: center;
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .section-1-alpha{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    margin-top: 8%;
    margin-bottom: 8%;
  }

  .section-1{
    width: 100%;
    margin-left: unset;
  }

  .image-section{
    width: 90%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .play-store{
    justify-content: center;
    gap: 10px;
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
}
</style>