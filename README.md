# Calculator

一个基于 **Vue 3 + Vite** 构建的 Web 计算器应用，采用 Composition API 和 Composable 模式组织代码。支持四则运算、百分比、正负号切换等功能，界面采用深色主题设计。

## 功能特性

- **四则运算**：加法、减法、乘法、除法
- **连续运算**：支持链式计算（如 `3 + 5 × 2`）
- **重复运算**：连续按等号可复用上次的运算符和操作数
- **正负号切换**：一键切换当前数值的正负
- **百分比计算**：支持百分比转换
- **表达式显示**：顶部实时展示当前运算表达式
- **自适应字号**：显示屏根据数值长度自动调整字体大小
- **错误处理**：除以零或溢出时显示"错误"
- **浮点数精度控制**：自动处理浮点数精度问题

## 技术栈

| 类别     | 技术                |
| -------- | ------------------- |
| 前端框架 | Vue 3               |
| 构建工具 | Vite                |
| 语言     | JavaScript          |
| 样式方案 | 原生 CSS + Scoped   |

## 项目结构

```
calculator/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CalculatorButton.vue    # 计算器按钮组件
│   │   └── CalculatorDisplay.vue   # 显示屏组件
│   ├── composables/
│   │   └── useCalculator.js        # 核心计算逻辑
│   ├── App.vue                     # 根组件
│   ├── main.js                     # 应用入口
│   └── style.css                   # 全局样式
├── index.html
├── package.json
└── vite.config.js
```

## 安装与运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 使用说明

| 按钮  | 功能         |
| ----- | ------------ |
| `C`   | 清除所有输入 |
| `+-`  | 切换正负号   |
| `%`   | 百分比转换   |
| `/`   | 除法         |
| `x`   | 乘法         |
| `-`   | 减法         |
| `+`   | 加法         |
| `.`   | 小数点       |
| `=`   | 计算结果     |


