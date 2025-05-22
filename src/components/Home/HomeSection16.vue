<template>
  <div class="alpha">

    <p class="header">Start trading with TopShares Pro.</p>

        <p class="sub-header">Join TopShares Pro and discover why millions have chosen our award-winning platform to start
          investing in stocks</p>

    <div class="section-alpha">

      <div class="section-1">
        <img class="image" src="data:image/png;base64,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" alt="1">
        <p class="text-1">Open an account</p>
        <p class="text-2">Choose an account type and submit your application</p>
      </div>

      <div class="section-1">
        <img class="image" src="data:image/png;base64,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" alt="2">
        <p class="text-1">Verify and deposit</p>
        <p class="text-2">Once you’ve verified and funded your account, you’re ready to go</p>
      </div>

      <div class="section-1">
        <img class="image" src="data:image/png;base64,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" alt="3">
        <p class="text-1">Take your pick</p>
        <p class="text-2">Choose from 6,000+ leading stocks on 20 exchanges</p>
      </div>

    </div>

    <div class="button-group">
      <div class="btn-1" @click="onPostClick">
        Open Your Account
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "HomeSection16",
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

.alpha{
  margin-top: 5%;
  margin-bottom: 5%;
  padding-bottom: 5%;
  padding-top: 5%;
  background-color: hsla(0, 0%, 4%, 1);
}


.header{
  text-align: center;
  font-size: 28px;
  font-family: 'BR-Firma-Bold', sans-serif;
  margin-bottom: 1%;
  color: #FFFFFF;
}

.sub-header{
  text-align: center;
  font-size: 18px;
  width: 60%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 2%;
  color: #8599a6;
}

.section-1{
  max-width: 350px;
  min-width: min(100% - 40px, 300px);
  width: 100%;
  border-radius: 20px;
  margin: 0;
  overflow: hidden;
  padding: 16px 24px 32px;
}

.text-1{
  font-size: 22px;
  font-family: 'BR-Firma-Bold', sans-serif;
  line-height: 24px;
  margin-bottom: 15px;
  margin-top: 0;
  text-align: center;
  color: #FFFFFF;
}

.text-2{
  color: #8599a6;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
}

.section-alpha{
  display: flex;
  justify-content: center;
  gap: 25px;
}


.image{
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.btn-1{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 52px;
  padding: 15px 20px;
  border-radius: 12px;
  gap: 8px;
  background: #007aff;
  border: 1px solid #007aff;
  width: 220px;
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  color: #FFFFFF;
  /*margin-bottom: 30px;*/
}

.btn-1:hover {
  background-color: #0063cc;
}

.button-group{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: 2%;
}

/* -------- Responsive styles -------- */

/* Medium screens (tablets and below) */
@media (max-width: 768px) {
  .header{
    font-size: 22px;
  }

  .sub-header{
    font-size: 16px;
    width: 95%;
  }

  .section-alpha{
    display: block;
  }

  .section-1{
    width: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .alpha{
    padding-bottom: 10%;
    padding-top: 10%;
  }

  .btn-1{
    width: 300px;
  }
}

/* Small screens (phones) */
@media (max-width: 480px) {

}

</style>