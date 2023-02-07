<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
  />
  <div class="todoFont">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: { TodoHeader, TodoInput, TodoList, TodoFooter },
};
</script>

<style>
@font-face {
  font-family: "TodoFont";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SLEIGothicTTF.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  text-align: center;
  background-color: F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: none;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
.app {
  font-size: 50px;
  font-family: "TodoFont";
}
.todoFont {
  font-family: "TodoFont";
}
</style>
