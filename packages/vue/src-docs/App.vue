<script setup lang="ts">
import FitScreen from '@fit-screen/vue'
</script>

<template>
  <div>
    <FitScreen :width="1920" :height="1080" mode="fit">
      插槽
    </FitScreen>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
