<template>
  <div class="tables">
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarketQuotesWidget",
  mounted() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;

    script.text = JSON.stringify({
      colorTheme: "dark",
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
      backgroundColor: "#0F0F0F",
      support_host: "https://www.tradingview.com",
      width: "100%",
      height: "550",
      symbolsGroups: [
        {
          name: "Indices",
          symbols: [
            { name: "FOREXCOM:SPXUSD", displayName: "S&P 500 Index" },
            { name: "FOREXCOM:NSXUSD", displayName: "US 100 Cash CFD" },
            { name: "FOREXCOM:DJI", displayName: "Dow Jones Industrial Average Index" },
            { name: "INDEX:NKY", displayName: "Japan 225" },
            { name: "INDEX:DEU40", displayName: "DAX Index" },
            { name: "FOREXCOM:UKXGBP", displayName: "FTSE 100 Index" },
          ],
        },
        {
          name: "Futures",
          symbols: [
            { name: "BMFBOVESPA:ISP1!", displayName: "S&P 500" },
            { name: "BMFBOVESPA:EUR1!", displayName: "Euro" },
            { name: "CMCMARKETS:GOLD", displayName: "Gold" },
            { name: "PYTH:WTI3!", displayName: "WTI Crude Oil" },
            { name: "BMFBOVESPA:CCM1!", displayName: "Corn" },
          ],
        },
        {
          name: "Bonds",
          symbols: [
            { name: "EUREX:FGBL1!", displayName: "Euro Bund" },
            { name: "EUREX:FBTP1!", displayName: "Euro BTP" },
            { name: "EUREX:FGBM1!", displayName: "Euro BOBL" },
          ],
        },
        {
          name: "Forex",
          symbols: [
            { name: "FX:EURUSD", displayName: "EUR to USD" },
            { name: "FX:GBPUSD", displayName: "GBP to USD" },
            { name: "FX:USDJPY", displayName: "USD to JPY" },
            { name: "FX:USDCHF", displayName: "USD to CHF" },
            { name: "FX:AUDUSD", displayName: "AUD to USD" },
            { name: "FX:USDCAD", displayName: "USD to CAD" },
          ],
        },
      ],
    });

    this.$el
        .querySelector(".tradingview-widget-container__widget")
        .appendChild(script);
  },
};
</script>

<style scoped>
.tables {
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 1%;
}

.blue-text {
  color: #007acc;
  text-decoration: none;
}
</style>
