<template>
  <section class="testimonial-cta">
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
      <div class="content-grid">
        <!-- Left Content -->
        <div class="left-content">
          <h2 class="main-heading">
            Your Success Story
            <span class="highlight-text">Starts Here</span>
          </h2>

          <p class="description">
            Join thousands of traders who have transformed their financial future with TopShares Pro.
            Our platform provides everything you need to succeed in today's markets.
          </p>

          <div class="features">
            <div class="feature-item">
              <svg class="feature-icon text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span class="feature-text">Regulated and secure platform</span>
            </div>
            <div class="feature-item">
              <svg class="feature-icon text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="feature-text">Award-winning customer support</span>
            </div>
            <div class="feature-item">
              <svg class="feature-icon text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
              <span class="feature-text">Start trading in under 5 minutes</span>
            </div>
          </div>

<!--          <div class="button-group">-->
<!--            <button class="primary-button" @click="onPostClick">-->
<!--              Start Your Journey-->
<!--              <svg class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">-->
<!--                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>-->
<!--              </svg>-->
<!--            </button>-->

<!--&lt;!&ndash;            <button class="secondary-button">&ndash;&gt;-->
<!--&lt;!&ndash;              <svg class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">&ndash;&gt;-->
<!--&lt;!&ndash;                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.2A1 1 0 0010 9.768v4.464a1 1 0 001.555.832l3.197-2.2a1 1 0 000-1.664z"/>&ndash;&gt;-->
<!--&lt;!&ndash;                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>&ndash;&gt;-->
<!--&lt;!&ndash;              </svg>&ndash;&gt;-->
<!--&lt;!&ndash;              Watch Demo&ndash;&gt;-->
<!--&lt;!&ndash;            </button>&ndash;&gt;-->
<!--          </div>-->
        </div>

        <!-- Right Content - Success Metrics -->
        <div class="right-content">
          <div class="metrics-card">
            <h3 class="metrics-heading">Platform Performance</h3>

            <div class="metrics-list">
              <div class="metric-item green-metric">
                <div>
                  <div class="metric-label">Total User Profits</div>
                  <div class="metric-value text-green-400">$2.4B+</div>
                </div>
                <div class="metric-stats text-green-400">
                  <div class="metric-subtext">This Year</div>
                  <div class="metric-stat">+340%</div>
                </div>
              </div>

              <div class="metric-item blue-metric">
                <div>
                  <div class="metric-label">Successful Trades</div>
                  <div class="metric-value text-blue-400">45M+</div>
                </div>
                <div class="metric-stats text-blue-400">
                  <div class="metric-subtext">Success Rate</div>
                  <div class="metric-stat">98.2%</div>
                </div>
              </div>

              <div class="metric-item purple-metric">
                <div>
                  <div class="metric-label">Average Return</div>
                  <div class="metric-value text-purple-400">284%</div>
                </div>
                <div class="metric-stats text-purple-400">
                  <div class="metric-subtext">Per Year</div>
                  <div class="metric-stat">ROI</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Elements -->
          <div class="floating-badge top-badge">
            <div class="badge-text">Live Trading</div>
          </div>

          <div class="floating-badge bottom-badge">
            <div class="badge-text">24/7 Support</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialCTA',
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
  },
}
</script>

<style scoped>
/* Base styles */
.testimonial-cta {
  padding: 5rem 0;
  background-color: #111827;
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
  color: #60A5FA;
}

.description {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #D1D5DB;
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

.text-green-400 {
  color: #34D399;
}

.text-blue-400 {
  color: #60A5FA;
}

.text-purple-400 {
  color: #C084FC;
}

.feature-text {
  color: #D1D5DB;
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
  background-color: #2563EB;
  color: #ffffff;
}

.primary-button:hover {
  background-color: #1D4ED8;
  transform: scale(1.05);
}

.secondary-button {
  border: 2px solid #4B5563;
  color: #D1D5DB;
}

.secondary-button:hover {
  border-color: #2563EB;
  color: #60A5FA;
}

.button-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.primary-button:hover .button-icon {
  transform: translateX(0.25rem);
}

.secondary-button:hover .button-icon {
  transform: scale(1.1);
}

/* Right content - Success Metrics */
.right-content {
  position: relative;
}

.metrics-card {
  background: linear-gradient(to bottom right, #1F2937, #111827);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.metrics-heading {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
}

.metrics-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.metric-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
}

.green-metric {
  background-color: rgba(6, 78, 59, 0.3);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.blue-metric {
  background-color: rgba(30, 58, 138, 0.3);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.purple-metric {
  background-color: rgbaitk88, 28, 135, 0.3);
  border: 1px solid rgba(168, 85, 247, 0.2);
}

.metric-label {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #9CA3AF;
}

.metric-value {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.metric-stats {
  text-align: right;
}

.metric-subtext {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.metric-stat {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
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
  background-color: #16A34A;
}

.bottom-badge {
  bottom: -1rem;
  left: -1rem;
  background-color: #2563EB;
}

.badge-text {
  font-size: 0.875rem;
  font-weight: 500;
}
</style>