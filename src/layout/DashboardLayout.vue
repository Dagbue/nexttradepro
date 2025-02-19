<template>
  <div>
    <slot/>
  </div>
</template>

<script>


export default {
  name: "DashboardLayout",
  // ...mapState({
  //   loading: state => state.auth.loading,
  //   auth: state => state.auth,
  //   userInfo: state => state.auth.userInfo,
  // }),
  // computed:{
  //   userInfo(){
  //     return StoreUtils.rootGetters(StoreUtils.getters.auth.getUserInfo)
  //   },
  // },
  // mounted() {
  //   if(localStorage.token){
  //     StoreUtils.dispatch(StoreUtils.actions.auth.getUserDetails)
  //   }else {
  //     RouterUtils.navigateTo(RouterUtils.routes.authentication.login.name)
  //   }
  // },
}
</script>

<style scoped>

</style>