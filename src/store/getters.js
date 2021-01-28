

export default {
    // 任务总数量
    todosCount(state) {
        return state.todos.length;
    },
    // 已经完成的任务数量
    finishedCount(state) {
        return state.todos.reduce((total, todo) => total + (todo.finished ? 1 : 0), 0);
    },
    // 判断是否是全选
    isCheck(state, getters) {  // getters获取此文件里的方法
        return getters.finishedCount === state.todos.length && state.todos.length > 0;
    }
};