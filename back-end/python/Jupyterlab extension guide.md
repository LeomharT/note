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

在与项目同名的为文件夹下添加__init__.py

```Python
import json
from pathlib import Path

from notebook.utils import url_path_join

from ._version import __version__
from .handlers import NbConvertHandler, TaskHandler

HERE = Path(__file__).parent.resolve()


with (HERE / "labextension" / "package.json").open() as fid:
    data = json.load(fid)


def _load_jupyter_server_extension(server_app):
    """
    Called when the extension is loaded.
    Args:
        nb_server_app (NotebookWebApplication): handle to the Notebook webserver instance.
    """
    web_app = server_app.web_app
    # Prepend the base_url so that it works in a jupyterhub setting
    base_url = web_app.settings['base_url']
    handlers = [
        (url_path_join(base_url, "jupyterlab_offline_task", 'notebook_conver'),  NbConvertHandler),
        (url_path_join(base_url, "jupyterlab_offline_task", 'notebook_task'),  TaskHandler),
    ]
    web_app.add_handlers('.*$', handlers)


# For backward compatibility with notebook server - useful for Binder/JupyterHub
load_jupyter_server_extension = _load_jupyter_server_extension


def _jupyter_labextension_paths():
    return [{
        "src": "labextension",
        "dest": "jupyterlab_offline_task"
    }]

def _jupyter_server_extension_paths():
    return [{
        "module": "jupyterlab_offline_task"
    }]

```

在前端插件的基础上添加handler.py

使用`jupyter server extension enalbe 插件名`启动插件

## 打包
>
> 首先注意安装jupyter_packaing

`python3 setup.py bdist_wheel`
