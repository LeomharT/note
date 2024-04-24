# Abusolute offset

表格中单元格内的子元素需要跨越多个单元格时, 可以利用绝对定位的特性

```css
.parent
{
    position: relative;
}

.children
{
    position: absolute;
    /* 确保元素左偏移量在元素内部 */
    left: 0;
    /* 此时元素会超出父元素边界 */
    right: -200px;
}

```
