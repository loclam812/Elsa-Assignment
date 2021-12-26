<template>
  <div
    v-if="isShow || !isReset"
    v-show="isShow"
    class="popup"
  >
    <div class="popup__overlay"
      @click="close"
    />
    <div class="popup__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isReset: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    isShow: false
  }),

  methods: {
    setShow (val) {
      this.isShow = val
    },

    toggleShow (boolean, willTriggerEvent = true) {
      if (this.isShow === boolean) {
        return
      }

      this.setShow(boolean)

      if (!willTriggerEvent) {
        return
      }

      this.$emit(boolean ? 'open' : 'close')
    },

    open (willTriggerEvent = true) {
      this.toggleShow(true, willTriggerEvent)
    },

    close (willTriggerEvent = true) {
      this.toggleShow(false, willTriggerEvent)
    }
  }
}
</script>

<style lang="scss" src="./BasePopup.scss"></style>
