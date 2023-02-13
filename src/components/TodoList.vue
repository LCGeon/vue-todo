<template>
  <div>
    <TransitionGroup name="fade">
      <li
        v-for="(todoItem, index) in this.storedTodoItems"
        :key="todoItem"
        class="shadow"
      >
        <i
          class="bi bi-check checkBtn"
          @click="toggleComplete(todoItem, index)"
          :class="{ checkBtnCompleted: todoItem.completed }"
        ></i>
        <span :class="{ textCompleted: todoItem.completed }">
          {{ todoItem.item }}</span
        >
        <span class="removeBtn" @click="removeTodo({ todoItem, index })"
          ><i class="bi bi-trash"></i
        ></span>
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      removeTodo: "removeOneItem",
      toggleComplete: "toggleOneItem",
    }),
    // removeTodo(todoItem, index) {
    //   this.$store.commit("removeOneItem", { todoItem, index });
    // },
    // toggleComplete(todoItem, index) {
    //   this.$store.commit("toggleOneItem", todoItem, index);
    // },
  },
  computed: {
    ...mapGetters(["storedTodoItems"]),
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
  list-style: none;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.fade-leave-active,
.fade-enter-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.5, 1);
}
.fade-leave-to,
.fade-enter {
  opacity: 0;
  transform: translateY(30px);
}
</style>
