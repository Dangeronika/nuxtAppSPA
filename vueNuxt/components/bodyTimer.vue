<template>
  <div>
    <main id="content">
      <div class="main-info">
        <div class="top-timer">
          <span>Timer</span>
          <button class="top-map-button">
            <img src="@/components/Badge/Small/Vector.png" alt="">
          </button>
        </div>
        <div class="middle-timer">
          <span id="tiker"> <Timer/> </span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Timer from '@/components/Timer'
export default {
  name: 'BodyTimer',
  components: {
    Timer
  }
}
</script>

<style scoped>

.top-timer {
  font-size: 14px;
  line-height: 20px;
  padding: 15px 16px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.middle-timer {
  padding: 16px 0 16px 16px;
  font-size: 14px;
}

.main-info {
  margin: 25px 0 25px 27px;
  background-color: white;
  height: 100%;
  width: 97%;
  border: 1px solid #dde0e6;
}
</style>
