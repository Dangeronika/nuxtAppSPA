<template>
  <div :class="{viewed: task.checked}">
    <li :class="{completed: task.completed}">
      <span :class="{checked: task.completed}">
        <input type="checkbox" :checked="task.checkbox_clicked" @change="completer(), $emit('chbxchange', index)">
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
          @click=" hider(), changeDescription()"
        >
          <img src="@/assets/accepted.png" class="img" alt="">
        </button>

        <button
          class="rename-but"
          :class="{usable: task.rename}"
          @click="hider()"
        >
          <img src="@/assets/pencil-pen.png" class="img" alt="">
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

    task: Object,
    index: Number
  },
  data () {
    return {
      renameDescription: ''
    }
  },
  methods: {

    hider () {
      this.$emit('hidding-task', this.index)
    },
    completer () {
      this.$emit('completeTask', this.index)
    },
    changeDescription () {
      this.$emit('changeDescription', this.renameDescription, this.index)
      this.renameDescription = ''
    }
  }
}
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 15px;
  padding: 3px;
  border: 3px solid #dde0e6;
  box-shadow: 0 6px 10px -8px rgba(0, 0, 0, 0.2);
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
