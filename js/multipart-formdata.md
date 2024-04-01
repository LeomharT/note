# Multipart-formdata

前端需要上传文件时通常无法使用`JSON`格式数据(`JSON`是键值对格式的数据无法保存二进制数据), 这时需要使用`multipart/form-data`来编码数据, 对于前端来说需要使用`new FormData()`格式提交结果

[multipart/form-data的详细定义](https://www.ietf.org/rfc/rfc1867.txt)

form-data格式的数据使用一个`boundary`字符串来分隔字段, 每部分都由`--boundary`开始, `--boundary--`结束

```txt
------WebKitFormBoundaryft4mf2nOpq9pTB4B
Content-Disposition: form-data; name="Order_Number"

GD439708516
------WebKitFormBoundaryft4mf2nOpq9pTB4B
Content-Disposition: form-data; name="Deal_Note"

4657
------WebKitFormBoundaryft4mf2nOpq9pTB4B
Content-Disposition: form-data; name="files"

[object File]
------WebKitFormBoundaryft4mf2nOpq9pTB4B--
```

其中`boundary`是由浏览器解析form-data自动生成的, 如果在`Content-Type`中自定义的话, 那么服务器端接收到的数据和`Content-Type`中指定的分隔符数据不一致会报错
> Did not find boundary character 102 at index 26

解决方法是去掉`Content-Type`, 通过浏览器默认设置即可
