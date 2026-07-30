<script setup>
import CalculatorDisplay from './components/CalculatorDisplay.vue'
import CalculatorButton from './components/CalculatorButton.vue'
import { useCalculator } from './composables/useCalculator.js'

const { currentValue, expression, inputDigit, clear, setOperator, calculate, toggleSign, percent, inputDecimal } = useCalculator()

function handleButtonClick(label) {
  if (label >= '0' && label <= '9') {
    inputDigit(label)
  } else if (label === 'C') {
    clear()
  } else if (['+', '−', '×', '÷'].includes(label)) {
    setOperator(label)
  } else if (label === '=') {
    calculate()
  } else if (label === '±') {
    toggleSign()
  } else if (label === '%') {
    percent()
  } else if (label === '.') {
    inputDecimal()
  }
}

const buttons = [
  // 第 1 行：功能按钮 C  +/-  %                        第 4 列：÷
  { label: 'C', type: 'function', row: 1, col: 1 },
  { label: '±', type: 'function', row: 1, col: 2 },
  { label: '%', type: 'function', row: 1, col: 3 },
  { label: '÷', type: 'operator', row: 1, col: 4 },
  // 第 2 行：数字 7 8 9                               第 4 列：×
  { label: '7', type: 'number', row: 2, col: 1 },
  { label: '8', type: 'number', row: 2, col: 2 },
  { label: '9', type: 'number', row: 2, col: 3 },
  { label: '×', type: 'operator', row: 2, col: 4 },
  // 第 3 行：数字 4 5 6                               第 4 列：-
  { label: '4', type: 'number', row: 3, col: 1 },
  { label: '5', type: 'number', row: 3, col: 2 },
  { label: '6', type: 'number', row: 3, col: 3 },
  { label: '−', type: 'operator', row: 3, col: 4 },
  // 第 4 行：数字 1 2 3                               第 4 列：+
  { label: '1', type: 'number', row: 4, col: 1 },
  { label: '2', type: 'number', row: 4, col: 2 },
  { label: '3', type: 'number', row: 4, col: 3 },
  { label: '+', type: 'operator', row: 4, col: 4 },
  // 第 5 行：数字 0（占两列）    小数点 .     等号 =
  { label: '0', type: 'number', row: 5, col: 1, wide: true },
  { label: '.', type: 'number', row: 5, col: 3 },
  { label: '=', type: 'equals', row: 5, col: 4 },
]
</script>

<template>
  <div class="calculator">
    <CalculatorDisplay
      :expression="expression"
      :currentValue="currentValue"
    />

    <div class="button-grid">
      <CalculatorButton
        v-for="btn in buttons"
        :key="`${btn.row}-${btn.col}`"
        :label="btn.label"
        :type="btn.type"
        :wide="btn.wide"
        :style="{
          gridRow: btn.row,
          gridColumn: btn.wide ? `${btn.col} / span 2` : btn.col
        }"
        @click="handleButtonClick"
      />
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
