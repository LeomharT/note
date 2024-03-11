# hover

```css
@media (hover: hover) {
  /* when hover is supported */
  a:hover {
    color: white;
    background: black;
  }
}
@media (hover: none) {
  /* when hover is not supported */
  a:active {
    color: white;
    background: black;
  }
}
```
