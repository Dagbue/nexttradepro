<template>
  <div>
    <div class="body">
      <h2 class="header">Settings</h2>

      <div class="settings-alpha">
        <div class="settings-links">

          <div class="lawrence-1">
            <router-link to="/update-account" class="account-links">Edit Profile</router-link>
            <router-link to="/change-password" class="account-links" style="font-size: 12px;">Change Password</router-link>
            <router-link to="/preferences" class="account-links">Preferences</router-link>
          </div>

          <div class="lawrence-1">
            <router-link to="/upload-display-picture" class="account-links2">Display Picture</router-link>
            <router-link to="/link-Wallet-Address" class="account-links2">Wallet Address</router-link>
            <router-link to="/setup2FA" class="account-links2">SetUp 2FA</router-link>
          </div>



        </div>

        <router-view v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashBoardSettings"
}
</script>

<style scoped>

.body{
  padding: 32px;
}
.header{
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #ffffff;
}
.settings-alpha{
  text-align: center;
  padding-top: 10px;
}

.settings-links{
  margin-top: 2%;
  display: flex;
  justify-content: center;
  gap: 10px;
}
.account-links{
  text-decoration: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #0f171c;
  padding: 10px 20px;
  color: #FFFFFF;
  border-radius: 5px;
  font-size: 13px;
  width: 150px;
  height: 35px;
  margin: auto;
}
.account-links:hover{
  background-color: #FFFFFF;
  border:1px solid #FFFFFF;
  color: #191C1F;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}


.account-links2{
  text-decoration: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #0f171c;
  padding: 10px 20px;
  color: #FFFFFF;
  border-radius: 5px;

  font-size: 13px;
  width: 180px;
  height: 35px;
  margin: auto;
}
.account-links2:hover{
  background-color: #FFFFFF;
  border:1px solid #FFFFFF;
  color: #191C1F;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.lawrence-1{
  display: flex;
  gap: 10px;
}


@media (max-width: 990px) {
  .header-settings{
    font-size: 22px;
    margin-left: 15px;
  }
  .content-sep, hr{
    margin-left: unset;
    margin-right: unset;
    font-size: 14px;
  }
}
@media (max-width: 550px) {
  .header-settings{
    font-size: 17px;
  }
  .foot{
    font-size: 11px;
  }

  .settings-links{
    margin-top: 2%;
    display: block;
    margin-bottom: 1.5%;
  }

  .lawrence-1{
    margin-bottom: 20px;
  }

  .account-links{
    text-decoration: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #0f171c;
    padding: 10px 20px;
    color: #FFFFFF;
    border-radius: 5px;
    font-size: 13px;
    width: 190px;
    height: 100%;
  }



  .account-links2{
    text-decoration: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #0f171c;
    padding: 10px 20px;
    color: #FFFFFF;
    border-radius: 5px;
    text-align: center;
    font-size: 13px;
    width: 190px;
    height: 100%;
  }

}
</style>