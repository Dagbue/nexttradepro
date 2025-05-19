<template>
  <div class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright">
      <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
      >
        <span class="blue-text"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TickerTapeWidget",
  mounted() {
    if (window.TradingView === undefined) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
          { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
          { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
          { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
          { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
          { description: "", proName: "OANDA:NAS100USD" },
          { description: "", proName: "SP:SPX" }
        ],
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: "adaptive",
        colorTheme: "dark",
        locale: "en"
      });
      this.$el.querySelector(".tradingview-widget-container__widget").appendChild(script);
    }
  }
}
</script>

<style scoped>

</style>