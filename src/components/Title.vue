<script>
export default {
  props: {
    msg: String,
  },
}
</script>

<template>
  <h2>{{ msg || 'No se han pasados props' }}</h2>
</template>
