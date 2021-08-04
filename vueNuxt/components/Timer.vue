<template>
  <div>
    {{ formattedTime }}
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data () {
    return {
      timerState: 'stopped',
      currentTimer: 0,
      formattedTime: '00:00:00',
      ticker: undefined
    }
  },
  methods: {
    start () {
      if (this.timerState !== 'running') {
        this.tick()
        this.timerState = 'running'
      }
    },
    tick () {
      this.tiker = setInterval(() => {
        this.currentTimer++
        this.formattedTime = this.formatTime(this.currentTimer)
      }, 1000)
    },
    formatTime (seconds) {
      const meassuredTime = new Date(null)
      meassuredTime.setSeconds(seconds)
      const MHSTime = meassuredTime.toISOString().substr(11, 8)
      return MHSTime
    }
  },
  mounted () {
    this.start()
  }
}
</script>
