<template>
  <section class="pricing-plans">
    <div class="container">
      <div class="intro-text">
        <h2 class="main-heading">Investment Plans</h2>
        <p class="sub-heading">
          Choose the plan that fits your investment goals. All plans come with guaranteed returns and full security.
        </p>
      </div>

      <div class="plans-grid">
        <div
            v-for="(plan, index) in plans"
            :key="index"
            class="plan-card"
            :class="[plan.bgClass, plan.borderClass]"
        >
          <div v-if="plan.popular" class="popular-badge">
            <div class="badge-content">Most Popular</div>
          </div>

          <!-- Plan Header -->
          <div class="plan-header">
            <div :class="['plan-icon', plan.colorClass]">
              <img :src="plan.icon" :class="['icon', plan.color]" :alt="plan.name" />
            </div>
            <h3 :class="['plan-name', plan.textClass]">{{ plan.name }}</h3>
            <div :class="['plan-percentage', plan.textClass]">
              {{ plan.percentage }}
              <span class="roi-text">ROI</span>
            </div>
            <div class="plan-duration">{{ plan.duration }}</div>
          </div>

          <!-- Minimum Deposit -->
          <div class="deposit-section">
            <div class="deposit-box">
              <div class="deposit-label">Minimum Deposit</div>
              <div class="deposit-amount">{{ plan.minDeposit }}</div>
            </div>
          </div>

          <!-- Features -->
          <div class="features-list">
            <div v-for="(feature, featureIndex) in plan.features" :key="featureIndex" class="feature-item">
              <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="feature-text">{{ feature }}</span>
            </div>
          </div>

          <!-- CTA Button -->
          <button @click="onPostClick" :class="['invest-button', plan.colorClass]">
            Invest Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "pricing-body",
  data() {
    return {
      plans: [
        {
          name: 'Silver',
          icon: require("@/assets/icons8-star-50.png"),
          percentage: '10%',
          duration: '5 Months',
          minDeposit: '$5,000',
          colorClass: 'gradient-silver',
          borderClass: 'border-gray',
          bgClass: 'bg-white',
          textClass: 'text-gray',
          features: [
            'Enhanced Security',
            '25% Daily Returns',
            'Guaranteed ROI',
            '24/7 Support',
            'Mobile Trading App',
            'Basic Analytics'
          ],
          popular: false
        },
        {
          name: 'Gold',
          icon: require("@/assets/icons8-crown-50.png"),
          percentage: '20%',
          duration: '4 Months',
          minDeposit: '$25,000',
          colorClass: 'gradient-gold',
          borderClass: 'border-gold',
          bgClass: 'bg-gold',
          textClass: 'text-gray',
          features: [
            'Enhanced Security',
            '40% Daily Returns',
            'Guaranteed ROI',
            '24/7 Priority Support',
            'Advanced Trading Tools',
            'Personal Account Manager',
            'Risk Management Tools'
          ],
          popular: true
        },
        {
          name: 'Diamond',
          icon: require("@/assets/icons8-diamond-50.png"),
          percentage: '30%',
          duration: '3 Months',
          minDeposit: '$100,000',
          colorClass: 'gradient-diamond',
          borderClass: 'border-diamond',
          bgClass: 'bg-diamond',
          textClass: 'text-gray',
          features: [
            'Enhanced Security',
            '55% Daily Returns',
            'Guaranteed ROI',
            '24/7 VIP Support',
            'Professional Trading Suite',
            'Dedicated Account Manager',
            'Custom Investment Strategies',
            'Exclusive Market Insights'
          ],
          popular: false
        },
        {
          name: 'Platinum',
          icon: require("@/assets/icons8-bolt-50.png"),
          percentage: '50%',
          duration: '2 Months',
          minDeposit: '$250,000',
          colorClass: 'gradient-platinum',
          borderClass: 'border-platinum',
          bgClass: 'bg-platinum',
          textClass: 'text-gray',
          features: [
            'Enhanced Security',
            '85% Daily Returns',
            'Guaranteed ROI',
            '24/7 Concierge Support',
            'Enterprise Trading Platform',
            'Team of Account Managers',
            'Bespoke Investment Solutions',
            'Private Market Access',
            'Quarterly Strategy Reviews'
          ],
          popular: false
        },
        {
          name: 'VIP',
          icon: require("@/assets/icons8-star-50.png"),
          percentage: '50%',
          duration: '1 Month',
          minDeposit: '$500,000',
          colorClass: 'gradient-vip',
          borderClass: 'border-vip',
          bgClass: 'bg-Silver',
          textClass: 'text-gray',
          features: [
            'Enhanced Security',
            '100% Daily Returns',
            'Guaranteed ROI',
            '24/7 Concierge Support',
            'Enterprise Trading Platform',
            'Team of Account Managers',
            'Bespoke Investment Solutions',
            'Private Market Access',
            'Quarterly Strategy Reviews'
          ],
          popular: false
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
/* Base styles */
.pricing-plans {
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

/* Intro text */
.intro-text {
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
  max-width: 48rem;
  margin: 0 auto;
}

/* Plans grid */
.plans-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .plans-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .plans-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Plan card */
.plan-card {
  position: relative;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid;
}

.plan-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: translateY(-0.5rem);
}

.bg-white {
  background-color: #ffffff;
}

.bg-gold {
  background: linear-gradient(to bottom right, #FEF9C3, #FFF7ED);
}

.bg-diamond {
  background: linear-gradient(to bottom right, #EFF6FF, #E0E7FF);
}

.bg-platinum {
  background: linear-gradient(to bottom right, #F3E8FF, #FCE7F3);
}

.border-gray {
  border-color: #D1D5DB;
}

.border-gold {
  border-color: #FBBF24;
}

.border-diamond {
  border-color: #60A5FA;
}

.border-platinum {
  border-color: #A78BFA;
}

.border-vip {
  border-color: #874747;
}

/* Popular badge */
.popular-badge {
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
}

.badge-content {
  background: linear-gradient(to right, #FBBF24, #F97316);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 700;
}

/* Plan header */
.plan-header {
  text-align: center;
  margin-bottom: 2rem;
}

.plan-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

.gradient-silver {
  background: linear-gradient(to right, #9CA3AF, #4B5563);
}

.gradient-gold {
  background: linear-gradient(to right, #FBBF24, #D97706);
}

.gradient-diamond {
  background: linear-gradient(to right, #60A5FA, #2563EB);
}

.gradient-platinum {
  background: linear-gradient(to right, #A78BFA, #7C3AED);
}

.gradient-vip {
  background: linear-gradient(to right, rgb(204, 103, 103), #874747);
}

.icon {
  width: 2rem;
  height: 2rem;
  color: #ffffff;
}

.plan-name {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.plan-percentage {
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.roi-text {
  font-size: 1.125rem;
  font-weight: 400;
}

.plan-duration {
  color: #4B5563;
  font-weight: 500;
}

.text-gray {
  color: #111827;
}

/* Minimum deposit */
.deposit-section {
  text-align: center;
  margin-bottom: 1.5rem;
}

.deposit-box {
  background-color: #F3F4F6;
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
}

.deposit-label {
  font-size: 0.875rem;
  color: #4B5563;
  margin-bottom: 0.25rem;
}

.deposit-amount {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: #111827;
}

/* Features list */
.features-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
}

.check-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #22C55E;
  margin-right: 0.75rem;
  flex-shrink: 0;
}

.feature-text {
  color: #374151;
}

/* Invest button */
.invest-button {
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  color: #ffffff;
  transition: all 0.2s ease;
  border: none;
}

.invest-button:hover {
  opacity: 0.9;
  transform: scale(1.05);
}
</style>

