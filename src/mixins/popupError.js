// constants
import ERROR_LIST from '@/constants/errorList'

const popupError = {
  data: () => ({
    error: {}
  }),

  computed: {
    errorDescription () {
      return ERROR_LIST[this.error.status] || 'Error'
    }
  },

  methods: {
    setError (val) {
      this.error = val
    },

    toggleShow (isOpen) {
      const popupErrorEle = this.$refs['popup-error']

      if (!popupErrorEle) {
        return
      }

      popupErrorEle.toggleShow(isOpen)
    }
  }
}

export default popupError
