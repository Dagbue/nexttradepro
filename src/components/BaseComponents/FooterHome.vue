<template>
  <div class="alpha">
    <div class="the-footer">

<!--      <bitcoin-prices/>-->
      <div class="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="#999999" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="10" ></div>

      <div class="bottom">
        <div class="logo-container">


          <div class="footer-link-container">
            <h3 class="footer-title">About Us</h3>
            <p class="footer-link width">
              Established on November 14, 2016, TopShares Pro has its headquarters at 128 City Road, London, United
              Kingdom, EC1V 2NX with the official registration under company number 13971404.
              Our company takes pride
              in being a trusted and innovative digital asset, stocks, forex trading platform tailored for a global clientele,
              leveraging the cutting-edge technology. We are committed to delivering a secure and reliable
              platform that offers advanced solutions in various financial domains, including Financial Administration,
              Risk Management, Investment Services, and Return Provisioning. Our mission is to empower our
              international customers with state-of-the-art tools and expertise for successful trading
              and financial management.
            </p>
          </div>

          <div class="footer-link-container2">
            <h3 class="footer-title">Links</h3>
            <a  class="footer-link" @click="onPostClick">Home</a>
            <a  class="footer-link" @click="onPostClick2">Login</a>
            <a  class="footer-link" @click="onPostClick3">Register</a>
            <a  class="footer-link" @click="onPostClick4">F.A.Q</a>
            <a  class="footer-link" @click="onPostClick5">Contacts</a>
<!--            <a @click="showDialog" class="footer-link">Certifications</a>-->
          </div>

          <div class=" stay-connected">
            <h3 class="footer-title">Stay connected</h3>
            <div class="socials-container">
<!--              <div class="social-logo">-->
<!--                <div class="last-div">-->
<!--                  <i class='bx bxs-phone' ></i>-->
<!--                  <p class="last-div-para"><a href="https://wa.me/15102569690?text="  target="_blank">+1 (510) 256-9690</a></p>-->
<!--                </div>-->
<!--              </div>-->
              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bxs-map' ></i>
                  <p class="last-div-para contain">128 City Road, London, United Kingdom, EC1V 2NX</p>
                </div>
              </div>
              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bx-mail-send' style='color:#ffffff'></i>
                  <p class="last-div-para"><a href="mailto:support@topsharespro.com">support@topsharespro.com</a></p>
                </div>
              </div>
            </div>
<!--            <div class="social">-->
<!--&lt;!&ndash;              <div class="social-part-1">&ndash;&gt;-->
<!--&lt;!&ndash;                <i class='bx bxl-facebook'></i>&ndash;&gt;-->
<!--&lt;!&ndash;                <i class='bx bxl-twitter' ></i>&ndash;&gt;-->
<!--&lt;!&ndash;                <i class='bx bxl-instagram' ></i>&ndash;&gt;-->
<!--&lt;!&ndash;                <i class='bx bxl-youtube' ></i>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--              <img src="@/assets/google-play.svg" alt="" class="google" />-->
<!--            </div>-->
          </div>
        </div>
      </div>
      <hr/>
      <div class="copyright">
        <p>TopShares Pro LLC is part of TopShares Pro Group of companies with broker entities
          that are authorised and regulated across multiple jurisdictions. TopShares Pro LLC has it's
          business address at the United Kingdom.</p>
        <br/>
        <p>The objects of the Company are all subject matters not forbidden by International Business Companies
          (Amendment and Consolidation) Act, Chapter 149 of the Revised Laws of Saint Vincent and Grenadines,
          2009, in particular but not exclusively all commercial, financial, lending, borrowing, trading,
          service activities and the participation in other enterprises as well as to provide brokerage,
          training and managed account services in currencies, commodities, indexes, CFDs and leveraged financial
          instruments.</p>
      </div>
      <div class="section-part">

        <a href="">
          <img src="https://primexbt.com/_next/static/media/crystal.ce2c822d.svg" class="footer-partner" />
        </a>

        <a href="">
          <img src="https://primexbt.com/_next/static/media/devexperts.d29d2c72.svg" class="footer-partner"  />
        </a>

        <a href="">
          <img src="https://primexbt.com/_next/static/media/SkrillLogo.774f02d8.svg" class="footer-partner"  />
        </a>

<!--        <a href="">-->
<!--          <img src="@/assets/usdt.png" style="width: 23%;" />-->
<!--        </a>-->

        <a href="">
          <img src="https://primexbt.com/_next/static/media/fireblocks.64d070a3.svg" class="footer-partner" />
        </a>

      </div>
      <div class="copyright">
        <p>TopShares Pro Markets is, depending on the context, a reference to TopShares Pro Markets Germany GmbH, TopShares Pro Markets UK plc or
          TopShares Pro Spreadbet plc. TopShares Pro Markets Germany GmbH is a company licensed and regulated by the Bundesanstalt für
          Finanzdienstleistungsaufsicht (BaFin) under registration number 154814. TopShares Pro Markets UK Plc and TopShares Pro Spreadbet
          plc are registered in the Register of Companies of the Financial Conduct Authority under registration numbers
          173730 and 170627.</p>
        <br/>
        <p>Telephone calls and online chat conversations may be recorded and monitored. Apple, iPad, and iPhone
          are trademarks of Apple Inc., registered in the U.K. and other countries. App Store is a service mark of
          Apple Inc. Android is a trademark of Google Inc. This website uses cookies to obtain information about your
          general internet usage. Removal of cookies may affect the operation of certain parts of this website.
          Learn about cookies and how to remove them. Portions of this page are reproduced from work created and
          shared by Google and used according to terms described in the Creative Commons 3.0 Attribution License.</p>
      </div>
      <hr/>
      <div class="copyright">
        <p>All rights reserved. Copyright © 2016 - 2025</p>
      </div>
    </div>
    <certificate-modal @close="hideDialog" v-if="dialogIsVisible"/>
  </div>
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
.contain{
  width: 90%;
}
.the-footer {
  background-color: rgb(17 24 39);
  color: #ccc;
  padding: 1.5vh  1vh;
}

.logo-container {
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  /*margin-right: 7%;*/
  padding-top: 1%;
}

.footer-title {
  font-size: 20px;
  line-height: 20px;
}

.footer-partner{
  object-fit: cover;
  width: 55%;
}

.footer-link {
  display: block;
  font-size: 16px;
  line-height: 25px;
  opacity: 0.8;
  padding-top: 10px;
  color: #ffffff;
}

.bottom{
  margin-top: 2%;
}

.footer-link-container {
  /*margin-left: 5%;*/
  /*margin-right: 5%;*/
  width: 40%;
}

.footer-link-container2{
  /*padding-right: 5%;*/
}
.stay-connected{
  margin-right: 7%;
}
.socials-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 20px;
  width: 100%;
}

hr {
  color: #ffffff;
  width: 100%;
  background-color: #ffffff;
  border: 0.5px solid #ffffff;
  opacity: 0.2;
  margin-top: 20px;
  margin-bottom: 20px;
}

.copyright {
  font-size: 13px;
  line-height: 19px;
  opacity: 0.75;
  margin-top: 10px;
  padding-bottom: 0;
  margin-bottom: 0;
  color: #ffffff;
  font-weight: 900;
  width: 65%;
  margin-left: 5%;
}
.footer-img {
  width: 22%;
}
a {
  text-decoration: none;
  color: #ffffff;
  transition: ease 0.3s;
}
a:hover{
  color: #ffffff;
  font-weight: 700;
}

.bit{
  margin-bottom: 25px;
}
.bx {
  font-size: 27px;
}
.bx-mail-send{
}
.last-div{
  display: flex;
  margin-bottom: 15px;
}
.last-div-para{
  font-size: 15px;
  padding-left: 10px;
  line-height: 1.3;
  color: #ffffff;
}
.footer-title{
  color: #ffffff;
  /*font-size: 30px;*/
  font-weight: bold;
}

.google{
  width: 40%;
  margin-left: 2%;
  margin-top: 3%;
}

.social-part-1 i {
  padding-right: 10px;
  margin-top: 1%;
}

img{
  width: 85%;
  padding-right: 20px;
}

a{
  width: 100%;
}

.section-part{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 30px;
  padding-bottom: 15px;
  padding-left: 2%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}


@media (max-width: 990px) {
  .footer-link-container {
    margin-left: 2%;
    margin-right: 3%;
    width: 80%;
  }
}
@media (max-width: 760px) {
  .bottom {
    display: block;
    align-content: center;
    text-align: center;
  }
  .footer-container {
    display: block;
    align-content: center;
    text-align: center;
  }
  .the-footer {
    margin-top: unset;
  }
  .footer-img {
    width: 50%;
    min-width: unset;
    border-radius: 20px;
    margin-bottom: 20px;
  }
  .footer-link-container {
    margin-left: unset;
    margin-right: unset;
    width: unset;

    margin-top: 3%;
  }
  .footer-link-container2 {
    margin-bottom: 10%;
    margin-top: 10%;
  }
  .last-div{
    margin-right: 10%;
    margin-bottom: unset;
  }
  .copyright{
    font-size: 17px;
  }
  .stay-connected{
    margin-right: unset;
  }
}
@media (max-width: 700px) {
  .last-div-para{
    text-align: left;
  }
  img{
    width: 100%;
    padding-bottom: 6%;
    padding-right: 20px;
  }
  h1{
    font-size: 25px;
  }
  .footer-link-container {
    margin-left: unset;
    margin-right: unset;
    width: unset;
  }
  .footer-link {
    display: block;
    font-size: 16px;
  }
  .footer-title {
    font-size: 21px;
    padding-bottom: unset;
  }

  .footer-img {
    width: 50%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .copyright {
    font-size: 13px;
    opacity: 0.8;
    width: 90%;
  }
  .bx{
    font-size: 25px;
  }
  .last-div-para{
    font-size: 16px;
    padding-left: 8px;
  }
  .logo-container {
    display: flex;
    flex-direction: column;
    padding-top: 2%;
  }
  .google{
    width: 45%;
  }

  .footer-partner{
    width: 55%;
  }

}
@media (max-width: 500px) {
  .copyright{
    font-size: 12px;
  }
  img{
    width: 42%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 6%;
  }

  .section-part{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: unset;
    padding-bottom: 5px;
  }


  .logo-container {
    margin-left: unset;
  }
}
</style>