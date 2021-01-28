<template>
  <li
    @mouseenter="dealShow(true)"
    @mouseleave="dealShow(false)"
    :style="{ backgroundColor: bgColor, color: color }"
  >
    <label>
      <input type="checkbox" v-model="todo.finished" />
      <span>{{ todo.title }}</span>
    </label>
    <button
      v-show="isShowDelButton"
      class="btn btn-warning"
      @click="delItem"
    >删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    todo: Object,
    index: Number
  },
  data() {
    return {
      isShowDelButton: false,
      bgColor: '#fff',
      color: 'black'
    }
  },
  methods: {
    dealShow(isShow) {
      this.isShowDelButton = isShow;
      // 根据isShow判断 背景颜色
      this.bgColor = isShow ? 'black' : '#fff';
      this.color = isShow ? 'white' : 'black';
    },
    delItem() {
      if (window.confirm(`确认删除 ${this.todo.title} ?`)) {
        this.$store.dispatch('delTodo', this.index);
      }
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  padding: 4px 10px;
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>