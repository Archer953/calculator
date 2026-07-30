<script setup>
import CalculatorDisplay from './components/CalculatorDisplay.vue'
</script>

<template>
  <div class="calculator">
    <CalculatorDisplay />

    <!-- 按钮区域占位 -->
    <div class="button-grid">
      <!-- 按钮将在后续步骤中填充 -->
    </div>
  </div>
</template>

<style scoped>
.calculator {
  width: 320px;
  background-color: #1f1f1f;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background-color: #1f1f1f;
  padding: 2px;
}
</style>
