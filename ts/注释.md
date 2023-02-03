# Typescript注释

## @ts-check

引入js变量时报隐形含有any类型时可以使用，在js文件中定义变量类型，让vscode和ts解析

```JS
//@ts-check
/**
 * @type {any}
 */
let mavlink20;
```

## @ts-nocheck

> 不对指定js文件做类型检查,放在文件头部

## @ts-ignore

>忽视下一行的ts报错,抑制错误

## @ts-expect-error

>忽视下一行的ts报错,但是在修复ts错误之后这个注释本身会报错
