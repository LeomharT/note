# Threejs UV mapping

## Texture not fit the uv

When using `new MeshBasicMaterial({map: texture})`, UV map is not fit the mesh, change the `texture.flipY = false`.

> This problem maybe caused by blender export GLTF module Y up

## Flip texture inside

```js
mesh.scale(1,1,-1)
```
