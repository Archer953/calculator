<script setup>
import { computed } from 'vue'

const props = defineProps({
  expression: {
    type: String,
    default: ''
  },
  currentValue: {
    type: String,
    default: '0'
  }
})

const displayFontSize = computed(() => {
  const len = props.currentValue.length
  if (len <= 10) return '42px'
  if (len <= 13) return '34px'
  if (len <= 16) return '28px'
  return '22px'
})
</script>

<template>
  <div class="display">
    <div class="expression">{{ expression }}</div>
    <div class="current-value" :style="{ fontSize: displayFontSize }">{{ currentValue }}</div>
  </div>
</template>

<style scoped>
.display {
  padding: 24px 20px 16px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: #202020;
}

.expression {
  color: #9a9a9a;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  min-height: 18px;
  margin-bottom: 4px;
  word-break: break-all;
  text-align: right;
}

.current-value {
  color: #ffffff;
  font-size: 42px;
  font-weight: 300;
  line-height: 1;
  word-break: break-all;
  text-align: right;
}
</style>
