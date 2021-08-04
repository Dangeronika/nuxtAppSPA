<template>
  <div>
    <SPAHead />
    <bodyTimer />
  </div>
</template>

<script>
import SPAHead from '@/components/SPAHead'
import bodyTimer from '@/components/bodyTimer'
export default {
  name: 'Timer',
  components: {
    SPAHead,
    bodyTimer

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
