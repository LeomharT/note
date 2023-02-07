# Request参数

## get参数

1. ~~querystring~~

``` JS
import querystring from 'querystring';

const params = querystring.parse(req.url.split("?")[1]);
```

2. URLSearchParams

``` JS
const params = new URLSearchParams(req.url.split('?')[1]);
const time_stamp = params.get('time_stamp');
```

## post参数

1. JSON
POST请求前端如果是JSON数据直接在req.body里面获取,记住前端加上content-type
2. FormData

``` JS
import multiparty from 'multiparty';

const formData = new multiparty.Form();
//fields是字符串数值类型之类的,文件的话就是file里面
formData.parse(req, (err, fields, file) =>{})
```
