<script lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
export default {
  data() {
    return {
      info: {
        image: '',
        species: '',
        gender: '',
        name: '',
        status: '',
      },
    }
  },
  methods: {
    async getInfo() {
      console.log()
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${this.$route.params.id}`,
      ).then(data => data.json())
      this.info = res
    },
  },

  mounted() {
    this.getInfo()
  },
}
</script>
<template>
  <div class="flex justify-center text-white p-5">
    <div>
      <div class="flex justify-center">
        <img
          :src="info.image"
          class="rounded-full border-4 border-white"
          alt="personaje de rick and morty"
          width="200px"
        />
      </div>

      <div class="">
        <h2 class="text-center text-2xl font-semibold underline">
          {{ info.name }}
        </h2>
        <p class="text-center font-mono text-xl"></p>
        <ul>
          <li>especie: {{ info.species }}</li>
          <li>genero: {{ info.gender }}</li>
          <li>genero: {{ info.status }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
