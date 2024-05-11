# four_corner_borders

使用linear-gradient实现

```css
.border_style{
  /* 每个角X,Y各需要一个 */
  background: linear-gradient(#33cdfa, #33cdfa) left top,
  linear-gradient(#33cdfa, #33cdfa) left top,
  linear-gradient(#33cdfa, #33cdfa) right top,
  linear-gradient(#33cdfa, #33cdfa) right top,
  linear-gradient(#33cdfa, #33cdfa) left bottom,
  linear-gradient(#33cdfa, #33cdfa) left bottom,
  linear-gradient(#33cdfa, #33cdfa) right bottom,
  linear-gradient(#33cdfa, #33cdfa) right bottom;
  background-repeat: no-repeat;
  border: 1px solid #33cdfa;
  background-size: 0.2vw 1.5vw, 1.5vw 0.2vw;
}
```
