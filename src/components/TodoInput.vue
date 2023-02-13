<template>
  <div class="inputBox shadow">
    <input
      type="text"
      v-model="newTodoItem"
      @keyup.enter="addTodo"
      ref="todoInput"
    />
    <span class="addContainer" @click="addTodo">
      <i class="bi bi-card-checklist addBtn"></i
    ></span>

    <Teleport to="body">
      <CommonModal :show="showModal" @close="showModal = false"> </CommonModal>
    </Teleport>
  </div>
</template>

<script>
import CommonModal from "../components/common/CommonModal.vue";
export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  components: { CommonModal },

  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        this.$store.commit("addOneItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
