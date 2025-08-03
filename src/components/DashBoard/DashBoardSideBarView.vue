<template >
  <div class="outer">

    <div   class="sidebar" v-show="!mobile && this.screen === 'trade'">

      <div class="logo">
        <img src="@/assets/logo.png" alt="logo" class="afo-logo" />
      </div>

      <ul class="nav-list" >

        <router-link to="/over-view" >
          <li @click="toggleView">
            <a class="hover">
<!--              <img src="@/assets/dashboardlogo.svg" alt="logo" class="link-img" />-->
              <svg class="link-img" width="30" height="30" viewBox="0 0 24 24" style="transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1)); --sx: 1; --sy: 1; --r: 0deg;">
                <path d="M6,16.5L3,19.44V11H6M11,14.66L9.43,13.32L8,14.64V7H11M16,13L13,16V3H16M18.81,12.81L17,11H22V16L20.21,14.21L13,21.36L9.53,18.34L5.75,22H3L9.47,15.66L13,18.64" style="fill: currentcolor;"></path>
              </svg>
              <span class="links-name">Trade</span>
            </a>
          </li>
        </router-link>

        <div class="trade-sidebar">
          <div class="trade-type-section">
            <div class="trade-type-button">
              <button  @click="toggleScreen" class="trade-btn-1">Trade Forex</button>
              <button  @click="toggleScreen2" class="trade-btn-2">Trade Crypto</button>
            </div>

            <div class="trade-type-button">
              <button  @click="toggleScreen3" class="trade-btn-3">Trade CFD</button>
              <button  @click="toggleScreen4" class="trade-btn-4">Trade Stocks</button>
            </div>

            <div class="trade-type-button">
              <button  @click="toggleScreen5" class="trade-btn-5">Trade Real Estate</button>
            </div>

<!--            <div v-show="this.screen1 === 'Forex'" class="form-group">-->
<!--              <select>-->
<!--                <option value="USD/CAD">USD/CAD</option>-->
<!--                <option value="USD/CHF">USD/CHF</option>-->
<!--                <option value="USD/JPY">USD/JPY</option>-->
<!--                <option value="EUR/USD">EUR/USD</option>-->
<!--                <option value="GBP/USD">GBP/USD</option>-->
<!--                <option value="NZD/USD">NZD/USD</option>-->
<!--                <option value="AUD/CAD">AUD/CAD</option>-->
<!--                <option value="AUD/USD">AUD/USD</option>-->
<!--                <option value="EUR/GBP">EUR/GBP</option>-->
<!--                <option value="GBP/AUD">GBP/AUD</option>-->
<!--              </select>-->
<!--            </div>-->

<!--            <div v-show="this.screen1 === 'Crypto'" class="form-group">-->
<!--              <select>-->
<!--                <option value="BCH/BTC">BCH/BTC</option>-->
<!--                <option value="BCH/EUR">BCH/EUR</option>-->
<!--                <option value="BCH/GBP">BCH/GBP</option>-->
<!--                <option value="BTC-EOS">BTC-EOS</option>-->
<!--                <option value="BTC/EUR">BTC/EUR</option>-->
<!--                <option value="BTC/GBP">BTC/GBP</option>-->
<!--                <option value="BTC/USD">BTC/USD</option>-->
<!--                <option value="BTC/USDC">BTC/USDC</option>-->
<!--                <option value="EOS/BTC">EOS/BTC</option>-->
<!--                <option value="EOS/EUR">EOS/EUR</option>-->
<!--              </select>-->
<!--            </div>-->

<!--            <div v-show="this.screen1 === 'CFD'" class="form-group">-->
<!--              <select>-->
<!--                <option value="US 30">US 30</option>-->
<!--                <option value="UKX">UKX</option>-->
<!--                <option value="VIX Volatility Index">VIX Volatility Index</option>-->
<!--                <option value="Germany 30">Germany 30</option>-->
<!--                <option value="USA 500">USA 500</option>-->
<!--                <option value="US Tech 100">US Tech 100</option>-->
<!--                <option value="Japan 225">Japan 225</option>-->
<!--                <option value="Europe 50">Europe 50</option>-->
<!--                <option value="US Wall St 30">US Wall St 30</option>-->
<!--                <option value="AUXAUD">AUXAUD</option>-->
<!--              </select>-->
<!--            </div>-->

<!--            <div v-show="this.screen1 === 'Stocks'" class="form-group">-->
<!--              <select>-->
<!--                <option value="AMAZON">AMAZON</option>-->
<!--                <option value="APPLE">APPLE</option>-->
<!--                <option value="COCA COLA">COCA COLA</option>-->
<!--                <option value="DAX30">DAX30</option>-->
<!--                <option value="AIRBNB INC">AIRBNB INC</option>-->
<!--                <option value="BOEING CO">BOEING CO</option>-->
<!--                <option value="GME STOCKS">GME STOCKS</option>-->
<!--                <option value="AMC ENTERTAINMENT">AMC ENTERTAINMENT</option>-->
<!--                <option value="BLACKBERRY">BLACKBERRY</option>-->
<!--                <option value="CITIGROUP INC">CITIGROUP INC</option>-->
<!--                <option value="CISCO SYSTEMS INC">CISCO SYSTEMS INC</option>-->
<!--              </select>-->
<!--            </div>-->

<!--            <div v-show="this.screen1 === 'RealEstate'" class="form-group">-->
<!--              <select>-->
<!--                <option value="Prologis, Inc. (PLD)">Prologis, Inc. (PLD)</option>-->
<!--                <option value="Simon Property Group (SPG)">Simon Property Group (SPG)</option>-->
<!--                <option value="AvalonBay Communities (AVB)">AvalonBay Communities (AVB)</option>-->
<!--                <option value="Realty Income (O)">Realty Income (O)</option>-->
<!--                <option value="Equinix, Inc. (EQIX)">Equinix, Inc. (EQIX)</option>-->
<!--                <option value="Public Storage (PSA)">Public Storage (PSA)</option>-->
<!--                <option value="Annaly Capital Management, Inc. (NLY)">Annaly Capital Management, Inc. (NLY)</option>-->
<!--                <option value="AGNC Investment Corp. (AGNC)">AGNC Investment Corp. (AGNC)</option>-->
<!--                <option value="Starwood Property Trust, Inc. (STWD)">Starwood Property Trust, Inc. (STWD)</option>-->
<!--                <option value="Welltower Inc. (WELL)">Welltower Inc. (WELL)</option>-->
<!--              </select>-->
<!--            </div>-->
            

          </div>
        </div>

        <router-link to="/copy-experts" >
          <li @click="toggleView2">
            <a class="hover">
              <svg class="link-img" width="30" height="30" viewBox="0 0 24 24" style="transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1)); --sx: 1; --sy: 1; --r: 0deg;">
                <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" style="fill: currentcolor;"></path>
              </svg>
              <span class="links-name wallets">Copy Trade</span>
            </a>
          </li>
        </router-link>

<!--        <router-link to="/transactions">-->
<!--          <li>-->
<!--            <a class="hover">-->
<!--              <img src="@/assets/send.svg" alt="logo" class="link-img" />-->
<!--              <span class="links-name">Transactions</span>-->
<!--            </a>-->
<!--          </li>-->
<!--        </router-link>-->

        <router-link to="/fund-wallet">
          <li @click="toggleView2">
            <a class="hover">
              <svg class="link-img" width="30" height="30" viewBox="0 0 24 24" style="transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1)); --sx: 1; --sy: 1; --r: 0deg;">
                <path d="M15 15V17H18V20H20V17H23V15H20V12H18V15M14.97 11.61C14.85 10.28 13.59 8.97 12 9C10.3 9.03 9 10.3 9 12C9 13.7 10.3 14.94 12 15C12.38 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.61M13 16H7C7 14.9 6.11 14 5 14V10C6.11 10 7 9.11 7 8H17C17 9.11 17.9 10 19 10V10.06C19.67 10.06 20.34 10.18 21 10.4V6H3V18H13.32C13.1 17.33 13 16.66 13 16Z" style="fill: currentcolor;"></path>
              </svg>
              <span class="links-name">Deposit</span>
            </a>
          </li>
        </router-link>

        <router-link to="/withdrawal">
          <li @click="toggleView2">
            <a class="hover">
              <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
              <span class="links-name">Withdrawal</span>
            </a>
          </li>
        </router-link>

        <router-link to="/trade-over-view">
          <li @click="toggleView2">
            <a class="hover">
              <img src="../../assets/walletmana.svg" alt="logo" class="link-img" />
              <span class="links-name wallets">Trade Overview</span>
            </a>
          </li>
        </router-link>

        <router-link to="/settings">
          <li @click="toggleView2">
            <a class="hover">
              <img src="../../assets/settings.svg" alt="logo" class="link-img" />
              <span class="links-name">Settings</span>
            </a>
          </li>
        </router-link>

          <li @click="handleClick">
            <a class="hover">
              <img  src="@/assets/log-out.svg" alt="Notification"/>&nbsp;&nbsp;
              <span class="links-name">Logout</span>
            </a>
          </li>

      </ul>

    </div>

    <div  class="sidebar" v-show="!mobile && this.screen === 'copy'">

      <div class="logo">
        <img src="@/assets/logo.png" alt="logo" class="afo-logo" />
      </div>

      <ul class="nav-list" >

        <router-link to="/over-view" >
          <li @click="toggleView">
            <a class="hover">
              <!--              <img src="@/assets/dashboardlogo.svg" alt="logo" class="link-img" />-->
              <svg class="link-img" width="30" height="30" viewBox="0 0 24 24" style="transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1)); --sx: 1; --sy: 1; --r: 0deg;">
                <path d="M6,16.5L3,19.44V11H6M11,14.66L9.43,13.32L8,14.64V7H11M16,13L13,16V3H16M18.81,12.81L17,11H22V16L20.21,14.21L13,21.36L9.53,18.34L5.75,22H3L9.47,15.66L13,18.64" style="fill: currentcolor;"></path>
              </svg>
              <span class="links-name">Trade</span>
            </a>
          </li>
        </router-link>

        <router-link to="/copy-experts">
          <li @click="toggleView2">
            <a class="hover">
              <svg class="link-img" width="30" height="30" viewBox="0 0 24 24" style="transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1)); --sx: 1; --sy: 1; --r: 0deg;">
                <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" style="fill: currentcolor;"></path>
              </svg>
              <span class="links-name wallets">Copy Trade</span>
            </a>
          </li>
        </router-link>

        <router-link to="/trade-over-view">
          <li>
            <a class="hover">
              <img src="../../assets/walletmana.svg" alt="logo" class="link-img" />
              <span class="links-name wallets">Trade Overview</span>
            </a>
          </li>
        </router-link>

        <router-link to="/transactions">
          <li>
            <a class="hover">
              <img src="@/assets/send.svg" alt="logo" class="link-img" />
              <span class="links-name">Transactions</span>
            </a>
          </li>
        </router-link>

        <router-link to="/fund-wallet">
          <li>
            <a class="hover">
              <svg class="link-img" width="30" height="30" viewBox="0 0 24 24" style="transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1)); --sx: 1; --sy: 1; --r: 0deg;">
                <path d="M15 15V17H18V20H20V17H23V15H20V12H18V15M14.97 11.61C14.85 10.28 13.59 8.97 12 9C10.3 9.03 9 10.3 9 12C9 13.7 10.3 14.94 12 15C12.38 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.61M13 16H7C7 14.9 6.11 14 5 14V10C6.11 10 7 9.11 7 8H17C17 9.11 17.9 10 19 10V10.06C19.67 10.06 20.34 10.18 21 10.4V6H3V18H13.32C13.1 17.33 13 16.66 13 16Z" style="fill: currentcolor;"></path>
              </svg>
              <span class="links-name">Deposit</span>
            </a>
          </li>
        </router-link>

        <router-link to="/withdrawal">
          <li>
            <a class="hover">
              <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
              <span class="links-name">Withdrawal</span>
            </a>
          </li>
        </router-link>

        <router-link to="/trading-bot-view">
          <li>
            <a class="hover">
              <svg class="link-img" width="30" height="30" viewBox="0 0 24 24" style="transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1)); --sx: 1; --sy: 1; --r: 0deg;">
                <path d="M17.5 15.5C17.5 16.61 16.61 17.5 15.5 17.5S13.5 16.61 13.5 15.5 14.4 13.5 15.5 13.5 17.5 14.4 17.5 15.5M8.5 13.5C7.4 13.5 6.5 14.4 6.5 15.5S7.4 17.5 8.5 17.5 10.5 16.61 10.5 15.5 9.61 13.5 8.5 13.5M23 15V18C23 18.55 22.55 19 22 19H21V20C21 21.11 20.11 22 19 22H5C3.9 22 3 21.11 3 20V19H2C1.45 19 1 18.55 1 18V15C1 14.45 1.45 14 2 14H3C3 10.13 6.13 7 10 7H11V5.73C10.4 5.39 10 4.74 10 4C10 2.9 10.9 2 12 2S14 2.9 14 4C14 4.74 13.6 5.39 13 5.73V7H14C17.87 7 21 10.13 21 14H22C22.55 14 23 14.45 23 15M21 16H19V14C19 11.24 16.76 9 14 9H10C7.24 9 5 11.24 5 14V16H3V17H5V20H19V17H21V16Z" style="fill: currentcolor;"></path>
              </svg>
              <span class="links-name">Trading Bot</span>
            </a>
          </li>
        </router-link>

        <router-link to="/market-view">
          <li>
            <a class="hover">
              <svg class="link-img" width="30" height="30" viewBox="0 0 24 24" style="transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1)); --sx: 1; --sy: 1; --r: 0deg;">
                <path d="M16.5,21C13.5,21 12.31,16.76 11.05,12.28C10.14,9.04 9,5 7.5,5C4.11,5 4,11.93 4,12H2C2,11.63 2.06,3 7.5,3C10.5,3 11.71,7.25 12.97,11.74C13.83,14.8 15,19 16.5,19C19.94,19 20.03,12.07 20.03,12H22.03C22.03,12.37 21.97,21 16.5,21Z" style="fill: currentcolor;"></path>
              </svg>
              <span class="links-name">Markets</span>
            </a>
          </li>
        </router-link>

<!--        <router-link to="">-->
<!--          <li>-->
<!--            <a class="hover">-->
<!--              <svg class="link-img" width="30" height="30" viewBox="0 0 24 24" style="transform: rotate(var(&#45;&#45;r, 0deg)) scale(var(&#45;&#45;sx, 1), var(&#45;&#45;sy, 1)); &#45;&#45;sx: 1; &#45;&#45;sy: 1; &#45;&#45;r: 0deg;">-->
<!--                <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" style="fill: currentcolor;"></path>-->
<!--              </svg>-->
<!--              <span class="links-name">Education</span>-->
<!--            </a>-->
<!--          </li>-->
<!--        </router-link>-->

        <router-link to="/packages">
          <li>
            <a class="hover">
              <img src="../../assets/pie-chart.svg" alt="logo" class="link-img" />
              <span class="links-name">Packages</span>
            </a>
          </li>
        </router-link>

        <router-link to="/settings">
          <li>
            <a class="hover">
              <img src="../../assets/settings.svg" alt="logo" class="link-img" />
              <span class="links-name">Settings</span>
            </a>
          </li>
        </router-link>


        <li @click="handleClick">
          <a class="hover">
            <img  src="@/assets/log-out.svg" alt="Notification"/>&nbsp;&nbsp;
            <span class="links-name">Logout</span>
          </a>
        </li>


      </ul>

    </div>

    <div class="dropdown-nav-2" v-show="mobileNav" >


      <div class="logo">
        <img src="@/assets/logo.png" alt="logo" class="afo-logo-2" />
      </div>

      <ul>
        <li @click="toggleMobileNav2">
          <a>
            <img src="@/assets/dashboardlogo.svg" alt="logo" class="link-img" />
            <router-link to="/over-view" class="">DashBoard</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <svg class="link-img" width="35" height="35" viewBox="0 0 24 24" style="transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1)); --sx: 1; --sy: 1; --r: 0deg;">
              <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" style="fill: currentcolor;"></path>
            </svg>
            <router-link to="/copy-experts" class="">Copy Trade</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="../../assets/walletmana.svg" alt="logo" class="link-img" />
            <router-link style="font-size: 13px;" to="/trade-over-view" class="">Trade Overview</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="@/assets/send.svg" alt="logo" class="link-img" />
            <router-link to="/transactions" class="">Transactions</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <svg class="link-img" width="100" height="30" viewBox="0 0 24 24" style="transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1)); --sx: 1; --sy: 1; --r: 0deg;">
              <path d="M15 15V17H18V20H20V17H23V15H20V12H18V15M14.97 11.61C14.85 10.28 13.59 8.97 12 9C10.3 9.03 9 10.3 9 12C9 13.7 10.3 14.94 12 15C12.38 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.61M13 16H7C7 14.9 6.11 14 5 14V10C6.11 10 7 9.11 7 8H17C17 9.11 17.9 10 19 10V10.06C19.67 10.06 20.34 10.18 21 10.4V6H3V18H13.32C13.1 17.33 13 16.66 13 16Z" style="fill: currentcolor;"></path>
            </svg>
            <router-link to="/fund-wallet">Deposit</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
            <router-link to="/withdrawal" class="">Withdrawal</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <svg class="link-img" width="35" height="35" viewBox="0 0 24 24" style="transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1)); --sx: 1; --sy: 1; --r: 0deg;">
              <path d="M17.5 15.5C17.5 16.61 16.61 17.5 15.5 17.5S13.5 16.61 13.5 15.5 14.4 13.5 15.5 13.5 17.5 14.4 17.5 15.5M8.5 13.5C7.4 13.5 6.5 14.4 6.5 15.5S7.4 17.5 8.5 17.5 10.5 16.61 10.5 15.5 9.61 13.5 8.5 13.5M23 15V18C23 18.55 22.55 19 22 19H21V20C21 21.11 20.11 22 19 22H5C3.9 22 3 21.11 3 20V19H2C1.45 19 1 18.55 1 18V15C1 14.45 1.45 14 2 14H3C3 10.13 6.13 7 10 7H11V5.73C10.4 5.39 10 4.74 10 4C10 2.9 10.9 2 12 2S14 2.9 14 4C14 4.74 13.6 5.39 13 5.73V7H14C17.87 7 21 10.13 21 14H22C22.55 14 23 14.45 23 15M21 16H19V14C19 11.24 16.76 9 14 9H10C7.24 9 5 11.24 5 14V16H3V17H5V20H19V17H21V16Z" style="fill: currentcolor;"></path>
            </svg>
            <router-link to="/trading-bot-view" class="">Trading Bot</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="@/assets/pie-chart.svg" alt="logo" class="link-img" />
            <router-link to="/packages" class="">Packages</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="../../assets/settings.svg" alt="logo" class="link-img" />
            <router-link to="/settings" class="">Settings</router-link>
          </a>
        </li>

        <li @click="handleClick">
          <a >
            <img  src="@/assets/log-out.svg" alt="Notification"/>&nbsp;&nbsp;
            <span class="links-name">Logout</span>
          </a>
        </li>
      </ul>


    </div>

    <dash-content @customEvent="parentFunction">
      <router-view v-slot="{ Component, route }">
        <transition name="route" mode="out-in">
          <div :key="route.name">
            <div class="icon">
              <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
            </div>
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </dash-content>

  </div>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent.vue";
import router from "@/router";
import StoreUtils from "@/utility/StoreUtils";

export default {
  name: "DashBoardSideBarView",
  components: {DashContent},
  data()  {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: window.innerWidth, // Initialize directly with the window's innerWidth
      screen: 'trade',
      screen1: "Forex",
      screen2: "Crypto",
      screen3: "CFD",
      screen4: "Stocks",
      screen5: "pnl",
      screen6: "RealEstate",
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen(); // Check the screen size immediately on component creation
  },
  beforeDestroy() { // Use `beforeDestroy` instead of `unmounted` for Vue 2
    window.removeEventListener('resize', this.checkScreen); // Cleanup the event listener
  },
  methods: {

    toggleScreen() {
      StoreUtils.commit(StoreUtils.mutations.auth.updatePlaceTradeStatus, "Forex");
      this.screen1 = "Forex"
      this.screen5 = "placeTrade"
    },
    toggleScreen2() {
      StoreUtils.commit(StoreUtils.mutations.auth.updatePlaceTradeStatus,  this.screen2);
      this.screen1 = this.screen2
      this.screen5 = "placeTrade"
    },
    toggleScreen3() {
      StoreUtils.commit(StoreUtils.mutations.auth.updatePlaceTradeStatus, this.screen3);
      this.screen1 = this.screen3
      this.screen5 = "placeTrade"
    },
    toggleScreen4() {
      StoreUtils.commit(StoreUtils.mutations.auth.updatePlaceTradeStatus, this.screen4);
      this.screen1 = this.screen4
      this.screen5 = "placeTrade"
    },
    toggleScreen5() {
      StoreUtils.commit(StoreUtils.mutations.auth.updatePlaceTradeStatus, this.screen6);
      this.screen1 = this.screen6
      this.screen5 = "placeTrade"
    },

    toggleView() {
      this.screen = 'trade';
    },
    toggleView2() {
      this.screen = 'copy';
    },
    async handleClick() {
       localStorage.clear();
      await router.push('/login')
    },
    // This method is triggered when the customEvent is received
    parentFunction() {
      console.log("Event received in parent with payload:");
      // Additional logic here
      this.toggleMobileNav();
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleMobileNav2() {
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 990) {
        this.mobile = true;
      } else {
        this.mobile = false;
        this.mobileNav = false;
      }
    }
  },
}

</script>

<style scoped>

.trade-sidebar{
  margin-bottom: 20px;
}

.trade-btn-1{
  text-align: center;
  font-size: 11px;
  width: 90px;
  height: 30px;
  background: #E50202;
  color: #ffffff;
  border: 1px solid #E50202;
  border-radius: 4px;
  cursor: pointer;
}

.trade-btn-1:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.trade-btn-2{
  text-align: center;
  font-size: 11px;
  width: 90px;
  height: 30px;
  background: #10d876;
  color: #ffffff;
  border: 1px solid #10d876;
  border-radius: 4px;
  cursor: pointer;
}

.trade-btn-2:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.trade-btn-3{
  text-align: center;
  font-size: 11px;
  width: 90px;
  height: 30px;
  background: #FE9431;
  color: #ffffff;
  border: 1px solid #FE9431;
  border-radius: 4px;
  cursor: pointer;
}

.trade-btn-3:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.trade-btn-4{
  text-align: center;
  font-size: 11px;
  width: 90px;
  height: 30px;
  background: #5d78ff;
  color: #ffffff;
  border: 1px solid #5d78ff;
  border-radius: 4px;
  cursor: pointer;
}

.trade-btn-4:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.trade-btn-5{
  text-align: center;
  font-size: 11px;
  width: 130px;
  height: 30px;
  background: indianred;
  color: #ffffff;
  border: 1px solid indianred;
  border-radius: 4px;
  cursor: pointer;
}

.trade-btn-5:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.form-group {
  margin-bottom: 10px;
}


.form-group select {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 7px 16px;
  border-radius: 4px;
  border: 0.5px solid #3C4A57FF;
  box-shadow: none;
  width: 100%;
  background: rgba(23, 35, 43, 0.5);
  margin-top: 3%;
  color: #ffffff;
}

option{
  color: #667085;
}

.form-group select:focus {
  outline: none;
}

.form-group select::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.trade-type-button{
  display: flex;
  gap: 5px;
  margin-bottom: 5px;
}

.pair-group-text-1{
  color: #FFFFFF;
}

.outer{
  display: flex;
}
.afo-logo{
  width: 100%;
  background-color: #e8e8e8;
  padding: 10px 5px;
  border-radius: 5px;
}

.afo-logo-2{
  width: 95%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #c8c8c8;
  padding: 5px 10px;
  border-radius: 3px;
}

body{
  position: relative;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
}
.logo{
  display: flex;
  margin: 13% auto;
}
.logo p {
  color: #ffffff;
  font-size: 20px;
  margin-left: 10%;
  padding-top: 3px;
}
.logo select{
  font-size: 15px;
  margin-left: 8%;
  padding: 5px 15px;
  border-radius: 5px;
  color: #F04438;
  border: 1px solid #E8E8E8;
}
.sidebar{
  top: 0;
  left: 0;
  height: 100vh;
  width: 230px;
  background-color: rgb(7 12 20);
  border-right: 1px solid #000000;
  padding: 6px 20px 37px;
}
.sidebar ul li{
  position: relative;
  height: 45px;
  width: 100%;
  margin: 5px 4px;
  list-style: none;
}
.sidebar ul li a{
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  border-radius: 12px;
  font-size: 16px;
}
.hover:hover{
  background: rgba(23, 35, 43, 0.5);
  backdrop-filter: blur(3.5px);
  padding: 8px;
  border-radius: 4px;
}
.link-img{
  margin-right: 5%;
  width: 12%;
  color: #ffffff;
}
.links-name{
  font-size: 16px;
  color: #ffffff;
}
.wallets{
  font-size: 15.5px;
}
.feature-card-1 p {
  font-size: 17px;
}
.feature-card-2 p{
  font-size: 17px;
  background: rgba(255, 255, 255, 0.1);
  border: 0.5px solid rgba(255, 255, 255, 0.13);
  border-radius: 3px;
  padding: 2.5px 8px;
  margin-right: 8px;
}
.feature-card-3 img{
  margin-right: 7px;
}
.feature-card-3 p{
  padding-top: 2px;
}
.logout span{
  font-size: 16px;
  padding-top: 10.5px;
  padding-right: 2%;
}
.icon {
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
  padding-top: 15px;
  color: #FFFFFF;
}
.icon i {
  cursor: pointer;
  font-size: 30px;
  transition: 0.8s ease all;
}
.icon-active {
  transform: rotate(360deg);
}
.logout span{
  font-size: 16px;
  padding-top: 10.5px;
  padding-right: 10px;
}
.icon {
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
  color: #ffffff;
  padding-top: 15px;
}
.icon i {
  cursor: pointer;
  font-size: 30px;
  transition: 0.8s ease all;
}
.icon-active {
  transform: rotate(360deg);
}
.links-name-separate span{
  margin-bottom: 0;
  padding-bottom: 0;
  padding-top: 0;
  margin-top: 0;
}
.dropdown-nav-2{
  display: flex;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  /*padding-right: 7%;*/
  height: 100vh;
  width: 240px;
  /*height: 100%;*/
  background-color: rgb(7 12 20);
  font-size: 16px;
  text-align: center;
}
.dropdown-nav-2 li {
  overflow: hidden;
  list-style: none;
  font-weight: bold;
  font-size: 16px;
}
.dropdown-nav-2 ul {
  /*padding-top: 25%;*/
  display: block;
  margin-right: auto;
  margin-left: 18%;
}
.dropdown-nav-2 a {
  padding: 0.55em 0;
  color: #ffffff;
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  /*letter-spacing: 1px;*/
  margin: 0;
  text-decoration: none;
}
.dropdown-nav-2 a:before,
.dropdown-nav-2 a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.dropdown-nav-2 a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #676767;
  white-space: nowrap;
}
.dropdown-nav-2 li:hover a,
.dropdown-nav-2.current a {
  color: #ffffff;
}
.bx-menu{
  font-size: 38px;
  cursor: pointer;
  transition: .8s ease all;
  color: #ffffff;
}
.icon-active{
  transform: rotate(180deg);
}


@media (max-width: 990px) {
  i{
    font-size: 20px;
    padding-right: 5px;
  }
  .icon{
    overflow-y: unset;
  }

}
@media (max-width: 700px) {



}
</style>

