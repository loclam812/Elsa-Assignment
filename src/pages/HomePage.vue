<template>
  <div class="home-page container">
    <h1 class="title-page">Covid data statistics</h1>
    <global-statistics />
    <time-hook-statistics />
    <reports-statistics />
  </div>
</template>

<script>
// components
import GlobalStatistics from '@/components/GlobalStatistics'
import ReportsStatistics from '@/components/ReportsStatistics'
import TimeHookStatistics from '@/components/TimeHookStatistics'

export default {
  components: {
    GlobalStatistics,
    ReportsStatistics,
    TimeHookStatistics
  }
}
</script>

<style lang="scss">
.home-page {
  padding: 2rem;
}
</style>
