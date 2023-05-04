# 403 Forbideen

nginx出现403错误大致上都是没有权限访问指定的服务器资源

解决方案:

1. 修改资源权限

2. 如果资源文件在`/root`文件夹下,修改`nginx.conf`

``` conf
user root;

events{
    ...
}

http{
    ...
}

```
