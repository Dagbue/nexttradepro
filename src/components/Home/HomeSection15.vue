<template>
  <div class="alpha">
    <div class="section-alpha">

      <div class="section-1">
        <p class="text-1">&lt; 7.12 ms</p>
        <p class="text-2">Average order execution speed</p>
      </div>

      <div class="vl"></div>

      <div class="section-2">
        <p class="text-1">12+</p>
        <p class="text-2">Integrated liquidity providers</p>
      </div>

      <div class="vl"></div>

      <div class="section-3">
        <p class="text-1">> 12,000</p>
        <p class="text-2">Executed orders per second</p>
      </div>

      <div class="vl"></div>

      <div class="section-4">
        <p class="text-1">$545 k</p>
        <p class="text-2">Average trading volume per day</p>
      </div>


    </div>

    <div class="button-section">

      <div class="button-section-inner">
        <button class="btn">Setup Your trading Account</button>
        <button class="btn-2">Discover Our Platform</button>
      </div>

      <p class="button-section-text">Registration takes only 40 seconds!</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSection15"
}
</script>

<style scoped>
.alpha{
  margin-top: 2%;
  margin-bottom: 2%;
}
.section-alpha{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 60px;
}
.vl {
  border-left: 3px solid #ffffff;
  height: 100px;
}
.text-1{
  color: #FFFFFF;
  text-align: center;
  font-size: 1.7rem;
  line-height: 1.2;
  font-weight: 600;
}
.text-2{
  color: #8599a6;
  font-size: 0.95rem;
  line-height: 1.5;
  text-align: center;
}
.button-section-inner{
  display: flex;
  justify-content: center;
  margin-top: 3%;
  gap: 10px;
}
.btn{
  background-color: transparent;
  border: 1px solid #d0d0d0;
  color: #ffffff;
  padding: 1.3em 25px 1.2em 30px;
  border-radius: 12px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin: 0 2.5px;
  width: 250px;
  text-align: center;
  font-size: 15px;
}

.btn-2{
  background: #007aff;
  border: 1px solid #007aff;
  color: #ffffff;
  padding: 1.3em 25px 1.2em 30px;
  border-radius: 12px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin: 0 2.5px;
  width: 250px;
  text-align: center;
  font-size: 15px;
}

.button-section-text{
  color: #FFFFFF;
  text-align: center;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 600;
  margin-top: 2%;
}
</style>