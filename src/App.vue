<script setup>
</script>

<template>
  <div class="calculator">
    <!-- 显示屏占位 -->
    <div class="display">
      <span class="display-text">0</span>
    </div>

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

.display {
  padding: 24px 20px 16px;
  min-height: 80px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.display-text {
  color: #ffffff;
  font-size: 40px;
  font-weight: 300;
  line-height: 1;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background-color: #1f1f1f;
  padding: 2px;
}
</style>
