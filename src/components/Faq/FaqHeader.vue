<template>
  <section class="faq-hero">
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
        <div class="faq-badge">
          <svg class="badge-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
          </svg>
          Frequently Asked Questions
        </div>

        <h1 class="main-heading">
          Frequently Asked
          <span class="highlight-text">Questions</span>
        </h1>

        <p class="description">
          Explore our comprehensive FAQ to quickly find answers to common questions about trading, platform features, security, and account management with TopShares Pro.
        </p>

        <!-- FAQ Highlights -->
        <div class="faq-grid">
          <div class="faq-item">
            <svg class="faq-icon text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div class="faq-label">Comprehensive Answers</div>
            <div class="faq-value">Detailed solutions to common queries</div>
          </div>

          <div class="faq-item">
            <svg class="faq-icon text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div class="faq-label">Quick Solutions</div>
            <div class="faq-value">Find answers in seconds</div>
          </div>

          <div class="faq-item">
            <img class="faq-icon text-purple-400" src="@/assets/icons8-globe-50-2.png" alt="globe-50"/>
            <div class="faq-label">Wide Coverage</div>
            <div class="faq-value">Trading, security, and more</div>
          </div>

          <div class="faq-item">
            <svg class="faq-icon text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            <div class="faq-label">Expert Guidance</div>
            <div class="faq-value">Backed by trading professionals</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqHeader'
}
</script>

<style scoped>
/* Base styles */
.faq-hero {
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

.faq-badge {
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

/* FAQ grid */
.faq-grid {
  display: grid;
  gap: 2rem;
  max-width: 64rem;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .faq-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.faq-item {
  text-align: center;
}

.faq-icon {
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

.faq-label {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #D1D5DB;
}

.faq-value {
  font-weight: 600;
  color: #ffffff;
}
</style>