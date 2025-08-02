<template>
  <section class="pricing-faq">
    <div class="container">
      <div class="header">
        <h2 class="main-heading">Frequently Asked Questions</h2>
        <p class="sub-heading">Get answers to common questions about our investment plans.</p>
      </div>

      <div class="faq-list">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
          <button
              class="faq-question"
              @click="toggleFAQ(index)"
          >
            <span class="question-text">{{ faq.question }}</span>
            <svg v-if="openIndex === index" class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
            </svg>
            <svg v-else class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div v-if="openIndex === index" class="faq-answer">
            <p class="answer-text">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingFAQ',
  data() {
    return {
      openIndex: 0,
      faqs: [
        {
          question: 'How do the guaranteed returns work?',
          answer: 'Our investment plans offer guaranteed returns based on the percentage specified in each plan. Returns are calculated daily and can be withdrawn or reinvested according to your plan terms.'
        },
        {
          question: 'What is the minimum deposit for each plan?',
          answer: 'Each plan has different minimum deposit requirements: Silver ($5,000), Gold ($25,000), Diamond ($100,000), and Platinum ($250,000). These minimums ensure optimal portfolio management for each tier.'
        },
        {
          question: 'Can I upgrade my plan later?',
          answer: 'Yes, you can upgrade your investment plan at any time. The upgrade will take effect immediately, and you\'ll start earning returns according to your new plan\'s percentage rate.'
        },
        {
          question: 'How secure are my investments?',
          answer: 'All plans include enhanced security measures including SSL encryption, two-factor authentication, segregated accounts, and insurance coverage up to $1 million for eligible clients.'
        },
        {
          question: 'When can I withdraw my funds?',
          answer: 'Withdrawal policies vary by plan. You can withdraw your returns at any time, while principal withdrawals may have specific terms depending on your chosen investment duration.'
        },
        {
          question: 'What support do I get with each plan?',
          answer: 'All plans include 24/7 support. Gold and above include priority support, Diamond and Platinum include personal account managers, and Platinum includes a dedicated support team.'
        }
      ]
    }
  },
  methods: {
    toggleFAQ(index) {
      this.openIndex = this.openIndex === index ? null : index;
    }
  }
}
</script>

<style scoped>
/* Base styles */
.pricing-faq {
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

/* Header */
.header {
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

.sub-heading {
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
  border: 1px solid #F3F4F6;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.faq-question {
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.faq-question:hover {
  background-color: #F9FAFB;
}

.question-text {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: #111827;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.icon path {
  stroke: #2563EB;
}

.faq-question .icon path {
  stroke: #9CA3AF;
}

.faq-question:hover .icon path {
  stroke: #2563EB;
}

.faq-answer {
  padding: 0 2rem 1.5rem;
}

.answer-text {
  color: #4B5563;
  line-height: 1.625;
}
</style>