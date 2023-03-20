# Git-迁移仓库修改提交作者

迁移仓库时,提交记录的绿点没点上,原因是提交记录的用户名或者邮箱和github账号不匹配,需要修改提交记录作者直接使用 --reset-author会修改提交为当前全局用户,但是无法保留原始提交时间,就是无法点亮绿点

`$ git config --global user.name "LeomharT"`

`$ git config --global user.email "leo.liao.lzy@gmail.com"`

可以只修改作者,保留提交记录,点亮绿点😏

-i后面接上第一次提交,那么第一次提交后面所有的提交都会修改

`$ git rebase -i 9fcc89330 -x "git commit --amend --author='LeomharT <leo.liao.lzy@gmail.com>' -CHEAD"`

☝如果使用提交记录hash的话是修改指定提交记录后面的所有提交,但是第一次提交不变

>`-i --root` 即可修改所有提交
