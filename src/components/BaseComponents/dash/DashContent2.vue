<template>
  <section class="home-section">
    <div class="home-content">
<!--      <div class="section-1">-->
<!--        <img src="@/assets/log-out.svg" alt="Notification" @click="handleClick"/>&nbsp;&nbsp;-->
<!--        <img src="@/assets/Notification.svg" alt="Notification"/>-->
<!--        <div class="vl"></div>-->
<!--        <img src="@/assets/Avatar.svg" alt="logo" />-->
<!--        <p class="profile-name">Admin</p>-->
<!--      </div>-->


      <div class="section-1">

        <div class="section-1-part-1">
          <i  class='bx bx-menu' @click="triggerParentFunction" ></i>
        </div>

        <div class="section-1-part-2">
<!--          <img src="@/assets/log-out.svg" alt="Notification" @click="handleClick"/>&nbsp;&nbsp;-->
          <img src="@/assets/Notification.svg" alt="Notification"/>
          <div class="vl"></div>
          <img src="@/assets/Avatar.svg"  alt="logo" />
          <p class="profile-name">Admin</p>
        </div>

      </div>
      <slot>
      </slot>
    </div>
  </section>
</template>

<script>
import router from "@/router";

export default {
  name: "DashContent2",
  methods: {
    handleClick() {
      router.push('/')
    },
    triggerParentFunction() {
      // Emit a custom event with an optional payload
      this.$emit('customEvent');
    }
  }
}
</script>

<style scoped>
.bx-menu{
  color: #071333;
  font-size: 25px;
  display: none;
}
/*.home-content{*/
/*  position: fixed;*/
/*  left: 225px;*/
/*  background-color: #ffffff;*/
/*  width: calc(100% - 215px);*/
/*  height: 100vh;*/
/*  transition: all 0.5s ease;*/
/*  margin: 0 10px;*/
/*  cursor: pointer;*/
/*  overflow-y: scroll;*/
/*}*/
/*.section-1{*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*  align-content: center;*/
/*  align-items: center;*/
/*  padding-top: 0.5%;*/
/*  padding-bottom: 0.5%;*/
/*  !*padding-right: 3%;*!*/
/*  background-color: #0f171c;*/
/*}*/
.section-1-part-1{
  width: 50%;
  padding-left: 0.5%;
}
.section-1-part-2{
  display: flex;
  gap: 5px;
  align-content: center;
  align-items: center;
  justify-content: right;
  width: 50%;
  padding-right: 2.5%;
}
/*.vl{*/
/*  border-left: 1.5px solid #E7E8F0;*/
/*  height: 35px;*/
/*  margin-left: 1%;*/
/*  margin-right: 1%;*/
/*}*/
/*.profile-name{*/
/*  padding-left: 1%;*/
/*  font-weight: 500;*/
/*  font-size: 14px;*/
/*  line-height: 16px;*/
/*  letter-spacing: 0.01em;*/
/*  color: #ffffff;*/
/*}*/


.home-content{
  position: fixed;
  left: 225px;
  background-color: #F9FAFB;
  width: calc(100% - 215px);
  height: 100vh;
  transition: all 0.5s ease;
  margin: 0 10px;
  cursor: pointer;
  overflow-y: scroll;
}
.section-1{
  display: flex;
  justify-content: right;
  align-content: center;
  align-items: center;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  padding-right: 3%;
  background-color: #FFFFFF;
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
  color: #58596C;
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

  .section-1{
    padding-right: 15%;
    padding-top: 1%;
  }
  img{
    /*padding-left: 10px;*/
    padding-right: 10px;
  }
}

@media (max-width: 990px) {

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

  .section-1-part-2{
    width: 100%;
    padding-right: unset;
  }

  .profile-name{
    padding-left: unset;
  }

  .section-1-part-2{
    width: 100%;
    padding-right: unset;
  }

}

</style>