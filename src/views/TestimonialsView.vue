<template>
  <div class="alpha">
    <testimonials-header/>
    <testimonials-body/>
    <testimonial-grid/>
    <testimonial-stats/>
    <testimonial-c-t-a/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>
import TestimonialsHeader from "@/components/Testimonials/TestimonialsHeader.vue";
import TestimonialsBody from "@/components/Testimonials/TestimonialsBody.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import ReadyToWork from "@/components/BaseComponents/ReadyToWork.vue";
import TestimonialGrid from "@/components/Testimonials/TestimonialGrid.vue";
import TestimonialStats from "@/components/Testimonials/TestimonialStats.vue";
import TestimonialCTA from "@/components/Testimonials/TestimonialCTA.vue";

export default {
  name: "TestimonialsView",
  components: {
    TestimonialCTA,
    TestimonialStats, TestimonialGrid, ReadyToWork, FooterHome, TestimonialsBody, TestimonialsHeader}
}
</script>

<style scoped>

</style>