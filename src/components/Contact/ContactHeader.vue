<template>
  <section class="contact-hero">
    <!-- Background Pattern -->
    <div class="background-pattern">
      <svg class="pattern-svg" viewBox="0 0 400 200">
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
      </svg>
    </div>

    <div class="container">
      <div class="content-center">
        <div class="contact-badge">
          <svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Get in Touch with Our Team
        </div>

        <h1 class="main-heading">
          Contact
          <span class="highlight-text">TopShares Pro</span>
        </h1>

        <p class="description">
          Have questions about our platform? Need support with your trading account?
          Our expert team is here to help you succeed.
        </p>

        <!-- Quick Contact Info -->
        <div class="contact-grid">
          <div class="contact-item">
            <svg class="contact-icon text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <div class="contact-label">Email Support</div>
            <div class="contact-value">24/7 Available</div>
          </div>

          <div class="contact-item">
            <svg class="contact-icon text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-5.279A2 2 0 014 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            <div class="contact-label">Live Chat</div>
            <div class="contact-value">24/7 Available</div>
          </div>

          <div class="contact-item">
            <svg class="contact-icon text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div class="contact-label">Response Time</div>
            <div class="contact-value">&lt; 2 Hours</div>
          </div>

          <div class="contact-item">
            <svg class="contact-icon text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <div class="contact-label">Global Reach</div>
            <div class="contact-value">150+ Countries</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactHeader"
}
</script>

<style scoped>
/* Base styles */
.contact-hero {
  position: relative;
  background: linear-gradient(to bottom right, #111827, #1E3A8A, #111827);
  color: #ffffff;
  padding-top: 6rem;
  padding-bottom: 5rem;
  overflow: hidden;
}

/* Background pattern */
.background-pattern {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.1;
}

.pattern-svg {
  width: 100%;
  height: 100%;
}

.pattern-svg path {
  stroke: #3B82F6;
  stroke-width: 1;
  fill: none;
}

/* Container */
.container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

/* Content center */
.content-center {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #2563EB;
  color: #ffffff;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.badge-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}

.main-heading {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

@media (min-width: 1024px) {
  .main-heading {
    font-size: 3.75rem;
    line-height: 1.2;
  }
}

.highlight-text {
  display: block;
  color: #60A5FA;
}

.description {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #D1D5DB;
  max-width: 48rem;
  margin: 0 auto 3rem auto;
}

/* Contact grid */
.contact-grid {
  display: grid;
  gap: 2rem;
  max-width: 64rem;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.contact-item {
  text-align: center;
}

.contact-icon {
  width: 2rem;
  height: 2rem;
  margin: 0 auto 0.5rem;
}

.text-blue-400 {
  color: #60A5FA;
}

.text-green-400 {
  color: #34D399;
}

.text-purple-400 {
  color: #C084FC;
}

.text-orange-400 {
  color: #FDBA74;
}

.contact-label {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #D1D5DB;
}

.contact-value {
  font-weight: 600;
  color: #ffffff;
}
</style>