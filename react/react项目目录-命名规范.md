# React项目目录-命名规范

``` Plain Text
|—— src
    |—— app        -> 主程序
    |—— assets     -> 资源文件,例如css,图片等;不过像一些没办法被动态打包的放到public
    |—— components -> 组件文件夹
    |—— context    -> React.createContext导出的上下文文件夹.尽量一个context一个文件
    |—— data       -> JSON文件和全局常量的存放文件夹;例如Api地址
    |—— hooks      -> costom hooks文件夹没什么好说的
    |—— page       -> 页面文件夹,路由->页面->组件
    |—— routes     -> 前端路由文件夹
    |—— utils      -> 工具类文件夹
    |—— service    -> api接口和http请求都在这里发出
    |—— styles     -> 样式文件对象;非css样式例如theme
    |—— stores     -> mobx仓库
    |—— redux      -> redux仓库
    |—— lib        -> 第三方库离线如果不想用node_modules
```


命名规范
1. 类名大驼峰
2. 类属性使用小驼峰
3. 内部变量全部小写使用下划线分割
4. 内部常量全部小写使用下划线分割->外部全局常量全部大写加下划线分割
5. 私有属性在前面加下划线
6. 函数命使用大驼峰