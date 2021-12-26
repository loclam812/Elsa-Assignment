<template>
  <button class="btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<style lang="scss" src="./BaseButton.scss"></style>
