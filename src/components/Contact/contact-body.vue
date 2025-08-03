<template>
  <section class="contact-form">
    <div class="container">
      <div class="content-grid">
        <!-- Left Side - Image and Info -->
        <div class="left-content">
          <div class="info-card">
            <img
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Customer support representative"
                class="info-image"
            />
            <h3 class="info-heading">Get Expert Support</h3>
            <p class="info-text">
              Our friendly team of trading experts is ready to help you with any questions
              about our platform, investment strategies, or account management.
            </p>
          </div>

          <!-- Contact Methods -->
          <div class="contact-methods">
            <div class="contact-method">
              <svg class="method-icon text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <div>
                <div class="method-title">Email Support</div>
                <div class="method-detail">support@topsharespro.com</div>
              </div>
            </div>

            <div class="contact-method">
              <svg class="method-icon text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-5.279A2 2 0 014 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              <div>
                <div class="method-title">Live Chat</div>
                <div class="method-detail">Available 24/7 on our platform</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Contact Form -->
        <div class="form-card">
          <div class="form-header">
            <h2 class="form-heading">Get in Touch</h2>
            <p class="form-description">
              Our friendly team would love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div v-if="isSubmitted" class="success-message">
            <svg class="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 class="success-heading">Message Sent!</h3>
            <p class="success-text">Thank you for contacting us. We'll get back to you within 2 hours.</p>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="form-content">
            <div class="form-grid">
              <div class="form-group">
                <label for="firstName" class="form-label">First Name *</label>
                <div class="input-wrapper">
                  <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      v-model="formData.firstName"
                      required
                      class="form-input"
                      placeholder="Enter your first name"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="lastName" class="form-label">Last Name *</label>
                <div class="input-wrapper">
                  <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      v-model="formData.lastName"
                      required
                      class="form-input"
                      placeholder="Enter your last name"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email Address *</label>
              <div class="input-wrapper">
                <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <input
                    type="email"
                    id="email"
                    name="email"
                    v-model="formData.email"
                    required
                    class="form-input"
                    placeholder="Enter your email address"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">Subject *</label>
              <select
                  id="subject"
                  name="subject"
                  v-model="formData.subject"
                  required
                  class="form-select"
              >
                <option value="">Select a subject</option>
                <option value="account">Account Support</option>
                <option value="trading">Trading Questions</option>
                <option value="technical">Technical Issues</option>
                <option value="billing">Billing & Payments</option>
                <option value="general">General Inquiry</option>
                <option value="partnership">Partnership Opportunities</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message *</label>
              <textarea
                  id="message"
                  name="message"
                  v-model="formData.message"
                  required
                  rows="6"
                  class="form-textarea"
                  placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <div class="form-checkbox">
              <input
                  type="checkbox"
                  id="agreeToPolicy"
                  name="agreeToPolicy"
                  v-model="formData.agreeToPolicy"
                  required
                  class="checkbox-input"
              />
              <label for="agreeToPolicy" class="checkbox-label">
                I agree to TopShares Pro's
                <a href="#" class="link">Privacy Policy</a>
                and
                <a href="#" class="link">Terms of Service</a>
              </label>
            </div>

            <button type="submit" class="submit-button">
              Send Message
              <svg class="submit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: "contact-body",
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        agreeToPolicy: false
      },
      isSubmitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.isSubmitted = true;
      setTimeout(() => {
        this.isSubmitted = false;
        this.formData = {
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
          agreeToPolicy: false
        };
      }, 3000);
    }
  }
}
</script>

<style scoped>
/* Base styles */
.contact-form {
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

/* Grid layout */
.content-grid {
  display: grid;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Left content */
.left-content {
  position: relative;
}

.info-card {
  background: linear-gradient(to bottom right, #EFF6FF, #E0E7FF);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
}

.info-image {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
}

.info-heading {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.info-text {
  color: #4B5563;
  line-height: 1.625;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-method {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #F9FAFB;
  border-radius: 0.5rem;
}

.method-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

.text-blue-600 {
  color: #2563EB;
}

.text-green-600 {
  color: #16A34A;
}

.method-title {
  font-weight: 600;
  color: #111827;
}

.method-detail {
  color: #4B5563;
}

/* Right content - Form */
.form-card {
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  border: 1px solid #F3F4F6;
}

.form-header {
  margin-bottom: 2rem;
}

.form-heading {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.form-description {
  color: #4B5563;
}

.success-message {
  text-align: center;
  padding: 3rem 0;
}

.success-icon {
  width: 4rem;
  height: 4rem;
  color: #22C55E;
  margin: 0 auto 1rem;
}

.success-heading {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.success-text {
  color: #4B5563;
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: #9CA3AF;
}

.form-input, .form-select, .form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #D1D5DB;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.form-input {
  padding-left: 2.5rem;
  padding-right: 1rem;
}

.form-input:focus, .form-select:focus, .form-textarea:focus {
  outline: none;
  border-color: transparent;
  box-shadow: 0 0 0 2px #3B82F6;
}

.form-textarea {
  resize: none;
}

.form-checkbox {
  display: flex;
  align-items: flex-start;
}

.checkbox-input {
  margin-top: 0.25rem;
  width: 1rem;
  height: 1rem;
  color: #2563EB;
  border: 1px solid #D1D5DB;
  border-radius: 0.25rem;
}

.checkbox-input:focus {
  box-shadow: 0 0 0 2px #3B82F6;
}

.checkbox-label {
  margin-left: 0.75rem;
  font-size: 0.875rem;
  color: #4B5563;
}

.link {
  color: #2563EB;
  text-decoration: underline;
}

.link:hover {
  color: #1D4ED8;
}

.submit-button {
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: #2563EB;
  color: #ffffff;
  border-radius: 0.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border: none;
}

.submit-button:hover {
  background-color: #1D4ED8;
  transform: scale(1.05);
}

.submit-icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0.5rem;
}

.submit-button:hover .submit-icon {
  transform: translateX(0.25rem);
}
</style>