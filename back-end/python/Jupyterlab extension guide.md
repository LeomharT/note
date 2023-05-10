# Jupyterlab extension guide

## Frontend extension

前端插件开发

[官方文档](https://jupyterlab.readthedocs.io/en/stable/extension/extension_tutorial.html)

``` bash
conda create -n jp-ext

conda install jupyterlab

# 根据文档配置插件
conda install cookiecutter

# 确保版本一致
pip install -e .

# jlpm如果没有修改lib下的index.js那么查看tsconfig.json的include
jlpm build 

```

## Server extension

服务端插件开发

前端和服务端插件可以一起开发

在前端插件的基础上添加handler.py
