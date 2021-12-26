<template>
  <base-popup ref="popup-error" class="popup-error">
    <div class="popup-error__title">
      <slot name="error-title" />
    </div>
    <div class="popup-error__description">
      <slot name="error-description" />
    </div>
    <base-button class="popup-error__btn" @click="toggleShow(false)">
      <slot name="error-btn" />
    </base-button>
    <slot />
  </base-popup>
</template>

<script>
// components
import BaseButton from '@/components/common/BaseButton'
import BasePopup from '@/components/common/BasePopup'

export default {
  components: {
    BaseButton,
    BasePopup
  },

  methods: {
    toggleShow (isOpen) {
      const popupErrorEle = this.$refs['popup-error']

      if (!popupErrorEle) {
        return
      }

      popupErrorEle.toggleShow(isOpen)
    }
  }
}
</script>

<style lang="scss" src="./PopupError.scss"></style>
