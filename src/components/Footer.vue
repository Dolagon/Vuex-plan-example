<template>
  <div class="todo-footer">
    <label>
      <input slot="isCheck" type="checkbox" v-model="selectedAllOrNot" />
    </label>
    <span>
      <span slot="finish">已完成{{ finishedCount }}件 / 总计{{ todosCount }}件</span>
    </span>
      <button slot="delete" class="btn btn-warning" @click="delFinishedTodos">清除已完成任务</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Footer",
  computed: {
    ...mapGetters([ 'todosCount', 'finishedCount', 'isCheck' ]),
    selectedAllOrNot: {
      get() {  // 决定是否勾选
        return this.isCheck;
      },
      set(value) {
        this.selectedAllTodo(value);
      }
    }
  },
  methods: {
    ...mapActions([ 'delFinishedTodos', 'selectedAllTodo' ])
  }
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>