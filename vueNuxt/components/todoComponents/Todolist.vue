<template>
  <div>
    <ul>
      <Todotask
        v-for="(task, index) in tasks"
        :key="task"
        :task="task"
        :index="index"
        @remove-todo="remove"
        @rename-task="rename"
        @changeRename="changeRename"
        @chbxchange="saveCondition"
      />
    </ul>
  </div>
</template>

<script>
import Todotask from '@/components/todoComponents/Todotask'
export default {
  components: {
    Todotask
  },
  props: ['tasks'],
  methods: {
    remove (id) {
      this.$emit('remove-todo', id)
    },
    rename (description, id) {
      this.$emit('rename', description, id)
    },
    saveCondition (id, taskState) {
      this.$emit('saveCondition', id, taskState)
    },
    changeRename (id) {
      this.$emit('changeRenameCondition', id)
    }
  }

}
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
