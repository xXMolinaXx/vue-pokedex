<script lang="ts">
export default {
  data() {
    return {
      name: '',
      email: '',
      des: '',
      pass: '',
      text: '',
      show: false,
    }
  },
  methods: {
    sendForm() {
      this.show = !this.show
    },
    onInput(e) {
      this.text = e.target.value
    },
  },
}
</script>
<template>
  <div class="flex justify-center p-5">
    <div class="bg-white w-96 rounded p-5 text-center">
      <h1>Formulario</h1>
      <form @submit.prevent="sendForm">
        <input
          v-model="name"
          class="border-black border-2 rounded-sm my-1"
          placeholder="Nombre"
          type="text"
          name=""
          id=""
        />
        <input
          v-model="email"
          class="border-black border-2 rounded-sm my-1"
          type="email"
          placeholder="correo"
          name=""
          id=""
        />
        <input
          v-model="des"
          class="border-black border-2 rounded-sm my-1"
          type="text"
          placeholder="Descripcion breve de porque"
          name=""
          id=""
        />
        <input
          v-model="pass"
          class="border-black border-2 rounded-sm my-1"
          type="password"
          placeholder="contrasenia"
          name=""
          id=""
        />
        <input
          class="border-black border-2 rounded-sm my-1"
          :value="text"
          @input="onInput"
        />
        <br />
        <button
          type="submit"
          class="hover:bg-gray-500 hover:rounded p-1 my-2 w-full"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>
  <div class="bg-white w-96 rounded p-5 text-center" v-if="show">
    <h3 class="text-center font-semibold text-3xl">
      Formulario que seria enviado por peticion http
    </h3>
    {{ name }} {{ email }} {{ des }} {{ pass }}
  </div>
</template>
