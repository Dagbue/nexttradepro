<template>
  <section class="contact-info">
    <div class="container">
      <div class="content-center">
        <h2 class="main-heading">Multiple Ways to Reach Us</h2>
        <p class="description">
          Choose the contact method that works best for you. Our support team is ready to help with any questions.
        </p>
      </div>

      <!-- Contact Methods -->
      <div class="contact-grid">
        <div v-for="(method, index) in contactMethods" :key="index" class="contact-card">
          <div :class="['contact-icon-wrapper', method.color]">
            <component :is="method.icon" class="contact-icon" />
          </div>
          <h3 class="contact-title">{{ method.title }}</h3>
          <p class="contact-description">{{ method.description }}</p>
          <div class="contact-details">
            <div class="contact-info-text">{{ method.contact }}</div>
            <div class="contact-availability">{{ method.availability }}</div>
          </div>
        </div>
      </div>

      <!-- Features -->
      <div class="features-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-item">
          <div class="feature-icon-wrapper">
            <component :is="feature.icon" class="feature-icon" />
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "ContactInfo",
  data() {
    return {
      contactMethods: [
        {
          icon: "MailIcon",
          title: 'Email Support',
          description: 'Get help via email',
          contact: 'support@topsharespro.com',
          availability: '24/7 Support',
          color: 'bg-blue-100 text-blue-600'
        },
        {
          icon: "PhoneIcon",
          title: 'Phone Support',
          description: 'Speak with our experts',
          contact: '+44 20 7946 0958',
          availability: 'Mon-Fri 9AM-6PM GMT',
          color: 'bg-green-100 text-green-600'
        },
        {
          icon: "MapPinIcon",
          title: 'Office Address',
          description: 'Visit our headquarters',
          contact: '128 City Road, London, EC1V 2NX',
          availability: 'United Kingdom',
          color: 'bg-purple-100 text-purple-600'
        }
      ],
      features: [
        {
          icon: "ClockIcon",
          title: 'Fast Response',
          description: 'Average response time under 2 hours'
        },
        {
          icon: "GlobeIcon",
          title: 'Global Support',
          description: 'Supporting traders in 150+ countries'
        },
        {
          icon: "ShieldIcon",
          title: 'Secure Communication',
          description: 'All communications are encrypted and secure'
        }
      ]
    }
  }

}
</script>

<style scoped>
/* Base styles */
.contact-info {
  padding: 5rem 0;
  background-color: #F9FAFB;
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

.main-heading {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #4B5563;
  max-width: 48rem;
  margin: 0 auto;
}

/* Contact grid */
.contact-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.contact-card {
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.contact-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.contact-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.contact-card:hover .contact-icon-wrapper {
  transform: scale(1.1);
}

.bg-blue-100 {
  background-color: #DBEAFE;
}

.text-blue-600 {
  color: #2563EB;
}

.bg-green-100 {
  background-color: #DCFCE7;
}

.text-green-600 {
  color: #16A34A;
}

.bg-purple-100 {
  background-color: #EDE9FE;
}

.text-purple-600 {
  color: #7C3AED;
}

.contact-icon {
  width: 2rem;
  height: 2rem;
}

.contact-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
}

.contact-description {
  color: #4B5563;
  margin-bottom: 1rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-info-text {
  font-weight: 600;
  color: #111827;
}

.contact-availability {
  font-size: 0.875rem;
  color: #6B7280;
}

/* Features grid */
.features-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-item {
  text-align: center;
}

.feature-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #DBEAFE;
  color: #2563EB;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
}

.feature-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.feature-title {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.feature-description {
  color: #4B5563;
}
</style>