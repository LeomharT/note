# Linux-Ubuntu安装MySQL

`$ apt update`

`$ apt install mysql-server`

一般会自启动

`$ service mysql start`

`$ service mysql status`

初始没有密码

`$ mysql -u root -p`

`$ use mysql;`

执行这行后续才可以修改密码

`$ ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by '12345678';`

`$ exit;`

使用mysql自带程序设置密码 => 都yes

`$ mysql_secure_installation`

允许远程连接MySQL

`$ vim /etc/mysql/mysql.conf.d/mysqld.cnf`

修改bind-address

`bind-address = 127.0.0.1 => bind-address = 0.0.0.0`
