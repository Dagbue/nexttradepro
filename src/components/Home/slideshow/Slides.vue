<template>
  <transition-group name="fade" mode="out-in" tag="div" class="slides">
    <div class="slideParent" :key="image.id">
      <div class="slideImage">
        <div class="slideTitle">

          <div class="slideTitle-section-1">


            <p class="text-1">{{ image.title }}</p>

            <p class="text-2">{{ image.para }}</p>

            <div class="button-group">
              <button @click="onPostClick" class="btn-primary" >{{ image.para3 }}</button>
              <button  @click="onPostClick2" class="btn-secondary" >{{ image.para4 }}</button>
            </div>



            <p class="text-3" >{{ image.para2 }}</p>


          </div>

          <div class="slideTitle-section-2">
            <img v-show="this.image.id === 0" src="@/assets/crypto-futures.png" alt="slide_show_image" class="slider-image"/>

            <img v-show="this.image.id === 1" src="https://www.etoro.com/wp-content/uploads/2025/05/Staking-Phone-1.png" alt="slide_show_image" class="slider-image-1"/>

            <img v-show="this.image.id === 2" src="https://www.etoro.com/wp-content/themes/etoro/assets/images/templates/trading_platform/sec-7-img.png" alt="slide_show_image" class="slider-image-2" />
          </div>


        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Slides",
  props: ["image"],
  computed: {
    setBackgroundImage() {
      return { backgroundImage: "url(" + this.image.url + ")" };
    },
  },
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
    onPostClick2() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.slides .slideParent {
  height: 62vh;
  width: 100%;
  background: linear-gradient(to bottom right, #EFF6FF, #FFFFFF, #EEF2FF);
}

.slides .slideImage {
  height: 100vh;
  width: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  animation-fill-mode: forwards;
  animation-name: zoom;
  animation-duration: 3s;
  animation-iteration-count: 1;
}
@keyframes zoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1);
  }
}
.slideTitle {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 3%;
  padding-top: 4.3%;
}

.text-1{
  font-size: 2rem;
  font-weight: bold;
  color: #191C1F;
  margin-bottom: 1rem;
}

.text-2{
  font-size: 1rem;
  color: #8599a6;
  margin-bottom: 1.5rem;
}

.text-3 {
  font-size: 0.85rem;
  color: #8599a6;
  margin-top: 1.5rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: left;
  flex-wrap: wrap;
}

button {
  border: none;
  cursor: pointer;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-size: 0.95rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: background 0.3s ease;
}

.btn-primary {
  background-color: #2563eb;
  color: white;
}

.btn-primary:hover {
  background-color: #1d4ed8;
}

.btn-secondary {
  background-color: #1f2937;
  color: #FFFFFF;
}

.btn-secondary:hover {
  background-color: #111827;
}

.slideTitle-section-1{
  width: 50%;
}

.slideTitle-section-2{
  width: 50%;
}

.slider-image{
  width: 95%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

.slider-image-1{
  width: 55%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

.slider-image-2{
  width: 68%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}




.fade-enter-active {
  animation-name: fadeEnter;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
.fade-move {
  transition: all 0.5s;
}
.fade-leave-active {
  animation-name: fadeLeave;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  position: absolute;
}
@keyframes fadeEnter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeLeave {
  from {
    opacity: 1;
  }
  to {
    opacity: 1;
  }
}


.fade2-enter-from {
  opacity: 0;
}
.fade2-enter-active {
  transition: opacity 5s ease-in;
}
.fade2-leave-to {
  opacity: 0;
}
.fade2-leave-active {
  transition: opacity 5s ease-in;
}

@media (max-width: 990px) {
  .slideTitle{
    padding-top: 10.5%;
  }
  .slideTitle h2{
    font-size: 39px;
    margin-right: 20%;
  }
}

@media (max-width: 700px) {
  .slides .slideParent {
    height: 80vh;
  }

  .slideTitle{
    text-align: center;
    display: block;
    margin-left: 2.5%;
    margin-right: 3%;
    padding-top: 5%;
  }

  .text-1{
    font-size: 18px;
    line-height: 1.6;
    text-align: center;
  }

  .text-2{
    font-size: 27px;
    line-height: 1.2;
  }

  .text-3{
    font-size: 15px;
    line-height: 1.5;
  }

  .text-4{
    padding: 10px 40px;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  .slider-image{
    width: 100%;
    border-radius: 5px;
  }

  .slideTitle-section-1{
    width: 100%;
  }

  .slideTitle-section-2{
    width: 100%;
  }

}

@media (max-width: 500px) {
  .slides .slideParent {
    height: 80vh;
  }

  .text-1 {
    font-size: 1.5rem;
  }

  .text-2 {
    font-size: 0.9rem;
  }

  .text-3 {
    font-size: 0.75rem;
    margin-bottom: 5%;
  }

  button {
    width: 100%;
  }

  .button-group {
    flex-direction: column;
    gap: 0.75rem;
  }

  .slider-image-1{
    width: 70%;
  }

  .slider-image-2{
    width: 80%;
  }

}
</style>
