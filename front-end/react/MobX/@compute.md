# @compute

计算值可以用来从其他可观察对象中派生信息。 计算值采用惰性求值，会缓存其输出，并且只有当其依赖的可观察对象被改变时才会重新计算。 它们在不被任何值观察时会被暂时停用。
就是当需要根据被观察对象计算并返回新值的时候加上这个装饰器。

``` JavaScript
class OrderLine {
    @observable price = 0;
    @observable amount = 1;

    constructor(price) {
        this.price = price;
    }

    @computed get total() {
        return this.price * this.amount;
    }
}
```
