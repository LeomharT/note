# Fragment shader circle color

```glsl
// fragment.glsl

varying vec2 v_uv;

void main()
{
    vec2 uv = v_uv;

    // Center of uv
    vec2 center = vec2(0.5, 0.5);

    // Circle radius
    float radius = 0.5;

    /**
     * This return every vertex point distance to the center of uv.
     * Like uv variable, is not a value, is a series of vertex value.
     */
 
    float distanceToCenter = distance(uv, center);

    vec4 color = vec4(0.34,0.2,0.625,1.0);

    // Over radius color is transparent
    if(distanceToCenter > radius){
        color = vec4(0.0,0.0,0.0,0.0);
    }
 

    gl_FragColor = color;
}
```
