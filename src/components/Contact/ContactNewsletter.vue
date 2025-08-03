<template>
  <section class="newsletter-section">
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
        <div class="badge">
          <svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
          Stay Updated
        </div>

        <h2 class="main-heading">Subscribe to Our Newsletter</h2>
        <p class="description">
          Get the latest market insights, trading tips, and platform updates delivered directly to your inbox.
        </p>
      </div>

      <div v-if="isSubscribed" class="newsletter-card">
        <svg class="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <h3 class="success-heading">Successfully Subscribed!</h3>
        <p class="success-text">Thank you for subscribing to our newsletter.</p>
      </div>

      <div v-else class="newsletter-card">
        <form @submit.prevent="handleSubmit" class="form-content">
          <div class="input-wrapper">
            <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <input
                type="email"
                v-model="email"
                placeholder="Enter your email address"
                required
                class="email-input"
            />
          </div>
          <button type="submit" class="subscribe-button">Subscribe Now</button>
        </form>

        <div class="form-note">
          <p>By subscribing, you agree to receive marketing emails from TopShares Pro.</p>
          <p>You can unsubscribe at any time.</p>
        </div>
      </div>

      <!-- Newsletter Benefits -->
      <div class="benefits-grid">
        <div class="benefit-item">
          <svg class="benefit-icon text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>
          <h3 class="benefit-title">Market Analysis</h3>
          <p class="benefit-description">Weekly market insights and trading opportunities</p>
        </div>

        <div class="benefit-item">
          <svg class="benefit-icon text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
          <h3 class="benefit-title">Platform Updates</h3>
          <p class="benefit-description">Be the first to know about new features and tools</p>
        </div>

        <div class="benefit-item">
          <svg class="benefit-icon text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <h3 class="benefit-title">Exclusive Content</h3>
          <p class="benefit-description">Access to premium trading guides and strategies</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactNewsletter',
  data() {
    return {
      email: '',
      isSubscribed: false
    }
  },
  methods: {
    handleSubmit() {
      if (this.email) {
        this.isSubscribed = true;
        this.email = '';
        setTimeout(() => {
          this.isSubscribed = false;
        }, 3000);
      }
    }
  }
}
</script>

<style scoped>
/* Base styles */
.newsletter-section {
  padding: 5rem 0;
  background: linear-gradient(to bottom right, #111827, #1E3A8A, #111827);
  color: #ffffff;
  position: relative;
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
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
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
  margin-bottom: 2rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #2563EB;
  color: #ffffff;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
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
  margin-bottom: 1rem;
}

.description {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #D1D5DB;
  max-width: 32rem;
  margin: 0 auto;
}

/* Newsletter card */
.newsletter-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 28rem;
  margin: 0 auto;
}

.success-icon {
  width: 4rem;
  height: 4rem;
  color: #34D399;
  margin: 0 auto 1rem;
}

.success-heading {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.success-text {
  color: #BFDBFE;
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: #9CA3AF;
}

.email-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background-color: #ffffff;
  border: 1px solid #e4e4e4;
  color: #111827;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.email-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #3B82F6;
}

.subscribe-button {
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: #2563EB;
  color: #ffffff;
  border-radius: 0.5rem;
  font-weight: 600;
  border: none;
  transition: background-color 0.2s ease;
}

.subscribe-button:hover {
  background-color: #1D4ED8;
}

.form-note {
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: #D1D5DB;
  text-align: center;
}

.form-note p {
  margin: 0;
}

/* Benefits grid */
.benefits-grid {
  display: grid;
  gap: 2rem;
  margin-top: 4rem;
}

@media (min-width: 768px) {
  .benefits-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.benefit-item {
  text-align: center;
}

.benefit-icon {
  width: 2rem;
  height: 2rem;
  margin: 0 auto 0.75rem;
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

.benefit-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.benefit-description {
  font-size: 0.875rem;
  color: #D1D5DB;
}
</style>