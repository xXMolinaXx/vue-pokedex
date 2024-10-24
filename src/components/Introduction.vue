<script lang="ts">
let id = 0
export default {
  data() {
    return {
      titleClass: 'titulo editado por referencia',
      count: 0,
      text: '',
      awesome: true,
      todos: [
        { id: id++, text: 'Learn HTML', done: true },
        { id: id++, text: 'Learn JavaScript', done: true },
        { id: id++, text: 'Learn Vue', done: false },
      ],
      hideCompleted: false,
      todoId: 0,
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
  <div class="text-white p-5 flex justify-center">
    <div>
      <h2 class="text-center font-semibold text-xl">
        CONCEPTOS BASICO DE VUEJS
      </h2>
      <section class="my-3 border-b-4 pb-2">
        <h1 :class="titleClass">Make me red</h1>
      </section>
      <section class="my-3 border-b-4 pb-2">
        <button @click="increment">Count is: {{ count }}</button>
      </section>
      <section class="my-3 border-b-4 pb-2">
        <p>
          Input eventos: dos formas de controlar los eventos de cambio de texto
        </p>
        <input class="text-black" :value="text" @input="onInput" />
        <br />
        <br />
        <input class="text-black" v-model="text" />
      </section>
      <section class="my-3 border-b-4 pb-2">
        <button
          @click="toggle"
          class="rounded bg-white text-black p-2 m-2 text-base font-medium border-gray-300 hover:bg-gray-400 hover:w-28 hover:h-12"
        >
          {{ awesome ? 'Mostrar' : 'Desmostrar' }}
        </button>
        <h1 v-if="awesome">Vue is awesome!</h1>
        <h1 v-else>Oh no 😢</h1>
      </section>

      <form @submit.prevent="addTodo">
        <input
          class="text-black"
          v-model="newTodo"
          required
          placeholder="new todo"
        />
        <button
          class="rounded bg-white text-black p-2 m-2 text-base font-medium border-gray-300 hover:bg-gray-400"
        >
          Agregar tarea
        </button>
      </form>
      <ul>
        <li v-for="todo in filteredTodos" :key="todo.id">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
          <button @click="removeTodo(todo)">X</button>
        </li>
      </ul>
      <button
        @click="hideCompleted = !hideCompleted"
        class="rounded bg-white text-black p-2 m-2 text-base font-medium border-gray-300 hover:bg-gray-400"
      >
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
      </button>
      <h2 ref="pElementRef" class="text-xl font-medium">Hello</h2>

      <p>Todo id: {{ todoId }}</p>
      <button
        class="rounded bg-white text-black p-2 m-2 text-base font-medium border-gray-300 hover:bg-gray-400"
        @click="updateState"
        :disabled="!todoData"
      >
        Fetch next todo
      </button>
      <p v-if="!todoData">Loading...</p>
      <pre v-else>{{ todoData }}</pre>
    </div>
  </div>
</template>

<style>
.title {
  color: red;
}
.done {
  text-decoration: line-through;
}
</style>
