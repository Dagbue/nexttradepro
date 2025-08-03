<template>
  <div class="login-container">
    <!-- Background Pattern -->
    <div class="background-pattern"></div>
    <div class="background-overlay"></div>

    <!-- OTP Card -->
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
          <h2 class="welcome-heading">Verify Email Address</h2>
          <p class="welcome-text">Enter OTP sent to your email address</p>
        </div>

        <!-- OTP Form -->
        <form @submit.prevent="completeEnrollment" class="form-content">
          <!-- OTP Input -->
          <div class="pin-code">
            <div class="vue-otp-input">
              <div
                  class="otp-wrapper"
                  :class="isInputFocused ? activeWrapperClassHandler : wrapperClassHandler"
                  :style="wrapperStyle"
                  :id="id"
              >
                <input
                    v-for="(digitInput, index) in digits"
                    ref="digitInput"
                    :key="id + index"
                    autocomplete="one-time-code"
                    v-model="inputValue[index]"
                    class="otp-input"
                    :class="[inputClassHandler, activeInput === index ? activeInputClassHandler : '']"
                    :placeholder="placeholder"
                    :disabled="isDisabled"
                    @focus="onFocus(index)"
                    @blur="onBlur"
                    @paste="OnPaste"
                    @input="onInput(index, $event)"
                    @change="onChanged(index)"
                    @keydown="keydownHandler(index, $event)"
                    :style="inputStyle"
                    required
                />
              </div>
              <span v-if="!isValid" :class="errorClassHandler">
                <slot name="errorMessage"></slot>
              </span>
            </div>
          </div>

          <!-- Verify Button -->
          <base-button
              :loading="loading"
              style="background: #007aff; border: 1px solid #007aff; color: white;"
              class="signin-button"
          >
            Verify Email
            <svg class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </base-button>

          <!-- Resend OTP -->
          <div class="signup-section">
            <p class="signup-text">
              Didn’t get a code?
              <button type="button" @click="resendOtp" class="signup-link">Resend OTP</button>
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
import { mapState } from "vuex";
import StoreUtils from "@/utility/StoreUtils";
import Swal from "sweetalert2";

export default {
  name: 'EmailAuthForm',
  components: { BaseButton },
  props: {
    id: {
      type: String,
      default: "otp",
    },
    digits: {
      type: Number,
      default: 6,
    },
    mode: {
      type: String,
      default: "separate",
    },
    type: {
      type: String,
      default: "number",
    },
    placeholder: {
      type: String,
      default: "-",
    },
    radius: {
      type: Number,
      default: 5,
    },
    gap: {
      type: Number,
      default: 10,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    rtl: {
      type: Boolean,
      default: false,
    },
    autoFocus: {
      type: Boolean,
      default: true,
    },
    errorClass: {
      type: String,
      default: "",
    },
    separateInputClass: {
      type: String,
      default: "",
    },
    separateWrapperClass: {
      type: String,
      default: "",
    },
    groupInputClass: {
      type: String,
      default: "",
    },
    groupWrapperClass: {
      type: String,
      default: "",
    },
    activeInputClass: {
      type: String,
      default: "",
    },
    activeWrapperClass: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputValue: [],
      joinedValue: "",
      isInputFocused: false,
      activeInput: -1,
    };
  },
  computed: {
    ...mapState({
      loading: state => state.auth.loading,
      auth: state => state.auth
    }),
    signUpFormData() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getSignUpFormData);
    },
    wrapperStyle() {
      const dir = this.rtl ? "rtl" : "ltr";
      const styles = {
        direction: dir,
        gap: `${this.gap}px`,
        "border-radius": `${this.radius}px`,
      };
      return styles;
    },
    inputStyle() {
      return {
        "--border-radius": `${this.radius}px`,
      };
    },
    inputClassHandler() {
      if (this.mode === "separate") {
        if (this.isValid) {
          return this.separateInputClass ? this.separateInputClass : "defualt-input-separate";
        } else {
          return this.separateInputClass ? this.separateInputClass : "defualt-error-input-separate";
        }
      }
      if (this.mode === "group") {
        return this.groupInputClass ? this.groupInputClass : "defualt-input-group";
      }
      return "";
    },
    activeInputClassHandler() {
      if (this.mode === "separate") {
        return this.activeInputClass ? this.activeInputClass : "defualt-active-input";
      }
      return "";
    },
    activeWrapperClassHandler() {
      if (this.mode === "group") {
        if (this.isValid) {
          return this.activeWrapperClass ? this.activeWrapperClass : "defualt-active-wrapper";
        } else {
          return this.activeWrapperClass ? this.activeWrapperClass : "defualt-error-wrapper-group";
        }
      }
      return "";
    },
    wrapperClassHandler() {
      if (this.mode === "separate") {
        return this.separateWrapperClass ? this.separateWrapperClass : "defualt-wrapper-separate";
      }
      if (this.mode === "group") {
        if (this.isValid) {
          return this.groupWrapperClass ? this.groupWrapperClass : "defualt-wrapper-group";
        } else {
          return this.groupWrapperClass ? this.groupWrapperClass : "defualt-error-wrapper-group";
        }
      }
      return "";
    },
    errorClassHandler() {
      return this.errorClass ? this.errorClass : "default-error-class";
    },
  },
  methods: {
    async completeEnrollment() {
      try {
        // Placeholder for dispatching OTP verification
        // await StoreUtils.dispatch(StoreUtils.actions.auth.verifyOtp, { otp: this.joinedValue });
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'User Created successfully!',
        });
        await this.$router.push("/login");
      } catch (error) {
        console.error('OTP verification failed:', error);
        await Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'OTP verification failed'
        });
      }
    },
    async resendOtp() {
      try {
        await StoreUtils.dispatch(StoreUtils.actions.auth.resendOtp, {
          email: this.signUpFormData.email,
        });
      } catch (error) {
        console.error('Resend OTP failed:', error);
      }
    },
    keydownHandler(index, e) {
      if (e.keyCode === 8 && e.target.value === "") {
        this.$refs.digitInput[Math.max(0, index - 1)].focus();
      }
    },
    onInput(index) {
      const [first, ...rest] =
          this.type === "number"
              ? this.inputValue[index].replace(/[^0-9]/g, "")
              : this.inputValue[index];
      this.inputValue[index] = first === null || first === undefined ? "" : first;
      const lastInputBox = index === this.digits - 1;
      const insertedContent = first !== undefined;
      if (insertedContent && !lastInputBox) {
        this.$refs.digitInput[index + 1].focus();
        this.$refs.digitInput[index + 1].value = rest.join("");
        this.$refs.digitInput[index + 1].dispatchEvent(new Event("input"));
      }
      this.joinedValue = this.inputValue.map((value) => value).join("");
      this.$emit("value", this.joinedValue);
      if (this.joinedValue.length === this.digits) {
        this.onComplete(this.joinedValue);
      }
    },
    onFocus(index) {
      this.activeInput = index;
      this.isInputFocused = true;
    },
    onBlur() {
      this.activeInput = -1;
      this.isInputFocused = false;
    },
    onComplete(joinedValue) {
      this.onBlur();
      this.$refs.digitInput[this.digits - 1].blur();
      this.$emit("on-complete", joinedValue);
    },
    onChanged(index) {
      this.$emit("on-changed", this.inputValue[index]);
    },
    OnPaste(event) {
      this.$emit("on-paste", event);
    },
  },
  mounted() {
    if (this.autoFocus && !this.isDisabled) {
      this.onFocus(0);
      this.$refs.digitInput[0].focus();
      const types = ["text", "password", "number"];
      if (types.indexOf(this.type) !== -1) {
        for (let box of this.$refs.digitInput) {
          box.type = this.type;
        }
      }
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

/* OTP input */
.pin-code {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.vue-otp-input {
  width: 100%;
}

.otp-wrapper {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.otp-input {
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  color: #ffffff;
  font-size: 1.25rem;
  text-align: center;
}

.otp-input::placeholder {
  color: #94A3B8;
}

.otp-input:focus {
  outline: none;
  border-color: #60A5FA;
  background: rgba(255, 255, 255, 0.15);
  transition: all 0.2s ease;
}

.otp-input:disabled {
  background: rgba(255, 255, 255, 0.05) !important;
}

.defualt-error-input-separate {
  border: 1px solid #EF4444;
}

.default-error-class {
  color: #EF4444;
  font-weight: 500;
  font-size: 0.75rem;
  text-align: center;
  margin-top: 0.5rem;
  display: block;
}

/* Sign-in button */
.signin-button {
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
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

/* Sign-up section */
.signup-section {
  text-align: center;
  margin-top: 1rem;
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
  text-decoration: underline;
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

/* Responsive adjustments */
@media (max-width: 600px) {
  .otp-input {
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
  }
}
</style>