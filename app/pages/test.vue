<template>
  <div class=" mt-36 ">
    <label class="font-semibold  mt-36">Select Country</label>

    <select v-model="selected" class="border p-2 w-full">
      <option disabled value="">Select Country</option>

      <option v-for="item in countries" :key="item.code" :value="item">
        {{ item.emoji }} {{ item.name }} ({{ item.phone }})
      </option>
    </select>
    

    <!-- Display selected -->
    <div v-if="selected" class="flex items-center gap-2 mt-4">
      <Icon :icon="selected.icon" class="w-6 h-6" />
      <span>{{ selected.name }}</span>
      <span class="text-gray-500">• {{ selected.phone }}</span>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import countries from "@/utils/countries.js";

const selected = ref("");
</script>
