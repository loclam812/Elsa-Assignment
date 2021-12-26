<template>
  <div v-if="isSearched" class="reports-data">
    <div class="reports-data__title">Reports Data:</div>
    <base-table
      v-if="data[0]"
      :columns="reportsColumns"
      :data="data"
    />
    <p v-else class="reports-data__no-result">No Result Found</p>
  </div>
</template>

<script>
import BaseTable from '@/components/common/BaseTable'

export default {
  props: {
    isSearched: Boolean,
    data: Array
  },

  components: {
    BaseTable
  },

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
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="./ReportsData.scss"></style>
