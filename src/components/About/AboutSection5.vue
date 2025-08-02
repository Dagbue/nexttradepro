<template>
  <section class="honor-section">
    <div class="container">
      <div class="header">
        <h2 class="title">
          Our code of <span class="title-highlight">honor</span>
        </h2>
        <p class="description">
          To live up to that mission, we've made three principles that all our teams swear by
        </p>
      </div>
      <div class="honor-grid">
        <div v-for="(principle, index) in codeOfHonor" :key="index" class="principle-card">
          <div class="principle-icon">
<!--            <component :is="principle.icon" class="icon" />-->
          </div>
          <h3 class="principle-title">{{ principle.title }}</h3>
          <p class="principle-description">{{ principle.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "AboutSection5",
  data() {
    return {
      codeOfHonor: [
        {
          icon: '',
          title: 'Our users are our investors',
          description: 'We make most of our money only through low cost monthly subscriptions and ads. We don\'t care if you trade or not. For us, objectivity is excellence.'
        },
        {
          icon: '',
          title: 'It\'s not charts, it\'s freedom',
          description: 'We never lose sight of the fact that millions of traders invest their hard-won capital based on what they see on our platform. The better we do, the better you can do.'
        },
        {
          icon: '',
          title: 'Finance should be social',
          description: 'For us, open discussion and self-expression are the greatest keys to unlocking understanding, so we\'ve set out to build the best finance platform with a strong social network at its core.'
        }
      ]
    };
  }
}
</script>

<style scoped>
.honor-section {
  padding: 5rem 0;
  background-color: white;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
}

.title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
}

.title-highlight {
  color: #2563EB;
}

.description {
  font-size: 1.25rem;
  color: #6B7280;
  max-width: 64rem;
  margin: 0 auto;
}

.honor-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.principle-card {
  text-align: center;
  padding: 2rem;
  background-color: #F9FAFB;
  border-radius: 1rem;
  transition: box-shadow 0.3s ease;
}

.principle-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.principle-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  background-color: #DBEAFE;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  transition: background-color 0.3s ease;
}



.icon {
  width: 2rem;
  height: 2rem;
  color: #2563EB;
  transition: color 0.3s ease;
}

.principle-card:hover .icon {
  color: white;
}

.principle-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.principle-description {
  color: #6B7280;
  line-height: 1.75;
}

@media (max-width: 768px) {
  .honor-grid {
    grid-template-columns: 1fr;
  }
}
</style>