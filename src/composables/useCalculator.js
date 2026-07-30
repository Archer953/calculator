import { ref } from 'vue'

export function useCalculator() {
  const currentValue = ref('0')
  const expression = ref('')
  const firstOperand = ref(null)
  const pendingOperator = ref(null)
  const waitingForSecondOperand = ref(false)

  function inputDigit(digit) {
    if (waitingForSecondOperand.value) {
      currentValue.value = digit
      waitingForSecondOperand.value = false
    } else if (currentValue.value === '0') {
      currentValue.value = digit
    } else {
      currentValue.value += digit
    }
  }

  function clear() {
    currentValue.value = '0'
    expression.value = ''
    firstOperand.value = null
    pendingOperator.value = null
    waitingForSecondOperand.value = false
  }

  function setOperator(op) {
    const current = parseFloat(currentValue.value)

    if (firstOperand.value !== null && pendingOperator.value && !waitingForSecondOperand.value) {
      // 已有一个待执行的运算，先计算结果再继续
      const result = compute(firstOperand.value, pendingOperator.value, current)
      currentValue.value = formatResult(result)
      firstOperand.value = result
    } else {
      firstOperand.value = current
    }

    pendingOperator.value = op
    expression.value = `${formatDisplay(currentValue.value)} ${op}`
    waitingForSecondOperand.value = true
  }

  function calculate() {
    if (pendingOperator.value === null || waitingForSecondOperand.value) {
      return
    }

    const second = parseFloat(currentValue.value)
    const result = compute(firstOperand.value, pendingOperator.value, second)

    expression.value = `${formatDisplay(firstOperand.value)} ${pendingOperator.value} ${formatDisplay(second)} =`
    currentValue.value = formatResult(result)

    firstOperand.value = null
    pendingOperator.value = null
    waitingForSecondOperand.value = false
  }

  function compute(a, op, b) {
    switch (op) {
      case '+': return a + b
      case '−': return a - b
      case '×': return a * b
      case '÷': return b !== 0 ? a / b : NaN
      default: return b
    }
  }

  function formatDisplay(value) {
    // 去除多余的 .0 等显示
    const num = parseFloat(String(value))
    if (Number.isInteger(num)) {
      return String(num)
    }
    return String(value)
  }

  function toggleSign() {
    if (currentValue.value === '0') return
    if (currentValue.value.startsWith('-')) {
      currentValue.value = currentValue.value.slice(1)
    } else {
      currentValue.value = '-' + currentValue.value
    }
  }

  function percent() {
    const current = parseFloat(currentValue.value)

    if (firstOperand.value !== null && pendingOperator.value) {
      // 有挂起运算符：计算第一操作数的百分比
      const pct = firstOperand.value * current / 100
      currentValue.value = formatResult(pct)
    } else {
      // 无挂起运算符：直接除以 100
      currentValue.value = formatResult(current / 100)
    }
  }

  function formatResult(value) {
    if (isNaN(value) || !isFinite(value)) {
      return '错误'
    }
    // 限制小数位数，避免浮点数问题
    const rounded = Math.round(value * 1e10) / 1e10
    return String(rounded)
  }

  return {
    currentValue,
    expression,
    inputDigit,
    clear,
    setOperator,
    calculate,
    toggleSign,
    percent
  }
}
