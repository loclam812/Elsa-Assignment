<template>
  <div class="section global-statistics">
    <h2 class="section__title">By Global</h2>
    <base-table
      v-if="Object.keys(totalReports)[0]"
      class="global-statistics__table"
      :columns="reportsColumns"
      :data="[totalReports]"
    />
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
import { getService } from '@/utils/services'
import popupError from '@/mixins/popupError'

// constants
import { TOTAL_REPORTS } from '@/constants/apiUrl'

// components
import BaseLoader from '@/components/common/BaseLoader'
import BaseTable from '@/components/common/BaseTable'
import PopupError from '@/components/PopupError'

export default {
  components: {
    BaseLoader,
    BaseTable,
    PopupError
  },

  mixins: [popupError],

  data: () => ({
    isLoading: false,
    totalReports: {}
  }),

  computed: {
    reportsColumns () {
      return [
        {
          label: 'Confirmed',
          keyMapping: 'confirmed',
          width: ''
        },
        {
          label: 'Active',
          keyMapping: 'active',
          width: ''
        },
        {
          label: 'Recovered',
          keyMapping: 'recovered',
          width: ''
        },
        {
          label: 'Deaths',
          keyMapping: 'deaths',
          width: ''
        },
        {
          label: 'Fatality Rate',
          keyMapping: 'fatality_rate',
          width: '',
          render: (value) => {
            return `${(value * 100).toFixed(2)}%`
          }
        },
        {
          label: 'Date',
          keyMapping: 'date',
          width: '',
          render: (value) => {
            return new Date(value).toLocaleDateString('en-US')
          }
        },
        {
          label: 'Last Update',
          keyMapping: 'last_update',
          width: '',
          render: (value) => {
            return new Date(value).toLocaleDateString('en-US')
          }
        }
      ]
    }
  },

  methods: {
    setLoading (val) {
      this.isLoading = val
    },

    setTotalReports (val) {
      this.totalReports = val
    },

    async fetchData () {
      const { data, error } = await getService(TOTAL_REPORTS)

      this.setLoading(false)

      if (error) {
        this.toggleShow(true)
        this.setError(error)
        this.setTotalReports({})

        return
      }

      this.setError({})
      this.setTotalReports(data && data.data || {})
    }
  },

  created () {
    this.fetchData()
  }
}
</script>

<style lang="scss" src="./GlobalStatistics.scss"></style>
