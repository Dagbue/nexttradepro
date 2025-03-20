<template>
  <div class="alpha" >
    <form class="logoIn" @submit.prevent="signIn" >
      <div class="wrapper">
        <div class="headline">
          <router-link to="/">
          <img src="@/assets/logo.png" alt="logo" class="company-logo">
          </router-link>
          <h2>
            Sign In With Your <span class="header-span">TopShares <br/> Pro</span> Account
          </h2>
        </div>

        <div class="form">
          <div class="logoIn">
            <div class="form-group">
              <input type="email" placeholder="Email" v-model="model.email"  name="email"   required/>
            </div>
<!--            <div class="form-group">-->
<!--              <input type="password" placeholder="Password"  name="password" v-model="password" required />-->
<!--            </div>-->

            <div class="has-addons">
              <input v-if="showPassword2" v-model="model.password"  required="required" type="text"  class="input-form-1 password"   placeholder="Password"   />
              <input v-else type="password" v-model="model.password"   required="required"  class="input-form-1 password"   placeholder="Password"   >
              <div class="space" @click="toggleShow2">
                <i class="fas" :class="{ 'fa-eye-slash': showPassword2, 'fa-eye': !showPassword2 }" ></i>
              </div>
            </div>

            <div class="form-group-2">
              <div class="law-seprate">
                <input
                    type="checkbox"
                    placeholder="Remember-Me"
                    id="remember-me"
                    class="checkbox"
                />
                <label for="remember-me" class="checkbox-text">Remember me</label>
              </div>

              <a  class="forgot-password" @click="onPostClick2" >Forgot Password</a>
            </div>

<!--            <button  class="btn btn-white btn-animated" >Sign In</button>-->

            <base-button
                style="
  background: #007aff;
  border: 1px solid #007aff;
  color: white;
"
                :loading="loading"
            >Sign In</base-button>

            <div class="separator">
              <div class="line"></div>
              <h2>OR</h2>
              <div class="line"></div>
            </div>

            <div class="create-acc">
              <p class="create-text">Don’t have an account?<a @click="onPostClick" class="create-link">Sign up here</a>
              </p>
            </div>

          </div>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import StoreUtils from "@/utility/StoreUtils";
import AuthenticationRequest from "@/model/request/AuthenticationRequest";
import {mapState} from "vuex";

export default {
  name: 'LoginForm',
  components: {BaseButton},

  data() {
    return {
      model: new AuthenticationRequest().login,
      showPassword2: false,
    };
  },
  computed:{
    ...mapState({
      loading: state => state.auth.loading,
      auth: state => state.auth,
    }),
  },
  methods: {
    async signIn() {
      await StoreUtils.dispatch(StoreUtils.actions.auth.login, this.model)
      // await this.$router.push("/over-view")
    },

    onPostClick() {
      this.$router.push("/register");
    },
    onPostClick2() {
      this.$router.push("/forgot-password");
    },
    onPostClick3() {
      this.$router.push("/over-view");
    },
    toggleShow2() {
      this.showPassword2 = !this.showPassword2;
    },
  },

}
</script>

<style scoped>
form {
  margin: 0 auto;
  max-width: 35rem;
  /*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);*/
  /*background-color: #232323;*/
  margin-top: 3%;
  border-radius: 8px;
}

.alpha{

}

.company-logo{
  width: 55%;
  margin-top: 8%;
  margin-bottom: 2%;
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
  color: #007aff;
  font-size: 25px;
}

.wrapper {
  max-width: 700px;
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
  font-size: 23px;
  color: #ffffff;
}

.wrapper .form {
  max-width: 400px;
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
  /*border: 1px solid #e4e8ee;*/
  box-shadow: none;
  width: 100%;
}

.wrapper .form-group input:focus {
  outline: none;
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
  padding: 12px 29px;
  border: none;
  text-align: center;
  border-radius: 5px;
}

.btn:link,
.btn:visited {
  text-decoration: none;
  padding: 10px 20px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
}
.btn:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background-color: #D23535;
  border: 1px solid #D23535;
  transition: 4ms ease-in;
}

.btn-white {
  background-color: #CD0511;
  border: 1px solid #CD0511;
  color: white;
  font-size: 15px;
}

.form-group-2 {
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
}

.checkbox-text {
  padding-left: 8px;
  font-size: 16px;
  color: #ffffff;
}

.forgot-password {
  /*padding-left: 26%;*/
  text-decoration: none;
  color: #ffffff;
  font-size: 15px;
  float: right;
}

.separator {
  display: flex;
  align-items: center;
  padding-top: 10px;
}

.separator .line {
  height: 1px;
  flex: 0.5;
  background-color: #ffffff;
}

.separator h2 {
  padding: 0 1rem;
  font-size: 12px;
  color: #ffffff;
}

.create-acc {
  padding-top: 30px;
  font-size: 17px;
  padding-bottom: 40px;
}
.create-text {
  font-size: 15px;
  color: #ffffff;
}
.create-link {
  padding-left: 5px;
  text-decoration: underline;
  color: #007aff;
}


.has-addons{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 5%;
}
button{
  background-color: transparent;
}
.fas{
  font-size: 13px;
  margin-top: 10%;
}
.space{
  padding-top: 13px;
  padding-bottom: 13px;
  padding-right: 10px;
  border: 1px solid #d0d5dd;
  border-left-style: none;
  border-radius: 0 8px 8px 0;
  font-size: 1rem;
  background-color: #FFFFFF;
}
.input-form-1{
  order: 1;
  width: 100%;
  padding: 13px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
}
input {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: var(--black-color);
  letter-spacing: 0.5px;
}
input:focus {
  border: 1px solid #24405A;
}
input::placeholder {
  color: var(--black-color);
}
.input-form-1.password {
  border-right-style: none;
  border-radius: 8px 0 0 8px;
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
    font-size: 22px;
  }
  .checkbox-text {
    padding-left: 10px;
  }
  .forgot-password {
    padding-left: 20px;
  }
  .company-logo{
    width: 60%;
    margin-top: unset;
  }
}

</style>