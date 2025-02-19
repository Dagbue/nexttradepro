<template>
  <div class="alpha">
    <div class="section-alpha-1">
      <p class="section-header-1">New <span style="color: #0bccbf">User</span>  Zone</p>
      <p class="section-header">Quickly embark on your trading journey, complete tasks, and claim your bonus</p>
    </div>

    <div class="section-alpha-2">

      <img src="@/assets/Web 1.png" alt="icon" class="section-image" />

      <div class="content">

        <div class="content-section">

          <div class="content-section-1">
            <p class="text-1">Step 1. Create An Account</p>
            <p class="text-2">Taking the first step on your journey into cryptocurrency</p>
          </div>

          <div class="content-button">
            <button class="btn">Register</button>
          </div>

        </div>

        <div class="content-section">

          <div class="content-section-1">
            <p class="text-1">Step 2. Deposit</p>
            <p class="text-2">Fund your account to unlock the full potential of the marketplace.</p>
          </div>

          <div class="content-button">
            <button class="btn">Deposit</button>
          </div>

        </div>

        <div class="content-section">

          <div class="content-section-1">
            <p class="text-1">Step 3. Start Trading</p>
            <p class="text-2">Exclusive offer for new users</p>
          </div>

          <div class="content-button">
            <button class="btn">Trade</button>
          </div>

        </div>


      </div>

    </div>

  </div>
</template>


<script>
export default {
  name: "HomeSection5"
}
</script>

<style scoped>
.alpha{
  height: 100%;
  padding-bottom: 5%;
  padding-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
}

.section-header{
  font-size: 17px;
  text-align: left;
  color: #8599a6;
  font-weight: 300;
}

.section-header-1{
  font-size: 40px;
  color: #ffffff;
  font-weight: bold;
  text-align: left;
  padding-bottom: 1%;
}

.section-alpha-1{
  display: block;
  text-align: left;
  margin-bottom: 2%;
}

.section-alpha-2{
  display: flex;
  align-content: center;
  align-items: center;
}

.section-image{
  width: 46%;
}

.content{
  padding-left: 20px;
}

.content-section{
  width: 640px;
  padding: 24px 48px;
  border-radius: 16px;
  border: 1.5px solid #233442;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
  transition: background-color .5s, color .5s;
  margin-bottom: 5%;
}

.text-1{
  font-size: 20px;
  padding-bottom: 15px;
}

.text-2{
  font-size: 17px;
  padding-bottom: 15px;
}

.btn{
  float: right;
  background: #0bccbf;
  border: 1px solid #0bccbf;
  color: #000;
  padding: 0.6em 30px 0.5em 30px;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin: 0 2.5px;
  width: 165px;
  text-align: center;
  font-size: 13px;
}
.content-button{
  padding-bottom: 5%;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {

  .section-header-1{
    font-size: 35px;
    padding-bottom: unset;
  }

  .section-alpha-2{
    display: block;
  }

  .content{
    padding-left: unset;
  }

  .section-image{
    width: 100%;
  }

}

@media (max-width: 500px) {
  .text-1{
    font-size: 20px;
    line-height: 30px;
  }

  .text-2{
    width: 85%;
  }

  .content-section{
    width: 400px;
    padding: 24px 48px;
  }
}
</style>