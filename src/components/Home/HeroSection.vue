<template>
  <section class="hero">
    <div class="hero-content">

      <div class="hero-text">
        <p class="headline">
          A Distinguished, multi-award-winning provider of stock market solutions.
        </p>
        <p class="subtext">
          We are proud to offer traders advanced and innovative trading platform technologies designed for
          performance and reliability.
        </p>

        <div class="button-group">
          <button class="btn-primary" @click="onPostClick">Open Account</button>
          <button class="btn-secondary" @click="onPostClick2">Trading Platform</button>
        </div>

        <p class="fine-print">
          *Equity and index fund trading utilizing advanced charting and analytical tools.
        </p>
      </div>

      <div class="hero-image">
        <img
            src="https://primexbt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrypto-futures.0d36e92f.png&w=3840&q=75"
            alt="Trading Illustration"
        />
      </div>

    </div>

    <div class="hero-features">
      <div class="feature">
        <img src="https://img.icons8.com/fluency/48/compass.png" alt="compass" />
        <p>Enhanced Tools</p>
      </div>
      <div class="feature">
        <img src="https://img.icons8.com/fluency/48/book--v1.png" alt="book" />
        <p>Trading Guides</p>
      </div>
      <div class="feature">
        <img src="https://img.icons8.com/ultraviolet/40/lightning-bolt.png" alt="speed" />
        <p>Fast Execution</p>
      </div>
      <div class="feature">
        <img src="https://img.icons8.com/ultraviolet/40/discount.png" alt="discount" />
        <p>0% Commission</p>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "HeroSection",
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
    onPostClick2() {
      this.$router.push("/login");
    },
  },
};
</script>


<style scoped>

.hero {
  padding: 2rem 1rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.hero-text {
  max-width: 600px;
  text-align: center;
}

.headline {
  font-size: 2rem;
  font-weight: bold;
  color: #191C1F;
  margin-bottom: 1rem;
}

.subtext {
  font-size: 1rem;
  color: #8599a6;
  margin-bottom: 1.5rem;
}

.fine-print {
  font-size: 0.85rem;
  color: #8599a6;
  margin-top: 1.5rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: left;
  flex-wrap: wrap;
}

button {
  border: none;
  cursor: pointer;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-size: 0.95rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: background 0.3s ease;
}

.btn-primary {
  background-color: #007aff;
  color: white;
}

.btn-primary:hover {
  background-color: #0063cc;
}

.btn-secondary {
  background-color: transparent;
  border: 1px solid rgba(133, 153, 166, 0.2);
  color: #191C1F;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 20px;
}

.hero-features {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #191C1F;
}

/* Responsive Breakpoints */
@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .hero-text {
    text-align: left;
    max-width: 45%;
  }

  .hero-image {
    max-width: 50%;
  }
}

@media (max-width: 480px) {
  .headline {
    font-size: 1.5rem;
  }

  .subtext {
    font-size: 0.9rem;
  }

  .fine-print {
    font-size: 0.75rem;
  }

  button {
    width: 100%;
  }

  .button-group {
    flex-direction: column;
    gap: 0.75rem;
  }
}


</style>