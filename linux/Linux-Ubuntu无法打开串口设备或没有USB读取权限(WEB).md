# Linux-Ubuntu无法打开串口设备或没有USB读取权限(WEB)

1. 查看权限
`ls -l /dev/ttyUSB0`
2. 查看所属组
`groups`
3. 添加用户到所属组
`$ sudo adduser username dialout`
4. 登出用户
