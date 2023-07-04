# Threejs Camera

## Camera lookAt has no effect. Always look at (0,0,0)
If you have any controler(`OrbiControls`,`TrackballControls`...), set `controler.target.copy(new Vector3())` when you change `camera.lookAt()`.

## Camera set view port 
实现一个渲染器同时渲染两个相机视角
1. https://threejs.org/examples/?q=multiple#webgl_multiple_views
2. https://www.youtube.com/watch?v=_TtVdWAc9Sc
3. https://observablehq.com/@vicapow/threejs-example-of-multiple-camera-viewports

实现这个效果需要的主要Api

`renderer.setScissorTest(true);`

`renderer.setScissor();`

`renderer.setViewport();`

设置渲染器的主要视图端口渲染出两组不同的相机
可以不用将相机加入场景中
如果第二个相机添加到了第一个相机里camera.add(camera2)那么轨道控制器会更新两个相机的视角