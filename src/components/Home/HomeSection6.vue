<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
        <div class="text-1">Join our global <span style="color: #0bccbf;">trading</span> community
          <!--          <span class="items-switch">-->
          <!--            <span class="forex">Forex</span>-->
          <!--            <span class="crypto">Crypto</span>-->
          <!--            <span class="stocks">Stocks</span>-->
          <!--            <span class="bond">Bond</span>-->
          <!--          </span>-->
          <!--          <span class="items-switch">-->
          <!--            <span v-for="(item, index) in items" :key="item.name" :class="{active: currentIndex === index}" :style="{ color: item.color }">-->
          <!--              {{ item.name }}-->
          <!--            </span>-->
          <!--          </span>-->
        </div>

        <p class="text-2">Register and join our community with millions of traders from all around the world</p>


        <div class="button-group">
          <div class="btn-1" @click="onPostClick">
            Get Started
            <!--            <img src="@/assets/arrow-right-line.svg" alt="" class="" />-->
          </div>
<!--          <div class="btn-1" @click="onPostClick2">-->
<!--            LogIn-->
<!--            &lt;!&ndash;            <img src="@/assets/arrow-right-line.svg" alt="" class="" />&ndash;&gt;-->
<!--          </div>-->
        </div>
      </div>

      <div class="section-2">
        <img src="https://primexbt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fusers.3b05a0cb.png&w=3840&q=75" alt="" class="image" />
        <!--        <video autoplay="" muted="" loop="">-->
        <!--          <source src="https://margex.com/videos/header_mobile_video.mp4" type="video/mp4">-->
        <!--        </video>-->
      </div>


    </div>


  </div>
</template>

<script>
export default {
  name: "HomeSection6",
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
  }
}
</script>

<style scoped>
.section-alpha{
padding-bottom: 5%;
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
  margin-left: 6%;
}

.section-2{
  /*margin-bottom: -10px;*/
  margin-right: 4%;
}

video{
  width: 100%;
  border-radius: 30px;
}
.text-1{
  font-size: 46px;
  line-height: 50px;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
  color: #FFFFFF;
}

.text-2{
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #8599a6;
  margin-bottom: 24px;
}

.btn-1{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 46px;
  padding: 8px 20px;
  border-radius: 5px;
  gap: 8px;
  background: #0bccbf;
  border: 1px solid #0bccbf;
  color: #000;
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

.text-3{
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  color: #FFFFFF;
}

.text-4{
  margin-top: 2px;
  line-height: 19px;
  font-size: 16px;
  font-weight: 500;
  color: #8599a6;
}

.section-3{
  display: flex;
  justify-content: space-around;
  margin-top: 2%;
  margin-bottom: 2%;
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
    font-size: 38px;
    line-height: 45px;
    margin-bottom: 8px;
    /*width: 90%;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    text-align: center;
  }

  .text-2{
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }

  .btn-1{
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
    margin-right: auto;
    margin-top: 5%;
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