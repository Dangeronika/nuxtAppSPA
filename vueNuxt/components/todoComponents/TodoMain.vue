<template>
  <div id="app">
    <Todohead />
    <AddTodotask
      :search="searchStroke"
      @add-todo="addTodo"
      @inputChange="searchStroke = $event"
      class="componentAddTodo"
    />
    <Todolist
      v-if="filterTasks.length"
      :tasks="filterTasks"
      :sort-tasks="sortTasks"
      class="list"
      @remove-todo="remove"
      @rename="rename"
      @saveCondition="saveCondition"
      @changeRenameCondition="changeRenameCondition"
    />
    <p v-else>
      No tasks!
    </p>
  </div>
</template>

<script>

import Todohead from '@/components/todoComponents/Todohead'
import Todolist from '@/components/todoComponents/Todolist'
import AddTodotask from '@/components/todoComponents/addTodotask'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    Todohead,
    Todolist,
    AddTodotask
  },
  data () {
    return {
      tasks: [],
      searchStroke: ''
    }
  },
  computed: {
    filterTasks () {
      if (this.searchStroke !== '') {
        return this.tasks.filter(t => t.title.includes(this.searchStroke))
      } else {
        return this.tasks
      }
    },
    sortTasks () {
      return this.sortTasksById(this.tasks, 'id')
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    remove (id) {
      axios.delete(`http://localhost:3001/tasks/deleteTask/${id}`)
        .then(() => {
          this.getTasks()
        })
    },
    rename (description, id) {
      axios.put(`http://localhost:3001/tasks/renameTask/${id}`, { description })
        .then(() => {
          this.getTasks()
        })
    },
    addTodo (newTodo) {
      axios.post('http://localhost:3001/tasks/addTask', { newTodo })
        .then(() => {
          this.getTasks()
        })
    },
    getTasks () {
      axios.get('http://localhost:3001/tasks')
        .then((response) => {
          this.tasks = response.data
        })
    },
    saveCondition (id, taskState) {
      axios.put(`http://localhost:3001/tasks/saveCondition/${id}`, { id, taskState })
        .then(() => {
          this.getTasks()
        })
    },
    changeRenameCondition (id) {
      this.tasks[id].rename = true
    },
    sortTasksById (array, key) {
      return array.sort(function (a, b) {
        const x = a[key]
        const y = b[key]
        return ((x < y) ? -1 : ((x > y) ? 1 : 0))
      })
    }
  }
}
</script>

<style>
.list {
  margin-top: 50px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.componentAddTodo {
  margin-top: 20px;
}
</style>
