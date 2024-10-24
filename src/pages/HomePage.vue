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
      this.RickAndMortyCharacters = res.results
    },
  },
  mounted() {
    console.log(`El componente esta montado`)
    this.fetchData()
  },
  updated() {
    console.log(`El componente esta actualizado`)
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
  <section class="flex justify-center mt-5 gap-4 flex-wrap py-5">
    <CardComponent
      v-for="character in RickAndMortyCharacters"
      :key="character.id"
      :id="character.id"
      :name="character.name"
      :url="character.image"
      :specie="character.species"
      :gender="character.gender"
    />
  </section>
  <div class="flex justify-center pb-5">
    <div class="pagination">
      <a href="#" class="disabled">&laquo;</a>
      <a href="#">1</a>
      <a href="#" class="active">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
    </div>
  </div>
</template>
