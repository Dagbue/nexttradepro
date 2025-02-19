<template>
  <div class="alpha" >
    <form class="logoIn" @submit.prevent="next">
      <div class="wrapper">
        <div class="headline">
<!--          <router-link to="/">-->
<!--            <img src="@/assets/companylogo.svg" alt="logo" class="company-logo">-->
<!--          </router-link>-->
          <h2>
            Admin Login
          </h2>
        </div>
        <div class="form">
          <div class="logoIn">
            <div class="form-group">
              <input type="email" v-model="email" placeholder="Email"  name="email" required />
            </div>
            <div class="form-group">
              <input type="password" v-model="password" placeholder="Password"  name="password" required />
            </div>

<!--            <div class="form-group-2">-->
<!--              <input-->
<!--                  type="checkbox"-->
<!--                  placeholder="Remember-Me"-->
<!--                  id="remember-me"-->
<!--                  class="checkbox"-->
<!--              />-->
<!--              <label for="remember-me" class="checkbox-text">Remember me</label>-->
<!--&lt;!&ndash;              <a  class="forgot-password" @click="onPostClick2" >Forgot Password</a>&ndash;&gt;-->
<!--            </div>-->

            <button  class="btn btn-white btn-animated" >Sign In</button>
                        <div style="color: #FFFFFF;" v-if="error">{{ error }}</div>

<!--            <div class="separator">-->
<!--              <div class="line"></div>-->
<!--              <h2>OR</h2>-->
<!--              <div class="line"></div>-->
<!--            </div>-->

<!--            <div class="create-acc">-->
<!--              <p class="create-text">Don’t have an account?<a @click="onPostClick" class="create-link">Sign up here</a>-->
<!--              </p>-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AuthenticationRequest from "@/model/request/AuthenticationRequest";
import {mapState} from "vuex";
import StoreUtils from "@/utility/StoreUtils";

export default {
  name: "DashBoardAdminLoginView",
  data() {
    return {
      model: new AuthenticationRequest().login,
      showPassword2: false,
      error: "",
      email: "",
      password: "",
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
      this.window.scrollTo(0, 0);
    },
    onPostClick2() {
      this.$router.push("/forgot-password");
      this.window.scrollTo(0, 0);
    },
    // next() {
    //   this.$router.push("/dashBoard-side-bar-admin");
    // },

    next() {
      const validEmail = "admin@earlywealthtrading.com";
      const validPassword = "12Prince$";

      if (this.email === validEmail && this.password === validPassword) {
        this.$router.push("/dashBoard-side-bar-admin");
      } else {
        this.error = "Invalid email or password. Please try again.";
      }
    }
  },
}
</script>

<style scoped>
form {
  margin: 0 auto;
  max-width: 40rem;
  padding: 2rem;
  margin-top: 8%;
}

.company-logo{
  width: 25%;
  margin-top: 10%;
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
  color: #0f171c;
}

.wrapper {
  max-width: 768px;
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
  font-size: 25px;
  padding-top: 3%;
  padding-bottom: 1%;
  color: #FFFFFF;
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
  border-radius: 12px;
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
  transition: 4ms ease-in;
}
.btn:active {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: 4ms ease-in;
}
.btn-white {
  background: #007aff;
  border: 1px solid #007aff;
  color: #ffffff;
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
  color: #0f171c;
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
  color: #0f171c;
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
    margin: 1rem;
    max-width: 40rem;
    border-radius: 12px;
    padding: 1rem;
    background-color: #ffffff;
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