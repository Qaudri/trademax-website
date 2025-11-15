<template>
  <footer class="border-t border-accent-200 w-full">

    <Container :addTopBottomPadding="false" class="border-t border-accent-200 py-6 flex items-center justify-between">
      <NavigationLogo class="" />
      <UiTypographyP>&copy;{{ new Date().getFullYear() }} {{ projectName }}. All rights reserved.</UiTypographyP>
    </Container>
  </footer>
</template>

<script setup>
// Get the public runtime config so project name can be used across components
const config = useRuntimeConfig()
const projectName = config.public.projectName
</script>