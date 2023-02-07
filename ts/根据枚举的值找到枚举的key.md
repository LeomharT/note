# 根据枚举的值找到枚举的key

``` TS
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
