<script lang="ts">
export default {
  data() {
    return {
      msg: 'from parent',
    }
  },
}
</script>

<template>
  <header class="w-full bg-black p-3 flex shadow border-b-4">
    <p class="font-bold bg-white rounded-xl px-2">RICK AND MORTY APP</p>
    <nav class="ml-5">
      <RouterLink to="/" class="ml-5 text-white">Inicio</RouterLink>
      <RouterLink to="/introduction" class="ml-5 text-white"
        >Introducción</RouterLink
      >
      <RouterLink to="/formulario" class="ml-5 text-white"
        >Formulario</RouterLink
      >
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>
