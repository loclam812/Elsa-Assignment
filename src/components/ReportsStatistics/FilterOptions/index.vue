<template>
  <form class="filter-options" @submit="handleSubmit">
    <base-input
      label="Keywords:"
      name="keywords"
      icon="fa-search"
      @changed="handleChange"
    />
    <div class="filter-options__group">
      <base-select
        name="region"
        label="Select Region:"
        placeHolder="All"
        :default-option="regionsData[0]"
        :options="regionsData"
        @changed="handleChangeSelect"
      />
      <base-select
        name="province"
        label="Select Province:"
        placeHolder="All"
        :default-option="provincesData[0]"
        :options="provincesData"
        @changed="handleChangeSelect"
      />
    </div>
    <base-button type="submit" class="filter-options__btn">
      Search
    </base-button>
  </form>
</template>

<script>
// components
import BaseInput from '@/components/common/BaseInput'
import BaseSelect from '@/components/common/BaseSelect'
import BaseButton from '@/components/common/BaseButton'

// utils
import utils from '@/utils'

export default {
  props: {
    regionsData: Array,
    provincesData: Array
  },

  components: {
    BaseInput,
    BaseSelect,
    BaseButton
  },

  data: () => ({
    searchValue: '',
    selectedRegion: {},
    selectedProvince: {}
  }),

  methods: {
    setSearchValue (val) {
      this.searchValue = val
    },

    setSelectedRegion (val) {
      this.selectedRegion = val
    },

    setSelectedProvince (val) {
      this.selectedProvince = val
    },

    handleChange ({ value }) {
      this.setSearchValue(value)
    },

    handleChangeSelect ({ name, value }) {
      if (name === 'region') {
        this.setSelectedRegion(value)
        this.$emit('changed-region', value)
        return
      }

      this.setSelectedProvince(value)
    },

    handleSubmit (evt) {
      evt.preventDefault()
      const params = {
        iso: this.selectedRegion.iso,
        region_name: this.selectedRegion.name,
        q: this.searchValue,
        region_province: this.selectedProvince.province
      }

      this.$emit('submit', utils.removeKeyEmptyValue(params))
    }
  }
}
</script>

<style lang="scss" src="./FilterOptions.scss"></style.
