<template>
  <div v-if="isLoading" class="base-loader">
    <div class="base-loader__inner" />
  </div>
</template>

<script>
export default {
  props: {
    isLoading: Boolean
  }
}
</script>

<style lang="scss" src="./BaseLoader.scss"></style>

