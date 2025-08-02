<template>
  <section class="pricing-cta">
    <!-- Background Pattern -->
    <div class="background-pattern">
      <svg class="pattern-svg" viewBox="0 0 400 200">
        <path
            d="M0,100 Q50,80 100,90 T200,85 T300,80 T400,75"
            stroke="#ffffff"
            stroke-width="1"
            fill="none"
        />
        <path
            d="M0,120 Q50,100 100,110 T200,105 T300,100 T400,95"
            stroke="#ffffff"
            stroke-width="1"
            fill="none"
        />
      </svg>
    </div>

    <div class="container">
      <div class="content-grid">
        <!-- Left Content -->
        <div class="left-content">
          <h2 class="main-heading">
            Ready to Start
            <span class="highlight-text">Your Investment Journey?</span>
          </h2>

          <p class="description">
            Join thousands of successful investors who trust TopShares Pro with their financial future.
            Start with any plan and watch your investments grow with guaranteed returns.
          </p>

          <div class="features">
            <div class="feature-item">
              <svg class="feature-icon text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span class="feature-text">100% secure and regulated platform</span>
            </div>
            <div class="feature-item">
              <svg class="feature-icon text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="feature-text">Guaranteed returns on all investment plans</span>
            </div>
            <div class="feature-item">
              <svg class="feature-icon text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
              <span class="feature-text">24/7 dedicated customer support</span>
            </div>
          </div>

          <div class="button-group">
            <button class="primary-button">
              Start Investing Today
              <svg class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>

<!--            <button class="secondary-button">-->
<!--              Schedule Consultation-->
<!--            </button>-->
          </div>
        </div>

        <!-- Right Content - Investment Calculator -->
        <div class="right-content">
          <div class="calculator-card">
            <h3 class="calculator-heading">Investment Calculator</h3>

            <div class="calculator-list">
              <div class="calculator-item">
                <div class="calculator-label">Initial Investment</div>
                <div class="calculator-value">$25,000</div>
              </div>

              <div class="calculator-item">
                <div class="calculator-label">Selected Plan</div>
                <div class="calculator-plan">Gold - 20% ROI</div>
              </div>

              <div class="calculator-item returns">
                <div class="calculator-label text-green-100">Projected Returns (8 months)</div>
                <div class="calculator-value text-white">$30,000</div>
                <div class="calculator-total text-green-100">Total: $55,000</div>
              </div>
            </div>

            <button class="calculator-button">
              Calculate My Returns
            </button>
          </div>

          <!-- Floating Elements -->
          <div class="floating-badge top-badge">
            <div class="badge-text">Guaranteed ROI</div>
          </div>

          <div class="floating-badge bottom-badge">
            <div class="badge-text">No Hidden Fees</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingCTA'
}
</script>

<style scoped>
/* Base styles */
.pricing-cta {
  padding: 5rem 0;
  background: linear-gradient(to bottom right, #2563EB, #4F46E5);
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
  stroke: #ffffff;
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

/* Grid layout */
.content-grid {
  display: grid;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Left content */
.main-heading {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.highlight-text {
  display: block;
  color: #BFDBFE;
}

.description {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #E0F2FE;
  margin-bottom: 2rem;
  line-height: 1.625;
}

.features {
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.feature-icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}

.text-green-300 {
  color: #6EE7B7;
}

.text-yellow-300 {
  color: #FDE68A;
}

.text-purple-300 {
  color: #D8B4FE;
}

.feature-text {
  color: #E0F2FE;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 640px) {
  .button-group {
    flex-direction: row;
  }
}

.primary-button, .secondary-button {
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}

.primary-button {
  background-color: #ffffff;
  color: #2563EB;
}

.primary-button:hover {
  background-color: #F3F4F6;
  transform: scale(1.05);
}

.secondary-button {
  border: 2px solid #ffffff;
  color: #ffffff;
}

.secondary-button:hover {
  background-color: #ffffff;
  color: #2563EB;
}

.button-icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0.5rem;
}

.primary-button:hover .button-icon {
  transform: translateX(0.25rem);
}

/* Right content - Investment Calculator */
.right-content {
  position: relative;
}

.calculator-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.calculator-heading {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
}

.calculator-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.calculator-item {
  padding: 1rem;
  border-radius: 0.5rem;
}

.calculator-item:not(.returns) {
  background: rgba(255, 255, 255, 0.2);
}

.returns {
  background: linear-gradient(to right, #34D399, #16A34A);
}

.calculator-label {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #BFDBFE;
  margin-bottom: 0.5rem;
}

.text-green-100 {
  color: #DCFCE7;
}

.calculator-value {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
}

.calculator-plan {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
}

.calculator-total {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.calculator-button {
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: linear-gradient(to right, #FBBF24, #F97316);
  color: #111827;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: opacity 0.2s ease;
  border: none;
}

.calculator-button:hover {
  opacity: 0.9;
}

/* Floating badges */
.floating-badge {
  position: absolute;
  padding: 0.75rem;
  border-radius: 0.5rem;
  color: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.top-badge {
  top: -1rem;
  right: -1rem;
  background-color: #22C55E;
}

.bottom-badge {
  bottom: -1rem;
  left: -1rem;
  background-color: #F59E0B;
  color: #111827;
}

.badge-text {
  font-size: 0.875rem;
  font-weight: 500;
}
</style>