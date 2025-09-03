<template>
  <section class="testimonial-stats">
    <div class="container">
      <div class="header">
        <h2>Trusted by Traders Worldwide</h2>
        <p>Our numbers speak for themselves. Join the millions who have chosen TopShares Pro for their trading success.</p>
      </div>

      <div class="stats-grid">
        <div v-for="(stat, index) in stats" :key="index" class="stat-item">
          <div :class="['icon-wrapper', stat.bgColor]">

            <img :src="stat.icon" :class="['icon', stat.color]" :alt="stat.name" />
          </div>
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <p class="stat-description">{{ stat.description }}</p>
        </div>
      </div>

      <div class="cta">
        <div class="cta-content">
          <h3>Ready to Join Our Success Stories?</h3>
          <p>Start your trading journey today and become our next success story.</p>
          <div class="cta-buttons">
            <button @click="onPostClick" class="btn btn-primary">Start Trading Now</button>
            <button @click="onPostClick" class="btn btn-secondary">View Platform</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "TestimonialStats",
  data() {
    return {
      stats: [
        {
          icon: require("@/assets/icons8-avatar-50.png"),
          value: '1M+',
          label: 'Active Traders',
          description: 'Join our growing community of successful traders',
          color: 'text-blue',
          bgColor: 'bg-blue'
        },
        {
          icon: require("@/assets/icons8-sample-rate-50.png"),
          value: '98%',
          label: 'Success Rate',
          description: 'Of our traders report positive returns',
          color: 'text-green',
          bgColor: 'bg-green'
        },
        {
          icon: require("@/assets/icons8-prize-50.png"),
          value: '4.8/5',
          label: 'Average Rating',
          description: 'Based on 50,000+ verified reviews',
          color: 'text-yellow',
          bgColor: 'bg-yellow'
        },
        {
          icon: require("@/assets/icons8-globe-50.png"),
          value: '150+',
          label: 'Countries',
          description: 'Traders from around the world trust us',
          color: 'text-purple',
          bgColor: 'bg-purple'
        }
      ]
    };
  },
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
  },
}
</script>

<style scoped>
.testimonial-stats {
  padding: 5rem 0;
  background: linear-gradient(to bottom right, #2563eb, #4f46e5);
  color: white;
}

.container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
}

.header h2 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.header p {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 48rem;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-item {
  text-align: center;
}

.stat-item:hover .icon-wrapper {
  transform: scale(1.1);
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.icon {
  width: 2rem;
  height: 2rem;
}

.stat-value {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.stat-description {
  color: #bfdbfe;
  line-height: 1.5;
}

.bg-blue { background-color: #dbeafe; }
.bg-green { background-color: #dcfce7; }
.bg-yellow { background-color: #fef9c3; }
.bg-purple { background-color: #ede9fe; }

.text-blue { color: #2563eb; }
.text-green { color: #16a34a; }
.text-yellow { color: #ca8a04; }
.text-purple { color: #7c3aed; }

.cta {
  text-align: center;
  margin-top: 4rem;
}

.cta-content {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 32rem;
  margin: 0 auto;
}

.cta-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  color: #bfdbfe;
  margin-bottom: 1.5rem;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 640px) {
  .cta-buttons {
    flex-direction: row;
    justify-content: center;
  }
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary {
  background: white;
  color: #2563eb;
}

.btn-primary:hover {
  background: #f3f4f6;
}

.btn-secondary {
  border: 2px solid white;
  background: transparent;
  color: white;
}

.btn-secondary:hover {
  background: white;
  color: #2563eb;
}
</style>