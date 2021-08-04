<template>
  <div>
    <SPAHead />
    <TodoMain />
  </div>
</template>

<script>
import SPAHead from '@/components/SPAHead'
import TodoMain from '~/components/TodoMain'
export default {
  name: 'Todolist',
  components: {
    SPAHead,
    TodoMain
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
