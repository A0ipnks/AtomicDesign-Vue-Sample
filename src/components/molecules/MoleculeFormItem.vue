<script setup lang="ts">
import AtomInputField from '../../components/atoms/AtomInputField.vue';
import { ref, watch } from 'vue';

const props = defineProps<{
  id: string;
  label: string;
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
  <div class="form-item">
    <AtomInputField :id="id" :label="label" v-model="inputValue" />
  </div>
</template>
