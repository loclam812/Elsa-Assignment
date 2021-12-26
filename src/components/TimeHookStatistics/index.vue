<template>
  <div class="section time-hook-statistics">
    <h2 class="section__title">By Time Hook</h2>
    <base-select
      class="time-hook-statistics__select"
      name="times"
      label="Select Time:"
      placeHolder="All"
      :default-option="timeHookOptions[0]"
      :options="timeHookOptions"
      @changed="handleChangeSelect"
    />
    <vue-apex-charts
      type="line"
      :options="optionsCharts"
      :series="dataCharts"
      height=300
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
import { GET_STATISTICS_BY_DATE } from '@/constants/apiUrl'
import TIME_HOOK_OPTIONS from '@/constants/timeHookOptions'

// components
import VueApexCharts from 'vue-apexcharts'
import BaseLoader from '@/components/common/BaseLoader'
import BaseSelect from '@/components/common/BaseSelect'
import PopupError from '@/components/PopupError'

export default {
  components: {
    VueApexCharts,
    BaseLoader,
    BaseSelect,
    PopupError
  },

  mixins: [popupError],

  data: () => ({
    isLoading: false,
    selectedOption: TIME_HOOK_OPTIONS[0],
    dataStatistics: []
  }),

  computed: {
    timeHookOptions () {
      return TIME_HOOK_OPTIONS
    },

    optionsCharts () {
      return {
        chart: {
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        xaxis: {
          type: 'datetime'
        }
      }
    },

    dataCharts () {
      return this.dataStatistics
        .reduce((dataCharts, { Active, Deaths, Recovered, Date }) => {
          dataCharts[0].data.push({
            x: Date,
            y: Active
          })
          dataCharts[1].data.push({
            x: Date,
            y: Recovered
          })
          dataCharts[2].data.push({
            x: Date,
            y: Deaths
          })

          return dataCharts
        }, [
          {
            name: 'Active',
            data: []
          },
          {
            name: 'Recovered',
            data: []
          },
          {
            name: 'Deaths',
            data: []
          }
        ])
    },

    selectedDate () {
      const currentDate = new Date();

      currentDate.setDate(currentDate.getDate() - this.selectedOption.value - 1);

      return new Date(currentDate).toISOString().split('T')[0]
    }
  },

  methods: {
    setLoading (val) {
      this.isLoading = val
    },

    setSelectedOption (val) {
      this.selectedOption  = val
    },

    setDataStatistics (val) {
      this.dataStatistics = val
    },

    handleChangeSelect ({ value }) {
      this.setSelectedOption(value)
    },

    async fetchData () {
      const { data, error } = await getService(`${GET_STATISTICS_BY_DATE}/${this.selectedDate}`)

      this.setLoading(false)

      if (error) {
        this.toggleShow(true)
        this.setError(error)
        this.setDataStatistics([])

        return
      }

      this.setError({})
      this.setDataStatistics(data)
    }
  },

  created () {
    this.fetchData()
  },

  watch: {
    selectedDate () {
      this.fetchData()
    }
  }
}
</script>

<style lang="scss" src="./TimeHookStatistics.scss"></style>
