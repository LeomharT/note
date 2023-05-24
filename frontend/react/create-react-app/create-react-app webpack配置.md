# create-react-app webpack配置

![webpack](https://img.shields.io/badge/webpack-5-blue)
![cra](https://img.shields.io/badge/create--react--app-5-ff69b4)
![customize-cra](https://img.shields.io/badge/customize--cra-5-yellow)

## create-react-app的webpack.config.js路径

`node_modules/react-scripts/config/webpack.config.js`

修改上面这个文件等于直接修改cra配置的webpack(不推荐)

----------

## create-react-app使用customize-cra修改webpack配置

``` JavaScript
const { override, addDecoratorsLegacy, addWebpackModuleRule } = require('customize-cra');


module.exports = override(
    addDecoratorsLegacy(),
    //添加一条新规则即可
    addWebpackModuleRule({
        test: /\.worker\.js$/,
        use: { loader: "worker-loader" },
    })
);
```

----------

## create-react-app配置less

1. 安装less依赖
`npm i less`
`npm i less-loader`

2. 使用customize-cra修改webpack配置(config-overrides.js)

这里的addLessLoader如果导入的是customize-cra里面的话会报错,安装一个独立包

`npm i -D customize-cra-less-loader`

``` JavaScript
const { override } = require("customize-cra");

const addLessLoader = require("customize-cra-less-loader");

module.exports = override(
    addLessLoader({
        lessLoaderOptions: {
            lessOptions: {
                javascriptEnabled: true,
            }
        }
    })
);
```

----------

## create-react-app配置.obj或其他没有默认配置的文件

1. 安装url-loader,如果直接在文件里面应用会请求整个spa
`npm i -D url-loader`

2. 配置webpack(config-overrides.js)

``` JavaScript
module.exports = override(
    addWebpackModuleRule({
        test: /\.obj$/,
        use: { loader: "url-loader" }
    })
);
```

3. 此时重启项目可以读取到正确的obj文件,但是ts不认识它,根目录添加module.d.ts文件

``` TypeScript
declare module '*.obj' {
    const content: string;
    export = content;
}

//配置tsconfig.json,重启即可
{
  ...
  "include": [
     "src",
     "module.d.ts"
  ]
}
```

----------

## create-react-app 配置打包后资源请求路径publicPath publicURL

1. 配置 config-overrides.js

``` JavaScript
const { override } = require("customize-cra");
module.export={
  webpack:override(
    (config)=>{
      //打包后js css资源请求的位置 
      config.output.publicPath = 'https://manage.star-eva.evideo.com.cn/industrial_robot/';
      return config 
    }
  )
}
```

2. public_url public文件夹下资源请求路径修改 package.json

``` json
{
  ...
  "homepage": "/industrial-robot/",
}
```

对于一些无法打包或者固定的静态资源放进public文件夹打包之后出现在根目录

## create-react-app修改开发时端口号

1. 修改`package.json`npm的star命令

`"start":"set PORT=9000 && react-scripts start"`

如果使用customize-cra👆没用

2. 根目录添加.env文件

``` text
PORT=9000
```

## create-react-app不在浏览器控制台输出ESLint警告

``` JS
//cra更新之后默认ESlint不在浏览器里输出了,这里需要修改webpack的配置
//使用customize-cra
module.exports={
  webpack:override(
    ....
  ),
   devServer: overrideDevServer(config =>
  {
    // "none" | "error" | "warn" | "info" | "log" | "verbose"
    config.client.logging = 'verbose';
  }
}
```
