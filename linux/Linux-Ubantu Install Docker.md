# [Linux-Ubantu安装docker](https://docs.docker.com/engine/install/linux-postinstall/)

`$ sudo apt update`

`$ sudo apt install docker.io`

查看是否安装成功

`$ sudo docker info`

`$ sudo docker version`

如果有正常输出即代表安装成功

docker 需要使用到sudo命令，为了方便后续使用可以将用户添加到docker用户组

这个默认应该已经添加好了

`$ sudo groupadd docker`

`$ sudo usermod -aG docker $USER`

`$ newgrp docker`

跑一下这个输出 Hello from Docker! 代表成功，后面就不需要添加sudo了

`$ docker run hello-world`
