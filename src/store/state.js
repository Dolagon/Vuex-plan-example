import localStorageUtil from "@/utils/localStorageUtil";


export default {
    todos: localStorageUtil.readTodos()
};