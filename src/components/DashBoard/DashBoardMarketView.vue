<template>
  <div>
    <forex-table/>
    <watch-list-table2/>
    <stock-table2/>
    <watch-list-table/>
  </div>
</template>

<script>
import ForexTable from "@/components/BaseComponents/tables/ForexTable.vue";
import StockTable2 from "@/components/BaseComponents/tables/StockTable2.vue";
import WatchListTable from "@/components/BaseComponents/tables/WatchListTable.vue";
import WatchListTable2 from "@/components/BaseComponents/tables/WatchListTable2.vue";

export default {
  name: "DashBoardMarketView",
  components: {WatchListTable2, WatchListTable, StockTable2, ForexTable}
}
</script>

<style scoped>

</style>