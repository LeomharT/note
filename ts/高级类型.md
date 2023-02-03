# 高级类型

## Pick

摘取已存在接口的部分字段

``` TS
interface Test
{
  a: string;
  b: string;
  c: string;
  d: string;
}
type Test2 = Pick<Test, 'a' | 'b'>;

//那么Test2其实就是interface Test2
{
   a:string;
   b:string;
}

//包括可以Pick联合类型和交叉类型
interface Test3
{
    f?: number;
}
type Test2 = Pick<Test & Test3, 'a' | 'b' | 'f'>;
```

------

## Omit

排除已存在接口的部分字段

``` TS
type Test2 = Omit<Test & Test3, 'a' | 'b' | 'f'>;
//等于排除掉 a b f 这三个字段

//此时就等于只剩下c d
interface Test2 
{
    c:string;
    d:string;
}
```

------

## Record

联合字符串为Key,第二参数为类型

``` TS
type PetsGroup = 'dog' | 'cat' | 'fish';

interface IPetInfo {
    name:string,
    age:number,
}

type IPets = Record<PetsGroup, IPetInfo>;

const animalsInfo:IPets = {
    dog:{
        name:'dogName',
        age:2
    },
    cat:{
        name:'catName',
        age:3
    },
    fish:{
        name:'fishName',
        age:5
    }
}
```

------

## keyof

- keyof其实可以看做声明了一个联合类型或者枚举类,枚举项目就是oldType的所有键值.

- keyof是ts特有的关键字,只能用于类型上不能直接获取对象的keys.

``` TS
type NewType = keyof OldType; 
```

------

## 约束类型

约束类型即是确保值类型在指定范围内,这里列出部分方法

### 1. 使用联合类型

``` TS
//保证值只能在列举出的值范围内
let name：'lzy' | 'yzl' | ... = 'lzy'; 
```

### 2. 使用枚举类

``` TS
enum Name
{
  lzy=1,
  yzl=2,
}
//-> 通过枚举类.键名赋值
let name:Name = Name.lzy;    
```

### 3. 使用const断言,表示数组元素不可修改(Mantine)

```TS
//使用const声明数组是可以对其修改,删除的，使用 as const 可以将其设置为约束类型
const arr = ['l', 'z', 'y'] as const;

type Name = arr[number];

// as const 确保了数值的不可修改性,继而可以推断类型
let name:Name = 'l'; 
```

### 4. 复杂的类型定义(Blueprint的Intent)

```TS
// 这种写法等于声明了一个指定键值的对象所以可以推导为约束类型
declare const Intent: {  
    NONE: "none",
    PRIMARY: "primary",
    SUCCESS: "success",
    WARNING: "warning",
    DANGER: "danger",
};

export const Intent = {
  NONE: 'none' as 'none',
  PRIMARY: 'primary' as 'primary',
  SUCCESS: 'success' as 'success',
  WARNING: 'warning' as 'warning',
  DANGER: 'danger' as 'danger',
}

type Intent = typeof Intent[keyof typeof Intent];

let i: Intent = 'danger';
let n: Intent = Intent.DANGER;
```
