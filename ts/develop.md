# TypeScript开发笔记

## Nodemon监听ts文件变化

`nodemon --watch ./**/*.ts --ext ts --exec ts-node src/index.ts`

`nodemon -x node --loader ts-node/esm ./src/index.ts`

或全局安装ts-node,现在nodemon会自动运行ts文件

`npm i -g ts-node`

`nodeemon index.ts`

------

## PM2启动ts项目

`pm2 install typescript`

`--watch` 就是监听文件变化嘛,然后我就不需要手动restart了

`pm2 start index.ts --watch`
