# React useState calling twice

`React.StrictMode` will tigger second render to find out intentional bug. Can not call props function inside of useState. Do like this.

```ts
const [value, setValue] = useState<T[]>([]);

 const change = () => {
  const prev = value;

  const next = prev.length === dataSource.length ? [] : dataSource;

  setValue(next);

  props?.onChange?.call({}, next);
 };
```
