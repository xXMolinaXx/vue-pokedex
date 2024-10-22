<script lang="ts">
import CardComponent from '../components/cards/CardComponent.vue'
export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      RickAndMortyCharacters: [],
    }
  },
  methods: {
    async fetchData() {
      const res = await fetch(`https://rickandmortyapi.com/api/character`).then(
        data => data.json(),
      )
      console.log(res)
      this.RickAndMortyCharacters = res.results
    },
  },
  mounted() {
    this.fetchData()
  },
  watch: {
    todoId() {
      this.fetchData()
    },
  },
}
</script>
<template>
  <section class="mt-5">
    <h3 class="text-center font-semibold tracking-wide">Mas vistos</h3>
  </section>
  <section
    class="flex justify-center mt-5 gap-4 flex-wrap"
    v-for="characters in RickAndMortyCharacters"
    :key="characters.id"
  >
    <CardComponent name="characters.name" url="characters.name" />
  </section>
</template>
