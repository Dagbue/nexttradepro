<template>
  <div class="outer">

    <div class="sidebar" v-show="!mobile">

      <div class="logo">
        <img src="@/assets/logo.png" alt="logo" class="afo-logo" />
      </div>

      <ul class="nav-list" >

        <router-link to="/list-of-users">
          <li>
            <a class="hover">
              <img src="@/assets/dashboardlogo.svg" alt="logo" class="link-img" />
              <span class="links-name">List Of Users</span>
            </a>
          </li>
        </router-link>

        <router-link to="/deposit-requests">
          <li>
            <a class="hover">
              <img src="@/assets/send.svg" alt="logo" class="link-img" />
              <span class="links-name">Deposit Request</span>
            </a>
          </li>
        </router-link>

        <router-link to="/withdrawal-requests">
          <li>
            <a class="hover">
              <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
              <span class="links-name">Withdrawal Request</span>
            </a>
          </li>
        </router-link>

        <router-link to="/trade-request-admin">
          <li>
            <a class="hover">
              <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
              <span class="links-name">Trade Request</span>
            </a>
          </li>
        </router-link>

        <router-link to="/insert-clone-specialists">
          <li>
            <a class="hover">
              <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
              <span class="links-name">Add Experts</span>
            </a>
          </li>
        </router-link>

        <router-link to="/deploy-market-agent">
          <li>
            <a class="hover">
              <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
              <span class="links-name">Add Trading Bot</span>
            </a>
          </li>
        </router-link>

        <router-link to="/add-trade">
          <li>
            <a class="hover">
              <img src="@/assets/send.svg" alt="logo" class="link-img" />
              <span class="links-name">Add Trade</span>
            </a>
          </li>
        </router-link>

        <router-link to="/add-trading-pair">
          <li>
            <a class="hover">
              <img src="@/assets/send.svg" alt="logo" class="link-img" />
              <span class="links-name">Add Trading Pair</span>
            </a>
          </li>
        </router-link>

        <router-link to="/payment-details">
          <li>
            <a class="hover">
              <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
              <span class="links-name">Payment Details</span>
            </a>
          </li>
        </router-link>

        <router-link to="/uploaded-ID">
          <li>
            <a class="hover">
              <img src="../../assets/settings.svg" alt="logo" class="link-img" />
              <span class="links-name">Uploaded ID's</span>
            </a>
          </li>
        </router-link>

        <router-link to="/change-password-admin">
          <li>
            <a class="hover">
              <img src="../../assets/settings.svg" alt="logo" class="link-img" />
              <span class="links-name">Change Password</span>
            </a>
          </li>
        </router-link>

        <router-link to="/add-new-user">
          <li>
            <a class="hover">
              <img src="@/assets/dashboardlogo.svg" alt="logo" class="link-img" />
              <span class="links-name">Add New User</span>
            </a>
          </li>
        </router-link>

        <li @click="handleClick">
          <a >
            <img  src="@/assets/log-out.svg" alt="Notification"/>&nbsp;&nbsp;
            <span class="links-name">Logout</span>
          </a>
        </li>

      </ul>


    </div>

    <div  class="dropdown-nav-2" v-show="mobileNav" >

      <div class="logo">
        <img src="@/assets/logo.png" alt="logo" class="afo-logo" />
      </div>


      <ul>
        <li @click="toggleMobileNav2">
          <a>
            <img src="@/assets/dashboardlogo.svg" alt="logo" class="link-img" />
            <router-link to="/list-of-users" class="">List Of Users</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="../../assets/walletmana.svg" alt="logo" class="link-img" />
            <router-link  to="/deposit-requests" class="">Deposit Request</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <i class='bx bx-support' ></i>
            <router-link to="/withdrawal-requests" class="">Withdrawal Request</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
            <router-link to="/trade-request-admin" class="">Trade Request</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
            <router-link to="/add-trade" class="">Add Trade</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="@/assets/pie-chart.svg" alt="logo" class="link-img" />
            <router-link to="/payment-details" class="">Payment Details</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="../../assets/virtacc.svg" alt="logo" class="link-img" />
            <router-link to="/uploaded-ID" class="">Uploaded ID's</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="../../assets/virtacc.svg" alt="logo" class="link-img" />
            <router-link to="/change-password-admin" class="">Change Password</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="../../assets/virtacc.svg" alt="logo" class="link-img" />
            <router-link to="/add-new-user" class="">Add New User</router-link>
          </a>
        </li>

        <li @click="handleClick">
          <a >
            <img  src="@/assets/log-out.svg" alt="Notification"/>&nbsp;&nbsp;
            <span class="links-name">Logout</span>
          </a>
        </li>
      </ul>



    </div>

    <dash-content2 @customEvent="parentFunction">
      <router-view v-slot="{ Component, route }">
        <transition name="route" mode="out-in">
          <div :key="route.name">
            <div class="icon">
              <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
            </div>
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </dash-content2>


  </div>
</template>

<script>
import DashContent2 from "@/components/BaseComponents/dash/DashContent2.vue";
import router from "@/router";

export default {
  name: "DashBoardSideBarAdminView",
  components: {DashContent2},
  data()  {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: window.innerWidth, // Initialize directly with the window's innerWidth
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen(); // Check the screen size immediately on component creation
  },
  beforeDestroy() { // Use `beforeDestroy` instead of `unmounted` for Vue 2
    window.removeEventListener('resize', this.checkScreen); // Cleanup the event listener
  },
  methods: {
    async handleClick() {
      await router.push('/')
    },
    // This method is triggered when the customEvent is received
    parentFunction() {
      console.log("Event received in parent with payload:");
      // Additional logic here
      this.toggleMobileNav();
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleMobileNav2() {
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 990) {
        this.mobile = true;
      } else {
        this.mobile = false;
        this.mobileNav = false;
      }
    }
  },

}
</script>

<style scoped>
.outer{
  display: flex;
}
.afo-logo{
  width: 100%;

}
.afo-logo-2{
  width: 80%;
  background-color: #FFFFFF;
  padding: 10px 20px 10px 8px;
  border-radius: 4px;
  margin-left: 10%;
}
body{
  position: relative;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
}
.logo{
  display: flex;
  margin: 13% auto;
}
.logo p {
  color: #ffffff;
  font-size: 20px;
  margin-left: 10%;
  padding-top: 3px;
}
.logo select{
  font-size: 15px;
  margin-left: 8%;
  padding: 5px 15px;
  border-radius: 5px;
  color: #F04438;
  border: 1px solid #E8E8E8;
}
.sidebar{
  top: 0;
  left: 0;
  height: 100vh;
  width: 235px;
  background-color: #0f171c;
  border-right: 1px solid #000;
  padding: 6px 20px 37px;
}
.sidebar ul li{
  position: relative;
  height: 40px;
  width: 100%;
  margin: 5px 4px;
  list-style: none;
  line-height: 10px;
}
.sidebar ul li a{
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  border-radius: 12px;
  font-size: 16px;
  padding-top: 3px;
}
.hover:hover{
  background: rgba(23, 35, 43, 0.5);
  backdrop-filter: blur(3.5px);
  padding: 4px;
  border-radius: 4px;
}
.link-img{
  margin-right: 5%;
  width: 12%;
}
.links-name{
  font-size: 16px;
  color: #ffffff;
}
.wallets{
  font-size: 15.5px;
}
.feature-card-1 p {
  font-size: 17px;
}
.feature-card-2 p{
  font-size: 17px;
  background: rgba(255, 255, 255, 0.1);
  border: 0.5px solid rgba(255, 255, 255, 0.13);
  border-radius: 3px;
  padding: 2.5px 8px;
  margin-right: 8px;
}
.feature-card-3 img{
  margin-right: 7px;
}
.feature-card-3 p{
  padding-top: 2px;
}
.logout span{
  font-size: 16px;
  padding-top: 10.5px;
  padding-right: 2%;
}
.icon {
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
  padding-top: 15px;
  color: #FFFFFF;
}
.icon i {
  cursor: pointer;
  font-size: 30px;
  transition: 0.8s ease all;
}
.icon-active {
  transform: rotate(360deg);
}
.logout span{
  font-size: 16px;
  padding-top: 10.5px;
  padding-right: 10px;
}
.icon {
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
  color: #ffffff;
  padding-top: 15px;
}
.icon i {
  cursor: pointer;
  font-size: 30px;
  transition: 0.8s ease all;
}
.icon-active {
  transform: rotate(360deg);
}
.links-name-separate span{
  margin-bottom: 0;
  padding-bottom: 0;
  padding-top: 0;
  margin-top: 0;
}
.dropdown-nav-2{
  display: flex;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  /*padding-right: 7%;*/
  height: 100vh;
  width: 240px;
  /*height: 100%;*/
  background-color: #0f171c;
  font-size: 16px;
  text-align: center;
}
.dropdown-nav-2 li {
  overflow: hidden;
  list-style: none;
  font-weight: bold;
  font-size: 16px;
}
.dropdown-nav-2 ul {
  /*padding-top: 25%;*/
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.dropdown-nav-2 a {
  padding: 0.55em 0;
  color: #ffffff;
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  /*letter-spacing: 1px;*/
  margin: 0;
  text-decoration: none;
}
.dropdown-nav-2 a:before,
.dropdown-nav-2 a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.dropdown-nav-2 a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #676767;
  white-space: nowrap;
}
.dropdown-nav-2 li:hover a,
.dropdown-nav-2.current a {
  color: #ffffff;
}
.bx-menu{
  font-size: 38px;
  cursor: pointer;
  transition: .8s ease all;
  color: #ffffff;
}
.icon-active{
  transform: rotate(180deg);
}
.final{
  margin-left: 26%;
  margin-top: 23%;
  display: flex;
}
.back-login{
  margin-right: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 40px;
  text-decoration: none;
  font-size: 20px;
  border-radius: 8px;
  color: #222222;
}
.back-home{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-left: 30px;
  padding: 40px;
  text-decoration: none;
  font-size: 20px;
  border-radius: 8px;
  color: #222222;
}

@media (max-width: 990px) {
  .logout{
    padding: 9px 60px;
    margin-left: 15px;
    margin-top: 13px;
    border-radius: 20px;
  }
  .icon-2{
    padding-left: 90%;
    color: white;
  }
  i{
    font-size: 20px;
    padding-right: 5px;
  }
  .icon{
    overflow-y: unset;
  }

  .final{
    margin-left: 10%;
    margin-top: 25%;
  }
}
@media (max-width: 700px) {
  .dropdown-nav-2{
    padding-right: unset;
    max-width: 210px;
    font-size: 15px;
  }
  .icon-2{
    padding-left: 80%;
  }
  .dropdown-nav-2 ul {
    padding-top: unset;
  }
  .logout{
    padding: 8px 50px;
  }
  .final{
    margin-left: 23%;
    margin-top: 30%;
    display: flex;
    flex-direction: column;
  }
  .back-login{
    margin-right: unset;
    padding: 25px;
    font-size: 18px;
    margin-bottom: 15%;
  }
  .back-home{
    margin-left: unset;
    padding: 25px;
    font-size: 18px;

  }

  .bx-user{
    font-size: 300%;
    margin-left: 10%;
  }

}
</style>