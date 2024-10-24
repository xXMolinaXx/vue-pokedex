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
  <div @click="goToAbout(id)">
    <div class="flex justify-center m-2">
      <img
        class="rounded-full border-4 border-black hover:w-[210px]"
        :src="url"
        alt="personaje de rick and morty"
        width="200px"
      />
    </div>

    <div class=""></div>
  </div>
</template>
