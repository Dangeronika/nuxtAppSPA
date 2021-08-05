<template>
  <div>
    <bodyTimer />
  </div>
</template>

<script>
import bodyTimer from '@/components/timerComponents/bodyTimer'
export default {
  name: 'Timer',
  components: {
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
