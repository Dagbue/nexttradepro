<template>
  <div class="alpha">
    <pricing-header/>
    <pricing-body/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>
import PricingHeader from "@/components/Pricing/PricingHeader.vue";
import PricingBody from "@/components/Pricing/pricing-body.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import ReadyToWork from "@/components/BaseComponents/ReadyToWork.vue";

export default {
  name: "PricingView",
  components: {ReadyToWork, FooterHome, PricingBody, PricingHeader}
}
</script>

<style scoped>

</style>