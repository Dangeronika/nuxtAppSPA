<template>
  <div>
    <bodyMap class="body" />
  </div>
</template>

<script>
import bodyMap from '@/components/mapComponents/bodyMap'
export default {
  name: 'Map',
  components: {
    bodyMap
  }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
