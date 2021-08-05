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
        @hidding-task="hide"
        @completeTask="complete"
        @chbxchange="savecondition"
        @changeDescription="changeDescription"
      />
    </ul>
  </div>
</template>

<script>
import Todotask from '~/components/todoComponents/Todotask'
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
    savecondition (id) {
      this.$emit('savecondition', id)
    },
    hide (id) {
      this.$emit('hide', id)
    },
    complete (id) {
      this.$emit('completeTask', id)
    },
    changeDescription (title, id) {
      this.$emit('changeDescription', title, id)
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
