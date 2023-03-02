<script>
import FitScreen from '@fit-screen/vue'
import AppHeader from './components/app-header'
import AppMain from './components/app-main'
export default {
  name: 'App',
  components: {
    FitScreen,
    AppHeader,
    AppMain,
  },
  data() {
    return {
      scale: {
        widthRadio: 0,
        heightRadio: 0,
      },
    }
  },
  methods: {
    onScaleChange(scale) {
      this.scale = scale
    },
  },
}
</script>

<template>
  <FitScreen id="app" scale-class="example-vue-scale" @scaleChange="onScaleChange">
    <AppHeader />

    <AppMain :scale="scale" />
  </FitScreen>
</template>

<style lang="less">
#app {
  color: #fff;
  background-color: #030409;

  .app-main {
    flex: 1;
  }

  .example-vue-scale {
    display: flex;
    flex-direction: column;
    background-image: url('./assets/img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
  }
}
</style>
