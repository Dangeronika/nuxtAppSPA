<template>
  <div :class="{viewed: task.checked}">
    <li :class="{completed: task.completed}">
      <span :class="{checked: task.completed}">
        <input
          type="checkbox"
          :checked="task.checkboxClicked"
          @change="completer(), $emit('chbxchange', task.id, !task.checkboxClicked)"
        >
        <strong>{{ index+1 }}</strong>
        {{ task.title }}
      </span>
      <div class="buttons">
        <input
          v-model="renameDescription"
          type="text"
          :class="{usable: !task.rename}"
        >
        <button
          class="rename-but"
          :class="{usable: !task.rename}"
          @click=" hider(index), $emit('rename-task', renameDescription, task.id)"
        >
          <img src="~@/assets/accepted.png" class="img" alt="">
        </button>

        <button
          class="rename-but"
          :class="{usable: task.rename}"
          @click="hider(index)"
        >
          <img src="~@/assets/pencil-pen.png" class="img" alt="">
        </button>

        <button
          class="rename-but"
          @click="$emit('remove-todo', task.id)"
        >
          &times;
        </button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    task: {},
    index: Number
  },
  data () {
    return {
      renameDescription: ''
    }
  },
  methods: {

    hider (index) {
      this.$emit('changeRename', index)
    },
    completer () {
      // eslint-disable-next-line vue/no-mutating-props
      this.task.completed = !this.task.completed
    }
  }
}
</script>

<style scoped>
li {
  border: 3px solid #dde0e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 15px;
  padding: 3px;
  background-color: white;
}

.checked {
  text-decoration: line-through;
  background-color: greenyellow;
}

.completed {
  background-color: greenyellow;
}

span {
  padding: 5px;
}

.img {
  width: 12px;
}

.rename-but {
  margin-right: 10px;
  width: 30px;
  height: 30px;
}

.buttons {
  padding-right: 10px;
}

.usable {
  visibility: hidden;
}

input {
  margin-right: 15px;
}

.viewed {
  visibility: hidden;
}
</style>
