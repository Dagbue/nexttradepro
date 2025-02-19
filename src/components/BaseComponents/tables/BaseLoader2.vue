<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: "BaseLoader2"
}
</script>

<style scoped>
.loader {
  border: 3px solid #f3f3f3;
  border-radius: 100%;
  border-top: 3px solid #0f171c;
  border-bottom: 3px solid #0f171c;
  width: 20px;
  height: 20px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>