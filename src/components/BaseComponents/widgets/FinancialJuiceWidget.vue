<template>
  <div class="tables">
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinancialJuiceWidget',
  mounted() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;

    // Config JSON for the Events widget
    script.text = JSON.stringify({
      colorTheme: "dark",
      isTransparent: false,
      locale: "en",
      countryFilter:
          "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
      importanceFilter: "-1,0,1",
      width: "95%",
      height: 600,
    });

    this.$el
        .querySelector(".tradingview-widget-container__widget")
        .appendChild(script);
  },
};
</script>

<style scoped>
.tables {
  margin-left: 3.4%;
  margin-top: 1%;
}

.blue-text {
  color: #007acc;
  text-decoration: none;
}
</style>
