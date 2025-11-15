<template>
  <p :class="[color==='secondary' ? 'text-secondary' : color==='white' ? 'text-white' : color === 'primary' ? 'text-primary': 'text-neutral-800',  small_text ? 'text-sm 2xl:text-base' : 'text-base 2xl:text-lg']" class="font-normal">
    <slot/>
  </p>
</template>
<script>
  export default {
    props: {
      color: String,
      small_text: Boolean
    }
  }
</script>