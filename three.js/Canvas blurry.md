# Canvas text blurry

`window.devicePixelRatio`属性表示屏幕的设备像素比, 通常物理屏幕`2px`用来渲染canvas画布的`1px`

> 举例来说, 一张`100 * 100`尺寸的图片用`canvas.drawImage()`渲染, 输出到屏幕上时这张图片会变为`200 * 200`, 相当于放大了2倍, 所以显示模糊, 文字模糊也是一样的原理

`canvas.width | height`是实际`canvas`尺寸, 而`canvas.style.width | height`是`canvas`元素的尺寸, 这也是导致模糊的原因

1. 设置canvas尺寸2倍于canvas.style

```javascript
/**
 * 这个方法会导致后续渲染到画布上的图像和文字会被缩小你乘以的系数
 */
const canvas = document.querySelector('#canvas');

canvas.width = canvas.clientWidth * 2;

canvas.height = canvas.clientHeight * 2;
```

2. 使用`window.devicePixelRatio`调整画布尺寸

```javascript
const canvas = document.querySelector('#canvas');

const { width, height } = canvas.getBoundingClientRect();

const DPR = window.devicePixelRatio;

canvas.width = width * DPR;

canvas.height = height * DPR;

const ctx = canvas.getContext('2d');

/**
 * {@link https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/scale | MDN}
 * 
 * 这一步最关键, 意思是使用屏幕的1px映射canvas的1px
 */
ctx.scale(DPR, DPR);
```
