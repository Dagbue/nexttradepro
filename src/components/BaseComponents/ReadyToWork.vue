<template>
  <div class="alpha-2">
    <div class="section-1">
      <p class="last-text">Ready to work with us</p>
      <div class="seperate mobile">
        <p class="download-sub"><a
            style="color: #ffffff;"
            href="mailto:support@topsharespro.com">support@topsharespro.com</a></p>
      </div>
      <div class="seperate mobile">
        <p class="download-sub">128 City Road, London, United Kingdom, EC1V 2NX</p>
      </div>

      <div class="button-seprate" @click="onPostClick">
        <button class="button">
          Contact Us
          <img src="@/assets/arrow-right-line.svg" alt="btn-image" class="btn-image" />
        </button>

<!--        <button class="button">-->
<!--          Contact Us-->
<!--          <img src="@/assets/arrow-right-line.svg" alt="btn-image" class="btn-image" />-->
<!--        </button>-->
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ReadyToWork",
  methods: {
    onPostClick() {
      this.$router.push("/contact");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
.alpha-2{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  height: 270px;
  border-radius: 12px;
  margin-top: 4%;
  margin-bottom: 5%;
  background: url("@/assets/graph_bg.svg") repeat-x;
  -webkit-background-size: contain;
  background-size: cover;
}


.section-1{
  text-align: center;
}

.last-text{
  color: #ffffff;
  font-size: 30px;
  line-height: 44px;
  padding-top: 5%;
  padding-bottom: 0.5%;
}

.button {
  background: #007aff;
  border: 1px solid #007aff;
  color: #ffffff;
  cursor: pointer;
  padding: 12px 40px;
  text-align: center;
  border-radius: 12px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 2.5px;
  font-size: 15px;
}

.button:hover{
  color: #FFFFFF;
  background-color: #0063cc;
  border: 1px solid #0063cc;
}

button{
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}


.btn-image{
  width: 15%;
}


.seperate{
  display: flex;
  align-content: center;
  align-items: center;
}

i{
  padding-top: 1.5%;
  font-size: 25px;
  color: #ffffff;
}

.download-sub{
  color: #ffffff;
  font-size:18px;
  line-height: 28px;
  width: 75%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 10px;
}


@media (max-width: 700px){
  .alpha-2{
    width: 650px;
    margin-top: 5%;
  }


  .last-text{
    font-size: 24px;
    line-height: 22px;
    padding-top: 12%;
  }

  .download-sub{
    color: #ffffff;
    font-size: 15px;
    line-height: 26px;
    width: 85%;
  }

}

@media (max-width: 500px){

  .alpha-2{
    width: 95%;
    margin-top: 5%;
    height: 250px;
  }




}
</style>