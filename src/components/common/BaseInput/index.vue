<template>
  <div class="base-input">
    <div v-if="label" class="base-input__label" v-html="label" />
    <div class="base-input__control">
      <input
        class="base-input__control-input"
        :class="{
          '--has-icon': !!icon
        }"
        :name="name"
        :placeholder="placeHolder"
        :value="inputValue"
        @input="handleChange"
      />
      <i
        v-if="icon"
        class="fa base-input__control-icon"
        :class="[icon]"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    name: String,
    placeHolder: String,
    icon: String,
    defaultValue: String
  },

  data: () => ({
    inputValue: ''
  }),

  methods: {
    setInputValue (val) {
      this.inputValue = val
    },

    handleChange (evt) {
      const { value } = evt.target

      this.setInputValue(value)
      this.$emit('changed', {
        name: this.name,
        value
      })
    }
  },

  watch: {
    defaultValue: {
      immediate: true,
      handler (val) {
        this.setInputValue(val)
      }
    }
  }
}
</script>

<style lang="scss" src="./BaseInput.scss"></style>
