<template>
  <div>
    <SPAHead/>
    <Nuxt />
  </div>
</template>

<script>
import SPAHead from '~/components/SPAHead'
export default {
  name: 'default',
  components: {
    SPAHead
  }
}
</script>
