<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  id: string;
  label: string;
  type?: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const inputValue = ref(props.modelValue);

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input :id="id" :type="type" v-model="inputValue" />
  </div>
</template>
