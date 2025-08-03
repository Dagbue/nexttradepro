<template>
  <div class="login-container">
    <!-- Background Pattern -->
    <div class="background-pattern"></div>
    <div class="background-overlay"></div>

    <!-- Login Card -->
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

        <!-- Welcome Text -->
        <div class="welcome-section">
          <h2 class="welcome-heading">Welcome Back</h2>
          <p class="welcome-text">Sign in to your TopShares Pro account</p>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="signIn" class="form-content">
          <!-- Email Field -->
          <div class="input-group">
            <div class="input-icon-wrapper">
              <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <input
                type="email"
                v-model="model.email"
                placeholder="Email address"
                required
                class="form-input"
            />
          </div>

          <!-- Password Field -->
          <div class="input-group">
            <div class="input-icon-wrapper">
              <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0-1.1.9-2 2-2m-2 6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4m2 0c0 2.2-1.8 4-4 4s-4-1.8-4-4m4 4v3"/>
              </svg>
            </div>
            <input
                :type="showPassword ? 'text' : 'password'"
                v-model="model.password"
                placeholder="Password"
                required
                class="form-input password-input"
            />
            <button
                type="button"
                @click="toggleShow"
                class="password-toggle"
            >
              <svg v-if="showPassword" class="toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
              </svg>
              <svg v-else class="toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </button>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="form-options">
            <label class="checkbox-label">
              <input
                  type="checkbox"
                  v-model="rememberMe"
                  class="checkbox-input"
              />
              <span class="checkbox-text">Remember me</span>
            </label>
            <button
                type="button"
                @click="onPostClick2"
                class="forgot-password"
            >
              Forgot Password?
            </button>
          </div>

          <!-- Sign In Button -->
          <base-button
              :loading="loading"
              style="background: #007aff; border: 1px solid #007aff; color: white;"
              class="signin-button"
          >
            Sign In
          </base-button>

          <!-- Divider -->
          <div class="divider">
            <div class="divider-line"></div>
            <span class="divider-text">OR</span>
          </div>

          <!-- Sign Up Link -->
          <div class="signup-section">
            <p class="signup-text">
              Don't have an account?
              <button
                  type="button"
                  @click="onPostClick"
                  class="signup-link"
              >
                Sign up here
              </button>
            </p>
          </div>
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
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import StoreUtils from "@/utility/StoreUtils";
import AuthenticationRequest from "@/model/request/AuthenticationRequest";
import { mapState } from "vuex";

export default {
  name: 'LoginForm',
  components: { BaseButton },
  data() {
    return {
      model: new AuthenticationRequest().login,
      showPassword: false,
      rememberMe: false
    };
  },
  computed: {
    ...mapState({
      loading: state => state.auth.loading,
      auth: state => state.auth
    })
  },
  methods: {
    async signIn() {
      try {
        await StoreUtils.dispatch(StoreUtils.actions.auth.login, this.model);
        // Uncomment the following line to enable navigation after successful login
        // await this.$router.push("/over-view");
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    onPostClick() {
      this.$router.push("/register");
    },
    onPostClick2() {
      this.$router.push("/forgot-password");
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    }
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
}

/* Form content */
.form-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Input group */
.input-group {
  position: relative;
}

.input-icon-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  pointer-events: none;
}

.input-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #94A3B8;
}

.form-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
}

.form-input::placeholder {
  color: #94A3B8;
}

.form-input:focus {
  outline: none;
  border-color: #60A5FA;
  background: rgba(255, 255, 255, 0.15);
  transition: all 0.2s ease;
}

.password-input {
  padding-right: 3rem;
}

.password-toggle {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  color: #94A3B8;
  background: none;
  border: none;
}

.password-toggle:hover {
  color: #ffffff;
}

.toggle-icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Form options */
.form-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.checkbox-label {
  display: flex;
  align-items: center;
}

.checkbox-input {
  width: 1rem;
  height: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;
  color: #3B82F6;
}

.checkbox-input:focus {
  box-shadow: 0 0 0 2px #3B82F6;
}

.checkbox-text {
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: #CBD5E1;
}

.forgot-password {
  font-size: 0.875rem;
  color: #60A5FA;
  background: none;
  border: none;
}

.forgot-password:hover {
  color: #93C5FD;
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

/* Divider */
.divider {
  position: relative;
  margin: 1.5rem 0;
}

.divider-line {
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.divider-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 1rem;
  background: transparent;
  color: #94A3B8;
  font-size: 0.875rem;
}

/* Sign-up section */
.signup-section {
  text-align: center;
}

.signup-text {
  font-size: 0.875rem;
  color: #94A3B8;
}

.signup-link {
  color: #60A5FA;
  font-weight: 500;
  background: none;
  border: none;
}

.signup-link:hover {
  color: #93C5FD;
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