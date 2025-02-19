<template>
  <div v-if="!$route.meta.hideNavigation" >

<!--    <div class="topmost-header">-->
<!--      <div class="topmost-header-1">-->

<!--&lt;!&ndash;        <p class="topmost-header-text">&ndash;&gt;-->
<!--&lt;!&ndash;          <i class='bx bxs-map' ></i>&ndash;&gt;-->
<!--&lt;!&ndash;          53 Bristol Road Bristol Road, Chippenham, England, SN15 1NT&ndash;&gt;-->
<!--&lt;!&ndash;        </p>&ndash;&gt;-->


<!--          <p class="topmost-header-text">-->
<!--            <i class='bx bx-mail-send' style='color:#ffffff'></i>-->
<!--            support@earlywealthtrd.com-->
<!--          </p>-->

<!--        <p class="topmost-header-text">-->
<!--          <i class='bx bxs-time-five' ></i>Mon – Sat: 9:00am–18:00pm.-->
<!--        </p>-->
<!--        &lt;!&ndash;        <p class="topmost-header-text">&ndash;&gt;-->
<!--        &lt;!&ndash;          <i class='bx bxl-whatsapp-square'></i> +1 (510) 256-9690&ndash;&gt;-->
<!--        &lt;!&ndash;        </p>&ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->

    <div class="separate">

        <div class="style-4">

          <img alt="company logo" src="@/assets/logo.png" class="logo" @click="home" />

          <ul v-show="!mobile" class="menu-4" >

            <li class="link">
              <div class="dropdown-navigation">
                <router-link  to="/about">About Us</router-link>
              </div>
            </li>

<!--            <li class="link">-->
<!--              <div class="dropdown-navigation">-->
<!--                <router-link  to="/loans">Loans</router-link>-->
<!--              </div>-->
<!--            </li>-->

            <li class="link">
              <div class="dropdown-navigation">
                <router-link  to="/testimonials">Testimonials</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link  to="/pricing">Pricing</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link  to="/contact">Contact Us</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link  to="/faq">F.A.Q</router-link>
              </div>
            </li>

          </ul>

          <div v-show="!mobile" class="button-part">
            <p class="auth" @click="login">Log In</p>
            <p class="auth2" @click="register">Open Account</p>
          </div>

        </div>

      <div class="mobile" v-show="mobile">
        <div>
          <ul class="dropdown-nav" v-show="mobileNav">
            <img alt="company logo" src="@/assets/logo.png" class="logo2" @click="home" />

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <router-link  to="/about">
                    <p class="title-content-para" @click="toggleMobileNav2">About Us</p>
                  </router-link>
                </div>
              </div>


            </label>

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <router-link  to="/testimonials">
                  <p class="title-content-para" @click="toggleMobileNav2">Testimonials</p>
                  </router-link>
                </div>
              </div>


            </label>

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <router-link  to="/pricing">
                  <p class="title-content-para" @click="toggleMobileNav2">Pricing</p>
                  </router-link>
                </div>
              </div>

            </label>

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <router-link  to="/contact">
                  <p class="title-content-para" @click="toggleMobileNav2">Contact Us</p>
                  </router-link>
                </div>
              </div>

            </label>

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <router-link  to="/faq">
                    <p class="title-content-para" @click="toggleMobileNav2">F.A.Q</p>
                  </router-link>
                </div>
              </div>

            </label>

            <button class="mobile-auth" @click="login">Log In</button>
            <br/>
            <button class="mobile-auth" @click="register">Open Account</button>


          </ul>

        </div>
        <div class="icon">
          <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "NavigationView",
  data()  {
    return {
      value1: false,
      mobile: false,
      mobileNav: false,
      windowWidth: false,
      showDropdown: false,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    home(){
      this.$router.push("/");
      window.scrollTo(0, 0);
      this.toggleMobileNav2()
    },
    login(){
      this.$router.push("/login");
      window.scrollTo(0, 0);
      this.toggleMobileNav2()
    },
    register(){
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleMobileNav2(){
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 990){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  }
}
</script>

<style scoped>
.button-part{
  display: flex;
}
.bx-bell{
  color: #191C1F;
  font-size: 30px;
}

.bx-menu{
  font-size: 30px;
  cursor: pointer;
  transition: .8s ease all;
  color: #ffffff;
}
.icon-active{
  transform: rotate(180deg);
}

.logo {
  width: 17%;
  margin-top: 1%;
  margin-bottom: 0.5%;
}

.style-4 {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 6px;
}

.link {
  display: inline-block;
  list-style: outside none none;
  /*margin: 0 0.8em;*/
  overflow: hidden;
  font-weight: bold;
  font-size: 15px;
  align-items: center;
  align-content: center;
}


.menu-4{
  display: flex;
  align-content: center;
  align-items: center;
  gap: 5px;
}

.mobile-auth{
  background: #007aff;
  border: 1px solid #007aff;
  color: #ffffff;
  padding: 0.7em 30px 0.7em 30px;
  border-radius: 12px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  /*margin: 0 2.5px;*/
  width: 170px;
  text-align: center;
  font-size: 14px;
}



.auth{
  background-color: transparent;
  border: 1px solid #d0d0d0;
  color: #ffffff;
  padding: 0.6em 25px 0.5em 30px;
  border-radius: 12px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin: 0 2.5px;
  width: 100px;
  text-align: center;
  font-size: 13px;
}


.auth2{
  background: #007aff;
  border: 1px solid #007aff;
  color: #ffffff;
  padding: 0.6em 30px 0.5em 30px;
  border-radius: 12px;
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



.topmost-header {
  /*background-color: #143159;*/
  padding-top: 10px;
  padding-bottom: 10.5px;
  color: #FFFFFF;
  /*display: flex;*/
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  /*background-color: #070e20;*/
  background-color: #0a1538;
}

.topmost-header-1 {
  display: flex;
  justify-content: right;
}

.topmost-header-text {
  font-size: 15px;
  padding-right: 28px;
  display: flex;
  align-items: center;
  align-content: center;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  font-weight: 900;
}
.topmost-header-text:hover {
  text-decoration: underline;
}



i{
  padding-right: 4px;
  font-size: 14px;
}

.dropdown-nav{
  display: flex;
  align-items: center;
  align-content: center;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  max-width: 240px;
  height: 100%;
  background-color: hsla(0, 0%, 4%, 1);
  font-size: 20px;
}

.logo2{
  width: 40%;
  margin-top: 20px;
  margin-bottom: 10px;
}

.dropdown-nav li {
  overflow: hidden;
  list-style: none;
  height: 100%;
  color: #ffffff;
}

.dropdown-nav * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.dropdown-nav a {
  padding: 0.3em 0;
  color: #ffffff;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
}

.dropdown-nav a:before,
.dropdown-nav a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.dropdown-nav a:before {
  bottom: 100%;
  display: block;
  height: 3px;
  width: 100%;
  content: "";
  /*background-color: #D23535;*/
}

.dropdown-nav a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #ffffff;
  white-space: nowrap;
}



hr {
  color: white;
  width: 100%;
  background-color: white;
  border: 1px solid white;
  margin-top: 95px;
}

.fg--search input {
  width: 100%;
  padding: 9px;
  display: block;
  background: #FFFFFF;
  border: 1px solid #E9F0FFFF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 7px;
}

.fg--search button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  margin-top: 3.5px;
}



ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

a {
  display: block;
  color: #ffffff;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}



.dropdown-navigation {
  display: inline-block;
  color: #ffffff;
}



.dropdown-navigation:hover .dropdown-content-2 {
  display: block;
}
.dropdown-navigation-2:hover .dropdown-content-2 {
  display: block;
}



.accordion-wrapper {
  display: block;
  /*box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);*/
  /*max-width: 500px;*/
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 12px;
}

.accordion + .title {
  user-select: none;
  cursor: pointer;
  display: flex;
  align-content: center;
  align-items: center;
  /*justify-content: space-between;*/
  padding: 10px 20px;
  /*background: #1565C0;*/
  /*border: 1px solid #EAECF0;*/
  /*padding-top: 10px;*/
  /*padding-left: 7.5px;*/
  /*padding-bottom: 9px;*/
  border-radius: 5px;
  /*background-color: #FFFFFF;*/
}

.accordion ~ .title strong {
  line-height: 24px;
}

.accordion ~ .title .side-icon {
  display: block;
  padding-top: 3px;
}

.accordion:checked ~ .title .side-icon {
  display: none;
}

.accordion ~ .title .down-icon {
  display: none;
  padding-top: 3px;
}

.accordion:checked ~ .title .down-icon {
  display: block;
}

.accordion ~ .content {
  display: none;
  padding: 2px;
  cursor: pointer;
  /*background-color: #FFFFFF;*/
  /*border: 1px solid #EAECF0;*/
  border-radius: 5px;
}

.accordion:checked ~ .content {
  display: block;
}


.content-inner p{
  padding-left: 2%;
  color: #191C1F;
}

.title-content{
  display: flex;
  align-content: center;
  align-items: center;
}



.title-content-para{
  padding-left: 5px;
  padding-right: 8px;
  font-size: 17px;
  color: #ffffff;
}



@media (min-width: 1286px) {

}

@media (max-width: 990px) {
  .style-4 {
    display: flex;
    justify-content: space-between;
  }
  .logo {
    width: 20%;
    padding-left: unset;
    margin-left: 10px;
  }
  .separate{
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
}

@media (max-width: 861px) {
  .topmost-header {
    display: none;
  }
}

@media (max-width: 600px) {
  .bx-menu{
    font-size: 35px;
  }


  .dropdown-nav{
    padding-right: unset;
    max-width: 220px;
    font-size: 12px;
  }

  .dropdown-nav li {
    margin-top: 8%;
  }

  hr {
    margin-top: 95%;
  }

  .logo {
    width: 40%;
    padding-left: unset;
    margin-left: 10px;
  }
}

</style>