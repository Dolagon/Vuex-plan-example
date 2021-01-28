<template>
  <div class="todo-header">
    <label>
      <input
        type="text"
        placeholder="输入今天的任务清单，回车确认"
        v-model="title"
        @keyup.enter="addItem"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    addTodo: Function
  },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addItem() {
      const title = this.title.trim();
      if (!title) {
        alert('输入内容不能为空');
        return;
      }
      let todo = { title: title, finished: false };
      this.$store.dispatch('addTodo', todo);
      this.title = '';
    }
  }
}
</script>

<style scoped>
.todo-header {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  outline: none;
}

.todo-header input {
  width: 560px;
  height: 28px;
  border:none;
}

/*focus 选择拥有键盘输入焦点的元素*/
.todo-header input:focus {
  outline: none;
}
</style>