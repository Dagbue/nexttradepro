<template>
  <div class="alpha">

    <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/#%7B%22colorTheme%22%3A%22dark%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeCrypto%22%7D" title="ticker tape TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: 65px; width: 99%; margin-bottom: 0.5%;"></iframe>


    <p v-show="this.UserDetails.user.userStatus === 'unVerified'" class="text-2">Your account is not verified. Kindly
      upload a valid government Id to verify your account.
      <a><router-link to="/update-account">Click here</router-link></a></p>


    <div class="separator">
      <div class="part-1">
        <div v-show="this.placeTradeStatus === 'Forex'">
          <div  class="tradingview_7a2ab-wrapper"
               style="position: relative;
               box-sizing: content-box;
               width: 100%;
               display: block;
               margin-left: auto;
               margin-right: auto;
               height: 480px;"
          >
            <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_7a2ab" frameborder="0"
                    allowtransparency="true" scrolling="no" allowfullscreen="true"
                    src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22OANDA%3AUSDCAD%22%2C%22frameElementId%22%3A%22tradingview_7a2ab%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%2C%22show_popup_button%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22OANDA%3AUSDCAD%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2F%22%7D"
                    style="width: 100%; height: 100%; margin: 0px !important; padding: 0px !important;"></iframe>
          </div>
        </div>


        <div v-show="this.placeTradeStatus === 'Crypto'">
        <div  class="tradingview_1a10b-wrapper"
             style="position: relative;
               box-sizing: content-box;
               width: 100%;
               display: block;
               margin-left: auto;
               margin-right: auto;
               height: 480px;"
        >
          <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_1a10b" frameborder="0"
                  allowtransparency="true" scrolling="no" allowfullscreen="true"
                  src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22frameElementId%22%3A%22tradingview_1a10b%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22details%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeCrypto%22%7D" style="width: 100%; height: 100%; margin: 0px !important; padding: 0px !important;"></iframe>
        </div>
        </div>

        <div v-show="this.placeTradeStatus === 'CFD'">
        <div  class="tradingview_512a5-wrapper"
             style="position: relative;
               box-sizing: content-box;
               width: 100%;
               display: block;
               margin-left: auto;
               margin-right: auto;
               height: 480px;"
        >
          <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_512a5" frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen="true" src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22FX%3AUSDOLLAR%22%2C%22frameElementId%22%3A%22tradingview_512a5%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%2C%22show_popup_button%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22FX%3AUSDOLLAR%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeCFD%22%7D" style="width: 100%; height: 100%; margin: 0px !important; padding: 0px !important;"></iframe>
        </div>
        </div>

        <div v-show="this.placeTradeStatus === 'Stocks'">
        <div  class="tradingview_a28b8-wrapper"
             style="position: relative;
               box-sizing: content-box;
               width: 100%;
               display: block;
               margin-left: auto;
               margin-right: auto;
               height: 480px;"
        >
          <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_a28b8" frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen="true" src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22NYSE%3ASPXC%22%2C%22frameElementId%22%3A%22tradingview_a28b8%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%2C%22show_popup_button%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22NYSE%3ASPXC%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeStocks%22%7D" style="width: 100%; height: 100%; margin: 0px !important; padding: 0px !important;"></iframe>
        </div>
        </div>

        <div v-show="this.placeTradeStatus === 'RealEstate'">
        <div  class="tradingview_a28b8-wrapper"
             style="position: relative;
               box-sizing: content-box;
               width: 100%;
               display: block;
               margin-left: auto;
               margin-right: auto;
               height: 480px;"
        >
          <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_a28b8" frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen="true" src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22NYSE%3ASPXC%22%2C%22frameElementId%22%3A%22tradingview_a28b8%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%2C%22show_popup_button%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22NYSE%3ASPXC%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeStocks%22%7D" style="width: 100%; height: 100%; margin: 0px !important; padding: 0px !important;"></iframe>
        </div>
        </div>

        <div>
          <div class="body">
            <h2>My Trade History</h2>
            <div class="row trans-mgt">
              <div class="form-group fg--search">
                <button type="submit" @click.prevent="filterTrades"><i class="fa fa-search"></i></button>
                <input style="color: #FFFFFF;" type="text" class="input" placeholder="Search trades..." v-model="searchQuery" @input="filterTrades"/>
              </div>
              <div class="filter_group">

                  <select class="action-content">
                    <option>Filter</option>
                    <option>Call</option>
                    <option>Put</option>
                  </select>

              </div>
            </div>
          </div>
          <div class="section-5">

            <div class="empty-state-container" v-if="this.readUserTrade.trades.length === 0">
              <img src="@/assets/empty.svg" alt="empty" class="empty-state">
              <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-1">You have nothing to see, This is where your Trade history will appear</p>
<!--              <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-2"></p>-->

            </div>


            <div class="table" v-if="this.readUserTrade.trades.length > 0" >
              <table>
                <tr style="background-color: #FFFFFF;">
                  <th>Trade ID</th>
                  <th>Trade Type</th>
                  <th>Trade Time</th>
                  <th>Symbol Traded</th>
                  <th>Expected Payout</th>
                  <th>Leverage</th>
                  <th>End Price</th>
                  <th>End Time</th>
                  <th>Trade Status</th>
                </tr>
                <div v-if="loading">
                  <div class="table-content">
                    <div class="name-wrapper-body">
                      <p
                          class="table-body-text"
                          style="position: absolute;
                    margin-left: 45%"
                      >
                        <base-loader/>
                      </p>
                    </div>
                  </div>
                </div>
                <tbody v-else v-for="child in paginatedItems" :key="child.key">
                <tr>
                  <td data-label="Trade ID">{{child.tradeReference}}</td>
                  <td data-label="Trade Type">{{child.tradeType}}</td>
                  <td data-label="Trade Time">{{child.tradeTime | formatDate2}}</td>
                  <td data-label="Symbol Traded">{{child.symbolTraded}}</td>
                  <td data-label="Expected Payout">
                    <div v-if="child.tradeStatus === 'won'" class="table-sep">
                      <i v-if="child.tradeType === 'Buy'" style="color: #10d876 !important" class="fa fa-arrow-up text-success"></i>
                      <i v-if="child.tradeType === 'Sell'" style="color: #E50202 !important" class="fa fa-arrow-down text-danger"></i>
                      <p>{{child.expectedPayout}}</p>
                    </div>
                    <div v-if="child.tradeStatus === 'lost'" class="table-sep">
                      <i v-if="child.tradeType === 'Buy'" style="color: #10d876 !important" class="fa fa-arrow-up text-success"></i>
                      <i v-if="child.tradeType === 'Sell'" style="color: #E50202 !important" class="fa fa-arrow-down text-danger"></i>
                      <p>{{child.expectedPayout}}</p>
                    </div>
                    <div v-if="child.tradeStatus === 'pending'" class="table-sep">
                      <i v-if="child.tradeType === 'Buy'" style="color: #10d876 !important" class="fa fa-arrow-up text-success"></i>
                      <i v-if="child.tradeType === 'Sell'" style="color: #E50202 !important" class="fa fa-arrow-down text-danger"></i>
                      <p style="font-size: 12px;">$ PendingTrade</p>
                    </div>
                  </td>
                  <td data-label="Leverage">{{child.leverage}}</td>
                  <td data-label="End Price">{{child.endPrice}}</td>
                  <td data-label="End Time">{{child.endTime | formatDate}}</td>
                  <td data-label="Trade Status">
                    <div>
                      <p class="status-won" v-show="child.tradeStatus === 'won'">{{child.tradeStatus}}</p>
                      <p class="status-lost" v-show="child.tradeStatus === 'lost'">{{child.tradeStatus}}</p>
                      <p class="status-pending" v-show="child.tradeStatus === 'pending'">{{child.tradeStatus}}</p>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>

              <div class="pagination">
                <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
                <div class="page-indicator">
                  Page {{ currentPage }} of {{ totalPages }}
                </div>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="part-2">
        <div class="navigation-bar">
          <p
              class="navigation-bar-text-1"
              :class="{ active: screen5 === 'pnl' }"
              @click="changeScreen('pnl')"
          >
            Symbol
          </p>
          <p
              class="navigation-bar-text-1"
              :class="{ active: screen5 === 'placeTrade' }"
              @click="changeScreen('placeTrade')"
          >
            Analysis
          </p>
          <p
              class="navigation-bar-text-1"
              :class="{ active: screen5 === 'TradeHistory' }"
              @click="changeScreen('TradeHistory')"
          >
            News
          </p>
        </div>


            <div v-show="this.screen5 === 'pnl'" class="trade-type-button">
              <button  @click="toggleScreen" class="trade-btn-1">Trade Forex</button>
              <button  @click="toggleScreen2" class="trade-btn-2">Trade Crypto</button>


              <button  @click="toggleScreen3" class="trade-btn-3">Trade CFD</button>
              <button  @click="toggleScreen4" class="trade-btn-4">Trade Stocks</button>


              <button  @click="toggleScreen5" class="trade-btn-5">Trade Real Estate</button>
            </div>

        <div class="symbol" v-show="this.screen5 === 'pnl'">
          <form ref="myForm" v-show="this.placeTradeStatus === 'Forex'"  class="form-part" @submit.prevent="placeTrade">

            <div class="form-header">
              <p style="font-weight: bold;color: #FFFFFF;">TRADE FOREX - PLACE TRADE</p>
            </div>

            <div class="form-group">
              <label class="label">Amount</label>
              <input type="number" placeholder="Enter Amount"  name="Amount" v-model="amountTrade" required/>
            </div>

            <div class="form-group">
              <label class="label">Markets</label>
              <select name="tradingPair" id="tradingPair" required v-model="symbolTraded" >
                <option selected disabled value="">Select Market</option>
                <option :value="null" disabled>Select Market</option>
                <option value="USD/CAD">USD/CAD</option>
                <option value="USD/CHF">USD/CHF</option>
                <option value="USD/JPY">USD/JPY</option>
                <option value="EUR/USD">EUR/USD</option>
                <option value="GBP/USD">GBP/USD</option>
                <option value="NZD/USD">NZD/USD</option>
                <option value="AUD/CAD">AUD/CAD</option>
                <option value="AUD/USD">AUD/USD</option>
                <option value="EUR/GBP">EUR/GBP</option>
                <option value="GBP/AUD">GBP/AUD</option>
                <option value="EUR/AUD">EUR/AUD</option>
                <option value="AUD/CHF">AUD/CHF</option>
                <option value="GBP/CHF">GBP/CHF</option>
                <option value="GBP/JPY">GBP/JPY</option>
                <option value="AUD/JPY">AUD/JPY</option>
                <option value="EUR/JPY">EUR/JPY</option>
                <option value="AUD/NZD">AUD/NZD</option>
                <option value="EUR/CHF">EUR/CHF</option>
                <option value="NZD/JPY">NZD/JPY</option>
                <option value="CAD/CHF">CAD/CHF</option>
                <option value="GBP/NZD">GBP/NZD</option>
                <option value="CHF/JPY">CHF/JPY</option>
                <option value="NZD/CAD">NZD/CAD</option>
                <option value="NZD/CHF">NZD/CHF</option>
                <option value="USD/ZAR">USD/ZAR</option>
                <option value="EUR/ZAR">EUR/ZAR</option>
                <option value="GBP/ZAR">GBP/ZAR</option>
                <option value="AUD/ZAR">AUD/ZAR</option>
                <option value="CAD/ZAR">CAD/ZAR</option>
                <option value="NZD/ZAR">NZD/ZAR</option>
                <option value="CHF/ZAR">CHF/ZAR</option>
                <option value="JPY/ZAR">JPY/ZAR</option>
                <option value="USD/MXN">USD/MXN</option>
                <option value="EUR/MXN">EUR/MXN</option>
                <option value="GBP/MXN">GBP/MXN</option>
                <option value="AUD/MXN">AUD/MXN</option>
                <option value="CAD/MXN">CAD/MXN</option>
                <option value="NZD/MXN">NZD/MXN</option>
                <option value="CHF/MXN">CHF/MXN</option>
                <option value="JPY/MXN">JPY/MXN</option>
                <option value="USD/TRY">USD/TRY</option>
                <option value="EUR/TRY">EUR/TRY</option>
                <option value="GBP/TRY">GBP/TRY</option>
                <option value="AUD/TRY">AUD/TRY</option>
                <option value="CAD/TRY">CAD/TRY</option>
                <option value="NZD/TRY">NZD/TRY</option>
                <option value="CHF/TRY">CHF/TRY</option>
                <option value="JPY/TRY">JPY/TRY</option>
                <option value="USD/BRL">USD/BRL</option>
                <option value="EUR/BRL">EUR/BRL</option>
                <option value="GBP/BRL">GBP/BRL</option>
                <option value="AUD/BRL">AUD/BRL</option>
                <option value="CAD/BRL">CAD/BRL</option>
                <option value="NZD/BRL">NZD/BRL</option>
                <option value="CHF/BRL">CHF/BRL</option>
                <option value="JPY/BRL">JPY/BRL</option>
                <option value="USD/RUB">USD/RUB</option>
                <option value="EUR/RUB">EUR/RUB</option>
                <option value="GBP/RUB">GBP/RUB</option>
                <option value="AUD/RUB">AUD/RUB</option>
                <option value="CAD/RUB">CAD/RUB</option>
                <option value="NZD/RUB">NZD/RUB</option>
                <option value="CHF/RUB">CHF/RUB</option>
                <option value="JPY/RUB">JPY/RUB</option>
                <option value="USD/INR">USD/INR</option>
                <option value="EUR/INR">EUR/INR</option>
                <option value="GBP/INR">GBP/INR</option>
                <option value="AUD/INR">AUD/INR</option>
                <option value="CAD/INR">CAD/INR</option>
                <option value="NZD/INR">NZD/INR</option>
                <option value="CHF/INR">CHF/INR</option>
                <option value="JPY/INR">JPY/INR</option>
                <option value="USD/CNY">USD/CNY</option>
                <option value="EUR/CNY">EUR/CNY</option>
                <option value="GBP/CNY">GBP/CNY</option>
                <option value="AUD/CNY">AUD/CNY</option>
                <option value="CAD/CNY">CAD/CNY</option>
                <option value="NZD/CNY">NZD/CNY</option>
                <option value="CHF/CNY">CHF/CNY</option>
                <option value="JPY/CNY">JPY/CNY</option>
                <option value="USD/KRW">USD/KRW</option>
                <option value="EUR/KRW">EUR/KRW</option>
                <option value="GBP/KRW">GBP/KRW</option>
                <option value="AUD/KRW">AUD/KRW</option>
                <option value="CAD/KRW">CAD/KRW</option>
                <option value="NZD/KRW">NZD/KRW</option>
                <option value="CHF/KRW">CHF/KRW</option>
                <option value="JPY/KRW">JPY/KRW</option>
                <option value="USD/PHP">USD/PHP</option>
                <option value="EUR/PHP">EUR/PHP</option>
                <option value="GBP/PHP">GBP/PHP</option>
                <option value="AUD/PHP">AUD/PHP</option>
                <option value="CAD/PHP">CAD/PHP</option>
                <option value="NZD/PHP">NZD/PHP</option>
                <option value="CHF/PHP">CHF/PHP</option>
                <option value="JPY/PHP">JPY/PHP</option>
                <option value="USD/IDR">USD/IDR</option>
                <option value="EUR/IDR">EUR/IDR</option>
                <option value="GBP/IDR">GBP/IDR</option>
                <option value="AUD/IDR">AUD/IDR</option>
                <option value="CAD/IDR">CAD/IDR</option>
                <option value="NZD/IDR">NZD/IDR</option>
                <option value="CHF/IDR">CHF/IDR</option>
                <option value="JPY/IDR">JPY/IDR</option>
                <option value="USD/THB">USD/THB</option>
                <option value="EUR/THB">EUR/THB</option>
                <option value="GBP/THB">GBP/THB</option>
                <option value="AUD/THB">AUD/THB</option>
                <option value="CAD/THB">CAD/THB</option>
                <option value="NZD/THB">NZD/THB</option>
                <option value="CHF/THB">CHF/THB</option>
                <option value="JPY/THB">JPY/THB</option>
                <option value="USD/MYR">USD/MYR</option>
                <option value="EUR/MYR">EUR/MYR</option>
                <option value="GBP/MYR">GBP/MYR</option>
                <option value="AUD/MYR">AUD/MYR</option>
                <option value="CAD/MYR">CAD/MYR</option>
                <option value="NZD/MYR">NZD/MYR</option>
                <option value="CHF/MYR">CHF/MYR</option>
                <option value="JPY/MYR">JPY/MYR</option>
                <option value="USD/VND">USD/VND</option>
                <option value="EUR/VND">EUR/VND</option>
                <option value="GBP/VND">GBP/VND</option>
                <option value="AUD/VND">AUD/VND</option>
                <option value="CAD/VND">CAD/VND</option>
                <option value="NZD/VND">NZD/VND</option>
                <option value="CHF/VND">CHF/VND</option>
                <option value="JPY/VND">JPY/VND</option>
              </select>
            </div>

<!--            <div class="form-group">-->
<!--              <label class="label">Stop Loss</label>-->
<!--              <input type="number" placeholder="Enter Stop Loss"  name="Stop Loss"  required/>-->
<!--            </div>-->

<!--            <div class="form-group">-->
<!--              <label class="label">Take Profit</label>-->
<!--              <input type="number" placeholder="Enter Take Profit"  name="Take Profit"  required/>-->
<!--            </div>-->

<!--            <div class="form-group">-->
<!--              <label class="label">Entry Price</label>-->
<!--              <input type="number" placeholder="Enter Entry Price"  name="Entry Price"  required/>-->
<!--            </div>-->

            <div class="form-group">
              <label class="label">Trade Interval (Time)</label>
              <select name="tradeInterval" id="tradeInterval" required v-model="tradeTime" >
                <option selected disabled value="">Trade Interval (Time)</option>
                <option :value="null" disabled>Trade Interval (Time)</option>
                <option value="1 min">1 min</option>
                <option value="3 min">3 min</option>
                <option value="5 min">5 min</option>
                <option value="15 mins">15 mins</option>
                <option value="30 mins">30 mins</option>
                <option value="1 hr">1 hr</option>
                <option value="2 hr">2 hr</option>
                <option value="1 day">1 day</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Type</label>
              <select name="tradeType" id="tradeType" required v-model="tradeType">
                <option selected disabled value="">Trade Type</option>
                <option :value="null" disabled>Trade Type</option>
                <option value="Call">Call</option>
                <option value="Put">Put</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Leverage</label>
              <select name="tradeLeverage" id="tradeLeverage" required v-model="leverage" >
                <option selected disabled value="">Trade Leverage</option>
                <option :value="null" disabled>Trade Leverage</option>
                <option value="0.5X">0.5X</option>
                <option value="1.0X">1.0X</option>
                <option value="1.5X">1.5X</option>
                <option value="2.0X">2.0X</option>
                <option value="5X">5X</option>
                <option value="10X">10X</option>
              </select>
            </div>

            <base-button  style="  background-color: #007aff;border: 1px solid #007aff;" :loading="loading" >Place Trade </base-button>
          </form>

          <form ref="myForm" v-show="this.placeTradeStatus === 'Crypto'" class="form-part" @submit.prevent="placeTrade">

            <div class="form-header">
              <p style="font-weight: bold;color: #FFFFFF;">TRADE CRYPTO - PLACE TRADE</p>
            </div>

            <div class="form-group">
              <label class="label">Amount</label>
              <input type="number" placeholder="Enter Amount"  name="Amount" v-model="amountTrade"  required/>
            </div>

            <div class="form-group">
              <label class="label">Markets</label>
              <select name="tradingPair" id="tradingPair" required v-model="symbolTraded" >
                <option selected disabled value="">Select Market</option>
                <option :value="null" disabled>Select Market</option>
                <option value="BCH/BTC">BCH/BTC</option>
                <option value="BCH/EUR">BCH/EUR</option>
                <option value="BCH/GBP">BCH/GBP</option>
                <option value="BTC-EOS">BTC-EOS</option>
                <option value="BTC/EUR">BTC/EUR</option>
                <option value="BTC/GBP">BTC/GBP</option>
                <option value="BTC/USD">BTC/USD</option>
                <option value="BTC/USDC">BTC/USDC</option>
                <option value="EOS/BTC">EOS/BTC</option>
                <option value="EOS/EUR">EOS/EUR</option>
                <option value="EOS/USD">EOS/USD</option>
                <option value="ETC/BTC">ETC/BTC</option>
                <option value="ETC/EUR">ETC/EUR</option>
                <option value="ETC/GBP">ETC/GBP</option>
                <option value="ETC/USD">ETC/USD</option>
                <option value="ETH/BTC">ETH/BTC</option>
                <option value="ETH/EUR">ETH/EUR</option>
                <option value="ETH/GBP">ETH/GBP</option>
                <option value="ETH/USD">ETH/USD</option>
                <option value="LTC/BTC">LTC/BTC</option>
                <option value="LTC/EUR">LTC/EUR</option>
                <option value="LTC/GBP">LTC/GBP</option>
                <option value="LTC/USD">LTC/USD</option>
                <option value="MKR/BTC">MKR/BTC</option>
                <option value="PCP-BTC">PCP-BTC</option>
                <option value="REP/BTC">REP/BTC</option>
                <option value="REP/USD">REP/USD</option>
                <option value="TXR/GBP">TXR/GBP</option>
                <option value="XLM/BTC">XLM/BTC</option>
                <option value="XLM/EUR">XLM/EUR</option>
                <option value="XLM/USD">XLM/USD</option>
                <option value="XRP/BTC">XRP/BTC</option>
                <option value="XRP/EUR">XRP/EUR</option>
                <option value="XRP/USD">XRP/USD</option>
                <option value="ZEC/BTC">ZEC/BTC</option>
                <option value="ZRX/BTC">ZRX/BTC</option>
                <option value="ZRX/EUR">ZRX/EUR</option>
                <option value="ZRX/USD">ZRX/USD</option>
                <option value="ADA/BTC">ADA/BTC</option>
                <option value="ADA/EUR">ADA/EUR</option>
                <option value="ADA/GBP">ADA/GBP</option>
                <option value="ADA/USD">ADA/USD</option>
                <option value="ADA/ETH">ADA/ETH</option>
                <option value="BNB/BTC">BNB/BTC</option>
                <option value="BNB/EUR">BNB/EUR</option>
                <option value="BNB/GBP">BNB/GBP</option>
                <option value="BNB/USD">BNB/USD</option>
                <option value="BNB/ETH">BNB/ETH</option>
                <option value="DOGE/BTC">DOGE/BTC</option>
                <option value="DOGE/EUR">DOGE/EUR</option>
                <option value="DOGE/GBP">DOGE/GBP</option>
                <option value="DOGE/USD">DOGE/USD</option>
                <option value="DOGE/ETH">DOGE/ETH</option>
                <option value="DOT/BTC">DOT/BTC</option>
                <option value="DOT/EUR">DOT/EUR</option>
                <option value="DOT/GBP">DOT/GBP</option>
                <option value="DOT/USD">DOT/USD</option>
                <option value="DOT/ETH">DOT/ETH</option>
                <option value="LINK/BTC">LINK/BTC</option>
                <option value="LINK/EUR">LINK/EUR</option>
                <option value="LINK/GBP">LINK/GBP</option>
                <option value="LINK/USD">LINK/USD</option>
                <option value="LINK/ETH">LINK/ETH</option>
                <option value="NEO/BTC">NEO/BTC</option>
                <option value="NEO/EUR">NEO/EUR</option>
                <option value="NEO/GBP">NEO/GBP</option>
                <option value="NEO/USD">NEO/USD</option>
                <option value="NEO/ETH">NEO/ETH</option>
                <option value="TRX/BTC">TRX/BTC</option>
                <option value="TRX/EUR">TRX/EUR</option>
                <option value="TRX/GBP">TRX/GBP</option>
                <option value="TRX/USD">TRX/USD</option>
                <option value="TRX/ETH">TRX/ETH</option>
                <option value="VET/BTC">VET/BTC</option>
                <option value="VET/EUR">VET/EUR</option>
                <option value="VET/GBP">VET/GBP</option>
                <option value="VET/USD">VET/USD</option>
                <option value="VET/ETH">VET/ETH</option>
                <option value="SOL/BTC">SOL/BTC</option>
                <option value="SOL/EUR">SOL/EUR</option>
                <option value="SOL/GBP">SOL/GBP</option>
                <option value="SOL/USD">SOL/USD</option>
                <option value="SOL/ETH">SOL/ETH</option>
                <option value="ALGO/BTC">ALGO/BTC</option>
                <option value="ALGO/EUR">ALGO/EUR</option>
                <option value="ALGO/GBP">ALGO/GBP</option>
                <option value="ALGO/USD">ALGO/USD</option>
                <option value="ALGO/ETH">ALGO/ETH</option>
                <option value="FIL/BTC">FIL/BTC</option>
                <option value="FIL/EUR">FIL/EUR</option>
                <option value="FIL/GBP">FIL/GBP</option>
                <option value="FIL/USD">FIL/USD</option>
                <option value="FIL/ETH">FIL/ETH</option>
                <option value="UNI/BTC">UNI/BTC</option>
                <option value="UNI/EUR">UNI/EUR</option>
                <option value="UNI/GBP">UNI/GBP</option>
                <option value="UNI/USD">UNI/USD</option>
                <option value="UNI/ETH">UNI/ETH</option>
                <option value="AAVE/BTC">AAVE/BTC</option>
                <option value="AAVE/EUR">AAVE/EUR</option>
                <option value="AAVE/GBP">AAVE/GBP</option>
                <option value="AAVE/USD">AAVE/USD</option>
                <option value="AAVE/ETH">AAVE/ETH</option>
                <option value="XTZ/BTC">XTZ/BTC</option>
                <option value="XTZ/EUR">XTZ/EUR</option>
                <option value="XTZ/GBP">XTZ/GBP</option>
                <option value="XTZ/USD">XTZ/USD</option>
                <option value="XTZ/ETH">XTZ/ETH</option>
                <option value="SHIB/BTC">SHIB/BTC</option>
                <option value="SHIB/EUR">SHIB/EUR</option>
                <option value="SHIB/GBP">SHIB/GBP</option>
                <option value="SHIB/USD">SHIB/USD</option>
                <option value="SHIB/ETH">SHIB/ETH</option>
                <option value="AVAX/BTC">AVAX/BTC</option>
                <option value="AVAX/EUR">AVAX/EUR</option>
                <option value="AVAX/GBP">AVAX/GBP</option>
                <option value="AVAX/USD">AVAX/USD</option>
                <option value="AVAX/ETH">AVAX/ETH</option>
                <option value="COMP/BTC">COMP/BTC</option>
                <option value="COMP/EUR">COMP/EUR</option>
                <option value="COMP/GBP">COMP/GBP</option>
                <option value="COMP/USD">COMP/USD</option>
                <option value="COMP/ETH">COMP/ETH</option>
                <option value="MATIC/BTC">MATIC/BTC</option>
                <option value="MATIC/EUR">MATIC/EUR</option>
                <option value="MATIC/GBP">MATIC/GBP</option>
                <option value="MATIC/USD">MATIC/USD</option>
                <option value="MATIC/ETH">MATIC/ETH</option>
                <option value="KSM/BTC">KSM/BTC</option>
                <option value="KSM/EUR">KSM/EUR</option>
                <option value="KSM/GBP">KSM/GBP</option>
                <option value="KSM/USD">KSM/USD</option>
                <option value="KSM/ETH">KSM/ETH</option>
                <option value="ICP/BTC">ICP/BTC</option>
                <option value="ICP/EUR">ICP/EUR</option>
                <option value="ICP/GBP">ICP/GBP</option>
                <option value="ICP/USD">ICP/USD</option>
                <option value="ICP/ETH">ICP/ETH</option>

              </select>
            </div>

<!--            <div class="form-group">-->
<!--              <label class="label">Stop Loss</label>-->
<!--              <input type="number" placeholder="Enter Stop Loss"  name="Stop Loss"  required/>-->
<!--            </div>-->

<!--            <div class="form-group">-->
<!--              <label class="label">Take Profit</label>-->
<!--              <input type="number" placeholder="Enter Take Profit"  name="Take Profit"  required/>-->
<!--            </div>-->

<!--            <div class="form-group">-->
<!--              <label class="label">Entry Price</label>-->
<!--              <input type="number" placeholder="Enter Entry Price"  name="Entry Price"  required/>-->
<!--            </div>-->

            <div class="form-group">
              <label class="label">Trade Interval (Time)</label>
              <select name="tradeInterval" id="tradeInterval" required v-model="tradeTime" >
                <option selected disabled value="">Trade Interval (Time)</option>
                <option :value="null" disabled>Trade Interval (Time)</option>
                <option value="1 min">1 min</option>
                <option value="3 min">3 min</option>
                <option value="5 min">5 min</option>
                <option value="15 mins">15 mins</option>
                <option value="30 mins">30 mins</option>
                <option value="1 hr">1 hr</option>
                <option value="2 hr">2 hr</option>
                <option value="1 day">1 day</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Type</label>
              <select name="tradeType" id="tradeType" required v-model="tradeType" >
                <option selected disabled value="">Trade Type</option>
                <option :value="null" disabled>Trade Type</option>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Leverage</label>
              <select name="tradeLeverage" id="tradeLeverage" required v-model="leverage" >
                <option selected disabled value="">Trade Leverage</option>
                <option :value="null" disabled>Trade Leverage</option>
                <option value="0.5X">0.5X</option>
                <option value="1.0X">1.0X</option>
                <option value="1.5X">1.5X</option>
                <option value="2.0X">2.0X</option>
                <option value="5X">5X</option>
                <option value="10X">10X</option>
              </select>
            </div>

            <base-button :loading="loading" style="  background-color: #007aff;border: 1px solid #007aff;">Place Trade</base-button>
          </form>

          <form ref="myForm" v-show="this.placeTradeStatus === 'CFD'" class="form-part" @submit.prevent="placeTrade">

            <div class="form-header">
              <p style="font-weight: bold;color: #FFFFFF;">TRADE CFD - PLACE TRADE</p>
            </div>

            <div class="form-group">
              <label class="label">Amount</label>
              <input type="number" placeholder="Enter Amount"  name="Amount" v-model="amountTrade" required/>
            </div>

            <div class="form-group">
              <label class="label">Markets</label>
              <select name="tradingPair" id="tradingPair" required v-model="symbolTraded" >
                <option selected disabled value="">Select Market</option>
                <option :value="null" disabled>Select Market</option>
                <option value="US 30">US 30</option>
                <option value="UKX">UKX</option>
                <option value="VIX Volatility Index">VIX Volatility Index</option>
                <option value="Germany 30">Germany 30</option>
                <option value="USA 500">USA 500</option>
                <option value="US Tech 100">US Tech 100</option>
                <option value="Japan 225">Japan 225</option>
                <option value="Europe 50">Europe 50</option>
                <option value="US Wall St 30">US Wall St 30</option>
                <option value="AUXAUD">AUXAUD</option>
                <option value="BCOUSD">BCOUSD</option>
                <option value="WEST TEXAS OIL">WEST TEXAS OIL</option>
                <option value="CAC40">CAC40</option>
                <option value="DXY">DXY</option>
                <option value="EU50">EU50</option>
                <option value="FR40">FR40</option>
                <option value="GRXEUR">GRXEUR</option>
                <option value="HELCHF">HELCHF</option>
                <option value="JPXJPY">JPXJPY</option>
                <option value="KRUUSD">KRUUSD</option>
                <option value="LTNEUR">LTNEUR</option>
                <option value="RUA">RUA</option>
                <option value="TR03">TR03</option>
                <option value="USDBRO">USDBRO</option>
                <option value="S&amp;P 100">S&amp;P 100</option>
                <option value="SXE5">SXE5</option>
                <option value="DOECHF">DOECHF</option>
                <option value="FAANG">FAANG</option>
                <option value="GRXEUR">GRXEUR</option>
                <option value="VRLCHF">VRLCHF</option>
                <option value="XPTUSD">XPTUSD</option>
                <option value="ZA20">ZA20</option>
                <option value="HK50">HK50</option>
                <option value="ID05Y">ID05Y</option>
                <option value="US Small 200">US Small 200</option>
                <option value="NY Tech">NY Tech</option>
                <option value="US MidCap 400">US MidCap 400</option>
                <option value="China A50">China A50</option>
                <option value="India 50">India 50</option>
                <option value="Singapore 30">Singapore 30</option>
                <option value="Taiwan Index">Taiwan Index</option>
                <option value="Brazil 50">Brazil 50</option>
                <option value="Mexico 35">Mexico 35</option>
                <option value="Russia 50">Russia 50</option>
                <option value="Turkey 20">Turkey 20</option>
                <option value="South Africa 40">South Africa 40</option>
                <option value="Egypt Index">Egypt Index</option>
                <option value="Nigeria 30">Nigeria 30</option>
                <option value="Vietnam 30">Vietnam 30</option>
                <option value="Gulf 20">Gulf 20</option>
                <option value="ASEAN 5">ASEAN 5</option>
                <option value="MENA 50">MENA 50</option>
                <option value="Nordic 30">Nordic 30</option>
                <option value="Baltic 20">Baltic 20</option>
                <option value="Poland 20">Poland 20</option>
                <option value="Hungary 12">Hungary 12</option>
                <option value="Czech 20">Czech 20</option>
                <option value="Slovakia Index">Slovakia Index</option>
                <option value="Romania 15">Romania 15</option>
                <option value="Bulgaria 10">Bulgaria 10</option>
                <option value="Malta Index">Malta Index</option>
                <option value="Cyprus Index">Cyprus Index</option>
                <option value="Adriatic 20">Adriatic 20</option>
                <option value="Baltic 10">Baltic 10</option>
                <option value="Canada 60">Canada 60</option>
                <option value="Australia 200">Australia 200</option>
                <option value="New Zealand 50">New Zealand 50</option>
                <option value="Chile 40">Chile 40</option>
                <option value="Argentina 30">Argentina 30</option>
                <option value="Peru 25">Peru 25</option>
                <option value="Colombia 20">Colombia 20</option>
                <option value="Venezuela 20">Venezuela 20</option>
                <option value="Panama 20">Panama 20</option>
                <option value="Uruguay Index">Uruguay Index</option>
                <option value="Paraguay Index">Paraguay Index</option>
                <option value="Iran 30">Iran 30</option>
                <option value="Pakistan 50">Pakistan 50</option>
                <option value="Bangladesh 30">Bangladesh 30</option>
                <option value="Malaysia 30">Malaysia 30</option>
                <option value="Philippines 30">Philippines 30</option>
                <option value="Thailand 50">Thailand 50</option>
                <option value="Myanmar Index">Myanmar Index</option>
                <option value="Cambodia Index">Cambodia Index</option>
                <option value="Laos Index">Laos Index</option>
                <option value="Mongolia Index">Mongolia Index</option>
                <option value="UAE 40">UAE 40</option>
                <option value="Saudi 30">Saudi 30</option>
                <option value="Qatar 20">Qatar 20</option>
                <option value="Bahrain 15">Bahrain 15</option>
                <option value="Oman 20">Oman 20</option>
                <option value="Kuwait 20">Kuwait 20</option>
                <option value="Jordan 15">Jordan 15</option>
                <option value="Lebanon Index">Lebanon Index</option>
                <option value="Syria Index">Syria Index</option>
                <option value="Georgia Index">Georgia Index</option>
                <option value="Armenia Index">Armenia Index</option>
                <option value="Azerbaijan 20">Azerbaijan 20</option>
                <option value="Kazakhstan 30">Kazakhstan 30</option>
                <option value="Uzbekistan 20">Uzbekistan 20</option>
                <option value="Turkmenistan Index">Turkmenistan Index</option>
                <option value="Kyrgyzstan Index">Kyrgyzstan Index</option>
                <option value="Tajikistan Index">Tajikistan Index</option>
                <option value="North Korea Index">North Korea Index</option>
                <option value="South Korea 200">South Korea 200</option>
                <option value="Japan 400">Japan 400</option>
                <option value="Australian OZ">Australian OZ</option>
                <option value="Swiss 20">Swiss 20</option>
                <option value="German Tech 30">German Tech 30</option>
                <option value="French 75">French 75</option>
                <option value="Italian 40">Italian 40</option>
                <option value="Spanish 35">Spanish 35</option>
                <option value="Dutch 25">Dutch 25</option>
                <option value="Belgium 20">Belgium 20</option>
                <option value="Austrian 20">Austrian 20</option>
                <option value="Greek 20">Greek 20</option>
                <option value="Portuguese 20">Portuguese 20</option>
                <option value="Norwegian 25">Norwegian 25</option>
                <option value="Swedish 30">Swedish 30</option>
                <option value="Finnish 25">Finnish 25</option>
                <option value="Danish 20">Danish 20</option>
                <option value="Icelandic Index">Icelandic Index</option>
              </select>
            </div>

<!--            <div class="form-group">-->
<!--              <label class="label">Stop Loss</label>-->
<!--              <input type="number" placeholder="Enter Stop Loss"  name="Stop Loss"  required/>-->
<!--            </div>-->

<!--            <div class="form-group">-->
<!--              <label class="label">Take Profit</label>-->
<!--              <input type="number" placeholder="Enter Take Profit"  name="Take Profit"  required/>-->
<!--            </div>-->

<!--            <div class="form-group">-->
<!--              <label class="label">Entry Price</label>-->
<!--              <input type="number" placeholder="Enter Entry Price"  name="Entry Price"  required/>-->
<!--            </div>-->

            <div class="form-group">
              <label class="label">Trade Interval (Time)</label>
              <select name="tradeInterval" id="tradeInterval" required v-model="tradeTime">
                <option selected disabled value="">Trade Interval (Time)</option>
                <option :value="null" disabled>Trade Interval (Time)</option>
                <option value="1 min">1 min</option>
                <option value="3 min">3 min</option>
                <option value="5 min">5 min</option>
                <option value="15 mins">15 mins</option>
                <option value="30 mins">30 mins</option>
                <option value="1 hr">1 hr</option>
                <option value="2 hr">2 hr</option>
                <option value="1 day">1 day</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Type</label>
              <select name="tradeType" id="tradeType" required v-model="tradeType" >
                <option selected disabled value="">Trade Type</option>
                <option :value="null" disabled>Trade Type</option>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Leverage</label>
              <select name="tradeLeverage" id="tradeLeverage" required v-model="leverage" >
                <option selected disabled value="">Trade Leverage</option>
                <option :value="null" disabled>Trade Leverage</option>
                <option value="0.5X">0.5X</option>
                <option value="1.0X">1.0X</option>
                <option value="1.5X">1.5X</option>
                <option value="2.0X">2.0X</option>
                <option value="5X">5X</option>
                <option value="10X">10X</option>
              </select>
            </div>

            <base-button :loading="loading" style="  background-color: #007aff;border: 1px solid #007aff;">Place Trade</base-button>
          </form>

          <form ref="myForm" v-show="this.placeTradeStatus === 'Stocks'" class="form-part" @submit.prevent="placeTrade">

            <div class="form-header">
              <p style="font-weight: bold;color: #FFFFFF;">TRADE STOCKS - PLACE TRADE</p>
            </div>

            <div class="form-group">
              <label class="label">Amount</label>
              <input type="number" placeholder="Enter Amount"  name="Amount" v-model="amountTrade" required/>
            </div>

            <div class="form-group">
              <label class="label">Markets</label>
              <select name="tradingPair" id="tradingPair" required v-model="symbolTraded" >
                <option selected disabled value="">Select Market</option>
                <option :value="null" disabled>Select Market</option>
                <option value="AMAZON">AMAZON</option>
                <option value="APPLE">APPLE</option>
                <option value="COCA COLA">COCA COLA</option>
                <option value="DAX30">DAX30</option>
                <option value="AIRBNB INC">AIRBNB INC</option>
                <option value="BOEING CO">BOEING CO</option>
                <option value="GME STOCKS">GME STOCKS</option>
                <option value="AMC ENTERTAINMENT">AMC ENTERTAINMENT</option>
                <option value="BLACKBERRY">BLACKBERRY</option>
                <option value="CITIGROUP INC">CITIGROUP INC</option>
                <option value="CISCO SYSTEMS INC">CISCO SYSTEMS INC</option>
                <option value="FACEBOOK">FACEBOOK</option>
                <option value="TWITTER">TWITTER</option>
                <option value="TESLA INC">TESLA INC</option>
                <option value="SONY ENT">SONY ENT</option>
                <option value="NASDAQ">NASDAQ</option>
                <option value="ENTERPRISE GROUP INC">ENTERPRISE GROUP INC</option>
                <option value="FORD MOTOR">FORD MOTOR</option>
                <option value="GAZPROM">GAZPROM</option>
                <option value="GLOBE LIFE INC">GLOBE LIFE INC</option>
                <option value="HYDRO ONE LTD">HYDRO ONE LTD</option>
                <option value="LOTUS VENTURES INC">LOTUS VENTURES INC</option>
                <option value="KELLOGG COMPANY">KELLOGG COMPANY</option>
                <option value="WAYFAIR INC">WAYFAIR INC</option>
                <option value="WALMART INC">WALMART INC</option>
                <option value="WALT DISNEY CO">WALT DISNEY CO</option>
                <option value="MACY'S INC">MACY'S INC</option>
                <option value="MCDONALD'S CORPORATIONS">MCDONALD'S CORPORATIONS</option>
                <option value="VISA INC">VISA INC</option>
                <option value="VERIZON">VERIZON</option>
                <option value="TMX GROUP LTD">TMX GROUP LTD</option>
                <option value="ALPHABET INC">ALPHABET INC</option>
                <option value="ORGANIGRAM HOLDINGS">ORGANIGRAM HOLDINGS</option>
                <option value="PFIZER INC">PFIZER INC</option>
                <option value="ADOBE INC">ADOBE INC</option>
                <option value="ALLIANZ SE">ALLIANZ SE</option>
                <option value="AT&T INC">AT&T INC</option>
                <option value="BAYER AG">BAYER AG</option>
                <option value="BMW AG">BMW AG</option>
                <option value="BP PLC">BP PLC</option>
                <option value="BRIDGESTONE CORP">BRIDGESTONE CORP</option>
                <option value="CANON INC">CANON INC</option>
                <option value="CHEVRON CORP">CHEVRON CORP</option>
                <option value="CHINA MOBILE LTD">CHINA MOBILE LTD</option>
                <option value="CITRIX SYSTEMS INC">CITRIX SYSTEMS INC</option>
                <option value="COMCAST CORP">COMCAST CORP</option>
                <option value="CREDIT SUISSE GROUP AG">CREDIT SUISSE GROUP AG</option>
                <option value="DELL TECHNOLOGIES INC">DELL TECHNOLOGIES INC</option>
                <option value="DELTA AIR LINES INC">DELTA AIR LINES INC</option>
                <option value="DEUTSCHE BANK AG">DEUTSCHE BANK AG</option>
                <option value="DEUTSCHE TELEKOM AG">DEUTSCHE TELEKOM AG</option>
                <option value="DUKE ENERGY CORP">DUKE ENERGY CORP</option>
                <option value="EBAY INC">EBAY INC</option>
                <option value="EMIRATES NBD">EMIRATES NBD</option>
                <option value="EXXONMOBIL CORP">EXXONMOBIL CORP</option>
                <option value="FACEBOOK INC">FACEBOOK INC</option>
                <option value="FIAT CHRYSLER AUTOMOBILES">FIAT CHRYSLER AUTOMOBILES</option>
                <option value="GENERAL ELECTRIC CO">GENERAL ELECTRIC CO</option>
                <option value="GENERAL MOTORS CO">GENERAL MOTORS CO</option>
                <option value="GOLDMAN SACHS GROUP INC">GOLDMAN SACHS GROUP INC</option>
                <option value="GOOGLE LLC">GOOGLE LLC</option>
                <option value="HEWLETT PACKARD ENTERPRISE">HEWLETT PACKARD ENTERPRISE</option>
                <option value="HSBC HOLDINGS PLC">HSBC HOLDINGS PLC</option>
                <option value="IBM CORP">IBM CORP</option>
                <option value="INTEL CORP">INTEL CORP</option>
                <option value="INTUIT INC">INTUIT INC</option>
                <option value="J.P. MORGAN CHASE & CO">J.P. MORGAN CHASE & CO</option>
                <option value="JOHNSON & JOHNSON">JOHNSON & JOHNSON</option>
                <option value="JPMORGAN CHASE & CO">JPMORGAN CHASE & CO</option>
                <option value="KIA MOTORS CORP">KIA MOTORS CORP</option>
                <option value="KRAFT HEINZ CO">KRAFT HEINZ CO</option>
                <option value="LENOVO GROUP LTD">LENOVO GROUP LTD</option>
                <option value="LG ELECTRONICS INC">LG ELECTRONICS INC</option>
                <option value="LOCKHEED MARTIN CORP">LOCKHEED MARTIN CORP</option>
                <option value="LUFTHANSA AG">LUFTHANSA AG</option>
                <option value="LUXOTTICA GROUP SPA">LUXOTTICA GROUP SPA</option>
                <option value="LYFT INC">LYFT INC</option>
                <option value="MARATHON OIL CORP">MARATHON OIL CORP</option>
                <option value="MARVELL TECHNOLOGY GROUP">MARVELL TECHNOLOGY GROUP</option>
                <option value="MASTERCARD INC">MASTERCARD INC</option>
                <option value="MERRILL LYNCH & CO INC">MERRILL LYNCH & CO INC</option>
                <option value="METLIFE INC">METLIFE INC</option>
                <option value="MICRON TECHNOLOGY INC">MICRON TECHNOLOGY INC</option>
                <option value="MICROSOFT CORP">MICROSOFT CORP</option>
                <option value="MITSUBISHI CORP">MITSUBISHI CORP</option>
                <option value="MITSUI & CO LTD">MITSUI & CO LTD</option>
                <option value="MIZUHO FINANCIAL GROUP">MIZUHO FINANCIAL GROUP</option>
                <option value="MONSANTO CO">MONSANTO CO</option>
                <option value="MORGAN STANLEY">MORGAN STANLEY</option>
                <option value="NETFLIX INC">NETFLIX INC</option>
                <option value="NIKE INC">NIKE INC</option>
                <option value="NISSAN MOTOR CO LTD">NISSAN MOTOR CO LTD</option>
                <option value="NOKIA CORP">NOKIA CORP</option>
                <option value="NORFOLK SOUTHERN CORP">NORFOLK SOUTHERN CORP</option>
                <option value="NORTHROP GRUMMAN CORP">NORTHROP GRUMMAN CORP</option>
                <option value="NOVARTIS AG">NOVARTIS AG</option>
                <option value="ORACLE CORP">ORACLE CORP</option>
                <option value="PEPSICO INC">PEPSICO INC</option>
                <option value="PFIZER INC">PFIZER INC</option>
                <option value="PHILIPS NV">PHILIPS NV</option>
                <option value="PROCTER & GAMBLE CO">PROCTER & GAMBLE CO</option>
                <option value="QUALCOMM INC">QUALCOMM INC</option>
                <option value="RAYTHEON TECHNOLOGIES CORP">RAYTHEON TECHNOLOGIES CORP</option>
                <option value="RENAULT SA">RENAULT SA</option>
                <option value="ROYAL DUTCH SHELL PLC">ROYAL DUTCH SHELL PLC</option>
                <option value="SAAB AB">SAAB AB</option>
                <option value="SAMSUNG ELECTRONICS CO LTD">SAMSUNG ELECTRONICS CO LTD</option>
                <option value="SANDISK CORP">SANDISK CORP</option>
                <option value="SAP SE">SAP SE</option>
                <option value="SCHLUMBERGER LTD">SCHLUMBERGER LTD</option>
                <option value="SIEMENS AG">SIEMENS AG</option>
                <option value="SNAP INC">SNAP INC</option>
                <option value="SONY CORP">SONY CORP</option>
                <option value="STANDARD CHARTERED PLC">STANDARD CHARTERED PLC</option>
                <option value="STARBUCKS CORP">STARBUCKS CORP</option>
                <option value="STELLANTIS NV">STELLANTIS NV</option>
                <option value="SUMITOMO CORP">SUMITOMO CORP</option>
                <option value="T-MOBILE US INC">T-MOBILE US INC</option>
                <option value="TARGET CORP">TARGET CORP</option>
                <option value="TATA MOTORS LTD">TATA MOTORS LTD</option>
                <option value="TELEFONICA SA">TELEFONICA SA</option>
                <option value="TESLA MOTORS INC">TESLA MOTORS INC</option>
                <option value="TEXAS INSTRUMENTS INC">TEXAS INSTRUMENTS INC</option>
                <option value="THYSSENKRUPP AG">THYSSENKRUPP AG</option>
                <option value="TOYOTA MOTOR CORP">TOYOTA MOTOR CORP</option>
                <option value="UBER TECHNOLOGIES INC">UBER TECHNOLOGIES INC</option>
                <option value="UBS GROUP AG">UBS GROUP AG</option>
                <option value="UNILEVER PLC">UNILEVER PLC</option>
                <option value="UNITED AIRLINES HOLDINGS INC">UNITED AIRLINES HOLDINGS INC</option>
                <option value="UNITED TECHNOLOGIES CORP">UNITED TECHNOLOGIES CORP</option>
                <option value="VODAFONE GROUP PLC">VODAFONE GROUP PLC</option>
                <option value="VOLKSWAGEN AG">VOLKSWAGEN AG</option>
                <option value="WELLS FARGO & CO">WELLS FARGO & CO</option>
                <option value="XEROX CORP">XEROX CORP</option>
                <option value="YAHOO INC">YAHOO INC</option>
                <option value="ZOOM VIDEO COMMUNICATIONS">ZOOM VIDEO COMMUNICATIONS</option>
              </select>
            </div>

<!--            <div class="form-group">-->
<!--              <label class="label">Stop Loss</label>-->
<!--              <input type="number" placeholder="Enter Stop Loss"  name="Stop Loss"  required/>-->
<!--            </div>-->

<!--            <div class="form-group">-->
<!--              <label class="label">Take Profit</label>-->
<!--              <input type="number" placeholder="Enter Take Profit"  name="Take Profit"  required/>-->
<!--            </div>-->

<!--            <div class="form-group">-->
<!--              <label class="label">Entry Price</label>-->
<!--              <input type="number" placeholder="Enter Entry Price"  name="Entry Price"  required/>-->
<!--            </div>-->

            <div class="form-group">
              <label class="label">Trade Interval (Time)</label>
              <select name="tradeInterval" id="tradeInterval" required v-model="tradeTime" >
                <option selected disabled value="">Trade Interval (Time)</option>
                <option :value="null" disabled>Trade Interval (Time)</option>
                <option value="1 min">1 min</option>
                <option value="3 min">3 min</option>
                <option value="5 min">5 min</option>
                <option value="15 mins">15 mins</option>
                <option value="30 mins">30 mins</option>
                <option value="1 hr">1 hr</option>
                <option value="2 hr">2 hr</option>
                <option value="1 day">1 day</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Type</label>
              <select name="tradeType" id="tradeType" required v-model="tradeType">
                <option selected disabled value="">Trade Type</option>
                <option :value="null" disabled>Trade Type</option>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Leverage</label>
              <select name="tradeLeverage" id="tradeLeverage" required v-model="leverage" >
                <option selected disabled value="">Trade Leverage</option>
                <option :value="null" disabled>Trade Leverage</option>
                <option value="0.5X">0.5X</option>
                <option value="1.0X">1.0X</option>
                <option value="1.5X">1.5X</option>
                <option value="2.0X">2.0X</option>
                <option value="5X">5X</option>
                <option value="10X">10X</option>
              </select>
            </div>

            <base-button :loading="loading" style="  background-color: #007aff;border: 1px solid #007aff;">Place Trade </base-button>
          </form>

          <form ref="myForm" v-show="this.placeTradeStatus === 'RealEstate'" class="form-part" @submit.prevent="placeTrade">

            <div class="form-header">
              <p style="font-weight: bold;color: #FFFFFF;">TRADE REALESTATE - PLACE TRADE</p>
            </div>

            <div class="form-group">
              <label class="label">Amount</label>
              <input type="number" placeholder="Enter Amount"  name="Amount" v-model="amountTrade" required/>
            </div>

            <div class="form-group">
              <label class="label">Markets</label>
              <select name="tradingPair" id="tradingPair" required v-model="symbolTraded" >
                <option selected disabled value="">Select Market</option>
                <option :value="null" disabled>Select Market</option>
                <option value="Prologis, Inc. (PLD)">Prologis, Inc. (PLD)</option>
                <option value="Simon Property Group (SPG)">Simon Property Group (SPG)</option>
                <option value="AvalonBay Communities (AVB)">AvalonBay Communities (AVB)</option>
                <option value="Realty Income (O)">Realty Income (O)</option>
                <option value="Equinix, Inc. (EQIX)">Equinix, Inc. (EQIX)</option>
                <option value="Public Storage (PSA)">Public Storage (PSA)</option>
                <option value="Annaly Capital Management, Inc. (NLY)">Annaly Capital Management, Inc. (NLY)</option>
                <option value="AGNC Investment Corp. (AGNC)">AGNC Investment Corp. (AGNC)</option>
                <option value="Starwood Property Trust, Inc. (STWD)">Starwood Property Trust, Inc. (STWD)</option>
                <option value="Welltower Inc. (WELL)">Welltower Inc. (WELL)</option>
                <option value="Ventas, Inc. (VTR)">Ventas, Inc. (VTR)</option>
                <option value="Healthpeak Properties, Inc. (PEAK)">Healthpeak Properties, Inc. (PEAK)</option>
                <option value="Kimco Realty Corporation (KIM)">Kimco Realty Corporation (KIM)</option>
                <option value="Macerich Company (MAC)">Macerich Company (MAC)</option>
                <option value="Regency Centers Corporation (REG)">Regency Centers Corporation (REG)</option>
                <option value="Duke Realty Corporation (DRE)">Duke Realty Corporation (DRE)</option>
                <option value="Terreno Realty Corporation (TRNO)">Terreno Realty Corporation (TRNO)</option>
                <option value="Mid-America Apartment Communities (MAA)">Mid-America Apartment Communities (MAA)</option>
                <option value="Camden Property Trust (CPT)">Camden Property Trust (CPT)</option>
                <option value="American Tower Corporation (AMT)">American Tower Corporation (AMT)</option>
                <option value="Crown Castle Inc. (CCI)">Crown Castle Inc. (CCI)</option>
                <option value="Iron Mountain Inc. (IRM)">Iron Mountain Inc. (IRM)</option>
                <option value="Canadian Apartment Properties REIT (CAR.UN)">Canadian Apartment Properties REIT (CAR.UN)</option>
                <option value="MCDONALD'S CORPORATIONS">MCDONALD'S CORPORATIONS</option>
                <option value="Dream Office REIT (D.UN)">Dream Office REIT (D.UN)</option>
                <option value="RioCan REIT (REI.UN)">RioCan REIT (REI.UN)</option>
                <option value="Dream Industrial REIT (DIR.UN)">Dream Industrial REIT (DIR.UN)</option>
                <option value="Granite REIT (GRT.UN)">Granite REIT (GRT.UN)</option>
                <option value="NorthWest Healthcare Properties REIT (NWH.UN)">NorthWest Healthcare Properties REIT (NWH.UN)</option>
                <option value="First Capital REIT (FCR.UN)">First Capital REIT (FCR.UN)</option>
                <option value="SmartCentres REIT (SRU.UN)">SmartCentres REIT (SRU.UN)</option>
                <option value="StorageVault Canada Inc. (SVI)">StorageVault Canada Inc. (SVI)</option>
                <option value="Stockland (SGP)">Stockland (SGP)</option>
                <option value="Mirvac Group (MGR)">Mirvac Group (MGR)</option>
                <option value="Charter Hall Group (CHC)">Charter Hall Group (CHC)</option>
                <option value="Goodman Group (GMG)">Goodman Group (GMG)</option>
                <option value="DEXUS Property Group (DXS)">DEXUS Property Group (DXS)</option>
                <option value="Scentre Group (SCG)">Scentre Group (SCG)</option>
                <option value="Vicinity Centres (VCX)">Vicinity Centres (VCX)</option>
                <option value="Arena REIT (ARF)">Arena REIT (ARF)</option>
                <option value="HealthCo Healthcare & Wellness REIT (HCW)">HealthCo Healthcare & Wellness REIT (HCW)</option>
                <option value="National Storage REIT (NSR)">National Storage REIT (NSR)</option>
              </select>
            </div>

<!--            <div class="form-group">-->
<!--              <label class="label">Stop Loss</label>-->
<!--              <input type="number" placeholder="Enter Stop Loss"  name="Stop Loss"  required/>-->
<!--            </div>-->

<!--            <div class="form-group">-->
<!--              <label class="label">Take Profit</label>-->
<!--              <input type="number" placeholder="Enter Take Profit"  name="Take Profit"  required/>-->
<!--            </div>-->

<!--            <div class="form-group">-->
<!--              <label class="label">Entry Price</label>-->
<!--              <input type="number" placeholder="Enter Entry Price"  name="Entry Price"  required/>-->
<!--            </div>-->

            <div class="form-group">
              <label class="label">Trade Interval (Time)</label>
              <select name="tradeInterval" id="tradeInterval" required v-model="tradeTime" >
                <option selected disabled value="">Trade Interval (Time)</option>
                <option :value="null" disabled>Trade Interval (Time)</option>
                <option value="1 min">1 min</option>
                <option value="3 min">3 min</option>
                <option value="5 min">5 min</option>
                <option value="15 mins">15 mins</option>
                <option value="30 mins">30 mins</option>
                <option value="1 hr">1 hr</option>
                <option value="2 hr">2 hr</option>
                <option value="1 day">1 day</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Type</label>
              <select name="tradeType" id="tradeType" required v-model="tradeType">
                <option selected disabled value="">Trade Type</option>
                <option :value="null" disabled>Trade Type</option>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Leverage</label>
              <select name="tradeLeverage" id="tradeLeverage" required v-model="leverage" >
                <option selected disabled value="">Trade Leverage</option>
                <option :value="null" disabled>Trade Leverage</option>
                <option value="0.5X">0.5X</option>
                <option value="1.0X">1.0X</option>
                <option value="1.5X">1.5X</option>
                <option value="2.0X">2.0X</option>
                <option value="5X">5X</option>
                <option value="10X">10X</option>
              </select>
            </div>

            <base-button :loading="loading" style="  background-color: #007aff;border: 1px solid #007aff;">Place Trade </base-button>
          </form>

          <trading-view-widget/>
        </div>

        <div class="blog" v-show="this.screen5 === 'placeTrade'">
          <financial-juice-widget/>
        </div>

        <div class="blog" v-show="this.screen5 === 'TradeHistory'">
          <blog-table/>
        </div>

      </div>
    </div>


    </div>

</template>

<script>
import StoreUtils from "@/utility/StoreUtils";
import TradeRequest from "@/model/request/TradeRequest";
import {mapState} from "vuex";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import Swal from "sweetalert2";
import BlogTable from "@/components/BaseComponents/tables/BlogTable.vue";
import FinancialJuiceWidget from "@/components/BaseComponents/widgets/FinancialJuiceWidget.vue";
import TradingViewWidget from "@/components/BaseComponents/widgets/TradingViewWidget.vue";


export default {
  name: "DashBoardOverView",
  components: {
    TradingViewWidget,
    FinancialJuiceWidget,
    BlogTable,
    //WatchListTable2,
    BaseButton,
    //WatchListTable,
    // IntroMessageModal
  },

  data () {
    return {
      model: new TradeRequest().createTrade,
      history: [],
      currentPage: 1,
      itemsPerPage: 5,
      screen1: "Forex",
      screen2: "Crypto",
      screen3: "CFD",
      screen4: "Stocks",
      screen5: "pnl",
      screen6: "RealEstate",
      userId: "",
      userInfo: "",
      currentDate: "",
      currentDate2: "",
      randomString: "",
      randomString2: "",
      amountTrade: "",
      symbolTraded: "",
      tradeTime: "",
      tradeType: "",
      leverage: "",
      dollars: 0,
      // bitcoin: null,
      bitcoinRate: null,
      dialogIsVisible: false,
      searchQuery: "", // Data property to hold the search input
    }
  },
  computed:{
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      // Filter trades based on searchQuery before slicing for pagination
      const filteredTrades = this.searchQuery.trim() ?
          this.readUserTrade.trades.filter(trade =>
              trade.tradeReference.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeType.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.symbolTraded.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeStatus.toLowerCase().includes(this.searchQuery.toLowerCase())
          ) : this.readUserTrade.trades;
      return filteredTrades.slice(startIndex, endIndex);
    },
    totalPages() {
      // Recalculate total pages based on filtered trades
      const filteredTrades = this.searchQuery.trim() ?
          this.readUserTrade.trades.filter(trade =>
              trade.tradeReference.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeType.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.symbolTraded.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeStatus.toLowerCase().includes(this.searchQuery.toLowerCase())
          ) : this.readUserTrade.trades;
      return Math.ceil(filteredTrades.length / this.itemsPerPage);
    },
    UserInfo() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getUserInfo)
    },
    UserDetails() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    },
    readUserTrade() {
      return StoreUtils.rootGetters(StoreUtils.getters.trade.getReadUserTrade)
    },
    isModalOpened() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getIsModalOpened)
    },
    placeTradeStatus() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
    },
    ...mapState({
      loading: state => state.trade.loading,
      auth: state => state.auth,
      // readUserTrade: state => state.trade.readUserTrade,
      // bitcoinRate: state => state.auth.bitcoinRate,
    }),
    bitcoin() {
      if (this.UserDetails.user && this.bitcoinRate) {
        return (this.UserDetails.user.totalDepositedAmount / this.bitcoinRate).toFixed(8);
      }
      return 'Loading...'; // or any default value when data isn't available yet
    }
  },

  watch: {
    // Automatically calculate the bitcoin value when userDetails or bitcoinRate changes
    UserDetails: {
      deep: true, // Ensure that nested changes in UserDetails are also tracked
      handler() {
        this.convertToBitcoin();
      }
    },
    bitcoinRate() {
      this.convertToBitcoin();
    }
  },

  methods: {

    changeScreen(screen) {
      this.screen5 = screen;
    },

    // This method prepares all the necessary data before the API call
    async beforeAction() {
      // Load the userId from localStorage
      this.userId = localStorage.getItem('userId');
      if (!this.userId) {
        console.error("User ID is missing. Please log in.");
        return;
      }

      // Generate the necessary data before making the API call
      this.getCurrentDate();
      this.getCurrentDateTime();
      this.generateRandomString();
      this.generateRandomString2();
    },


    hideDialog() {
      this.dialogIsVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },


    checkId(){
      this.dialogIsVisible = this.UserDetails.user.frontId === "";
    },


    loadBitcoinRate() {
      this.bitcoinRate = localStorage.getItem('bitcoinRate') || null;
      if (!this.bitcoinRate) {
        console.log('Bitcoin rate not found, please reload or check the storage.');
      }
    },
    getUserDetails() {
      // Call your Store dispatch or API to get the user details
      StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
        userId: localStorage.getItem('userId')
      });
    },


    convertToBitcoin() {
      if (!this.bitcoinRate) {
        console.log('Bitcoin rate not loaded. Please wait or try reloading the page.');
        return;
      }
      if (this.UserDetails.user && this.UserDetails.user.totalDepositedAmount) {
        this.bitcoin = (this.UserDetails.user.totalDepositedAmount / this.bitcoinRate).toFixed(8);
      } else {
        console.log('User details are not available.');
      }
    },

    onPostClick() {
      this.$router.push("/fund-wallet");
    },
    onPostClick2() {
      this.$router.push("/withdrawal");
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      if (pageNumber > 0 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
    filterTrades() {
      // Reset to the first page when filtering
      this.currentPage = 1;
    },


    toggleScreen() {
      StoreUtils.commit(StoreUtils.mutations.auth.updatePlaceTradeStatus, "Forex");
      StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
      // this.screen1 = "Forex"
      // this.screen5 = "placeTrade"
    },
    toggleScreen2() {
      StoreUtils.commit(StoreUtils.mutations.auth.updatePlaceTradeStatus,  this.screen2);
      StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
      // this.screen1 = this.screen2
      // this.screen5 = "placeTrade"
    },
    toggleScreen3() {
      StoreUtils.commit(StoreUtils.mutations.auth.updatePlaceTradeStatus, this.screen3);
      StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
      // this.screen1 = this.screen3
      // this.screen5 = "placeTrade"
    },
    toggleScreen4() {
      StoreUtils.commit(StoreUtils.mutations.auth.updatePlaceTradeStatus, this.screen4);
      StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
      // this.screen1 = this.screen4
      // this.screen5 = "placeTrade"
    },
    toggleScreen5() {
      StoreUtils.commit(StoreUtils.mutations.auth.updatePlaceTradeStatus, this.screen6);
      StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
      // this.screen1 = this.screen6
      // this.screen5 = "placeTrade"
    },


    // Call this method before the API call
    async placeTrade() {
      // Ensure all required functions are called and userId is loaded
      await this.beforeAction();

      // Check if userId is available before proceeding
      if (!this.userId) {
        console.error("User ID not available. Cannot place trade.");
        return;
      }

      if (this.UserDetails.user.totalDepositedAmount === 0) {
        await Swal.fire({
          icon: 'error',
          title: 'Cannot Perform Action',
          text: 'You cannot place a trade because your Account Balance is zero.',
        });
        return;
      }

      if (this.UserDetails.user.btcBalance === 0) {
        await Swal.fire({
          icon: 'error',
          title: 'Cannot Perform Action',
          text: 'You cannot place a trade because your Wallet Balance is zero.',
        });
        return;
      }

      // Now make the API call using the prepared data
      await StoreUtils.dispatch(StoreUtils.actions.trade.tradeCreate, {
        userId: localStorage.getItem('userId'),
        tradeTime: this.currentDate,
        symbolTraded: this.symbolTraded,
        amountTrade: this.amountTrade,
        expectedPayout: 0,
        leverage: this.leverage,
        endPrice: this.randomString2,
        marketType: this.screen1,
        endTime: this.currentDate2,
        tradeStatus: "pending",
        tradeReference: this.randomString,
        tradeType: this.tradeType
      });

      // Refresh trade history after the trade is placed
      await StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
        userId: localStorage.getItem('userId'),
      });

      // Clear form and regenerate new data for future trades
      this.clearForm();
      this.getCurrentDate();
      this.getCurrentDateTime();
      this.generateRandomString();
      this.generateRandomString2();
    },

    clearForm(){
      this.tradeTime = "";
      this.symbolTraded = "";
      this.amountTrade = "";
      this.expectedPayout = "";
      this.leverage = "";
      this.endPrice = "";
      this.marketType = "";
      this.endTime = "";
      this.tradeStatus = "";
      this.tradeReference = "";
      this.tradeType = "";
      this.randomString = "";
      this.randomString2 = "";
      this.currentDate2 = "";
      this.currentDate = "";
    },

    // Function to get current date (YYYY-MM-DD format)
    getCurrentDate() {
      const today = new Date();
      this.currentDate2 = today.toISOString().split('T')[0];
    },

    // Function to get current date and time (YYYY-MM-DD HH:mm:ss format)
    getCurrentDateTime() {
      const today = new Date();
      this.currentDate = today.toISOString().slice(0, 19).replace("T", " ");
    },
    generateRandomString() {
      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString = result;
    },

    generateRandomString2() {
      const characters = '0123456789';
      let result = '';
      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString2 = result;
    },
  },

  beforeMount() {
    this.beforeAction();
    // Make sure to trigger the same logic before the component is mounted
    const userId = localStorage.getItem('userId');
    if (userId) {
      // Dispatch the API call if the userId exists
      StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
        userId: userId,
      });
    }

    StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)

    this.bitcoinRate = localStorage.getItem('bitcoinRate')
    this.bitcoin = (this.UserDetails.user.totalDepositedAmount / this.bitcoinRate).toFixed(8);
    this.getCurrentDate();
    this.getCurrentDateTime();
    this.generateRandomString();
    this.generateRandomString2();
    this.convertToBitcoin();
    this.checkId();
    this.loadBitcoinRate(); // Ensure bitcoinRate is loaded when the component is created
    this.getUserDetails();


    StoreUtils.rootGetters(StoreUtils.getters.auth.getBitcoinRate)
    StoreUtils.rootGetters(StoreUtils.getters.auth.getIsModalOpened)

    StoreUtils.rootGetters(StoreUtils.getters.trade.getReadUserTrade)

    StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
      userId : localStorage.getItem('userId'),
    });

    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  },

  created() {
    this.beforeAction();
    this.bitcoinRate = localStorage.getItem('bitcoinRate')
    this.bitcoin = (this.UserDetails.user.totalDepositedAmount / this.bitcoinRate).toFixed(8);
    this.getCurrentDate();
    this.getCurrentDateTime();
    this.generateRandomString();
    this.generateRandomString2();
    this.convertToBitcoin();
    this.checkId();
    this.loadBitcoinRate(); // Ensure bitcoinRate is loaded when the component is created
    this.getUserDetails();


    StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
    StoreUtils.rootGetters(StoreUtils.getters.auth.getBitcoinRate)
    StoreUtils.rootGetters(StoreUtils.getters.auth.getIsModalOpened)

    StoreUtils.rootGetters(StoreUtils.getters.trade.getReadUserTrade)

    StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
      userId : localStorage.getItem('userId'),
    });

    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  },

  mounted() {
    this.beforeAction();
    this.bitcoinRate = localStorage.getItem('bitcoinRate')
    this.bitcoin = (this.UserDetails.user.totalDepositedAmount / this.bitcoinRate).toFixed(8);
    this.getCurrentDate();
    this.getCurrentDateTime();
    this.generateRandomString();
    this.generateRandomString2();
    this.convertToBitcoin();
    this.checkId();

    this.loadBitcoinRate();
    if (this.UserDetails.user && this.bitcoinRate) {
      this.convertToBitcoin(); // Ensure bitcoin is calculated when mounted
    }

    StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
    StoreUtils.rootGetters(StoreUtils.getters.auth.getBitcoinRate)
    StoreUtils.rootGetters(StoreUtils.getters.auth.getIsModalOpened)
    StoreUtils.rootGetters(StoreUtils.getters.trade.getReadUserTrade)

    StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
      userId : localStorage.getItem('userId'),
    });

    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  }
}
</script>

<style scoped>

.separator{
  display: flex;
}

.part-1{
  width: 60%;
  margin-right: 5px;
}

.part-2{
  width: 40%;
  background-color: rgb(7 12 20);
  padding-bottom: 15px;
}

.navigation-bar{
  background-color: rgb(7 12 20);
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  padding-bottom: 15px;
  padding-top: 15px;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 1%;
  border-radius: 5px;
}

.navigation-bar-text-1{
  color: #FFFFFF;
  font-size: 12px;
}


.active {
  background-color: rgba(23, 35, 43, 0.5);
  color: #ffffff;
  padding: 13px 20px 12px 20px;
  border-radius: 5px;
}


.text-2{
  color: #770101;
  background-color: #facccc;
  border-color: #f8b8b8;
  position: relative;
  padding: 10px;
  margin-bottom: 0.5rem;
  font-size: 14px;
}
.status-pending{
  background-color: #FE9431;
  border-radius: 5px;
  font-size: 12px;
  width: 70px;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.status-won{
  background-color: #10d876;
  border-radius: 5px;
  font-size: 12px;
  width: 70px;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.status-lost{
  background-color: #E50202;
  border-radius: 5px;
  font-size: 12px;
  width: 70px;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
i{
  font-size: 13px;
}
.table-sep{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 5px;
}
.empty-state-container{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.empty-state{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
  margin-top: 5px;
  margin-bottom: 5px;
}


.trade-btn-1{
  padding: 7px 12px;
  text-align: center;
  font-size: 11px;
  width: 100px;
  height: 30px;
  background: #E50202;
  color: #ffffff;
  border: 1px solid #E50202;
  border-radius: 4px;
}

.trade-btn-1:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.trade-btn-2{
  padding: 7px 12px;
  text-align: center;
  font-size: 11px;
  width: 100px;
  height: 30px;
  background: #10d876;
  color: #ffffff;
  border: 1px solid #10d876;
  border-radius: 4px;
}

.trade-btn-2:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.trade-btn-3{
  padding: 7px 12px;
  text-align: center;
  font-size: 11px;
  width: 100px;
  height: 30px;
  background: #FE9431;
  color: #ffffff;
  border: 1px solid #FE9431;
  border-radius: 4px;
}

.trade-btn-3:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.trade-btn-4{
  padding: 7px 12px;
  text-align: center;
  font-size: 11px;
  width: 100px;
  height: 30px;
  background: #5d78ff;
  color: #ffffff;
  border: 1px solid #5d78ff;
  border-radius: 4px;
}

.trade-btn-4:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.trade-btn-5{
  padding: 7px 12px;
  text-align: center;
  font-size: 11px;
  width: 130px;
  height: 30px;
  background: indianred;
  color: #ffffff;
  border: 1px solid indianred;
  border-radius: 4px;
}

.trade-btn-5:hover{
  box-shadow: 0px 1px 10px rgba(16, 24, 40, 1);
}

.form-header{
  padding-top: 5px;
  padding-bottom: 15px;
}




.form-group {
  margin-bottom: 15px;
}

.form-group input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 13px 16px;
  height: 42px;
  border: 0.5px solid #3C4A57FF;
  box-shadow: none;
  width: 100%;
  background: #070C14FF;
  margin-top: 1.5%;
  color: #ffffff;
  border-radius: 4px;
}

.form-group input:focus {
  outline: none;
}

.form-group input::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.form-group select {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 13px 16px;
  height: 42px;
  border: 0.5px solid #3C4A57FF;
  box-shadow: none;
  width: 100%;
  background: #070C14FF;
  margin-top: 1.5%;
  color: #ffffff;
  border-radius: 4px;
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

.form-part{
  width: 90%;
  margin: auto;
  border: 0.5px solid #3C4A57FF;
  padding: 22px 25px;
  border-radius: 5px;
  background: #0f171c;
}

.label{
  margin-left: 3%;
  font-size: 14px;
  color: #FFFFFF;
}

.body{
  margin-top: 10px;
}

h2{
  font-weight: 700;
  font-size: 17px;
  line-height: 25px;
  color: #ffffff;
  margin-left: 1.5%;
}
.row{
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.fg--search {
  background: none;
  position: relative;
  width: 400px;
  margin-left: 1%;
}
.fg--search input {
  width: 100%;
  padding: 10px;
  padding-left: 15px;
  display: block;
  background: #0f171c;
  border: 0.5px solid #3C4A57FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;
  color: #FFFFFF;
}

.fg--search button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 10px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  margin-top: 10px;
}

table {
  border-collapse: collapse;
  width: 100%;
  /*margin-top: 10px;*/
}
.table{
  margin-left: 3%;
  margin-right: 4%;
  margin-bottom: 1%;
}

tr{
  border: 0.5px solid #3C4A57FF;
}

th {
  background-color: #0f171c;
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
}

td {
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 12px 8px;
  /*letter-spacing: 1px;*/
  color: #ffffff;
  font-weight: 200;
  font-size: 12px;
  /*border-bottom: 1px solid #E3EBF6;*/
}

.action-content{
  padding: 8px 10px;
  /*width: 88px;*/
  height: 36px;
  background: #0f171c;
  border: 0.5px solid #3C4A57FF;
  color: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  text-align: center;
}

.action-content:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.action-content p {
  color: #ffffff;
  font-size: 13px;
}


.pagination{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
}

.previous{
  text-align: center;
  padding: 8px 14px;
  gap: 8px;
  font-size: 12px;
  width: 100px;
  height: 30px;
  background: transparent;
  color: #ffffff;
  /*border: 1px solid #1570EF;*/
  border: 0.5px solid #3C4A57FF;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}

.previous:hover{
  box-shadow: 0 0 5px rgba(16, 24, 40, 0.2);
}

.page-indicator{
  color: #ffffff;
  font-weight: 200;
  font-size: 13px;
}

.name-wrapper-body {
  width: 12%;
  height: 100%;
  align-items: center;
  padding-left: 16px;
  display: flex;
}
.table-content {
  height: 35px;
  /*border-bottom: 1px solid rgba(0, 0, 0, .13);*/
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  display: flex;
  align-content: center;
}

.fa-search{
  color: #FFFFFF;
}

.trade-type-button{
  display: none;
}

@media (max-width: 800px) {

  .trade-type-button{
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .separator{
    display: block;
  }

  .part-1{
    width: 100%;
  }

  .part-2{
    width: 100%;
    margin-top: 5%;
  }


  .form-part {
    width: 95%;
    padding: 22px 25px;
    margin-top: 1%;
  }

  .form-group input {
    width: 100%;
  }


  .form-group select {
    width: 100%;
  }

  .tradingview_7a2ab-wrapper{
    width: 90%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }


  h2{
    font-size: 15px;
  }


  .trade-btn-1{
    width: 110px;
    height: 33px;
  }

  .trade-btn-2{
    width: 110px;
    height: 33px;
  }

  .trade-btn-3{
    width: 110px;
    height: 33px;
  }

  .trade-btn-4{
    width: 110px;
    height: 33px;
  }

  th {
    display: none;
  }

  table, thead, tbody, td, tr {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 0.5px solid #ccc;
  }

  td {
    /* Each cell is now a full-width row */
    border: none;
    position: relative;
    padding-left: 60%;
    text-align: center;
    margin-bottom: 10px;
    font-size: 15px;
  }

  td:before {
    /* Use the data-label for the pseudo-element content */
    content: attr(data-label);
    position: absolute;
    left: 10px;
    padding-left: 5%;
    font-weight: bold;
  }

}

@media (max-width: 500px) {

  .trade-type-button{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .trade-btn-1{
    width: 50%;
    height: 35px;
    font-size: 10px;
  }

  .trade-btn-2{
    width: 50%;
    height: 35px;
    font-size: 10px;
  }

  .trade-btn-3{
    width: 50%;
    height: 35px;
    font-size: 10px;
  }

  .trade-btn-4{
    width: 50%;
    height: 35px;
    font-size: 10px;
  }

  .trade-btn-5{
    width: 50%;
    height: 35px;
    font-size: 10px;
  }

  .form-part{
    max-width: unset;
    width: 97%;
    margin-top: 5%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .filter_group{
    display: none;
  }


  .empty-state-container{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  .empty-state{
    width: 30%;
  }

}

</style>