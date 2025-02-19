<template>
  <button class="button max-width-full w-button" :disabled="loading">

    <svg v-if="loading" class="spinner" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>

    <span v-if="!loading">
      <slot/>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    loading: { type: Boolean }
  },
  name: "BaseButton"
}
</script>

<style scoped>

.w-button {
  display: inline-block;
  padding: 9px 15px;
  background-color: #0f171c;
  border: #0f171c;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
}
input.w-button {
  -webkit-appearance: button;
}

.max-width-full {
  position: static;
  top: 89%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: none;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 45px;
  padding: 5px 1rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 6px;
  background-color: #0f171c;
  color: #fff;
  letter-spacing: 0.4px;
  text-align: center;
  transition: 0.3s;
}

.button:hover{
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.7);
}


.spinner {
  -webkit-animation: rotate 2s linear infinite;
  animation: rotate 2s linear infinite;
  z-index: 1.5;
  position: relative;
  top: 30%;
  left: 2.8%;
  margin: -20px 0 0 -20px;
  width: 25px;
  height: 25px;
}
.spinner .path {
  height: 70%;
  background-image: linear-gradient(-105deg, #FFFFFF, #FFFFFF);
  stroke: #FFFFFF;
  stroke-linecap: round;
  -webkit-animation: dash 1.5s ease-in-out infinite;
  animation: dash 1.5s ease-in-out infinite;
}

@-webkit-keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>