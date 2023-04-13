# vscode虚拟环境下找不到Pythone包

Vscode默认是寻找全局的运行环境，当使用了python的虚拟环境后会找不到包，因为默认是去全局找的

1. 打开命令面板 F1 | View => Command Palette
2. 搜索`Python:select Interpreter`
3. 选择venv下的python即可
