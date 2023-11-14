# satisfies 运算符

`satisfies` 运算符用来验证对象是否符合某个类型, 但又不改变这个对象的类型

```ts
type Person={
    name:string | name,
}

const p = { 
    name: 'LEO',
} satisfies Person
```

上面的示例中, `p`的实际类型是`{name: string}`, 如果使用`as`关键字, 相当于将`p`的类型修改为`{name: string | number}`, 使用`satisfies`即可以判断`p.name`是否在`Person`的类型约束之内, 又不改变`p`的实际类型.
