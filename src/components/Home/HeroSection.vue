<template>
  <section class="hero">
    <div style="display: none" class="hero-content">

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
<!--        <img width="52" height="52" src="https://img.icons8.com/3d-fluency/94/administrative-tools.png" alt="administrative-tools"/>-->
        <div class="icon-background">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="icon">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        </div>
        <p class="feature-header">Enhanced Tools</p>
        <p class="feature-text" >Advanced trading tools and analytics to help you make informed decisions.</p>
      </div>
      <div class="feature">
<!--        <img width="52" height="52" src="https://img.icons8.com/3d-fluency/94/candle-sticks.png" alt="candle-sticks"/>-->
        <div class="icon-background">
          <svg xmlns="http://www.w3.org/2000/svg"  class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
          </svg>
        </div>
        <p class="feature-header" >Trading Guides</p>
        <p class="feature-text" >Comprehensive guides and educational resources for traders of all levels.</p>
      </div>
      <div class="feature">
<!--        <img src="https://img.icons8.com/ultraviolet/40/lightning-bolt.png" alt="speed" />-->
        <div class="icon-background">
          <svg  class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        </div>
        <p class="feature-header" >Fast Execution</p>
        <p class="feature-text" >Lightning-fast order execution with minimal latency for optimal trading.</p>
      </div>
      <div class="feature">
<!--        <img width="52" height="52" src="https://img.icons8.com/3d-fluency/94/statistics-report.png" alt="statistics-report"/>-->
        <div  class="icon-background">
          <svg  class="icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
          </svg>
        </div>
        <p class="feature-header" >0% Commission</p>
        <p class="feature-text">Trade without commission fees and maximize your investment returns.</p>
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
  padding: 3rem 0 3.5rem 0;
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
  margin-left: 5%;
  margin-right: 5%;
}

.feature {
  display: block;
  align-items: center;
  font-size: 0.95rem;
  color: #191C1F;
}

.icon-background{
  margin-bottom: 12px;
}


.icon{
  width: 80px;
  display: block;
  margin: 0 auto;
  color: #2563EBFF;
  background-color: #DBEAFEFF;
  padding: 22px 24px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in;
  margin-bottom: 20px;
}

.icon:hover {
  color: #ffffff;
  background-color: #2563EBFF;
}

.feature-header{
  text-align: center;
  font-weight: 600;
  padding-bottom: 12px;
  font-size: 17px;
}

.feature-text{
  width: 85%;
  display: block;
  margin: 0 auto;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  line-height: 1.4;
  color: #8599a6;
}


/* Responsive Breakpoints */
@media (max-width: 768px) {
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

  .hero-features {
    margin-left: unset;
    margin-right: unset;
    display: block;
  }

  .feature {
    margin-bottom: 5%;
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
  .hero-features {
    margin-left: unset;
    margin-right: unset;
    display: block;
  }
}


</style>