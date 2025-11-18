<template>
  <div class="relative w-full max-w-4xl mx-auto p-5">
    <!-- Slider container -->
    <div class="overflow-hidden">
      <div
        class="flex"
        :style="{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transitioning ? 'transform 0.5s ease' : 'none'
        }"
        @transitionend="onTransitionEnd"
      >
        <!-- Clone last item at start -->
        <div
          class="flex-none w-full p-6 space-y-3 rounded-lg shadow-md "
        >
          <p class="text-gray-800 text-base leading-relaxed">
            {{ reviewsList[reviewsList.length - 1].text }}
          </p>
          <h3 class="text-gray-900 font-semibold">
            {{ reviewsList[reviewsList.length - 1].name }}
          </h3>
          <div class="flex items-center gap-2">
            <div class="text-yellow-500 text-xl">
              <span v-for="n in 5" :key="n">
                {{ n <= Math.round(reviewsList[reviewsList.length - 1].rating) ? '★' : '☆' }}
              </span>
            </div>
            <span class="text-gray-700 font-medium">
              {{ reviewsList[reviewsList.length - 1].rating }}/5
            </span>
          </div>
        </div>

        <!-- Real items -->
        <div
          v-for="(review, index) in reviewsList"
          :key="index"
          class="flex-none w-full p-6 space-y-3 rounded-lg shadow-md bg-gray-100"
        >
          <p class="text-gray-800 text-base leading-relaxed">{{ review.text }}</p>
          <h3 class="text-gray-900 font-semibold">{{ review.name }}</h3>
          <div class="flex items-center gap-2">
            <div class="text-yellow-500 text-xl">
              <span v-for="n in 5" :key="n">
                {{ n <= Math.round(review.rating) ? '★' : '☆' }}
              </span>
            </div>
            <span class="text-gray-700 font-medium">{{ review.rating }}/5</span>
          </div>
        </div>

        <!-- Clone first item at end -->
        <div
          class="flex-none w-full p-6 space-y-3 rounded-lg shadow-md bg-gray-100"
        >
          <p class="text-gray-800 text-base leading-relaxed">{{ reviewsList[0].text }}</p>
          <h3 class="text-gray-900 font-semibold">{{ reviewsList[0].name }}</h3>
          <div class="flex items-center gap-2">
            <div class="text-yellow-500 text-xl">
              <span v-for="n in 5" :key="n">
                {{ n <= Math.round(reviewsList[0].rating) ? '★' : '☆' }}
              </span>
            </div>
            <span class="text-gray-700 font-medium">{{ reviewsList[0].rating }}/5</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation buttons -->
    <button
      class="absolute top-1/2 -translate-y-1/2 left-2 bg-gray-800 text-white p-2 rounded-full shadow"
      @click="prevSlide"
    >
      ‹
    </button>
    <button
      class="absolute top-1/2 -translate-y-1/2 right-2 bg-gray-800 text-white p-2 rounded-full shadow"
      @click="nextSlide"
    >
      ›
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const reviewsList = ref([
  {
    text: "Working with Trademark Legal Shield was a fantastic experience. As a new business owner, I was unsure about the trademark process, but their team guided me through every step with patience and professionalism. Thanks to their expertise, my brand is now fully protected.",
    name: "Sam Martinez",
    rating: 4.9
  },
  {
    text: "Trademark Legal Shield’s Platinum package exceeded my expectations. Beyond just filing the trademark, they provided continuous monitoring and renewal reminders that helped me avoid any lapses. Their personalized support and legal advice gave me peace of mind knowing my intellectual property is in good hands. Their professionalism and dedication make them stand out in the trademark services industry.",
    name: "Jessica Lee",
    rating: 5
  },
  {
    text: "I chose Trademark Legal Shield because of their reputation for reliable and efficient service, and they did not disappoint. The staff was incredibly knowledgeable and took the time to explain the nuances of trademark registration. Their response to a USPTO office action on my behalf was prompt and effective, which made all the difference in getting my trademark approved without delays. I highly recommend Trademark Legal Shield to anyone serious about protecting their brand.",
    name: "Michael Brown",
    rating: 4.5
  }
]);

// Start at 1 (first real item)
const currentIndex = ref(1);
const transitioning = ref(true);

const nextSlide = () => {
  if (!transitioning.value) return;
  transitioning.value = true;
  currentIndex.value++;
};

const prevSlide = () => {
  if (!transitioning.value) return;
  transitioning.value = true;
  currentIndex.value--;
};

const onTransitionEnd = () => {
  // Disable transition temporarily
  transitioning.value = false;

  if (currentIndex.value === 0) {
    // Jump to last real item
    currentIndex.value = reviewsList.value.length;
  } else if (currentIndex.value === reviewsList.value.length + 1) {
    // Jump to first real item
    currentIndex.value = 1;
  }

  // Force reflow
  void document.body.offsetHeight;

  // Re-enable transition
  transitioning.value = true;
};
</script>

<style scoped>
/* Optional: smooth text and layout */
</style>
