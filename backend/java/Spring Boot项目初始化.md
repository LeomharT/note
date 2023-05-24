# Spring Boot项目初始化

1. 安装VSCode、Java、Maven

> JDK要装8以上的版本否则编译VScode编译时会报错
> 创建Spring项目是可以选择JDK8,但是系统环境装8以上

2. 安装下列VSCode插件
>
> - Extension Pack for Java
> - Maven for Java
> - Debugger for Java
> - Spring Initializr Java Support
>
3. 创建Spring Boot项目
>
> 1. F1 -> Spring Initializr:Create a Maven Project
> 2. 选择Spring Boot版本(推荐2.x)
> 3. 选择Java
> 4. 设置包名
> 5. 设置项目名
> 6. 选择打包方式 -> JAR
> 7. 选择JDK -> 1.8
> 8. 选择开发依赖包
>
>> Lombok,
>>
>>Spring Boot DevTools,
>>
>>Spring  Web,
>>
>>MyBatis Framework,
>>
>>MySQL Driver,
>>
>>Spring Configuration Processor
>>
>
4. 在src/main/java/com/包名/controller/MainController

``` JAVA
@Controller
public class MainController {

    @GetMapping("/Main")
    public String Main(Model model,int id){
        return "Hello World"
    }

}
```

5. F5启动调试
