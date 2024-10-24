<script lang="ts">
export default {
  data() {
    return {
      info: {
        url: '',
        specie: '',
        gender: '',
      },
    }
  },
  methods: {
    async getInfo() {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/2`,
      ).then(data => data.json())
      this.info = res.results
    },
  },
  mounted() {
    this.getInfo()
  },
}
</script>
<template>
  <div class="flex justify-center bg-white">
    <div class="flex justify-center">
      <img
        :src="info.url"
        class="rounded-full border-4 border-black"
        alt="personaje de rick and morty"
        width="200px"
      />
    </div>

    <div class="">
      <p class="text-center font-mono text-xl"></p>
      <ul>
        <li>especie: {{ info.specie }}</li>
        <li>genero: {{ info.gender }}</li>
      </ul>
    </div>
  </div>
</template>
