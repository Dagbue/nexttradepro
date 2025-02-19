<template>
  <div class="tables">
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
        >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WatchListTable",
  mounted() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;

    // Widget configuration
    script.text = JSON.stringify({
      width: "100%", // Sets the widget width in pixels
      height: 550, // Sets the widget height in pixels
      symbolsGroups: [
        {
          name: "Indices",
          originalName: "Indices",
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
          originalName: "Futures",
          symbols: [
            { name: "CME_MINI:ES1!", displayName: "S&P 500" },
            { name: "CME:6E1!", displayName: "Euro" },
            { name: "COMEX:GC1!", displayName: "Gold" },
            { name: "NYMEX:CL1!", displayName: "WTI Crude Oil" },
            { name: "NYMEX:NG1!", displayName: "Gas" },
            { name: "CBOT:ZC1!", displayName: "Corn" },
          ],
        },
        {
          name: "Bonds",
          originalName: "Bonds",
          symbols: [
            { name: "CBOT:ZB1!", displayName: "T-Bond" },
            { name: "CBOT:UB1!", displayName: "Ultra T-Bond" },
            { name: "EUREX:FGBL1!", displayName: "Euro Bund" },
            { name: "EUREX:FBTP1!", displayName: "Euro BTP" },
            { name: "EUREX:FGBM1!", displayName: "Euro BOBL" },
          ],
        },
        {
          name: "Forex",
          originalName: "Forex",
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
      showSymbolLogo: true, // Displays the symbol logo next to the name
      isTransparent: false, // Disables transparency in the widget's background
      colorTheme: "dark", // Sets the widget's color theme to dark
      locale: "en", // Widget language set to English
      backgroundColor: "#131722", // Background color for the widget
    });

    // Append the script to the widget container
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
}

.blue-text {
  color: #007acc;
  text-decoration: none;
}
</style>
