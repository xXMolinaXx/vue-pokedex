<script lang="ts">
export default {
  props: {
    name: String,
    url: String,
    specie: String,
    gender: String,
    id: String,
  },
  methods: {
    goToAbout(id: string | undefined) {
      this.$router.push(`/character/${id}`)
    },
  },
}
</script>
<template>
  <div
    class="rounded shadow-lg border-2 w-72 h-96 py-5 px-1 bg-white"
    @click="goToAbout(id)"
  >
    <div class="flex justify-center">
      <img
        class="rounded-full border-4 border-black"
        :src="url"
        alt="personaje de rick and morty"
        width="200px"
      />
    </div>

    <div class="">
      <p class="text-center font-mono text-xl">{{ name }}</p>
      <ul>
        <li>especie: {{ specie }}</li>
        <li>genero: {{ gender }}</li>
      </ul>
    </div>
  </div>
</template>
