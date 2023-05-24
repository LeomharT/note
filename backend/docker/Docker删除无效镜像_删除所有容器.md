# Docker删除无效镜像 删除所有容器

## 1. 列出所有的容器 ID

`$ docker ps -aq`

## 2. 停止所有的容器

`$ docker stop $(docker ps -aq)`

## 3. 删除所有的容器

`$ docker rm $(docker ps -aq)`

## 4. 删除所有无效镜像

docker rmi `docker images | grep "<none>" | awk '{print $3}'`
