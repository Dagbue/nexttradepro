<template>
  <div class="tables">
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
<!--        <a-->
<!--            href="https://www.tradingview.com/"-->
<!--            rel="noopener nofollow"-->
<!--            target="_blank"-->
<!--        >-->
<!--          <span class="blue-text">Track all markets on TradingView</span>-->
<!--        </a>-->
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "WatchListTable2",
  mounted() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.async = true;

    // Widget configuration
    script.text = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      exchange: "US",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: false,
      showFloatingTooltip: false,
      width: "100%",
      height: 550,
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(42, 46, 57, 0)",
      scaleFontColor: "rgba(209, 212, 220, 1)",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)",
    });

    // Append the script to the widget container
    this.$el
        .querySelector(".tradingview-widget-container__widget")
        .appendChild(script);
  },
}
</script>

<style scoped>
.tables {
  margin-left: 2%;
  margin-right: 2%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.blue-text {
  color: #007acc;
  text-decoration: none;
}
</style>