<template>
  <div class="alpha">
    <pricing-header/>
    <pricing-body/>
    <pricing-comparison/>
    <pricing-f-a-q/>
    <pricing-c-t-a/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>
import PricingHeader from "@/components/Pricing/PricingHeader.vue";
import PricingBody from "@/components/Pricing/pricing-body.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import ReadyToWork from "@/components/BaseComponents/ReadyToWork.vue";
import PricingComparison from "@/components/Pricing/PricingComparison.vue";
import PricingFAQ from "@/components/Pricing/PricingFAQ.vue";
import PricingCTA from "@/components/Pricing/PricingCTA.vue";

export default {
  name: "PricingView",
  components: {PricingCTA, PricingFAQ, PricingComparison, ReadyToWork, FooterHome, PricingBody, PricingHeader}
}
</script>

<style scoped>

</style>