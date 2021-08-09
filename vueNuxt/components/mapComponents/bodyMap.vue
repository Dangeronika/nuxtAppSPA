<template>
  <div class="body">
    <main id="content">
      <div class="main-info">
        <div class="top-map">
          <span>Basic map</span>
          <button class="top-map-button"><img src="@/assets/Badge/Small/Vector.png" alt=""></button>
        </div>
        <div>
          <div class="map" id="map">
            <googleMap id="map"></googleMap>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import googleMap from '~/components/mapComponents/googleMap'
export default {
  components: { googleMap },
  mounted () {
    googleMap.methods.initMap()
  }
}
</script>

<style>
.main-info {
  margin: 25px 32px 0 27px;
  background-color: white;
  width: 100%;
  height: 560px;
  border: 1px solid #dde0e6;
}

.top-map {
  font-size: 14px;
  line-height: 20px;
  padding: 15px 16px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-map-button {
  outline: none;
  border: 0;
  background: transparent;
}

.map {
  width: 99%;
  height: 500px;
  margin: 10px;
}

.body {
  width: 98%;
}
</style>
