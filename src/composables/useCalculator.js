import { ref } from 'vue'

export function useCalculator() {
  const currentValue = ref('0')
  const expression = ref('')

  function inputDigit(digit) {
    if (currentValue.value === '0') {
      currentValue.value = digit
    } else {
      currentValue.value += digit
    }
  }

  return {
    currentValue,
    expression,
    inputDigit
  }
}
