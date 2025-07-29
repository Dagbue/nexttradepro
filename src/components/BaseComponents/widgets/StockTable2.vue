<template>
  <div class="tables">

    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "StockTable2",
  mounted() {

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.text = JSON.stringify({
      width: "100%",
      height: "600",
      defaultColumn: "overview",
      defaultScreen: "general",
      market: "stocks",
      showToolbar: true,
      colorTheme: "dark",
      locale: "en",
    });

    this.$el.querySelector(".tradingview-widget-container__widget").appendChild(script);
  },
}
</script>

<style scoped>
.tables{
  margin-left: 2%;
  margin-right: 2.5%;
}
</style>