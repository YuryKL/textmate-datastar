<template>
  <!-- Test for text.html.vue / source.vue -->
  <div>
    <h1>{{ title }}</h1>
    <div data-signals="{ count: 0 }"></div>
    <button data-on:click="$count++">Increment</button>
    <span data-text="$count"></span>
  </div>
</template>

<script>
export default {
  data() {
    return { title: 'DataStar Test' }
  }
}
</script>
