<template>
  <section class="testimonials-hero">
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
      </svg>
    </div>

    <div class="container">
      <div class="content">
        <div class="trust-badge">
          <span class="users-icon">👥</span>
          Trusted by 1M+ Traders Worldwide
        </div>

        <h1 class="title">
          What Our Traders
          <span class="highlight">Are Saying</span>
        </h1>

        <p class="description">
          Discover why millions of traders trust TopShares Pro for their investment journey.
          Real stories from real people who've transformed their financial future.
        </p>

        <!-- Stats -->
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stars">
              <span v-for="n in 5" :key="n" class="star">★</span>
            </div>
            <div class="stat-value">4.8/5</div>
            <div class="stat-label">Average Rating</div>
          </div>

          <div class="stat-item">
            <span class="trending-icon">📈</span>
            <div class="stat-value">98%</div>
            <div class="stat-label">Success Rate</div>
          </div>

          <div class="stat-item">
            <span class="users-icon-2">👥</span>
            <div class="stat-value">1M+</div>
            <div class="stat-label">Active Users</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestimonialsHeader"
}
</script>

<style scoped>
.testimonials-hero {
  position: relative;
  background: linear-gradient(135deg, #111827, #1e3a8a, #111827);
  color: #ffffff;
  padding-top: 6rem;
  padding-bottom: 5rem;
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

.container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
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

.content {
  text-align: center;
}

.trust-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: #ffffff;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.users-icon {
  margin-right: 0.5rem;
  font-size: 1rem;
}

.users-icon-2 {
  margin-right: 0.5rem;
  font-size: 2.5rem;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.05;
  margin-bottom: 1.5rem;
}

@media (min-width: 1024px) {
  .title {
    font-size: 3.75rem;
  }
}

.highlight {
  display: block;
  color: #60a5fa;
}

.description {
  font-size: 1.25rem;
  color: #d1d5db;
  max-width: 48rem;
  margin: 0 auto 3rem;
}

.stats-grid {
  display: grid;
  gap: 2rem;
  max-width: 64rem;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.stat-item {
  text-align: center;
}

.stars {
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.star {
  font-size: 1.5rem;
  color: #facc15;
}

.trending-icon {
  display: block;
  font-size: 2rem;
  color: #60a5fa;
  margin: 0 auto 0.5rem;
}

.stat-value {
  font-size: 1.875rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.stat-label {
  color: #d1d5db;
}
</style>