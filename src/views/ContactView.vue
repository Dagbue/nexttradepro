<template>
  <div class="alpha">
    <contact-header/>
    <contact-body/>
    <contact-info/>
    <contact-map/>
    <contact-f-a-q/>
    <contact-newsletter/>
    <footer-home/>
  </div>
</template>

<script>
import ContactHeader from "@/components/Contact/ContactHeader.vue";
import ContactBody from "@/components/Contact/contact-body.vue";
import ContactMap from "@/components/Contact/contact-map.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import ContactInfo from "@/components/Contact/ContactInfo.vue";
import ContactFAQ from "@/components/Contact/ContactFAQ.vue";
import ContactNewsletter from "@/components/Contact/ContactNewsletter.vue";



export default {
  name: "ContactView",
  components: {
    ContactNewsletter,
    ContactFAQ, ContactInfo, FooterHome, ContactMap, ContactBody, ContactHeader}
}
</script>

<style scoped>

</style>