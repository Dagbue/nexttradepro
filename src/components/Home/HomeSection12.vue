<template>

  <section class="trading-products">
    <div class="container">
      <div class="grid-container">
        <div class="intro">
          <h2>Trading products</h2>
          <p>
            Select from six diverse asset classes and gain access to over 180
            trading instruments.
          </p>
        </div>

        <div class="products-grid">
<!--          <div-->
<!--              v-for="(product, index) in products"-->
<!--              :key="index"-->
<!--              class="product-card"-->
<!--          >-->
<!--            <div :class="['icon-container', product.color]">-->
<!--              <component :is="product.icon" class="icon" />-->
<!--            </div>-->
<!--            <h3>{{ product.name }}</h3>-->
<!--          </div>-->

          <div class="product-card" v-for="(item, index) in items" :key="index">
            <i :class="[ 'icon-container' , item.icon]"></i>
            <h3>{{ item.label }}</h3>
          </div>

        </div>
      </div>
    </div>
  </section>
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
.trading-products {
  background-color: #111827;
  color: white;
  padding: 5rem 1rem;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }
}

.intro h2 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.intro p {
  font-size: 1.25rem;
  color: #d1d5db;
  line-height: 1.75;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.product-card {
  text-align: center;
  cursor: pointer;
}

.product-card:hover .icon-container {
  transform: scale(1.1);
}

.product-card:hover h3 {
  color: #60a5fa;
}

.icon-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.icon {
  width: 2rem;
  height: 2rem;
  color: white;
}

.fa-euro-sign {
  background-color: #3b82f6;
}

.fa-btc {
  background-color: #f97316;
}

.fa-chart-area {
  background-color: #a855f7;
}

.fa-file-contract {
  background-color: #22c55e;
}

.fa-tint {
  background-color: #06b6d4;
}

.fa-cube {
  background-color: #eab308;
}

.product-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  transition: color 0.3s ease;
}
</style>
