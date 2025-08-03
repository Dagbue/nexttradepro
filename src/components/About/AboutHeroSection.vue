<template>
  <section class="hero-section">
    <div class="background-pattern">
      <svg class="pattern-svg" viewBox="0 0 400 200">
        <path
            d="M0,100 Q50,80 100,90 T200,85 T300,80 T400,75"
            stroke="#3B82F6"
            stroke-width="1"
            fill="none"
        />
        <path
            d="M0,120 Q50,100 100,110 T200,105 T300,100 T400,95"
            stroke="#3B82F6"
            stroke-width="1"
            fill="none"
        />
      </svg>
    </div>
    <div class="container">
      <div class="content-grid">
        <div class="text-content">
          <div class="badge">TopShares Pro</div>
          <h1 class="title">
            Access the world of trading
            <span class="title-highlight">with ease.</span>
          </h1>
          <div class="description">
            <p>
              Strategically Build and Grow Your Next High-Performance Trading
              Portfolio with Confidence and Precision.
            </p>
            <p>
              Leverage powerful tools, data-driven insights, and proven strategies
              tailored to your unique investment goals.
            </p>
          </div>
        </div>
        <div class="mobile-interface">
          <div class="interface-card">
            <div class="interface-header">
              <span class="time">9:41</span>
              <div class="status-icons">
                <div class="status-dot"></div>
                <div class="status-dot"></div>
                <div class="status-dot"></div>
              </div>
            </div>
            <div class="action-button">Buy / Sell</div>
            <div class="market-prices">
              <div class="market-title">Current market prices</div>
              <div v-for="(crypto, index) in cryptos" :key="index" class="crypto-item">
                <div class="crypto-info">
                  <div class="crypto-icon">{{ crypto.symbol.charAt(0) }}</div>
                  <div>
                    <div class="crypto-symbol">{{ crypto.symbol }}</div>
                    <div class="crypto-name">{{ crypto.name }}</div>
                  </div>
                </div>
                <div class="crypto-stats">
                  <div class="crypto-price">{{ crypto.price }}</div>
                  <div :class="crypto.positive ? 'price-change-positive' : 'price-change-negative'">
                    {{ crypto.change }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutHeroSection",
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
    onPostClick2() {
      this.$router.push("/login");
    },
  },
  data() {
    return {
      cryptos: [
        { symbol: 'BTC', name: 'Bitcoin', price: '$37,280', change: '+0.11%', positive: true },
        { symbol: 'ETH', name: 'Ethereum', price: '$2,059.47', change: '-1.00%', positive: false },
        { symbol: 'USDT', name: 'Tether', price: '$1.0030', change: '+0.01%', positive: true },
        { symbol: 'USDC', name: 'USD Coin', price: '$1.0030', change: '+0.01%', positive: true },
        { symbol: 'XRP', name: 'Ripple', price: '$0.61', change: '-1.84%', positive: false },
        { symbol: 'ADA', name: 'Cardano', price: '$0.3678', change: '-2.10%', positive: false }
      ]
    };
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  background: linear-gradient(to bottom right, #111827, #1E3A8A, #111827);
  color: white;
  padding-top: 6rem;
  padding-bottom: 5rem;
  overflow: hidden;
  z-index: 0;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: -1;
}

.pattern-svg {
  width: 100%;
  height: 100%;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;

}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: #2563EB;
  color: white;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  width: 170px;
}

.title {
  font-size: 3.75rem;
  font-weight: 700;
  line-height: 1.1;
}

.title-highlight {

  color: #60A5FA;
}

.description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.1rem;
  color: #D1D5DB;
  line-height: 1.2;
}

.interface-card {
  background-color: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-width: 24rem;
  margin: 0 auto;
}

.interface-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.time {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.status-icons {
  display: flex;
  gap: 0.25rem;
}

.status-dot {
  width: 0.25rem;
  height: 0.25rem;
  background-color: #9CA3AF;
  border-radius: 9999px;
}

.action-button {
  background-color: #2563EB;
  color: white;
  padding: 0.75rem;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
}

.market-prices {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.market-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.5rem;
}

.crypto-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #F3F4F6;
  border-radius: 0.5rem;
}

.crypto-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.crypto-icon {
  width: 2rem;
  height: 2rem;
  background-color: #FEEBC8;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: #F97316;
}

.crypto-symbol {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.crypto-name {
  font-size: 0.75rem;
  color: #6B7280;
}

.crypto-stats {
  text-align: right;
}

.crypto-price {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.price-change-positive {
  font-size: 0.75rem;
  color: #16A34A;
}

.price-change-negative {
  font-size: 0.75rem;
  color: #DC2626;
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>