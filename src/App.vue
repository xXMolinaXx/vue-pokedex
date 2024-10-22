<script lang="ts">
export default {
  data() {
    return {
      message: 'Kenny',
      counter: {
        count: 2,
      },
    }
  },
}
</script>
<template>
  <header class="w-full bg-blue-500 p-3">
    <p class="font-bold bg-white rounded-xl px-2">RICK AND MORTY APP</p>
    <nav class="ml-5">
      <RouterLink to="/" class="ml-5 text-white">Inicio</RouterLink>
      <RouterLink to="/introduction" class="ml-5 text-white"
        >Introducción</RouterLink
      >
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
