<template>
  <div>
  <div id="slider">
<!--    <div class="arrowLeft" @click="arrowLeft()"></div>-->
    <Slides :image="images[chosenImage]" />
<!--    <div class="arrowRight" @click="arrowRight()"></div>-->
  </div>
  </div>
</template>

<script>
import Slides from "./Slides.vue";
export default {
  name: "sliderView",
  components: {
    Slides,
  },
  data() {
    return {
      images: [
        {
          id: 0,
          url: "",
          title: "A Distinguished, multi-award-winning provider of stock market solutions.",
          para: "We are proud to offer traders advanced and innovative trading platform technologies designed for performance and reliability.",
          para2: "*Equity and index fund trading utilizing advanced charting and analytical tools.",
          para3: "Open Account",
          para4: "Trading Platform",
        },
        {
          id: 1,
          url: "",
          title: "Take Your Investing to the Next Level.",
          para: "TopShares Pro empowers clients from across the globe to invest in markets worldwide with unparalleled" +
              " ease, offering the lowest costs and seamless access to diverse investment opportunities.",
          para2: "*Trading in Stocks / Index Funds with charts and advanced analytical tools.",
          para3: "Open Account",
          para4: "Trading Platform",
        },
        // {
        //   id: 2,
        //   url: "",
        //   title: "Inflation Busting",
        //   para: "3.00% APY * High Yield Savings Account",
        //   para2: "Earn More Now with our new High Yield Savings Account!",
        //   para3: "Learn more",
        // },
      ],
      chosenImage: 0,
      intervalObject: null,
    };
  },
  methods: {
    arrowLeft() {
      clearInterval(this.intervalObject);
      this.moveLeft();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveLeft();
      }, 6000);
    },
    arrowRight() {
      clearInterval(this.intervalObject);
      this.moveRight();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveRight();
      }, 6000);
    },
    moveLeft() {
      var flag = this.chosenImage;
      flag--;
      if (flag < 0) {
        flag = this.images.length - 1;
      }
      this.chosenImage = flag;
    },
    moveRight() {
      var flag = this.chosenImage;
      flag++;
      if (flag >= this.images.length) {
        flag = 0;
      }
      this.chosenImage = flag;
    },
  },
  created() {
    var self = this;
    this.intervalObject = setInterval(() => {
      self.moveLeft();
    }, 6000);
  },
};
</script>

<style>
#slider {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /*margin-top: 0.8%;*/
}
#slider .arrowLeft,
#slider .arrowRight {
  position: absolute;
  top: 50%;
  border: 20px solid transparent;
}
#slider .arrowLeft {
  border-right-color: #676767;
  z-index: 1;
}
#slider .arrowRight {
  right: 0;
  border-left-color: #676767;
}
#slider .squares div {
  height: 20px;
  width: 20px;
  margin-right: 10px;
  display: inline-block;
  background-color: #676767;
  border-radius: 50%;
}

@media (max-width: 700px){
  #slider .arrowLeft{
    display: none;
  }
  #slider .arrowRight{
    display: none;
  }
}
</style>
