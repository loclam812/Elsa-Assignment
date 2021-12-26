<template>
  <div class="section reports-statistics">
    <h2 class="section__title">By Country</h2>
    <filter-options
      :regions-data="regionsData"
      :provinces-data="provincesData"
      @changed-region="fetchDataProvince"
      @submit="handleSubmit"
    />
    <reports-data
      :is-searched="isSearched"
      :data="reportsData"
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
import { REGIONS, PROVINCES, REPORTS } from '@/constants/apiUrl'

// components
import BaseLoader from '@/components/common/BaseLoader'
import PopupError from '@/components/PopupError'
import FilterOptions from './FilterOptions'
import ReportsData from './ReportsData'

export default {
  components: {
    BaseLoader,
    PopupError,
    FilterOptions,
    ReportsData
  },

  mixins: [popupError],

  data: () => ({
    isLoading: false,
    isSearched: false,
    regionsData: [],
    provincesData: [],
    reportsData: []
  }),

  methods: {
    setLoading (val) {
      this.isLoading = val
    },

    setSearched (val) {
      this.isSearched = val
    },

    setRegionsData (val) {
      this.regionsData = val.map(item => ({
        ...item,
        text: item.name,
        value: item.iso
      }))
    },

    setProvincesData (val) {
      this.provincesData = val.map(item => ({
        ...item,
        text: item.province,
        value: item.province
      }))
    },

    setReportsData (val) {
      this.reportsData = val
    },

    async fetchData (url, params = {}) {
      this.setLoading(true)

      const { data, error } = await getService(url, params)

      this.setLoading(false)

      if (error) {
        this.toggleShow(true)
        this.setError(error)

        return
      }

      this.setError({})

      return data
    },

    async fetchDataRegions () {
      const data = await this.fetchData(REGIONS)

      this.setRegionsData(data && data.data || [])
    },

    async fetchDataProvince ({ value }) {
      const data = await this.fetchData(PROVINCES, {
        iso: value
      })

      this.setProvincesData(data && data.data || [])
    },

    async handleSubmit (params) {
      const data = await this.fetchData(REPORTS, params)

      this.setReportsData(data && data.data || [])
      this.setSearched(true)
    }
  },

  created () {
    this.fetchDataRegions()
  }
}
</script>
