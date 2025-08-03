<template>
  <div class="alpha">


    <div class="container">
    <div class="faq-list">
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <button
            class="faq-question"
            @click="toggleFAQ(index)"
        >
          <span class="question-text">{{ faq.question }}</span>
          <svg v-if="openIndex === index" class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
          </svg>
          <svg v-else class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div v-if="openIndex === index" class="faq-answer">
          <p class="answer-text">{{ faq.answer }}</p>
        </div>
      </div>
    </div>

    </div>

    <div class="contact-section">
      <div class="contact-card">
        <h3>Still have questions?</h3>
        <p>
          Our support team is available 24/7 to help you with any questions about our platform.
        </p>
        <button class="contact-button">
          Contact Support
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "f-a-q-body",
  data() {
    return {
      openIndex: 0,
      faqs: [
        {
          question: 'WHAT IS TOPSHARES PRO',
          answer: '            TopShares Pro is an officially registered company and conducts\n' +
              '            business under the laws of the UK Government. The company is involved\n' +
              '            in Stocks, options CFD , Forex and crypto. Also trading other valuable\n' +
              '            commodities/assets which we offer to our clients to earn from using a\n' +
              '            single trading account.'
        },
        {
          question: 'HOW SAFE ARE MY INVESTMENTS IN YOUR COMPANY',
          answer: '            It is absolutely safe because all our technical experts are extremely\n' +
              '            experienced professionals; our Stocks, options CFD , Forex and crypto sourcing and\n' +
              '            other investment strategies are proven to work.'
        },
        {
          question: 'HOW CAN I MAKE SURE YOUR COMPANY IS A REAL AND NOT A FAKE ONE',
          answer: '            TopShares Pro is officially incorporated with the UK\n' +
              '            Companies Office. verify registration: (click here)'
        },
        {
          question: 'CAN I LOOSE MONEY IF I INVEST NOW?',
          answer: 'In accordance to investment laws of the FCA with over £3Billion\n' +
              '            investment security, we never worry about those rainy days in global\n' +
              '            trades and projects as we have our investors covered'
        },
        {
          question: 'DO YOU PROVIDE PROOF OF YOUR TRADING  ACTIVITIES',
          answer: 'No, at the moment this is a closed information, but in the future we\n' +
              '            plan to publish our trade reports regularly. We will announce further,\n' +
              '            follow our news.'
        },
        {
          question: 'What are instant deposits and withdrawals?',
          answer: '            he term “instant” indicates that a transaction will be carried out within a few seconds without manual\n' +
              '            processing by our financial department specialists. Please note that although it\'s instantly processed\n' +
              '            on our side, your deposit or withdrawal requests may take some time to be processed on the payment\n' +
              '            system provider\'s side.'
        },
        {
          question: 'How long do TopShares Pro withdrawals take via bank card?',
          answer: '            On TopShares Pro\' side all withdrawal requests are processed instantly. Your withdrawal request is then sent to\n' +
              '            our card processors and your bank, and the whole process can take from 1 to 30 business days for the funds\n' +
              '            to be reflected in your bank account depending on the bank and country you are located in.'
        },
        {
          question: 'Can I withdraw funds to an account that is not my own?',
          answer: '            Funds can be withdrawn to your own personal accounts only. This is a safeguard put in place to ensure\n' +
              '            financial security.'
        },
        {
          question: 'What payment accounts can I use to deposit and withdraw?',
          answer: 'You must use your own personal payment accounts for deposits and withdrawals. We will not accept direct\n' +
              '            payments or payments to or from third parties. All the information you need regarding transactions\n' +
              '            can be found in your Personal Area. If your deposit payment method is unavailable during withdrawal,\n' +
              '            contact the Support tea. Occasionally, some payment systems may be turned off due to maintenance.'
        },
        {
          question: 'When can I deposit and withdraw?',
          answer: 'Deposits and withdrawals can be executed 24/7. If a deposit or withdrawal is not instant, we will process\n' +
              '            it within 24 hours. Bear in mind, it may take your bank or payment service a little longer. We can’t be\n' +
              '            held liable for any deposit or withdrawal processing delays that are caused by payment systems. We reserve\n' +
              '            the right to change the processing time for deposits and withdrawals without prior notification.'
        },
        {
          question: 'When can I deposit and withdraw?',
          answer: 'Deposits and withdrawals can be executed 24/7. If a deposit or withdrawal is not instant, we will process\n' +
              '            it within 24 hours. Bear in mind, it may take your bank or payment service a little longer. We can’t be\n' +
              '            held liable for any deposit or withdrawal processing delays that are caused by payment systems. We reserve\n' +
              '            the right to change the processing time for deposits and withdrawals without prior notification.'
        },
        {
          question: 'Is TopShares Pro PCI DSS compliant?',
          answer: '            TopShares Pro is independently audited and meets all PCI DSS (Payment Card Industry Data Security Standard)\n' +
              '            requirements for secure payments. This includes efficient data management, bespoke security with providers,\n' +
              '            data encryption, network monitoring, and regular vulnerability scans, safeguarding users against potential\n' +
              '            data breaches and fraud during bank card transactions.'
        },
        {
          question: 'What security types are available?',
          answer: 'TopShares Pro accounts offer several security types to verify the identity of the account owner and protect\n' +
              '            sensitive information. These security types include phone, email, and TOTP\n' +
              '            (available only in certain countries). Each account action requires a six-digit code, sent to the chosen\n' +
              '            security type, to be entered for confirmation. Only one security type can be active at a time, but changes\n' +
              '            can be made under certain conditions. Additionally, a unique alphanumeric Support PIN is generated to act\n' +
              '            as the highest level of security. This PIN is used to verify the account owner when contacting support,\n' +
              '            ensuring that sensitive information is accessible only to the true account owner.'
        },

        {
          question: 'How do I protect myself from fraudulent activity?',
          answer: '            Be mindful while engaging in secure trading. Guard against fraud by not sharing sensitive details like\n' +
              '            passwords, IDs, or TopShares Pro security types. TopShares Pro reps never ask for such info via text, email, or social\n' +
              '            media. Don\'t leave your Personal Area unattended, carry out TopShares Pro activities outside the Personal Area,\n' +
              '            or transfer funds to unknown accounts. Beware of unknown links and don\'t share passwords. If you suspect\n' +
              '            fraud, contact TopShares Pro immediately via live chat or email. Be cautious of unexpected TopShares Pro messages; when\n' +
              '            in doubt, reach out to support. If you\'ve unintentionally shared private information, change your password\n' +
              '            immediately.'
        },
      ]
    }
  },
  methods: {
    toggleFAQ(index) {
      this.openIndex = this.openIndex === index ? null : index;
    }
  }
}
</script>

<style scoped>
.alpha{
  height: 100%;
  padding-bottom: 5%;
  padding-top: 5%;
}


.contact-section {
  margin-top: 5rem;
  text-align: center;
}

.contact-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  max-width: 42rem;
  margin: 0 auto;
}

.contact-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.contact-card p {
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.contact-button {
  background: #2563eb;
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.contact-button:hover {
  background: #1d4ed8;
}

.contact-button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}



/* Base styles */
.pricing-faq {
  padding: 5rem 0;
  background-color: #F9FAFB;
}

/* Container */
.container {
  max-width: 64rem;
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

/* Header */
.header {
  text-align: center;
  margin-bottom: 4rem;
}

.main-heading {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.sub-heading {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #4B5563;
}

/* FAQ list */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background-color: #ffffff;
  border-radius: 1rem;
  border: 1px solid #F3F4F6;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.09);
  overflow: hidden;
}

.faq-question {
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.faq-question:hover {
  background-color: #F9FAFB;
}

.question-text {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: #111827;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.icon path {
  stroke: #2563EB;
}

.faq-question .icon path {
  stroke: #9CA3AF;
}

.faq-question:hover .icon path {
  stroke: #2563EB;
}

.faq-answer {
  padding: 0 2rem 1.5rem;
}

.answer-text {
  color: #4B5563;
  line-height: 1.625;
}



.section-1{
  display: flex;
  justify-content: space-evenly;
  /*align-content: center;*/
  /*align-items: center;*/
  /*margin-bottom: 5%;*/
  margin-top: 5%;
}
.header{
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  font-size: 23px;
  line-height: 1.26;
  margin: 0;
  color: #0A0A0AFF;
  width: 25%;
}
.lawrence{
  padding-left: 5%;
}
.lawrence li{
  padding-bottom: 2px;
}
section {
  width: 42%;
  /*margin: auto;*/
}

details[open] summary ~ * {
  animation: open 0.4s ease-in;
  color: #0A0A0AFF;
}

@keyframes open {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  60% {
    transform: translateX(10px);
  }
  70% {
    transform: translateX(-10px);
  }
  80% {
    transform: translateX(5px);
  }
  90% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
details summary::-webkit-details-marker {
  display: none;
}

details summary {
  width: 100%;
  position: relative;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 300;
  list-style: none;
  /*padding-top: 18px;*/
  /*padding-bottom: 10px;*/
  text-transform: uppercase;
  color: #0A0A0AFF;
}

details summary:after {
  content: "+";
  color: #0A0A0AFF;
  position: absolute;
  font-size: 1.7rem;
  line-height: 0;
  margin-top: 0.75rem;
  right: 0;
  font-weight: 300;
  transform-origin: center;
  transition: 200ms linear;
}
details[open] summary:after {
  transform: rotate(45deg);
  font-size: 2rem;
}
details summary {
  outline: 0;
}
details p {
  font-size: 16px;
  margin: 0 0 1rem;
  padding-top: 1rem;
  line-height: 1.5;
}
details {
  /*box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);*/
  position: relative;
  padding: 15px;
  margin-bottom: 2%;
  /*border-radius: 5px;*/
  border-bottom: solid 0.125rem rgba(10, 10, 10, 0.15);
}
@media (max-width: 700px){
  .section-1{
    display: block;
    width: 100%;
    padding-top: 10%;
  }
  .header{
    width: 100%;
    text-align: center;
  }
  .details summary {
    font-size: 20px;
  }
  details p {
    font-size: 16px;
    margin: 0 0 1rem;
    padding-top: 1rem;
  }
  summary{
    font-size: 20px;
  }
  section {
    width: 82%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>