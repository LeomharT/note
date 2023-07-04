# Threejs Camera

## Camera lookAt has no effect. Always look at (0,0,0)
If you have any controler(`OrbiControls`,`TrackballControls`...), set `controler.target.copy(new Vector3())` when you change `camera.lookAt()`.