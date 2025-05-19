<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
        <p class="text-1">
          A Distinguished, multi-award-winning provider of stock market solutions.
        </p>
        <p class="text-2">
          We are proud to offer traders advanced and innovative trading platform technologies designed for
          performance and reliability.
        </p>


        <div class="button-group">
          <div class="btn-1" @click="onPostClick">
            Open Account
          </div>
          <div class="btn-2" @click="onPostClick2">
            Trading Platform
          </div>
        </div>

        <p class="text-3">*Equity and index fund trading utilizing advanced charting and analytical tools.</p>
      </div>

      <div class="section-2">
        <img src="https://primexbt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrypto-futures.0d36e92f.png&w=3840&q=75" alt="" class="image" />
      </div>


    </div>

    <div class="section-3">
      <div class="section-3-inner">
        <img width="48" height="48" src="https://img.icons8.com/fluency/48/compass.png" alt="compass"/>
        <p class="section-3-text">Enhanced Tools</p>
      </div>

      <div class="section-3-inner">
        <img width="48" height="48" src="https://img.icons8.com/fluency/48/book--v1.png" alt="book--v1"/>
        <p class="section-3-text">Trading Guides</p>
      </div>

      <div class="section-3-inner">
        <img width="40" height="40" src="https://img.icons8.com/ultraviolet/40/lightning-bolt.png" alt="lightning-bolt"/>
        <p class="section-3-text">Fast execution</p>
      </div>

      <div class="section-3-inner">
        <img width="40" height="40" src="https://img.icons8.com/ultraviolet/40/discount.png" alt="discount"/>
        <p class="section-3-text">0% Commission</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
    onPostClick2() {
      this.$router.push("/login");
    },
  }
}
</script>

<style scoped>
.section-alpha{
  height: 570px;
}
.items-switch .active {
  display: inline; /* Show only active item */
}
.items-switch .active {
  display: inline; /* Show only active item */
}

.items-switch span {
  display: none; /* Hide all by default */
}
.section-alpha{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  /*flex-direction: column;*/
}

.section-1{
  /*margin-top: 50px;*/
  margin-left: 5%;
  width: 40%;
}

.section-2{
  /*margin-bottom: -10px;*/
  width: 55%;
}

video{
  width: 100%;
  border-radius: 30px;
}
.text-1{
  font-size: 40px;
  line-height: 43px;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
  color: #FFFFFF;
  font-weight: 700;
}

.text-2{
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #8599a6;
  margin-bottom: 24px;
  display: flex;
  align-content: center;
  align-items: center;
  padding-top: 2%;
}

.text-3{
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #8599a6;
  padding-top: 5%;
}

.btn-1{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 46px;
  padding: 8px 20px;
  border-radius: 10px;
  gap: 8px;
  background: #007aff;
  border: 1px solid #007aff;
  color: #ffffff;
  width: 160px;
}
.btn-2{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 46px;
  padding: 8px 20px;
  border-radius: 10px;
  gap: 8px;
  background: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  width: 160px;
}

.image{
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}


.button-group{
  display: flex;
  justify-content: left;
  gap: 10px;
}

.section-3-inner{
  display: flex;
  align-items: center;
  align-content: center;
  gap: 2px;
}
.section-3-text{
  color: #FFFFFF;
}

.section-3{
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  align-content: center;
}


@media (max-width: 990px) {

}

@media (max-width: 700px) {

  .section-alpha{
    height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
  }

  .section-alpha{
    display: block;
  }

  .section-1{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .text-1{
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 8px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .text-2{
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    justify-content: center;
  }

  .btn-1{
    height: 40px;
    padding: 8px 16px;
    gap: 6px;
    width: 160px;
    font-size: 14px;
  }

  .btn-2{
    height: 40px;
    padding: 8px 16px;
    gap: 6px;
    width: 160px;
    font-size: 14px;
  }

  .button-group{
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .section-2{
    display: block;
    margin-left: auto;
    margin-right: 10%;
    margin-top: 5%;
    width: 100%;
  }

  .section-1{
    width: 100%;
  }

  video{
    width: 100%;
    border-radius: 30px;
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