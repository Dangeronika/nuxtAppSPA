<template>
  <div id="app">
    <Todohead />
    <AddTodotask
      :search="searchStroke"
      @add-todo="addTodo"
      @set-local="setTasks"
      @inputChange="searchStroke = $event"
    />
    <Todolist
      v-if="filterTasks.length"
      :tasks="filterTasks"
      class="list"
      @remove-todo="remove"
      @rename="rename"
      @savecondition="savecondition"
      @hide="hide"
      @completeTask="completeTask"
      @changeDescription="changeDescription"
    />
    <p v-else>
      No tasks!
    </p>
  </div>
</template>

<script>

import Todohead from '@/components/Todohead'
import Todolist from '@/components/Todolist'
import AddTodotask from '@/components/addTodotask'
export default {
  name: 'TodoMain',
  components: {
    Todohead,
    Todolist,
    AddTodotask
  },
  data () {
    return {
      tasks: [
        { id: 0, title: 'Make a todo list', completed: false, rename: false, checkbox_clicked: false },
        { id: 1, title: 'Refactor the code', completed: false, rename: false, checkbox_clicked: false },
        { id: 2, title: 'Done the work', completed: false, rename: false, checkbox_clicked: false }
      ],
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
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    remove (id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
      this.setTasks()
    },
    rename (description, id) {
      this.tasks[id].title = description
      this.setTasks()
    },
    addTodo (newTodo) {
      this.tasks.push(newTodo)
      this.setTasks()
    },
    setTasks () {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    getTasks () {
      if (localStorage.getItem('tasks')) {
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
      }
    },
    savecondition (id) {
      this.tasks[id].checkbox_clicked = !this.tasks[id].checkbox_clicked
      this.setTasks()
    },
    hide (id) {
      this.tasks[id].rename = !this.tasks[id].rename
    },
    completeTask (id) {
      this.tasks[id].completed = !this.tasks[id].completed
    },
    changeDescription (title, id) {
      this.tasks[id].title = title
      this.setTasks()
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
  margin: 5px 10px;
}
</style>
