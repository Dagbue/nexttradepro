<template>
  <div class="alpha">
    <!--    <p class="section-header-1">There’s a time and a place for risk</p>-->
    <!--    <p class="section-header">Your funds and data are always secure. With Income And Assets Limited you’re protected-->
    <!--      by industry-leading protocols.</p>-->

    <div class="section-alpha">

      <div class="section-1">

        <div class="text-part">
          <p class="text-3">TopShares Pro</p>
          <p class="text-1">Access the world of trading <br/> with ease.</p>
          <p class="text-2">Strategically Build and Grow Your Next High-Performance Trading Portfolio with Confidence
            and Precision.</p>

          <!--          <div class="button-part">-->
          <!--            <button class="btn1" @click="onPostClick2">Login Account</button>-->
          <!--          </div>-->
        </div>


      </div>

      <div class="section-2">

        <img src="@/assets/pick.png" alt="image" class="image" />

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "AboutHeroSection",
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
    onPostClick2() {
      this.$router.push("/login");
    },
  },
}
</script>

<style scoped>
.alpha{
  background-color: hsla(0, 0%, 4%, .8);
  height: 600px;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

span{
  color: #3071EE;
}

.section-1{
  width: 50%;
}

.section-2{
  width: 50%;
}

.section-alpha{
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  padding-top: 3%;
}

.image{
  width: 55%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border-radius: 14px;
}

.text-part{
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.text-1{
  font-size: 40px;
  line-height: 1;
  white-space: pre-line;
  margin-bottom: 10px;
  font-family: 'BR-Firma-Bold', sans-serif;
  color: #FFFFFF;
}

.text-2{
  margin: 0;
  font-size: 18px;
  white-space: pre-line;
  line-height: 1.15;
  color: #8599a6;
}

.text-3{
  background: #007aff;
  border: 1px solid #007aff;
  display: inline-block;
  color: #FFFFFF;
  padding: 10px 40px 10px 40px;
  border-radius: 12px;
  margin-bottom: 2%;
}

.button-part{
  display: flex;
  gap: 20px;
  margin-top: 3%;
}
.btn1{
  background-color: #070e20;
  border: 1px solid #070e20;
  color: #ffffff;
  padding: 10px 30px;
  border-radius: 12px;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  font-size: 14px;
  width: 220px;
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
  }

  .text-1{
    font-size: 28px;
    line-height: 30px;
    margin-bottom: 13px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }

  .text-2{
    font-size: 16px;
    line-height: 1.3;
    display: block;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }

  .text-3{
    display: block;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }

  .image{
    width: 90%;
  }

  .button-part{
    justify-content: center;
  }
  .alpha{
    padding-top: 10%;
    padding-bottom: 10%;
    height: 100%;
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