<template>





    <section class="values-section">
      <div class="container">
        <div class="header">
          <h2 class="title">
            Our <span class="title-highlight">Values</span>
          </h2>
          <p class="description">
            Everything we do is in service of our clients and their best interests. This is exemplified by our core values, which align with our
            mission, and help us achieve our vision.
          </p>
        </div>
        <div class="values-grid">
          <div v-for="(value, index) in values" :key="index" class="value-card">
            <div class="value-content">
              <div class="value-icon">
<!--                <component :is="value.icon" class="icon" />-->
                <img :src="value.icon" :alt="value.title"  class="icon" />
              </div>
              <div class="value-text">
                <h3 class="value-title">{{ value.title }}</h3>
                <p class="value-description">{{ value.description }}</p>

                  <img :src="value.mockup" :alt="value.title" class="image"  />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

</template>

<script>
export default {
  name: "AboutSection3",
  data() {
    return {
      values: [
        {
          icon: require("@/assets/icons8-light-bulb-50.png"),
          title: 'Innovation',
          description: 'We always provide our clients with the latest and greatest in trading tech.',
          mockup: require('@/assets/about-benefit-1.svg'),
        },
        {
          icon: require("@/assets/icons8-bullseye-50.png"),
          title: 'Empowerment',
          description: 'We empower users to take control.',
          mockup: require('@/assets/about-benefit-2.svg'),
        },
        {
          icon: require("@/assets/icons8-heart-50.png"),
          title: 'Client-focus',
          description: 'Before we do anything, we always think about our users, and how they will benefit.',
          mockup: require('@/assets/afr-contact.webp'),
        },
        {
          icon:  require("@/assets/icons8-eye-50.png"),
          title: 'Transparency',
          description: 'We earn the trust of clients by being clear about everything from the very start.',
          mockup: require('@/assets/afr-contact.webp'),
        }
      ]
    };
  }
}
</script>

<style scoped>


.values-section {
  padding: 5rem 0;
  background-color: #111827;
  color: white;
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
  margin-bottom: 1.5rem;
}

.title-highlight {
  color: #60A5FA;
}

.description {
  font-size: 1.25rem;
  color: #D1D5DB;
  max-width: 64rem;
  margin: 0 auto;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.value-card {
  background-color: #1F2937;
  border-radius: 1rem;
  padding: 2rem;
  transition: background-color 0.3s ease;
}

.value-card:hover {
  background-color: #374151;
}

.value-content {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.value-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #2563EB;
  border-radius: 0.75rem;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
}

.value-text {
  flex: 1;
}

.value-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.value-description {
  color: #D1D5DB;
  margin-bottom: 1.5rem;
  line-height: 1.75;
}

.value-mockup {

}

.image{
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>