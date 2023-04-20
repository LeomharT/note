# React路由懒加载组件

[链接1](https://juejin.cn/post/6844904191853494280)

- 描述:
在微前端多个项目融合成一个React应用后,使用esbuild打包会使得最终的bundle过大

- 解决方案:
使用路由懒加载的方式,动态`import`路由组件

对于React来说使用`React.lazy(()=>import('your component'));`来加载组件,使用前端路由机制动态加载对应的js文件

> 因为`import`的结果是一个`Promise`所以当组件在加载时(等待Promise执行)时需要一个组件`<Suspense>`用来捕捉状态,在pending过程中内容渲染为fallback,等到组件加载完成后重新渲染已经加载好的组件.

- 实例

```TSX
const Page1 = lazy(() => import("../page/Page1"));
const Page2 = lazy(() => import("../page/Page2"));
const Page3 = lazy(() => import("../page/Page3"));
const Page4 = lazy(() => import("../page/Page4"));

<BrowserRouter>
    <Suspense fallback={'loadgin'}>
        <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="card1" element={<Page1 />} />
            <Route path="card2" element={<Page2 />} />
            <Route path="card3" element={<Page3 />} />
            <Route path="card4" element={<Page4 />} />
        </Routes>
    </Suspense>
</BrowserRouter>
```

- esbuild.config.js
使用esbuild打包时依旧会生成`index.js`,`index.html`依旧加载`index.js`每次动态加载过浏览器会缓存切割后的代码

```JS
await esbuild.build({
    //...
    format: 'esm',
    splitting: true, //切割代码,目前只接受esm模块
})
```
