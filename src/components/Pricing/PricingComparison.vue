<template>
  <section class="pricing-comparison">
    <div class="container">
      <div class="header">
        <h2 class="main-heading">
          Compare Plans
        </h2>
        <p class="description">
          See what's included in each investment plan and choose the one that's right for you.
        </p>
      </div>

      <div class="table-wrapper">
        <table class="feature-table">
          <thead>
          <tr class="table-header">
            <th class="feature-column">Features</th>
            <th class="plan-column">Silver</th>
            <th class="plan-column">Gold</th>
            <th class="plan-column">Diamond</th>
            <th class="plan-column">Platinum</th>
            <th class="plan-column">VIP</th>
          </tr>
          </thead>
          <tbody v-for="(category, categoryIndex) in features" :key="categoryIndex">
          <tr class="category-row">
            <td colspan="6" class="category-title">
              {{ category.category }}
            </td>
          </tr>
          <tr v-for="(item, itemIndex) in category.items" :key="itemIndex" class="feature-row">
            <td class="feature-name">{{ item.name }}</td>
            <td class="plan-cell">
              <svg v-if="item.silver" class="icon-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <svg v-else class="icon-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </td>
            <td class="plan-cell">
              <svg v-if="item.gold" class="icon-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <svg v-else class="icon-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </td>
            <td class="plan-cell">
              <svg v-if="item.diamond" class="icon-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <svg v-else class="icon-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </td>
            <td class="plan-cell">
              <svg v-if="item.platinum" class="icon-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <svg v-else class="icon-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </td>
            <td class="plan-cell">
              <svg v-if="item.vip" class="icon-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <svg v-else class="icon-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingComparison',
  data() {
    return {
      features: [
        {
          category: 'Platform Access',
          items: [
            { name: 'Web Trading Platform', silver: true, gold: true, diamond: true, platinum: true, vip: true },
            { name: 'Advanced Charting', silver: false, gold: true, diamond: true, platinum: true, vip: true },
            { name: 'API Access', silver: false, gold: false, diamond: true, platinum: true, vip: true },
          ]
        },
        {
          category: 'Support & Service',
          items: [
            { name: '24/7 Support', silver: true, gold: true, diamond: true, platinum: true, vip: true },
            { name: 'Priority Support', silver: false, gold: true, diamond: true, platinum: true, vip: true },
            { name: 'Personal Account Manager', silver: false, gold: true, diamond: true, platinum: true, vip: true },
            { name: 'Dedicated Support Team', silver: false, gold: false, diamond: false, platinum: true, vip: true },
          ]
        },
        {
          category: 'Investment Features',
          items: [
            { name: 'Guaranteed Returns', silver: true, gold: true, diamond: true, platinum: true, vip: true },
            { name: 'Risk Management Tools', silver: false, gold: true, diamond: true, platinum: true, vip: true },
            { name: 'Custom Strategies', silver: false, gold: false, diamond: true, platinum: true, vip: true },
            { name: 'Private Market Access', silver: false, gold: false, diamond: false, platinum: true, vip: true },
          ]
        }
      ]
    };
  }
}
</script>

<style scoped>
/* Base styles */
.pricing-comparison {
  padding: 5rem 0;
  background-color: #ffffff;
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

.description {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #4B5563;
  max-width: 48rem;
  margin: 0 auto;
}

/* Table wrapper */
.table-wrapper {
  overflow-x: auto;
  width: 100%;
}

/* Table */
.feature-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
}

/* Table header */
.table-header {
  border-bottom: 2px solid #E5E7EB;
}

.feature-column {
  text-align: left;
  padding: 1rem 1.5rem;
  font-weight: 600;
  color: #111827;
  width: 30%;
}

.plan-column {
  text-align: center;
  padding: 1rem 1.5rem;
  font-weight: 600;
  color: #111827;
  width: 17.5%;
}

/* Category row */
.category-row {
  background-color: #F9FAFB;
}

.category-title {
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: #1F2937;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: left;
}

/* Feature row */
.feature-row {
  border-bottom: 1px solid #F3F4F6;
  transition: background-color 0.2s ease;
}

.feature-row:hover {
  background-color: #F9FAFB;
}

.feature-name {
  padding: 1rem 1.5rem;
  color: #374151;
  font-size: 1rem;
  line-height: 1.5rem;
}

.plan-cell {
  padding: 1rem 1.5rem;
  text-align: center;
  vertical-align: middle;
}

/* Icons */
.icon-check {
  width: 1.25rem;
  height: 1.25rem;
  color: #22C55E;
  margin: 0 auto;
}

.icon-x {
  width: 1.25rem;
  height: 1.25rem;
  color: #D1D5DB;
  margin: 0 auto;
}
</style>