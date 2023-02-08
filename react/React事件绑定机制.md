# React事件绑定机制.md

在获取canvas鼠标事件时没有找到`e.offsetX`,这个属性绑定到了`e.nativeEvent`所以学习一下`React`的DOM事件绑定机制.

React基于浏览器的事件机制自身实现了一套事件机制，包括:

1. 事件注册
2. 事件的合成
3. 事件冒泡
4. 事件派发等

## 合成事件 SyntheticEvent

>`React`基于浏览器的事件机制自身实现了一套事件机制，包括事件注册、事件的合成、事件冒泡、事件派发等.在`React`中这套事件机制被称之为合成事件

合成事件是 React模拟原生 DOM事件所有能力的一个事件对象，即浏览器原生事件的跨浏览器包装器

根据W3C规范来定义合成事件，兼容所有浏览器，拥有与浏览器原生事件相同的接口，例如：

``` JSX
const button = <button onClick={handleClick}>按钮</button> 
```

如果想要获取原生DOM事件可以通过e.nativeEvent

``` JSX
const handleClick = (e) => console.log(e.nativeEvent);; 
const button = <button onClick={handleClick}>按钮</button> 
```
