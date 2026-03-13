<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  text: string;
  tag?: string;
}>();

const parsedSegments = computed(() => {
  if (!props.text) return [];

  // Regex for **bold** and ==highlight==
  const regex = /(\*\*.*?\*\*|==.*?==)/g;
  const segments = props.text.split(regex);

  return segments.map(segment => {
    if (segment.startsWith('**') && segment.endsWith('**')) {
      return {
        type: 'bold',
        content: segment.slice(2, -2)
      };
    } else if (segment.startsWith('==') && segment.endsWith('==')) {
      return {
        type: 'highlight',
        content: segment.slice(2, -2)
      };
    } else {
      return {
        type: 'text',
        content: segment
      };
    }
  });
});
</script>

<template>
  <component :is="tag || 'span'">
    <template v-for="(segment, index) in parsedSegments" :key="index">
      <strong v-if="segment.type === 'bold'" class="font-bold text-gray-900 dark:text-white">{{ segment.content }}</strong>
      <mark v-else-if="segment.type === 'highlight'" class="bg-indigo-100 dark:bg-indigo-500/30 text-indigo-700 dark:text-indigo-200 px-0.5 rounded-sm font-medium">{{ segment.content }}</mark>
      <template v-else>{{ segment.content }}</template>
    </template>
  </component>
</template>
