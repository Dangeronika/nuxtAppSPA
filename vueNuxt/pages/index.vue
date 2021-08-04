<template>
  <div>
    <SPAHead/>
    <Activity/>
  </div>
</template>

<script>
import SPAHead from '@/components/SPAHead'
import Activity from '@/components/bodyActivity'
export default {
  name: 'index',
  components: {
    SPAHead,
    Activity
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
