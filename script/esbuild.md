# Esbuild配置文件

## exbuild.config.js

`$ npm i -D esbuild@4 esbuild-plugin-eslint esbuild-sass-plugin`

``` javascript
import { execSync } from 'child_process';
import esbuild from 'esbuild';
import eslint from 'esbuild-plugin-eslint';
import { sassPlugin } from 'esbuild-sass-plugin';
import packageJson from './package.json' assert { type: "json" };


console.time('\u001b[1;35mTotal time\u001b[1;36m');

/** 
 * entryPoints => 入口文件, 可以选择多个
 * outdir      => 打包后的文件输出目录
 * bundle      => 是否选择打包文件里的import
 * minify      => 是否压缩代码
 * watch       => 观察文件变化
 * platform    => js运行环境
 * assetNames  => 静态资源文件名
 * loader      => 加载器
 * plugins     => 插件
 */
await esbuild.build({
  entryPoints: ['./src/index.tsx'],
  outdir: 'dist',
  bundle: true,
  minify: false,
  watch: true,
  platform: 'node', // browser | node | neutral  选择打包平台
  assetNames: 'assets/[name]-[hash]',
  sourcemap: true,
  loader: {
    '.png': 'file',
    '.svg': 'file',
    '.jpg': 'file'
  },
  plugins: [
    sassPlugin(),
    eslint({
      useEslintrc: true,
    })
  ]
}).then(v =>
  {
    //For Linux
    console.log("\u001b[1;32mNo issues found!\u001b[0m");

    const pm2_list = execSync('pm2 list').toString('utf-8');

    if (!pm2_list.includes(packageJson.name))
    {
      console.log("\u001b[1;32mDeploying....\u001b[0m");

      execSync(`pm2 serve dist 3000 --name ${packageJson.name} --spa`);
    }

    console.log(`\u001b[1;32m
        App running at:
        - Local:   \u001b[7;35mhttp://localhost:3000/\u001b[0m
    \u001b[0m`
               );

  }).catch(e => console.error(e));

console.timeEnd('\u001b[1;35mTotal time\u001b[1;36m');

```

## babel.config.cjs

``` javascript
module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ],
        "@babel/preset-typescript"
    ]
};
```

## .eslintrc.cjs

``` javascript
module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "sourceType": "module"
    },
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        'plugin:react-hooks/recommended',
    ],
    rules: {
        "no-unused-vars": "off",                     //👉关闭eslint内置的,因为它不懂ts
        "@typescript-eslint/no-unused-vars": "warn"  //👉开启ts的no-unused-vars
    },
    plugins: [
        //加入这个👇不然找不到插件
        '@typescript-eslint'
    ]
}; 
```
