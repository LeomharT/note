# Threejs UV mapping

When using `new MeshBasicMaterial({map: texture})`, UV map is not fit the mesh, change the `texture.flipY = false`.

> This problem maybe caused by blender export GLTF module Y up
