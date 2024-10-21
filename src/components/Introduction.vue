<script lang="ts">
let id = 0
export default {
  data() {
    return {
      titleClass: 'title editable',
      count: 0,
      text: '',
      awesome: true,
      todos: [
        { id: id++, text: 'Learn HTML', done: true },
        { id: id++, text: 'Learn JavaScript', done: true },
        { id: id++, text: 'Learn Vue', done: false },
      ],
      hideCompleted: false,
      todoId: 5,
      todoData: null,
    }
  },
  computed: {
    filteredTodos() {
      return this.hideCompleted ? this.todos.filter(t => !t.done) : this.todos
    },
  },
  methods: {
    increment() {
      // update component state
      this.count++
    },
    onInput(e) {
      // a v-on handler receives the native DOM event
      // as the argument.
      this.text = e.target.value
    },
    toggle() {
      this.awesome = !this.awesome
    },
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo })
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos = this.todos.filter(t => t !== todo)
    },
    async fetchData() {
      this.todoData = null
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${this.todoId}`,
      )
      this.todoData = await res.json()
    },
    updateState() {
      this.todoId++
      this.count++
    },
  },
  mounted() {
    this.$refs.pElementRef.textContent = this.titleClass
    this.fetchData()
  },
  watch: {
    todoId(data) {
      console.log(data)
      this.fetchData()
    },
  },
}
</script>
<template>
  <h1 :class="titleClass">Make me red</h1>
  <button @click="increment">Count is: {{ count }}</button>
  <input :value="text" @input="onInput" />
  <input v-model="text" />
  <button @click="toggle">Toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo" />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
  <h2 ref="pElementRef">Hello</h2>

  <p>Todo id: {{ todoId }}</p>
  <button @click="updateState" :disabled="!todoData">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
</template>

<style>
.title {
  color: red;
}
.done {
  text-decoration: line-through;
}
</style>
