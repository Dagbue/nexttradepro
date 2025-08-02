<template>
  <section class="contact-section">
    <!-- Background Pattern -->
    <div class="background-pattern">
      <svg viewBox="0 0 400 200">
        <path
            d="M0,100 Q50,80 100,90 T200,85 T300,80 T400,75"
            stroke="#3B82F6"
            stroke-width="1"
            fill="none"
        />
        <path
            d="M0,120 Q50,100 100,110 T200,105 T300,100 T400,95"
            stroke="#3B82F6"
            stroke-width="1"
            fill="none"
        />
        <path
            d="M0,140 Q50,120 100,130 T200,125 T300,120 T400,115"
            stroke="#3B82F6"
            stroke-width="1"
            fill="none"
        />
      </svg>
    </div>

    <div class="content-container">
      <h2>Ready to work with us</h2>

      <div class="contact-info">
        <div class="contact-item">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span>support@topsharespro.com</span>
        </div>
        <div class="contact-item">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>128 City Road, London, United Kingdom, EC1V 2NX</span>
        </div>
      </div>

      <button class="contact-button" @click="onPostClick">
        Contact Us
        <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ReadyToWork",
  methods: {
    onPostClick() {
      this.$router.push("/contact");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
.contact-section {
  //margin-top: 5%;
  padding: 5rem 0;
  background: linear-gradient(135deg, #111827 0%, #1e3a8a 50%, #111827 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.background-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.1;
}

.background-pattern svg {
  width: 100%;
  height: 100%;
}

.content-container {
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  position: relative;
}

.content-container h2 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.contact-info {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.contact-item .icon {
  width: 1.25rem;
  height: 1.25rem;
}

.contact-item span {
  font-size: 1.125rem;
}

.contact-button {
  background-color: #2563eb;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
}

.contact-button:hover {
  background-color: #1d4ed8;
  transform: scale(1.05);
}

.contact-button:hover .arrow-icon {
  transform: translateX(0.25rem);
}

.arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.2s ease;
}
</style>