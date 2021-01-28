<template>
  <ul class="todo-main">
    <Item
      v-for="(todo, index) in todos"
      :todo="todo"
      :index="index"
    ></Item>
  </ul>
</template>

<script>
import Item from "@/components/Item";
import localStorageUtil from "@/utils/localStorageUtil";
import { mapState } from 'vuex';

export default {
  name: "List",
  computed: {
    ...mapState([ 'todos' ])
  },
  components: {
    Item
  },
  watch: {
    todos: {
      deep: true,
      handler: localStorageUtil.saveTodos  // 监视到改动调用保存方法
    }
  }
}
</script>

<style scoped>
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 0;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>