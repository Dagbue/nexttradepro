<template>
  <div class="alpha">
    <div class="content-alpha">

      <p class="text-1">Why <span style="color: #007aff;">TopShares Pro?</span></p>

    </div>

    <div class="section-2">
      <div class="section-2-inner">
        <div class="part-1">
          <p class="text-2">Why choose us?</p>
          <p class="text-3">When you choose TopShares Pro, you join a global investment community and are given access to the
            financial tools you need</p>
        </div>
        <div class="part-2">
          <p class="text-4">Join Us Now</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "AboutHeroSection"
}
</script>

<style scoped>
.alpha{
  position: relative;
}

.content-alpha{
  text-align: center;
  background-color: hsla(0, 0%, 4%, .8);
  border: 1px solid hsla(0, 0%, 4%, .8);
  padding-top: 8%;
  padding-bottom: 8%;
}

.text-1{
  color: #FFFFFF;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 60px;
  line-height: 1;
  margin: 0;
}

.section-2{
  width: 900px;
  height: 230px;
  background-color: hsl(0, 0%, 8%);
  border: 1px solid hsl(0, 0%, 8%);
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 200px;
  left: 250px;
  border-radius: 10px;
  color: #FFFFFF;
}

.section-2-inner{
  display: flex;
  align-content: center;
  align-items: center;
  padding-top: 4%;
}

.part-1{
  width: 70%;
  padding: 10px 40px;
}

.part-2{
  width: 30%;
}

.text-2{
  font-size: 34px;
  padding-bottom: 2%;
}

.text-3{
  font-size: 19px;
  padding-bottom: 2%;
  line-height: 23px;
}

.text-4{
  background: #007aff;
  border: 1px solid #007aff;
  color: #ffffff;
  padding: 1em 30px 0.8em 30px;
  border-radius: 12px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin: 0 2.5px;
  width: 200px;
  text-align: center;
  font-size: 14px;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .alpha{
    padding-top: 10%;
    padding-bottom: 10%;
  }
  .text-1{
    font-size: 35px;
  }

  .section-2{
    width: 600px;
    height: 180px;
    top: 180px;
    left: 50px;
  }

  .text-2{
    font-size: 28px;
  }

  .text-3{
    font-size: 16px;
    line-height: 20px;
  }

  .text-4{
    width: 150px;
    font-size: 13px;
  }

}

@media (max-width: 500px) {
  .section-2{
    width: 420px;
    height: 100%;
    top: 130px;
    left: 15px;
  }

  .section-2-inner{
    display: block;
    padding-top: 2%;
  }

  .part-1{
    width: 100%;
    padding: 10px 40px;
  }

  .part-2{
    width: 100%;
  }

  .text-4{
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 250px;
  }

  .text-2{
    font-size: 25px;
    padding-bottom: 1%;
    text-align: center;
  }

  .text-3{
    font-size: 17px;
    padding-bottom: 1%;
    line-height: 20px;
  }
}


</style>