<template>
  <section class="pricing-hero">
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
      <div class="content">
        <div class="intro-badge">
          <svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>
          Investment Plans That Grow With You
        </div>

        <h1 class="main-heading">
          Choose Your
          <span class="highlight-text">Investment Journey</span>
        </h1>

        <p class="description">
          Start with any plan and scale your investments as you grow. All plans include our award-winning platform,
          24/7 support, and guaranteed returns.
        </p>

        <!-- Trust Indicators -->
        <div class="trust-indicators">
          <div class="indicator">
            <svg class="indicator-icon text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <div class="indicator-value">100%</div>
            <div class="indicator-label">Secure</div>
          </div>

          <div class="indicator">
            <svg class="indicator-icon text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div class="indicator-value">Guaranteed</div>
            <div class="indicator-label">Returns</div>
          </div>

          <div class="indicator">
            <svg class="indicator-icon text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            <div class="indicator-value">24/7</div>
            <div class="indicator-label">Support</div>
          </div>

          <div class="indicator">
            <svg class="indicator-icon text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
            <div class="indicator-value">0%</div>
            <div class="indicator-label">Hidden Fees</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingHeader'
}
</script>

<style scoped>
/* Base styles */
.pricing-hero {
  position: relative;
  background: linear-gradient(to bottom right, #111827, #1e3a8a, #111827);
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

/* Content */
.content {
  text-align: center;
}

.intro-badge {
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
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

@media (min-width: 1024px) {
  .main-heading {
    font-size: 3.75rem;
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
  margin: 0 auto 3rem;
}

/* Trust Indicators */
.trust-indicators {
  display: grid;
  gap: 2rem;
  max-width: 64rem;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .trust-indicators {
    grid-template-columns: repeat(4, 1fr);
  }
}

.indicator {
  text-align: center;
}

.indicator-icon {
  width: 2rem;
  height: 2rem;
  margin: 0 auto 0.5rem;
}

.text-green-400 {
  color: #34D399;
}

.text-yellow-400 {
  color: #FBBF24;
}

.text-purple-400 {
  color: #C084FC;
}

.text-blue-400 {
  color: #60A5FA;
}

.indicator-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.indicator-label {
  color: #D1D5DB;
}
</style>