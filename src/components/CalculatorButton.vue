<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'number',
    validator: (v) => ['number', 'operator', 'function', 'equals'].includes(v)
  },
  wide: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<template>
  <button
    class="calc-btn"
    :class="[`btn-${type}`, { 'btn-wide': wide }]"
    @click="$emit('click', label)"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.calc-btn {
  border: none;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.1s;
}

.calc-btn:hover {
  filter: brightness(1.3);
}

.calc-btn:active {
  filter: brightness(0.8);
}

/* 数字按钮 */
.btn-number {
  background-color: #3b3b3b;
  color: #ffffff;
}

/* 运算符按钮 */
.btn-operator {
  background-color: #323232;
  color: #ffffff;
}

/* 功能按钮 */
.btn-function {
  background-color: #323232;
  color: #ffffff;
}

/* 等号按钮 */
.btn-equals {
  background-color: #4cc2ff;
  color: #1f1f1f;
}

.btn-wide {
  grid-column: span 2;
}
</style>
