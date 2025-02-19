<template>
  <div class="alpha">
    <form @submit.prevent="submitForm">
      <div class="wrapper">
        <div class="headline">
          <router-link to="/">
            <img src="@/assets/logo.png" alt="logo" class="company-logo">
          </router-link>
<!--          <h2>-->
<!--            <span class="header-span"> Global Trade Investment Limited </span>-->
<!--          </h2>-->
          <h2>Forgot Password?</h2>
          <p>Enter the email address associated with your account</p>
        </div>
        <div class="form" @submit.prevent>
          <div class="signup">
            <div class="form-group">
              <input type="email" placeholder="Enter Email" required="" />
            </div>
            <br/>
            <a @click="onPostClick" class="btn btn-white btn-animated">continue</a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'ForgotPasswordForm',
  // data() {
  //   return {
  //   };
  // },
  methods: {
    submitForm() {
      console.log("Enter Code: " + this.enterCode);
      this.enterCode = "";
    },

    onPostClick() {
      this.$router.push("/forgot-password-otp");
    },
  },
}
</script>

<style scoped>
form {
  margin: 0 auto;
  max-width: 40rem;
  padding: 3rem 0 5rem 0;
  /*background-color: #232323;*/
  margin-top: 5%;
}


.company-logo{
  width: 55%;
  margin-top: 5%;
  margin-bottom: 1.5%;
}

:root {
  --primary-color: #3525d3;
  --white-color: #fff;
  --black-color: #3c4a57;
  --light-gray: #e4e8ee;
}

.wrapper {
  position: relative;
  align-items: center;
  justify-content: center;
}

.header-span {
  color: #124DA8;
}

.wrapper {
  max-width: 800px;
  width: 100%;
  margin: auto;
}

.wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  z-index: -1;
}

.wrapper .headline {
  text-align: center;
  padding-bottom: 20px;
}


.wrapper .headline h2 {
  font-weight: 400;
  font-size: 22px;
  padding-top: 1%;
  padding-bottom: 1%;
  /*margin-top: 10%;*/
  color: #ffffff;
  font-family: 'BR-Firma-Bold', sans-serif;
}

p{
  color: #ffffff;
}

.wrapper .form {
  max-width: 350px;
  width: 100%;
  margin: auto;
}

.wrapper .form-group {
  margin-bottom: 15px;
}

.wrapper .form-group input {
  display: block;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 12px 16px;
  height: 48px;
  border-radius: 8px;
  color: var(--black-color);
  border: 1px solid #e4e8ee;
  box-shadow: none;
  width: 100%;
}

.wrapper .form-group input:focus {
  outline: none;
  border: 1px solid #24405A;
}

.wrapper .form-group input::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.btn,
.btn-white,
.btn-animated {
  width: 100%;
  margin: 15px 0 30px;
  line-height: 22px;
  padding: 12px 146px;
  border: none;
  text-align: center;
  border-radius: 5px;
}

.btn:link,
.btn:visited {
  text-decoration: none;
  padding: 10px 40px;
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
}
/*.btn:hover {*/
/*  background-color: #D23535;*/
/*  transition: 4ms ease-in;*/
/*}*/
/*.btn:active {*/
/*  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);*/
/*  transition: 4ms ease-in;*/
/*}*/
.btn-white {
  background: #007aff;
  border: 1px solid #007aff;
  color: white;
  font-size: 15px;
}

.form-group-2 {
  padding-top: 15px;
  padding-bottom: 15px;
}

.checkbox-text {
  padding-left: 8px;
  font-size: 15px;
}

.forgot-password {
  padding-left: 26%;
  text-decoration: none;
  color: #124DA8;
  font-size: 15px;
}

.separator {
  display: flex;
  align-items: center;
  padding-top: 10px;
}

.separator .line {
  height: 1px;
  flex: 0.5;
  background-color: #676767;
}

.separator h2 {
  padding: 0 1rem;
  font-size: 12px;
  color: #676767;
}

.create-acc {
  padding-top: 40px;
  font-size: 17px;
  padding-bottom: 40px;
}
.create-text {
  font-size: 15px;
}
.create-link {
  padding-left: 10px;
  text-decoration: none;
  color: #124DA8;
}

@media (max-width: 1030px) {
  .wrapper::before {
    left: -25%;
    min-height: 60vh;
    height: 500px;
  }
}
@media (max-width: 767px) {
  .wrapper {
    max-width: 550px;
  }
  .wrapper .headline h1 {
    font-size: 22px;
    line-height: 25px;
  }
}
@media (max-width: 990px) {
  .wrapper .headline h1  {
    font-size: 32px;
  }
  .wrapper .headline h2  {
    font-size: 28px;
  }
}
@media (max-width: 500px) {
  .wrapper {
    padding: 10px 25px 0;
  }
  form {
    max-width: 40rem;
    border-radius: 12px;
  }
  .wrapper .headline h1  {
    font-size: 25px;
  }
  .wrapper .headline h2  {
    font-size: 23px;
  }
  .checkbox-text {
    padding-left: 10px;
  }
  .forgot-password {
    padding-left: 20px;
  }
  .company-logo{
    width: 50%;
    margin-top: unset;
  }
}

</style>