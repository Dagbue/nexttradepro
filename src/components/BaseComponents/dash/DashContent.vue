<template>
  <section class="home-section">
    <div class="home-content">
      <div class="section-1">

        <div class="section-1-part-1">
          <i  class='bx bx-menu' @click="triggerParentFunction" ></i>
        </div>

        <div  class="section-1-part-2">
          <img src="@/assets/Notification.svg" alt="Notification"/>
          <div class="vl"></div>
          <img @click="onPostClick" v-if="userInfo.displayPicture === ''" src="@/assets/Avatar.svg" alt="logo"  class="avatar"/>
          <img @click="onPostClick" v-else :src="userInfo.displayPicture" alt="displayPicture"  class="displayPicture"/>
          <p @click="onPostClick" class="profile-name">{{this.userFirstName | titleCase}} {{this.userLastName | titleCase}}</p>
        </div>

      </div>
      <slot>
      </slot>
    </div>
  </section>
</template>

<script>

import router from "@/router";
import StoreUtils from "@/utility/StoreUtils";

export default {
  name: "DashContent",
  data () {
    return {
      contacts: "",
      approved: '',
      approved2: '',
      userInfo: "",
      userFirstName: '',
      userLastName: ''
    }
  },
  computed:{
    UserInfo() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getUserInfo)
    },
    UserDetails() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    }
  },
  methods: {
    async handleClick() {
      await localStorage.clear();
      await router.push('/login')
    },

    onPostClick() {
      if (this.$route.path !== '/update-account') {
        this.$router.push('/update-account')
      }
      // Optional: just scroll to top if already on the page
      else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },

    async showDialog() {
      await StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
        userId : this.userId,
      })
    },
    triggerParentFunction() {
      // Emit a custom event with an optional payload
      this.$emit('customEvent');
    }
  },

  created() {
    this.showDialog()
    this.userId = localStorage.getItem('userId')
    this.userFirstName = localStorage.getItem('userFirstName')
    this.userLastName = localStorage.getItem('userLastName')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  },

  mounted() {
    this.showDialog()
    this.userId = localStorage.getItem('userId')
    this.userFirstName = localStorage.getItem('userFirstName')
    this.userLastName = localStorage.getItem('userLastName')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  }

}
</script>

<style scoped>
.bx-menu{
  color: #FFFFFF;
  font-size: 25px;
  display: none;
}

/*.avatar{*/
/*  width: 2.2%;*/
/*}*/
.home-content{
  position: fixed;
  left: 215px;
  background-color: #000000;
  width: calc(100% - 215px);
  height: 100vh;
  transition: all 0.5s ease;
  margin: 0 10px;
  cursor: pointer;
  overflow-y: scroll;
}
.section-1{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  /*padding-right: 3%;*/
  background-color: rgb(7 12 20);
  border: 1px solid #000000;
}
.section-1-part-1{
  width: 50%;
  padding-left: 0.5%;
}
.section-1-part-2{
  display: flex;
  gap: 10px;
  align-content: center;
  align-items: center;
  justify-content: right;
  width: 50%;
  padding-right: 2.5%;
}
.vl{
  border-left: 1.5px solid #E7E8F0;
  height: 35px;
  margin-left: 1%;
  margin-right: 1%;
}
.profile-name{
  padding-left: 1%;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #ffffff;
}

.displayPicture{
  width: 5%;
  border-radius: 100%;
  margin-right: 0;
  padding-right: 0;
}


@media (max-width: 990px) {
  .home-content{
    position: fixed;
    left: unset;
    width: 100%;
    height: 100%;
    margin: unset;
    /*padding: 10px;*/
    padding-left: unset;
    padding-right: unset;
    overflow-y: scroll;
  }

  .avatar{
    width: 9%;
    margin-left: 8px;
  }

  .displayPicture{
    width: 9%;
    border-radius: 100%;
    margin-right: 0;
    padding-right: 0;
  }

  .section-1{
    /*padding-right: 15%;*/
    padding-top: 1%;
  }
  img{
    /*padding-left: 10px;*/
    padding-right: 10px;
  }
  .bx-menu{
    display: unset;
  }
}

@media (max-width: 500px) {

  .displayPicture{
    width: 14%;
  }

  .profile-name{
    font-size: 12px;
    line-height: unset;
    letter-spacing: unset;
  }

  .avatar{
    width: 15%;
  }
  .section-1-part-2{
    gap: 5px;
    width: 100%;
  }
}

</style>

