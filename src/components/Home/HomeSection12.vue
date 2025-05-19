<template>
  <div class="alpha">
    <div class="section-alpha">
      <div class="section-1">
        <p class="section-1-text-1">Trading products</p>
        <p class="section-1-text-2">Select from six diverse asset classes and gain access to <br/> over 180 trading instruments.</p>
      </div>

      <div class="section-2">
        <div class="section-2-inner">
          <i class="fas fa-euro-sign"></i>
          <p>Futures</p>
        </div>

        <div class="section-2-inner">
          <i class="fab fa-btc"></i>
          <p>Crypto</p>
        </div>

        <div class="section-2-inner">
          <i class="fas fa-chart-area"></i>
          <p>Indexes</p>
        </div>

        <div class="section-2-inner">
          <i class="fas fa-file-contract"></i>
          <p>Stocks</p>
        </div>

        <div class="section-2-inner">
          <i class="fas fa-tint"></i>
          <p>Energy</p>
        </div>

        <div class="section-2-inner">
          <i class="fas fa-cube"></i>
          <p>Commodities</p>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "HomeSection12"
}
</script>

<style scoped>
.alpha{
  background-color: hsla(0, 0%, 4%, .8);
  margin-top: 3%;
}
.section-alpha{
  display: flex;
  align-content: center;
  align-items: center;
  padding-top: 3.5%;
  padding-bottom: 3%;
}
.section-1{
  width: 30%;
  margin-left: 5%;
  border-right: 1px solid #8599a6;
}
.section-2{
  width: 70%;
  margin-left: 1%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
}
.section-1-text-1{
  text-align: left;
  color: #FFFFFF;
  padding-top: 3%;
  padding-bottom: 1%;
  font-size: 35px;
  font-weight: 700;
}
.section-1-text-2{
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.015em;
  color: #8599a6;
  margin-bottom: 24px;
  display: flex;
  align-content: center;
  align-items: center;
}

.fas {
  display: flex;
  justify-content: center;
  color: #007aff;
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 30%;
  font-size: 25px;
}

.fab {
  display: flex;
  justify-content: center;
  color: #007aff;
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 30%;
  font-size: 25px;
}

.section-2-inner p {
  padding-top: 7px;
  color: #8599a6;
  font-size: 14px;
  text-align: center;
}

</style>