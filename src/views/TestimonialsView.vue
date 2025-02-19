<template>
  <div class="alpha">
    <testimonials-header/>
    <testimonials-body/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>
import TestimonialsHeader from "@/components/Testimonials/TestimonialsHeader.vue";
import TestimonialsBody from "@/components/Testimonials/TestimonialsBody.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import ReadyToWork from "@/components/BaseComponents/ReadyToWork.vue";

export default {
  name: "TestimonialsView",
  components: {ReadyToWork, FooterHome, TestimonialsBody, TestimonialsHeader}
}
</script>

<style scoped>

</style>