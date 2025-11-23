<template>
  <nav class="fixed z-100 w-full top-0 left-0 border-b border-accent-200 bg-white">
    <Container :addTopBottomPadding="false" class="flex items-center justify-between py-4">
     <Trademarkform ref="trademarkformFunctions" />
      <!-- Logo -->
      <NavigationLogo @logoClicked="handleLogoClick" />

      <!-- Desktop Navigation -->
      <div class="hidden md:flex gap-8 flex-shrink-0">
        <UiButtonsTertiary url="/#pricing">Pricing</UiButtonsTertiary>
        <UiButtonsTertiary url="/#faqs">FAQs</UiButtonsTertiary>
        <UiButtonsPrimary>Register my Trademark</UiButtonsPrimary>
      </div>

      <!-- Mobile Menu Toggle -->
      <NavigationToggle @revealMenu="toggleMenu" />

      <!-- Mobile Menu (rendered conditionally) -->
       <div v-if="menuRevealed" class="flex flex-col items-start gap-12 md:hidden absolute bg-white h-screen top-[4.6rem] left-0 px-6 py-10 w-full">
          <UiButtonsTertiary url="/#pricing" style="font-size: 1.5rem;">Pricing</UiButtonsTertiary>
          <UiButtonsTertiary url="/#faqs" style="font-size: 1.5rem;">FAQs</UiButtonsTertiary>
          <UiButtonsPrimary>Register my Trademark</UiButtonsPrimary>
       </div>
    </Container>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
const trademarkformFunctions = ref(null)

// Props with validation - only UI-related props remain
const props = defineProps({
});

// Emits
const emit = defineEmits([
  'switchMode',
]);

// Router
const router = useRouter()

// Reactive state
const menuRevealed = ref(false)
// Methods
function toggleMenu() {
  menuRevealed.value = !menuRevealed.value
}

const openform = () => {
    trademarkformFunctions.value.openForm()
}


function handleLogoClick() {
  emit('navigate', { path: '/', type: 'logo' })
  try {
    router.push('/')
  } catch (error) {
    console.error('Navigation error:', error)
  }
}
</script>
