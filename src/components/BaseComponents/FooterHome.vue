<template>
  <footer class="footer">
    <div class="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="#999999" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="10" ></div>
    <div class="container">
      <!-- Main Footer Content -->
      <div class="main-content">
        <!-- Company Info -->
        <div class="company-info">

          <h3>About TopShares Pro</h3>
          <p class="description">
            Established on November 14, 2016, TopShares Pro is a trusted and innovative digital asset,
            stocks, and forex trading platform. We empower international customers with state-of-the-art
            tools and expertise for successful trading and financial management.
          </p>

          <!-- Trust Indicators -->
          <div class="trust-indicators">
            <div v-for="(indicator, index) in trustIndicators" :key="index" class="trust-item">
              <img :src="indicator.icon" class="contact-icon" :alt="indicator.text" />
              <span>{{ indicator.text }}</span>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="quick-links">
          <h3>Quick Links</h3>
          <ul style="list-style-type: none;">
            <li v-for="(link, index) in quickLinks" :key="index">
              <a :href="link.href" class="link">
                <span class="dot"></span>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="contact-info">
          <h3>Get in Touch</h3>
          <div class="contact-items">
            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2a10 10 0 00-3.16 19.43L12 17l3.16 4.43A10 10 0 0012 2z" />
              </svg>
              <p>128 City Road, London,<br />United Kingdom, EC1V 2NX</p>
            </div>

            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:support@topsharespro.com" class="link">support@topsharespro.com</a>
            </div>

            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>24/7 Support Available</span>
            </div>
          </div>

          <button @click="onPostClick3" class="cta-button">Start Trading Now</button>
        </div>
      </div>

      <!-- Partners Section -->
      <div class="partners">
        <h4>Trusted Partners</h4>
        <div class="partner-logos">
          <div v-for="(partner, index) in partnerLogos" :key="index" class="partner-logo">
            <img :src="partner.logo" alt="partner.logo" />
          </div>
        </div>
      </div>

      <!-- REGULATIONS Section -->
      <div class="partners">
        <h4>Regulations</h4>
        <div class="partner-logos">
          <div v-for="(regulation, index) in regulations" :key="index" class="partner-logo-reg">
            <img :src="regulation.icon" alt="regulations" />

            <span>{{ regulation.text }}</span>
          </div>
        </div>
      </div>

      <!-- Regulatory Information -->
      <div class="regulatory">
        <div class="regulatory-content">
          <h4 class="regulatory-title">
            <img src="@/assets/icons8-shield-50.png" alt="shield" class="regulatory-icon" />
            Regulatory Information
          </h4>
          <div class="regulatory-grid">
            <div>

                <p>
                  <strong>TopShares Pro LLC</strong> is part of <strong>TPG Global Advisors</strong> Group of companies with broker entities
                  that are authorised and regulated across multiple jurisdictions.
                </p>
                <a style="color: #2563eb;margin-bottom: 20px;"
                    href="https://adviserinfo.sec.gov/firm/summary/159732"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  To view Certification Click here
                </a>


              <p>
                TopShares Pro Markets Germany GmbH is licensed and regulated by the Bundesanstalt für
                Finanzdienstleistungsaufsicht (BaFin) under registration number 154814.
              </p>
            </div>
            <div>
              <p>
                TopShares Pro Markets UK Plc and TopShares Pro Spreadbet plc are registered in the Register
                of Companies of the Financial Conduct Authority under registration numbers 173730 and 170627.
              </p>
              <p>
                All trading involves risk. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Legal Links -->
      <div class="legal-links">
        <a v-for="(link, index) in legalLinks" :key="index" :href="link.href" class="legal-link">
          {{ link.name }}
        </a>
      </div>

      <!-- Bottom Bar -->
      <div class="bottom-bar">
        <div class="copyright">
          © 2024 TopShares Pro. All rights reserved. Trading involves risk and may not be suitable for all investors.
        </div>
        <div class="company-info">
          <span>Company Registration: 13971404</span>
          <span class="separator">|</span>
          <span>Licensed & Regulated</span>
        </div>
      </div>
    </div>

    <certificate-modal @close="hideDialog" v-if="dialogIsVisible"/>
  </footer>

</template>

<script>

// import BitcoinPrices from "@/components/baseComponents/bitcoinPrices.vue";

import CertificateModal from "@/components/BaseComponents/modal/CertificateModal.vue";

export default {
  name: 'FooterHome',
  components: {CertificateModal},
  // components: {BitcoinPrices},
  data() {
    return {
      dialogIsVisible: false,
      partnerLogos: [
        { name: 'Crystal', logo: require('@/assets/lprov1.svg') },
        { name: 'Devexperts', logo: require('@/assets/lprov2.svg') },
        { name: 'Skrill', logo: require('@/assets/lprov3.svg') },
        { name: 'Fireblocks', logo: require('@/assets/lprov4.svg') },
        { name: 'Devexperts2', logo: require('@/assets/lprov5.svg') },
        { name: 'Skrill2', logo: require('@/assets/lprov6.svg') },
        { name: 'Fireblocks2', logo: require('@/assets/lprov7.svg') }
      ],
      quickLinks: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Register', href: '/register' },
        { name: 'LogIn', href: '/login' }
      ],
      legalLinks: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Risk Disclosure', href: '#' },
        { name: 'Regulatory Information', href: '#' }
      ],
      trustIndicators: [
        { icon: require('@/assets/icons8-shield-50.png'), text: 'Regulated & Licensed' },
        { icon: require('@/assets/icons8-crown-50.png'), text: 'Award Winning Platform' },
        { icon: require('@/assets/icons8-avatar-50.png'), text: '1M+ Active Traders' },
        { icon: require('@/assets/icons8-globe-50.png'), text: 'Global Presence' }
      ],
      regulations: [
        { icon: require('@/assets/pechat19e36.svg'), text: 'Licensed by MFSA' },
        { icon: require('@/assets/pechat19e36.svg'), text: 'MIFID Compliant' },
        { icon: require('@/assets/pechat19e36.svg'), text: 'FCA' },
        { icon: require('@/assets/pechat19e36.svg'), text: 'BaFin' },
        { icon: require('@/assets/pechat19e36.svg'), text: 'AMF' },
        { icon: require('@/assets/pechat19e36.svg'), text: 'CONSOB' }
      ],
    };
  },
  methods: {
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },

    onPostClick() {
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
    onPostClick2() {
      this.$router.push("/login");
      window.scrollTo(0, 0);
    },
    onPostClick3() {
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
    onPostClick4() {
      this.$router.push("/faq");
      window.scrollTo(0, 0);
    },
    onPostClick5() {
      this.$router.push("/contact");
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', "https://www.livecoinwatch.com/static/lcw-widget.js")
    document.head.appendChild(externalScript)
  },
}
</script>

<style scoped>
.footer {
  background-color: #111827;
  color: white;
  margin-top: 0;
  padding-top: 0;
  position: relative; /* Ensure footer is a containing block for widget */
}

.livecoinwatch-widget-5 {
  margin: 0 !important; /* Reset any margins */
  padding: 0 !important; /* Reset any padding */
  display: block; /* Ensure block-level display */
  line-height: 0; /* Prevent line-height from adding space */
  font-size: 0; /* Prevent font-size from adding space */
}

/* Target potential injected content to remove unwanted spacing */
.livecoinwatch-widget-5 > * {
  margin: 0 !important;
  padding: 0 !important;
}


.container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 4rem 1rem;
}

.main-content {
  display: grid;
  gap: 3rem;
  margin-bottom: 3rem;
}

@media (min-width: 1024px) {
  .main-content {
    grid-template-columns: 2fr 1fr 1fr;
  }
}

.company-info .logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.5rem;
}

.company-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #FFFFFF;
}

.description {
  color: #d1d5db;
  line-height: 1.625;
  margin-bottom: 1.5rem;
  max-width: 28rem;
}

.trust-indicators {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}



.trust-item span {
  font-size: 0.875rem;
  color: #d1d5db;
}

.quick-links h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.quick-links ul {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.link {
  display: flex;
  align-items: center;
  color: #d1d5db;
  transition: color 0.2s;
}

.link:hover {
  color: #60a5fa;
}

.dot {
  width: 0.25rem;
  height: 0.25rem;
  background-color: #60a5fa;
  border-radius: 50%;
  margin-right: 0.75rem;
  opacity: 0;
  transition: opacity 0.2s;
}

.link:hover .dot {
  opacity: 1;
}

.contact-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.contact-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #60a5fa;
  flex-shrink: 0;
}

.contact-item p,
.contact-item span {
  color: #d1d5db;
  font-size: 0.875rem;
}

.contact-item a {
  color: #d1d5db;
  font-size: 0.875rem;
  transition: color 0.2s;
}

.contact-item a:hover {
  color: #60a5fa;
}

.cta-button {
  background-color: #2563eb;
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  width: 100%;
  text-align: center;
  margin-top: 1.5rem;
  transition: background-color 0.2s;
}

.cta-button:hover {
  background-color: #1d4ed8;
}

.partners {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  margin-bottom: 2rem;
}

.partners h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.partner-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  opacity: 0.6;
}

.partner-logo {
  color: #9ca3af;
  font-weight: 600;
  font-size: 1.125rem;
  transition: color 0.2s;
  cursor: pointer;
}

.partner-logo:hover {
  color: white;
}

.partner-logo-reg {
  color: #9ca3af;
  font-weight: 600;
  font-size: 1.125rem;
  transition: color 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  align-content: center;
  gap: 10px;
}

.partner-logo-reg:hover {
  color: white;
}

.regulatory {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  margin-bottom: 2rem;
}

.regulatory-content {
  background-color: #1f2937;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.regulatory-title {
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.regulatory-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #60a5fa;
  margin-right: 0.5rem;
}

.regulatory-grid {
  display: grid;
  gap: 1.5rem;
  color: #d1d5db;
  font-size: 0.875rem;
  line-height: 1.625;
}

@media (min-width: 768px) {
  .regulatory-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.regulatory-grid p {
  margin-bottom: 0.75rem;
}

.legal-links {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.legal-link {
  color: #9ca3af;
  font-size: 0.875rem;
  transition: color 0.2s;
}

.legal-link:hover {
  color: #60a5fa;
}

.bottom-bar {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 768px) {
  .bottom-bar {
    flex-direction: row;
    justify-content: space-between;
  }
}

.copyright {
  color: #9ca3af;
  font-size: 0.875rem;
}

.company-info {
  //display: flex;
  //align-items: center;
  //gap: 1rem;
  color: #9ca3af;
  font-size: 0.875rem;
}

.separator {
  display: none;
}

@media (min-width: 768px) {
  .separator {
    display: inline;
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>