# 根据枚举的值找到枚举的key

ts中enum终究会被编译成一个对象, 所以用Object.keys可以遍历

``` ts
const FindKey = (value: LANGUAGE_REFER) =>
{
    return (
        Object.keys(LANGUAGE_REFER).find((key: string) =>
        {
            return (
                //@ts-ignore
                LANGUAGE_REFER[key] === value
            );
        })
    );
};
```
