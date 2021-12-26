<template>
  <div
    class="base-select"
    :class="{
      '--opened': isOpenDropdown
    }"
    v-click-outside="handleCloseDropdown"
  >
    <div class="base-select__label" v-if="label">{{ label }}</div>
    <div class="base-select__heading" @click="handleToggleDropdown">
      <div class="base-select__heading-label">{{ selectedValue.text || placeHolder }}</div>
      <i
        class="fa base-select__heading-icon"
        :class="{
          'fa-angle-down': !isOpenDropdown,
          'fa-angle-up': isOpenDropdown
        }"
      />
    </div>
    <div v-if="isOpenDropdown" class="base-select__control">
      <base-input
        v-if="hasSearch"
        name="searchOption"
        icon="fa-search"
        @changed="handleChange"
      />
      <ul class="base-select__control-list">
        <li
          v-for="(option, index) in customOptions"
          class="base-select__control-list__item"
          :class="{
            '--active': option.value === selectedValue.value
          }"
          :key="index"
          @click="handleSelected(option)"
        >
          {{ option.text }}
        </li>
        <li
          v-if="searchValue && !customOptions[0]"
          class="base-select__control-list__item --no-result"
        >No Option Found</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseInput from '../BaseInput'

export default {
  props: {
    name: String,
    label: String,
    placeHolder: String,
    defaultOption: Object,
    options: Array
  },

  components: {
    BaseInput
  },

  data: () => ({
    searchValue: '',
    isOpenDropdown: false,
    selectedValue: {}
  }),

  computed: {
    hasSearch () {
      return this.options.length > 20
    },

    customOptions () {
      if (!this.searchValue) {
        return this.options
      }

      return this.options.filter(
        item => item.text.toLowerCase().includes(this.searchValue.toLowerCase())
      )
    }
  },

  methods: {
    setOpenDropdown (val) {
      this.isOpenDropdown = val
      this.setSearchValue('')
    },

    setSelectedValue (val) {
      this.selectedValue = val
    },

    setSearchValue (val) {
      this.searchValue = val
    },

    handleCloseDropdown () {
      this.setOpenDropdown(false)
    },

    handleToggleDropdown () {
      this.setOpenDropdown(!this.isOpenDropdown)
    },

    handleSelected (option) {
      this.setSelectedValue(option)
      this.setOpenDropdown(false)
    },

    handleChange ({ value }) {
      this.setSearchValue(value)
    }
  },

  watch: {
    defaultOption: {
      immediate: true,
      handler (val) {
        if (!val) {
          return
        }

        this.setSelectedValue(val)
      }
    },

    selectedValue (val) {
      this.$emit('changed', {
        name: this.name,
        value: val
      })
    }
  }
}
</script>

<style lang="scss" src="./BaseSelect.scss"></style>
