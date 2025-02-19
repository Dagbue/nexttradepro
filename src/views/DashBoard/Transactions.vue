<template>
  <div>
    <dash-board-transactions/>
  </div>
</template>

<script>
import DashBoardTransactions from "@/components/DashBoard/DashBoardTransactions.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Transactions",
  components: {DashBoardTransactions}
}
</script>

<style scoped>

</style>