<template>
  <div class="tradingview-widget-container" ref="tvContainer">
    <div class="tradingview-widget-container__widget"></div>
  </div>
</template>

<script>
export default {
  name: "TradingViewWidget",
  mounted() {
    // Avoid duplicate script injection
    if (window.TradingView) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";

    script.innerHTML = JSON.stringify({
      height: 400,
      currencies: [
        "EUR",
        "USD",
        "JPY",
        "GBP",
        "CHF",
        "AUD",
        "CAD",
        "NZD",
        "CNY"
      ],
      isTransparent: false,
      colorTheme: "dark",
      locale: "en",
      backgroundColor: "#000000"
    });

    this.$refs.tvContainer.querySelector(".tradingview-widget-container__widget").appendChild(script);
  }
};
</script>

<style scoped>
.tradingview-widget-container {
  max-width: 90%;
  overflow: hidden;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
}

@media (max-width: 800px) {
  .tradingview-widget-container {
    max-width: 95%;
  }

}
</style>
