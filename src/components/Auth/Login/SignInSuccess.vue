<template>
  <div class="login-container">
    <!-- Background Pattern -->
    <div class="background-pattern"></div>
    <div class="background-overlay"></div>

    <!-- Success Card -->
    <div class="card-wrapper">
      <div class="login-card">
        <!-- Logo Section -->
        <div class="logo-section">
          <router-link to="/">
            <div class="logo-icon">
              <span class="logo-text">T</span>
            </div>
          </router-link>
          <h1 class="logo-title">
            Top<span class="title-highlight">Shares</span><span class="title-sub">Pro</span>
          </h1>
          <p class="logo-subtitle">Trade Smart. Trade TopShares.</p>
        </div>

        <!-- Success Icon -->
        <div class="success-icon">
          <svg fill="none" stroke="#34D399" viewBox="0 0 24 24" class="success-check">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>

        <!-- Welcome Text -->
        <div class="welcome-section">
          <h2 class="welcome-heading">Login Success 🥳</h2>
          <p class="welcome-text">You have successfully logged in to your<br>TopShares Pro account</p>
        </div>

        <!-- Success Form -->
        <form @submit.prevent="signIn" class="form-content">
          <!-- Proceed Button -->
          <base-button
              :loading="loading"
              style="background: #007aff; border: 1px solid #007aff; color: white;"
              class="signin-button"
          >
            Proceed to Dashboard
          </base-button>
        </form>

        <!-- Security Badge -->
        <div class="security-badge">
          <div class="badge-content">
            <div class="badge-dot"></div>
            <span class="badge-text">Secure Connection</span>
          </div>
        </div>
      </div>

      <!-- Floating Elements -->
      <div class="floating-top"></div>
      <div class="floating-bottom"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import StoreUtils from "@/utility/StoreUtils";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import axios from "axios";

export default {
  name: "SignInSuccess",
  components: { BaseButton },
  data() {
    return {
      userId: "",
      userInfo: "",
      bitcoinRate: null,
      loading: false
    };
  },
  computed: {
    ...mapState({
      auth: state => state.auth
    }),
    userDetails() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getUserInfo);
    },
    userTrade() {
      return StoreUtils.rootGetters(StoreUtils.getters.trade.getReadUserTrade);
    }
  },
  methods: {
    async signIn() {
      await this.localStore();
      await this.$router.push("/over-view");
    },
    async localStore() {
      await StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
        userId: localStorage.getItem('userId')
      });
      StoreUtils.commit(StoreUtils.mutations.auth.updateBitcoinRate, {
        bitcoinRate: this.bitcoinRate
      });
      localStorage.userId = this.userDetails.user.userId;
      localStorage.userFirstName = this.userDetails.user.firstName;
      localStorage.userLastName = this.userDetails.user.lastName;
      localStorage.bitcoinRate = this.bitcoinRate;
      localStorage.setItem('userInfo', JSON.stringify(this.userDetails.user));
      localStorage.setItem('userTrade', JSON.stringify(this.userTrade.trades));
    },
    async fetchBitcoinRate() {
      this.loading = true;
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        this.bitcoinRate = response.data.bitcoin.usd;
      } catch (error) {
        console.error('Failed to fetch Bitcoin rate:', error);
      } finally {
        this.loading = false;
      }
    }
  },
  created() {
    this.userId = localStorage.getItem('userId');
    const storedObject = localStorage.getItem('userInfo');
    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
    this.fetchBitcoinRate();
  },
  mounted() {
    this.userId = localStorage.getItem('userId');
    const storedObject = localStorage.getItem('userInfo');
    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId: localStorage.getItem('userId')
    });
  }
}
</script>

<style scoped>
/* Base styles */
.login-container {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #0F172A, #1E3A8A, #0F172A);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  overflow: hidden;
}

/* Background patterns */
.background-pattern {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: radial-gradient(circle at 20% 80%, rgba(120,119,198,0.1), transparent 50%),
  radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05), transparent 50%);
}

.background-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(45deg, transparent 25%, rgba(68,68,68,0.05) 50%, transparent 75%, transparent);
}

/* Card wrapper */
.card-wrapper {
  position: relative;
  width: 100%;
  max-width: 28rem;
}

/* Login card */
.login-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Logo section */
.logo-section {
  text-align: center;
  margin-bottom: 2rem;
}

.logo-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: linear-gradient(to right, #3B82F6, #2563EB);
  border-radius: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.logo-text {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
}

.logo-title {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.title-highlight {
  color: #60A5FA;
}

.title-sub {
  color: #CBD5E1;
}

.logo-subtitle {
  color: #CBD5E1;
  font-size: 0.875rem;
}

/* Success icon */
.success-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.success-check {
  width: 3rem;
  height: 3rem;
  stroke: #34D399;
}

/* Welcome section */
.welcome-section {
  text-align: center;
  margin-bottom: 2rem;
}

.welcome-heading {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.welcome-text {
  color: #94A3B8;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

/* Form content */
.form-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Sign-in button */
.signin-button {
  border-radius: 0.75rem;
  transition: all 0.2s ease;
}

.signin-button:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.button-icon {
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
}

.signin-button:hover .button-icon {
  transform: translateX(0.25rem);
}

/* Security badge */
.security-badge {
  margin-top: 2rem;
  text-align: center;
}

.badge-content {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 9999px;
}

.badge-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #34D399;
  border-radius: 9999px;
  margin-right: 0.5rem;
}

.badge-text {
  color: #6EE7B7;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Floating elements */
.floating-top {
  position: absolute;
  top: -1.5rem;
  right: -1.5rem;
  width: 6rem;
  height: 6rem;
  background: rgba(59, 130, 246, 0.2);
  border-radius: 9999px;
  filter: blur(24px);
}

.floating-bottom {
  position: absolute;
  bottom: -1.5rem;
  left: -1.5rem;
  width: 8rem;
  height: 8rem;
  background: rgba(147, 51, 234, 0.2);
  border-radius: 9999px;
  filter: blur(24px);
}
</style>