# React获取CssProperty

``` TS
const root = document.querySelector(':root') as HTMLHtmlElement;
const blue = getComputedStyle(root).getPropertyValue('--blue');
```
