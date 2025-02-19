<template>
  <div class="alpha">
    <login-form/>
  </div>
</template>

<script>

import LoginForm from "@/components/Auth/Login/LoginForm.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  components: {LoginForm},

}
</script>

<style scoped>

</style>