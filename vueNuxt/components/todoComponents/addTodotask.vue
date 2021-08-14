<template>
  <div>
    <form class="manyways" @submit.prevent="onSubmit">
      <input v-model="taskName" type="text" placeholder="Enter a new task...">
      <button type="submit">
        Create
      </button>
    </form>
    <input class="searchInput" :value="search" placeholder="Enter a search task..." @input="$emit('inputChange', $event.target.value)">
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
  display: flex;
  justify-content: center;
}

.searchInput {
  margin-top: 5px;
}
</style>
