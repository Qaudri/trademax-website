<template>
  <section v-if="show"
    class=" fixed w-full z-100 h-dvh overflow-y-auto bg-black/85">

    <div class="flex h-full justify-center items-center">

      <Transition
        appear
        enter-active-class="duration-300 ease-in-out"
        enter-from-class="-translate-y-[700px]"
        enter-to-class="translate-y-0"
        leave-active-class="duration-300 ease-in-out"
        leave-from-class="translate-y-0"
        leave-to-class="-translate-y-[700px]"
        @after-leave="onPanelLeave"
      >
        <div v-if="showform"
          class="w-full max-w-lg mx-4 flex overflow-hidden bg-white shadow-xl h-fit">

        <!-- Right content -->
        <div class="p-6 overflow-y-auto space-y-2">

          <div class="flex justify-between gap-4">
            <div>
              <UiTypographyH3>
                Ready to Protect Your<span class="text-scondary"> Brand?</span>
              </UiTypographyH3>
            <UiTypographyP small_text>
              Secure your brand effortlessly with our expert and reliable trademark registration service.
            </UiTypographyP>
            </div>
            <button @click="closeForm()"
              class="bg-red-600 text-white min-w-7 h-7 flex justify-center items-center font-bold">
              <UiIconsClose class="w-5" />
            </button>
          </div>


          <form @submit.prevent="submit" class="pt-6 space-y-4">
            <FormInput label="Full Name" :required="true" v-model:inputValue="form.fullname" type="text"
              name="fullname" />
            <FormInput label="Email Address" :required="true" v-model:inputValue="form.email" type="email"
              name="email" />
            <FormInput label="Phone Number" :required="true" v-model:inputValue="form.phone" type="text" name="phone" />
            <FormTextarea label="Message" :required="true" v-model:inputValue="form.message" name="message" />
            <FormButton :loading="isLoading" type="submit">Submit</FormButton>
          </form>

        </div>

      </div>
      </Transition>
    </div>

  </section>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { useFormStore } from '@/stores/formStore'
const formStore = useFormStore()
const form = ref({
  fullname: '',
  email: '',
  phone: '',
  message: ''
})
import { useRouter } from 'vue-router'

const router = useRouter()

// Visibility states
const show = ref(false)        // controls if section appears
const showform = ref(false)    // controls slide animation
const isLoading = ref(false)
// Emits
const emit = defineEmits(['closeform', 'openform'])

// OPEN FORM
const openForm = async () => {
  show.value = true             // reveal popup
  await nextTick()              // wait for overlay to mount
  showform.value = true         // slide up animation
  emit('openform')
}

const onPanelLeave = () => {
  show.value = false            // fully hide after animation ends
}

const closeForm = () => {
  showform.value = false        // slide down animation
  emit('closeform')
}

const submit = async () => {
  isLoading.value = true
  
  try {
    // Validate form
    if (!form.value.fullname || !form.value.email || !form.value.phone || !form.value.message) {
      alert('Please fill in all fields')
      isLoading.value = false
      return
    }
    
    // Store form data in Pinia store
    formStore.form.fullname = form.value.fullname
    formStore.form.email = form.value.email
    formStore.form.phone = form.value.phone
    formStore.form.message = form.value.message
    
    // Close the form with animation
    showform.value = false
    
    // Wait for animation to complete before navigating
    await new Promise(resolve => setTimeout(resolve, 300))
    
    // Navigate to forms page
    await router.push('/forms')
  } finally {
    isLoading.value = false
  }
}
// CLOSE FORM

onMounted(() => {
})

// expose to parent so you can call openForm()
defineExpose({
  openForm,
  closeForm
})
</script>
