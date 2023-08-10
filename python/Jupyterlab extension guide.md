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

1. 使用setup.py
`python3 setup.py bdist_wheel`

``` Python
"""
jupyterlab_offline_task setup
"""
import json
import sys
from pathlib import Path

import setuptools

HERE = Path(__file__).parent.resolve()

# The name of the project
name = "jupyterlab_offline_task"

lab_path = (HERE / name.replace("-", "_") / "labextension")

# Representative files that should exist after a successful build
ensured_targets = [
    str(lab_path / "package.json"),
    str(lab_path / "static/style.js")
]

labext_name = "jupyterlab_offline_task"

data_files_spec = [
    ("share/jupyter/labextensions/%s" % labext_name, str(lab_path.relative_to(HERE)), "**"),
    ("share/jupyter/labextensions/%s" % labext_name, str("."), "install.json"),
]

long_description = (HERE / "README.md").read_text()

# Get the package info from package.json
pkg_json = json.loads((HERE / "package.json").read_bytes())

setup_args = dict(
    name=name,
    version=pkg_json["version"],
    url=pkg_json["homepage"],
    author=pkg_json["author"]["name"],
    author_email=pkg_json["author"]["email"],
    description=pkg_json["description"],
    license=pkg_json["license"],
    long_description=long_description,
    long_description_content_type="text/markdown",
    packages=setuptools.find_packages(),
    install_requires=[
        
    ],
    zip_safe=False,
    include_package_data=True,
    python_requires=">=3.6",
    platforms="Linux, Mac OS X, Windows",
    keywords=["Jupyter", "JupyterLab", "JupyterLab3"],
    classifiers=[
        "License :: OSI Approved :: BSD License",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Framework :: Jupyter",
    ],
)

try:
    from jupyter_packaging import get_data_files, npm_builder, wrap_installers
    post_develop = npm_builder(
        build_cmd="install:extension", source_dir="src", build_dir=lab_path
    )
    setup_args["cmdclass"] = wrap_installers(post_develop=post_develop, ensured_targets=ensured_targets)
    setup_args["data_files"] = get_data_files(data_files_spec)
except ImportError as e:
    import logging
    logging.basicConfig(format="%(levelname)s: %(message)s")
    logging.warning("Build tool `jupyter-packaging` is missing. Install it with pip or conda.")
    if not ("--name" in sys.argv or "--version" in sys.argv):
        raise e

if __name__ == "__main__":
    setuptools.setup(**setup_args)

```

2. 使用`pyproject.tom`

``` Shell
pip install build 

python -m build
```
