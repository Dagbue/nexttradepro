<template>
  <div class="alpha">
    <div class="section-alpha">
      <!-- Left Text Section -->
      <div class="section-1">
        <p class="section-1-text-1">Trading products</p>
        <p class="section-1-text-2">
          Select from six diverse asset classes and gain access to <br />
          over 180 trading instruments.
        </p>
      </div>

      <!-- Trading Categories -->
      <div class="section-2">
        <div class="section-2-inner" v-for="(item, index) in items" :key="index">
          <i :class="item.icon"></i>
          <p>{{ item.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSection12",
  data() {
    return {
      items: [
        { icon: "fas fa-euro-sign", label: "Futures" },
        { icon: "fab fa-btc", label: "Crypto" },
        { icon: "fas fa-chart-area", label: "Indexes" },
        { icon: "fas fa-file-contract", label: "Stocks" },
        { icon: "fas fa-tint", label: "Energy" },
        { icon: "fas fa-cube", label: "Commodities" },
      ],
    };
  },
};
</script>

<style scoped>
.alpha {
  background-color: hsla(0, 0%, 4%, 1);
  margin-top: 3%;
  padding: 4% 5%;
}

.section-alpha {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}

/* Left Text Section */
.section-1 {
  flex: 1 1 300px;
  min-width: 280px;
  border-right: 1px solid #8599a6;
  padding-right: 2rem;
}

.section-1-text-1 {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.section-1-text-2 {
  font-size: 1rem;
  line-height: 1.25rem;
  color: #8599a6;
}

/* Right Grid Section */
.section-2 {
  flex: 2 1 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.section-2-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  text-align: center;
}

/* Icon Styles */
.fas,
.fab {
  color: #007aff;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 30%;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

/* Label */
.section-2-inner p {
  color: #8599a6;
  font-size: 0.875rem;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .section-alpha {
    flex-direction: column;
    align-items: center;
  }

  .section-1 {
    border-right: none;
    border-bottom: 1px solid #8599a6;
    text-align: center;
    flex: 1 1 120px;
    padding-top: 10px;
  }

  .section-2 {
    justify-content: space-around;
    flex: 2 1 300px;
  }
}

@media (max-width: 480px) {
  .section-2-inner {
    width: 80px;
  }

  .fas,
  .fab {
    padding: 0.75rem;
    font-size: 1.5rem;
  }

  .section-1-text-1 {
    font-size: 1.75rem;
  }

  .section-1-text-2 {
    font-size: 0.875rem;
  }
}
</style>
