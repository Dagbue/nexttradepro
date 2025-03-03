<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
        <img src="https://www.okx.com/cdn/assets/imgs/242/1249729C549233AA.png?x-oss-process=image/format,webp/ignore-error,1" alt="image" class="image" />
      </div>

      <div class="section-2">
        <p class="header">How to Use Our Platform</p>
        <p class="sub-header">Initiate the process of automated trade replication on our platform by following these
          straightforward steps. Begin by exploring and choosing a proficient trader, considering factors such as
          performance metrics, risk tolerance, and trading strategies. Subsequently, establish a connection between
          your account and theirs to commence replicating their trades seamlessly.</p>

        <div class="steps">

          <div class="steps-1">
            <div class="inner">
              <img src="@/assets/arrow.svg" alt="arrow" class="image-2" />
              <p>Create Account</p>
            </div>
            <div class="inner">
              <img src="@/assets/arrow.svg" alt="arrow" class="image-2" />
              <p>Verify your Account</p>
            </div>
          </div>

          <div class="steps-1">
            <div class="inner">
              <img src="@/assets/arrow.svg" alt="arrow" class="image-2" />
              <p>Choose an Investment Plan</p>
            </div>
            <div class="inner">
              <img src="@/assets/arrow.svg" alt="arrow" class="image-2" />
              <p>Deposit into your Account</p>
            </div>
          </div>

        </div>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Section4"
}
</script>

<style scoped>
.alpha{
  /*border-bottom: 1px solid #c9c9c9;*/
  /*padding-top: 4%;*/
  /*padding-bottom: 4%;*/

  padding-top: 5%;
  padding-bottom: 2%;
  margin-top: 5%;
  /*margin-bottom: 5%;*/
}
.section-1{
  width: 50%;
}
.section-2{
  width: 50%;
}
.section-alpha{
  display: flex;
  align-content: center;
  align-items: center;
}
.image{
  width: 50%;
  height: 50%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.steps{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 4%;
}
.steps-1{
  display: flex;
  align-items: center;
  align-content: center;
  margin-bottom: 3%;
}
.inner{
  display: flex;
  align-items: center;
  align-content: center;
  background-color: hsla(0, 0%, 4%, .9);
  border: 1px solid hsla(0, 0%, 4%, .9);
  border-radius: 5px;
  padding: 15px 40px;
  margin-right: 2%;
  width: 40%;
}

.inner p{
  padding-left: 10px;
  font-size: 14px;
  color: #ffffff;
}

.header{
  font-size: 24px;
  font-weight: 900;
  padding-bottom: 10px;
  color: #ffffff;
}
.sub-header{
  font-size: 17px;
  color: #ffffff;
  width: 85%;
  line-height: 1.5;
}

@media (max-width: 900px) {

}

@media (max-width: 700px) {
  .section-alpha{
    display: block;
  }
  .section-1{
    width: 100%;
  }
  .section-2{
    width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .image{
    width: 80%;
    height: 80%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .header{
    padding-bottom: 10px;
    padding-top: 10px;
    text-align: center;
  }
  .sub-header{
    width: 90%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .steps-1{
    justify-content: center;
  }
}

@media (max-width: 500px) {
  .inner p{
    padding-left: 5px;
    font-size: 12px;
  }

  .inner{
    padding: 15px 20px;
    margin-right: 2%;
    width: 45%;
  }
}
</style>