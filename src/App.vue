<template>
  <div id="app">
    <navigation-view/>
    <router-view/>
  </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  cursor: pointer;
  counter-reset: Serial;
  font-family: 'Capsule', sans-serif;
  background: #000000;
}
a{
  text-decoration: none;
}
input{
  font-family: 'Capsule', sans-serif;
  font-size: 16.5px;
}
textarea{
  font-family: 'Capsule', sans-serif;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 1s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 1s ease-in;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
  transform: translateX(-250px);
}

.mobile-nav-enter-to{
  transform: translateX(0);
}

.slide-fade-enter {
  opacity: 0;
  transform: translateY(10px);
}

.slide-fade-enter-to {
}

.slide-fade-enter-active {
  transition: all 0.4s ease-in;
}

.slide-fade-leave {
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.slide-fade-leave-active {
  transition: all 0.4s ease-out;
}


.whatsapp_float {
  position: fixed;
  width: 55px;
  height: 55px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  z-index: 100;
}

.bxl-whatsapp {
  position: absolute;
  top: 21%;
  right: 22.5%;
}

/* for mobile */
@media screen and (max-width: 767px){
  .whatsapp-icon {
    margin-top: 10px;
  }
  .whatsapp_float {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 10px;
    font-size: 22px;
  }
}

</style>

<script setup lang="ts">
import NavigationView from "@/components/BaseComponents/NavigationView.vue";
</script>

