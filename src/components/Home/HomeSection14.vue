<template>
  <div class="alpha">
    <p class="section-header-1">Discover a World of Opportunities</p>
    <p class="section-header">You decide what to trade and when to trade it. We’re hard at work behind the scenes to
      minimize your costs and improve your execution.</p>


    <div class="section-alpha">

      <div class="section-2">
        <watch-list-table2/>
      </div>


      <div class="section-1">

        <div class="text-part">
          <p class="text-1">Ultra-competitive pricing</p>
          <p class="text-2">Trade more, pay less—with some of the lowest fees in the industry.</p>
        </div>

        <div class="text-part">
          <p class="text-1">Trading flexibility</p>
          <p class="text-2">Seamlessly access global markets with instant, one-click trades.</p>
        </div>

        <div class="text-part">
          <p class="text-1">Award-winning platform</p>
          <p class="text-2">Trusted by traders worldwide for its speed, reliability, and innovative features.</p>
        </div>

        <div class="text-part">
          <p class="text-1">Trade wherever you are and whenever.</p>
          <p class="text-2">Access your account from any device, anywhere in the world.</p>
<!--        <p class="last-text">Trade wherever you are, whenever you want to.</p>-->
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import WatchListTable2 from "@/components/BaseComponents/tables/WatchListTable2.vue";

export default {
  name: "HomeSection14",
  components: {WatchListTable2},
}
</script>

<style scoped>

.alpha{
  height: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-bottom: 5%;
  padding-top: 5%;
}

.section-1{
  width: 50%;
}

.section-2{
  width: 50%;
  margin-left: 5%;
}

.section-header{
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #8599a6;
  font-size: 1.240rem;
  line-height: 1.3;
  font-weight: 300;
  text-align: center;
}
.section-header-1{
  color: #0A0A0AFF;
  font-size: 1.9rem;
  line-height: 1.2;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
}
.section-alpha{
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin-top: 3%;
}

.image{
  width: 75%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border-radius: 12px;
}

.text-part{
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 3%;
}

.text-1{
  font-size: 26px;
  line-height: 26px;
  font-weight: 700;
  white-space: pre-line;
  margin-bottom: 10px;
  color: #0A0A0AFF;
}

.text-2{
  margin: 0;
  color: #8599a6;
  font-size: 16px;
  white-space: pre-line;
  line-height: 1.4;
  font-weight: 300;
}
.last-text{
  margin: 0;
  color: #0A0A0AFF;
  font-size: 19px;
  white-space: pre-line;
  line-height: 1.4;
  padding-top: 2%;
}

@media (max-width: 700px) {
  .section-header{
    font-size: 16px;
    width: 90%;
  }
  .section-header-1{
    font-size: 28px;
  }
  .section-alpha{
    display: block;
  }
  .section-1{
    width: 100%;
  }

  .section-2{
    width: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
  }

  .text-1{
    font-size: 26px;
    line-height: 24px;
    margin-bottom: 13px;
  }

  .text-2{
    font-size: 16px;
    line-height: 1.3;
  }
  .image{
    width: 90%;
  }
}


@media (max-width: 500px) {
  .text-part{
    width: 85%;
  }

  .section-header-1{
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

}
</style>