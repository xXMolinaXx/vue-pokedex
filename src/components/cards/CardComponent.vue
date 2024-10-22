<script lang="ts">
export default {
  props: {
    name: String,
    url: String,
  },
}
</script>
<template>
  <div class="rounded shadow-md border-2 border-slate-200 w-72 h-96 py-5 px-1">
    <img src="url" alt="personaje de rick and morty" width="200px" />
    <div class="flex">
      <p>{{ name }}</p>
    </div>
  </div>
</template>
