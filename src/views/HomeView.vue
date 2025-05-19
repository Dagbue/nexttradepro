<template>
  <div class="home">
    <hero-section/>
    <home-section12/>
    <home-section13/>
    <home-section14/>
    <home-section15/>
    <home-section16/>
    <section6/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>

import HeroSection from "@/components/Home/HeroSection.vue";
import HomeSection12 from "@/components/Home/HomeSection12.vue";
import HomeSection13 from "@/components/Home/HomeSection13.vue";
import HomeSection14 from "@/components/Home/HomeSection14.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import ReadyToWork from "@/components/BaseComponents/ReadyToWork.vue";
import HomeSection15 from "@/components/Home/HomeSection15.vue";
import HomeSection16 from "@/components/Home/HomeSection16.vue";
import Section6 from "@/components/Home/Section6.vue";

export default {
  name: 'HomeView',
  components: {
    Section6,
    HomeSection16,
    HomeSection15,
    HomeSection14,
    HomeSection13,
    HomeSection12,
    ReadyToWork,
    FooterHome,
    HeroSection
  },
}
</script>
