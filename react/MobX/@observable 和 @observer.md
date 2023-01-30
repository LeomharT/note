# @observable 和 @observer
在使用`@observable`这个装饰器之前必须在类前面(如果用的是类组件的话)添加上`@observer`这个装饰器，表示这个类是一个观察者


----------


`@obaservable`
装饰器的作用是告诉mobx在这个变量发生改变时去更新UI，也就是在这个变量的值发送改变时，mobx会去执行一遍render函数然后刷新UI显示最新的数据

