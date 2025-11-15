<template>
  <h1 :class="color==='secondary' ? 'text-secondary' : color==='white' ? 'text-white' : color === 'primary' ? 'text-primary': 'text-neutral-800'" class="text-4xl md:text-5xl xl:text-6xl"><slot/></h1>
</template>
<script>
  export default {
    props: {
      color: String
    }
  }
</script>