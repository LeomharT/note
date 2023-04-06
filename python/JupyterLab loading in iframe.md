# JupyterLab loading in iframe

1. Create file `~/.jupyter/jupyter_notebook_config.py` wirte this content 👇

``` python
c.NotebookApp.tornado_settings = { 
    'headers': { 
        'Content-Security-Policy': "frame-ancestors http://localhost:8080/ 'self' " 
    }
}
```

then JupyterLab load from localhost:8080
