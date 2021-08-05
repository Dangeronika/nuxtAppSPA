<template>
  <div>
    {{ getTicks }}
  </div>
</template>

<script>
export default {
  name: 'Timer',
  computed: {
    getTicks () {
      /* eslint-disable */
      let second = this.$store.state.time
      let secondForm = String(second % 60).padStart(2, '0')
      let minuteForm = String(Math.trunc(second / 60)).padStart(2, '0')
      let hourForm = String(Math.trunc(second / 3600)).padStart(2, '0')
      return `${hourForm}:${minuteForm}:${secondForm}`
    }
  }
}
</script>
