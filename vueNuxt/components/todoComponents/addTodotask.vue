<template>
  <div>
    <form class="manyways" @submit.prevent="onSubmit">
      <input
        v-model="taskName"
        type="text"
        placeholder="Description..."
      >
      <button type="submit">
        Create
      </button>
    </form>
    <input
      :value="search"
      placeholder="Enter a task for search..."
      class="searchInput"
      @input="$emit('inputChange', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: {
    search: String
  },
  data () {
    return {
      taskName: ''
    }
  },
  methods: {
    onSubmit () {
      const newTodo = {
        id: Date.now(),
        title: this.taskName,
        completed: false,
        rename: false,
        checkbox_clicked: false
      }
      this.$emit('add-todo', newTodo)
      this.taskName = ''
    }
  }
}
</script>

<style>

.manyways {
  margin: 5px;
  display: flex;
  justify-content: center;
}
</style>
