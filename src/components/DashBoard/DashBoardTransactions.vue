<template>
  <div>
    <div class="body">
      <h2 class="header">Transactions</h2>

      <div class="settings-alpha">
        <div class="settings-links">
          <router-link to="/deposit-transactions" class="account-links">Deposit</router-link>
          <router-link to="/withdrawal-transactions" class="account-links">Withdrawal</router-link>
          <router-view v-slot="{ Component }">
            <transition name="route" mode="out-in">
              <component :is="Component"></component>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "DashBoardTransactions",
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
}
.account-links{
  text-decoration: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #0f171c;
  padding: 10px 30px;
  margin-right: 1%;
  color: #FFFFFF;
  border-radius: 5px;
  font-size: 14px;
}
.account-links:hover{
  background-color: #ffffff;
  border:1px solid #ffffff;
  color: #0f171c;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}


.account-links2{
  text-decoration: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #0f171c;
  padding: 10px 30px;
  margin-right: 1%;
  color: #FFFFFF;
  border-radius: 5px;
  font-size: 14px;
}
.account-links2:hover{
  background-color: #ffffff;
  border:1px solid #ffffff;
  color: #0f171c;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}



@media (max-width: 990px) {

}
@media (max-width: 550px) {
  .account-links{
    padding: 15px 30px;
    margin-right: 2%;
    margin-left: 2%;
    font-size: 12px;
  }
}
</style>