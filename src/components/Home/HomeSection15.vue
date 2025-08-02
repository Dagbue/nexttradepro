<template>
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <div v-for="(stat, index) in stats" :key="index" class="stat-card">
          <div :class="['stat-value', stat.color]">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>

      <div class="cta-section">
        <div class="button-group">
          <button class="btn btn-primary">Setup Your Trading Account</button>
          <button class="btn btn-secondary">Discover Our Platform</button>
        </div>
        <p class="cta-text">Registration takes only 40 seconds!!!</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeSection15",
  data() {
    return {
      stats: [
        {
          value: '< 7.12 ms',
          label: 'Average order execution speed',
          color: 'text-blue'
        },
        {
          value: '12+',
          label: 'Integrated liquidity providers',
          color: 'text-green'
        },
        {
          value: '> 12,000',
          label: 'Executed orders per second',
          color: 'text-purple'
        },
        {
          value: '$545k',
          label: 'Average trading volume per day',
          color: 'text-orange'
        }
      ]
    }
  }
}
</script>

<style scoped>
.stats-section {
  padding: 5rem 0;
  background-color: #f9fafb;
}

.container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.stat-card {
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.stat-card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

.stat-value {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.text-blue { color: #2563eb; }
.text-green { color: #16a34a; }
.text-purple { color: #7c3aed; }
.text-orange { color: #ea580c; }

.stat-label {
  color: #4b5563;
  font-weight: 500;
}

.cta-section {
  text-align: center;
  margin-top: 4rem;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

@media (min-width: 640px) {
  .button-group {
    flex-direction: row;
  }
}

.btn {
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #1f2937;
}

.btn-primary:hover {
  background-color: #111827;
}

.btn-secondary {
  background-color: #2563eb;
}

.btn-secondary:hover {
  background-color: #1d4ed8;
}

.cta-text {
  color: #4b5563;
  margin-top: 1rem;
  font-weight: 500;
}
</style>