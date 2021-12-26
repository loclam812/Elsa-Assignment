<template>
  <div class="section">
    <h2 class="section__title">By Time Hook</h2>
    <popup-error ref="popup-error">
      <template v-slot:error-title>OOPS!</template>
      <template v-slot:error-description>{{ errorDescription }}</template>
      <template v-slot:error-btn>OK</template>
    </popup-error>
    <base-loader :isLoading="isLoading" />
  </div>
</template>

<script>
// helpers
// import { getService } from '@/utils/services'
import popupError from '@/mixins/popupError'

// components
import BaseLoader from '@/components/common/BaseLoader'
import PopupError from '@/components/PopupError'

export default {
  components: {
    BaseLoader,
    PopupError
  },

  mixins: [popupError],

  data: () => ({

  }),

  methods: {

  }
}
</script>

<style lang="scss" src="./TimeHookStatistics.scss"></style>
