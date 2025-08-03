<template>
  <section class="contact-faq">
    <div class="container">
      <div class="content-center">
        <div class="faq-badge">
          <svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.144 2.54-2.873 2.917-.546.103-1.127.408-1.127.908V15m0 0H12m0 0H9m3 0h3"/>
          </svg>
          Frequently Asked Questions
        </div>

        <h2 class="main-heading">Common Questions</h2>
        <p class="description">
          Find quick answers to the most common questions about contacting our support team.
        </p>
      </div>

      <div class="faq-list">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
          <button
              class="faq-button"
              @click="openIndex = openIndex === index ? null : index"
          >
            <span class="faq-question">{{ faq.question }}</span>
            <svg v-if="openIndex === index" class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
            </svg>
            <svg v-else class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div v-if="openIndex === index" class="faq-answer">
            <p class="answer-text">{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <div class="contact-cta">
        <p class="cta-text">Still have questions?</p>
        <button class="cta-button">Contact Support Team</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactFAQ',
  data() {
    return {
      openIndex: 0,
      faqs: [
        {
          question: 'How quickly will I receive a response to my inquiry?',
          answer: 'We aim to respond to all inquiries within 2 hours during business hours. For urgent trading-related issues, our 24/7 live chat support is available on the platform.'
        },
        {
          question: 'What information should I include in my support request?',
          answer: 'Please include your account email, a detailed description of your issue, any error messages you\'ve encountered, and screenshots if applicable. This helps us resolve your issue faster.'
        },
        {
          question: 'Can I schedule a phone call with a trading expert?',
          answer: 'Yes! Our premium account holders can schedule one-on-one consultations with our trading experts. Contact us to arrange a convenient time for your call.'
        },
        {
          question: 'Do you offer support in languages other than English?',
          answer: 'Currently, our primary support is in English. However, we have multilingual support available for major European and Asian languages. Please specify your preferred language in your inquiry.'
        },
        {
          question: 'How can I provide feedback about the platform?',
          answer: 'We welcome all feedback! You can use this contact form, email us directly, or use the feedback feature within the trading platform. Your input helps us improve our services.'
        },
        {
          question: 'Is there a way to report technical issues or bugs?',
          answer: 'Yes, please use the "Technical Issues" subject when contacting us. Include details about your browser, operating system, and steps to reproduce the issue for faster resolution.'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Base styles */
.contact-faq {
  padding: 5rem 0;
  background-color: #F9FAFB;
}

/* Container */
.container {
  max-width: 64rem;
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
  background-color: #DBEAFE;
  color: #1E40AF;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
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
  color: #111827;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #4B5563;
}

/* FAQ list */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #F3F4F6;
  overflow: hidden;
}

.faq-button {
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  text-align: left;
  transition: background-color 0.2s ease;
}

.faq-button:hover {
  background-color: #F9FAFB;
}

.faq-question {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  padding-right: 1rem;
}

.faq-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.faq-icon[open] {
  color: #2563EB;
}

.faq-icon:not([open]) {
  color: #9CA3AF;
}

.faq-answer {
  padding: 0 2rem 1.5rem;
}

.answer-text {
  color: #4B5563;
  line-height: 1.625;
}

/* Contact CTA */
.contact-cta {
  text-align: center;
  margin-top: 3rem;
}

.cta-text {
  color: #4B5563;
  margin-bottom: 1rem;
}

.cta-button {
  padding: 0.75rem 2rem;
  background-color: #2563EB;
  color: #ffffff;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
  border: none;
}

.cta-button:hover {
  background-color: #1D4ED8;
}
</style>