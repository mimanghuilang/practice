## css盒模型
* content-box: width,height 只包含content
* border-box: width,height 包含padding 和 border

## CSS specificity (权重)
* id选择器
* class、attribute 与 pseudo-classes 选择器
* 标签选择器和伪元素选择器
其中通配符选择器 *，组合选择器 + ~ >，否定伪类选择器 :not() 对优先级无影响


## 水平垂直居中
* absolute/translate
* flex布局
* gird布局

## 左侧固定，右侧自适应
<!-- flex:
左侧: flex-basis: 200px
右侧: flex-grow: 1; flex-shrink: 0;
grid
父容器: grid-template-columns: 200px 1fr;
.container
  .left
  .main
.container {
  display: grid;
  grid-template-columns: 300px 1fr;
} -->
