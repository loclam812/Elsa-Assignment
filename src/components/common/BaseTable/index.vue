<template>
  <div class="base-table">
    <table class="base-table__table">
      <thead class="base-table__table-head">
        <tr class="base-table__table-head__row">
          <td
            v-for="(column, index) in columns"
            class="base-table__table-head__column"
            :key="index"
            :width="column.width"
          >
            {{ column.label }}
          </td>
        </tr>
      </thead>
      <tbody class="base-table__table-body">
        <tr
          v-for="(datum, idx) in data"
          class="base-table__table-body__row"
          :key="idx"
        >
          <td
            v-for="(column, index) in columns"
            class="base-table__table-body__column"
            :key="index"
            :width="column.width"
            v-html="renderColumnValue(column.render, datum[column.keyMapping])"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columns: Array,
    data: Array
  },

  methods: {
    renderColumnValue (render, value) {
      if (typeof render !== 'function') {
        return value
      }

      return render(value)
    }
  }
}
</script>

<style lang="scss" src="./BaseTable.scss"></style>
