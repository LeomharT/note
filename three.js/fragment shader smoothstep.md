# Fragment shader smoothstep.md

```glsl
/**
 * edge0, edge1用于标定下界和上界, 大于上界值时返回1, 小与下界值时返回0
 * x表示具体需要插值的输入值, x在边界内时返回一个平滑的插值
 * x一般会使用到distance计算, 而不是一个固定值
 * /
float smoothstep(float edge0, float edge1, float x);

float distanceToCenter = distance(uv, center);

float circleRadius = 0.1;

// 限定了范围
if(distanceToCenter < circleRadius) {
    // do something
}
```
