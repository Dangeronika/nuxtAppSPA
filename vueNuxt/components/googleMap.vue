<template>
  <div id="map" />
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader'
export default {
  name: 'GoogleMap',
  data () {
    return {}
  },
  mounted () {
  },
  methods: {
    initMap () {
      const loader = new Loader({
        apiKey: 'AIzaSyBIz_H0FeIMxYXHfz5QIaj0yydUIClxnA8',
        version: 'weekly'
      })
      loader.load().then(() => {
        // eslint-disable-next-line
        const map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8
        })
      })
    }
  }

}
</script>
