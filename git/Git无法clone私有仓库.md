# Git无法clone私有仓库

Git无法克隆私有仓库

代替

git clone <https://github.com/NAME/repo.git>

尝试

git clone <https://username:password@github.com/NAME/repo.git>

你也可以使用

git clone <https://username@github.com/NAME/repo.git>

并且git会提示输入密码

更新：GitHub现在不弃用密码验证改为Token.

1. 选择settings界面
2. 选择developer setting
3. 选择Personal access tokens
4. 选择操作仓库的选项
5. 生成token
6. 保存(无法二次看见这个token)
