<script>
import ExampleList from './components/ExampleList.vue'
import RankingBoard from './components/RankingBoard.vue'
import RoseChart from './components/RoseChart.vue'
import WaterLevelChart from './components/WaterLevelChart.vue'
import ScrollBoard from './components/ScrollBoard.vue'
import Cards from './components/Cards.vue'
export default {
  name: 'AppMain',
  components: {
    ExampleList,
    RankingBoard,
    RoseChart,
    WaterLevelChart,
    ScrollBoard,
    Cards,
  },
  props: ['scale'],
}
</script>

<template>
  <div class="app-main">
    <ExampleList :scale="scale" />
    <div class="app-main__main">
      <RankingBoard />

      <div class="app-main__main-right">
        <div class="right-top-content">
          <RoseChart />

          <WaterLevelChart />

          <ScrollBoard />
        </div>

        <Cards />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.app-main {
  .app-main__main {
    height: 800px;
    display: flex;
    margin-top: 18px;

    .app-main__main-right {
      flex: 1;
      padding-left: 20px;

      .right-top-content {
        height: 55%;
        display: flex;
        flex-grow: 0;
        box-sizing: border-box;
        padding-bottom: 20px;
      }
    }
  }
}
</style>
