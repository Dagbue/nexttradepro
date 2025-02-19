<template>
  <div class="home">
    <hero-section/>
    <home-section2/>
    <home-section1/>
    <home-section9/>
    <home-section10/>
    <home-section11/>
    <home-section4/>
    <section6/>
    <section4/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>


import HeroSection from "@/components/Home/HeroSection.vue";
import HomeSection2 from "@/components/Home/HomeSection2.vue";
import HomeSection1 from "@/components/Home/HomeSection1.vue";
import HomeSection9 from "@/components/Home/HomeSection9.vue";
import HomeSection10 from "@/components/Home/HomeSection10.vue";
import HomeSection11 from "@/components/Home/HomeSection11.vue";
import HomeSection4 from "@/components/Home/HomeSection4.vue";
import Section6 from "@/components/Home/Section6.vue";
import Section4 from "@/components/Home/Section4.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import ReadyToWork from "@/components/BaseComponents/ReadyToWork.vue";

export default {
  name: 'HomeView',
  components: {
    ReadyToWork,
    FooterHome,
    Section4,
    Section6,
    HomeSection4, HomeSection11, HomeSection10, HomeSection9, HomeSection1, HomeSection2, HeroSection},
}
</script>
