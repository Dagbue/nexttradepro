<template>
  <div class="alpha">
    <section class="features-section">
      <div class="container">
        <div class="features-grid">
          <div v-for="(feature, index) in features" :key="index" class="feature-card">
            <div class="feature-icon">
              <img :src="feature.icon" :alt="feature.title" class="icon" />
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: "AboutSection1",
  data() {
    return {
      features: [
        {
          icon: require('@/assets/multi-asset-platform.svg'),
          title: 'Multi-Asset platform',
          description: 'Stocks, ETFs, Crypto, indices and more'
        },
        {
          icon: require('@/assets/time-tested.svg'),
          title: 'Time-tested',
          description: 'Established company and experienced broker, since 2016'
        },
        {
          icon: require('@/assets/insurance.svg'),
          title: 'Investment Insurance',
          description: 'Up to 1 million euros/AUD to eligible clients**'
        },
        {
          icon: require('@/assets/social-trading.svg'),
          title: 'Social Trading',
          description: 'A community of over 30 million users'
        },
        {
          icon: require('@/assets/investing-with-experts.svg'),
          title: 'Investing with experts',
          description: 'Unique portfolios and the ability to copy top traders'
        },
        {
          icon: require('@/assets/protecting-your-funds.svg'),
          title: 'Protecting your funds',
          description: 'And personal information'
        }
      ]
    };
  }
}
</script>

<style scoped>



.features-section {
  padding: 5rem 0;
  background-color: white;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  background-color: #F9FAFB;
  border-radius: 1rem;
  transition: box-shadow 0.3s ease;
}

.feature-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background-color: #DBEAFE;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  transition: background-color 0.3s ease;
}


.icon {
  width: 2.5rem;
  height: 2.5rem;
  color: #2563EB;
  transition: color 0.3s ease;
}

.feature-card:hover .icon {
  color: white;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
}

.feature-description {
  color: #6B7280;
  line-height: 1.75;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}


</style>