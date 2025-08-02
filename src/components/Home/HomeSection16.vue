<template>
  <div class="alpha">

    <p class="header">Start trading with TopShares Pro.</p>

        <p class="sub-header">Join TopShares Pro and discover why millions have chosen our award-winning platform to start
          investing in stocks</p>

    <div class="section-alpha">

      <div class="section-1">
        <div class="img-bg">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="image"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
        </div>
          <p class="text-1">Open an account</p>
        <p class="text-2">Choose an account type and submit your application</p>
      </div>

      <div class="section-1">
        <div class="img-bg">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="image"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
        </div>
          <p class="text-1">Verify and deposit</p>
        <p class="text-2">Once you’ve verified and funded your account, you’re ready to go</p>
      </div>

      <div class="section-1">
        <div class="img-bg">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="image"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
        </div>
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
  margin-bottom: 5%;
  padding-bottom: 5%;
  padding-top: 5%;
  background-color: #111827;
}


.header{
  text-align: center;
  font-size: 28px;
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
  display: flex; /* Add this */
  justify-content: center; /* Add this */
  flex-direction: column; /* Add this to maintain vertical stacking */
  align-items: center; /* Add this for horizontal centering of all content */
}

.text-1{
  font-size: 21px;

  line-height: 22px;
  margin-bottom: 13px;
  margin-top: 0;
  text-align: center;
  color: #FFFFFF;
}

.text-2{
  color: #8599a6;
  font-size: 16px;
  line-height: 18px;
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
  margin: auto;
  align-items: center;
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
  background: #2563eb;
  width: 220px;
  color: #FFFFFF;
}

.btn-1:hover {
  background-color: #1d4ed8;
}

.button-group{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: 2%;
}


.img-bg{
  background-color: #3b82f6;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
}

svg{
  color: #FFFFFF;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .section-1{

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