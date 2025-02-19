<template>
  <div class="admin">
    <faq-header/>
    <f-a-q-body/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>
import FaqHeader from "@/components/Faq/FaqHeader.vue";
import FAQBody from "@/components/Faq/f-a-q-body.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import ReadyToWork from "@/components/BaseComponents/ReadyToWork.vue";

export default {
  name: "FaqView",
  components: {ReadyToWork, FooterHome, FAQBody, FaqHeader}
}
</script>

<style scoped>

</style>