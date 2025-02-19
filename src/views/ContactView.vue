<template>
  <div class="alpha">
    <contact-header/>
    <contact-body/>
    <contact-map/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>
import ContactHeader from "@/components/Contact/ContactHeader.vue";
import ContactBody from "@/components/Contact/contact-body.vue";
import ContactMap from "@/components/Contact/contact-map.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import ReadyToWork from "@/components/BaseComponents/ReadyToWork.vue";



export default {
  name: "ContactView",
  components: {ReadyToWork, FooterHome, ContactMap, ContactBody, ContactHeader}
}
</script>

<style scoped>

</style>