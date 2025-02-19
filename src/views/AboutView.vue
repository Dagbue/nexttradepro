<template>
  <div class="about">
    <about-hero-section/>
    <about-section1/>
    <about-section2/>
    <about-section3/>
    <about-section4/>
    <about-section5/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>


<script>

import AboutHeroSection from "@/components/About/AboutHeroSection.vue";
import AboutSection1 from "@/components/About/AboutSection1.vue";
import AboutSection2 from "@/components/About/AboutSection2.vue";
import ReadyToWork from "@/components/BaseComponents/ReadyToWork.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import AboutSection3 from "@/components/About/AboutSection3.vue";
import AboutSection4 from "@/components/About/AboutSection4.vue";
import AboutSection5 from "@/components/About/AboutSection5.vue";

export default {
  name: 'AboutView',
  components: {
    AboutSection5,
    AboutSection4, AboutSection3, FooterHome, ReadyToWork, AboutSection2, AboutSection1, AboutHeroSection},
}
</script>