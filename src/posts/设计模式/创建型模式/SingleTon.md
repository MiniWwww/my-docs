---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-05-05
category:
  - 设计模式
tag:
  - 红
  - 圆
star: true
sticky: true
---
# 创建型模式-单例模式
## 单例模式是什么（what）
> 单例模式是一种设计模式，保证一个类只有一个实例，提供一个全局访问点
> 通过单例模式，我们可以控制对象的创建过程，避免重复实例化相同的对象，节省系统资源（why）

## 为什么要用单例模式（why）
>通过单例模式，我们可以控制对象创建的过程，避免重复实例化相同的对象，节省系统的资源
> 

## 怎么用单例模式（how）
> 单例模式的角色和组成是什么？
>1. 私有构造函数
>2. 私有静态成员变量
>3. 共有静态提供实例的方法

> 创建单例模式有两种方式
> 1. 饿汉式：what：在类加载时就进行创建了实例；why：简单直接，不存在线程安全问题；but：浪费内存资源
> 2. 懒汉式：what：在需要时才创建实例，延迟加载，why：节省资源；but：存在线程安全的问题

   

## 单例模式实例代码
### 静态内部类版本-饿汉式
``` java
public class  singleTon{
//    私有的构造方法
    private  singleTon(){

    };

//    私有的静态内部类
    private  class singleTonHandler{
    //注意这里写new
        private static singleTon instance=new singleTon();
}

//全局访问点
    public singleTon getInstance(){
    //不是直接写instance
        return  singleTonHandler.instance;
    }
//    防止反序列化破解单例模式
//注意这里的返回值是Object，
//注意这里是private
    private  Object readResolve(){
        return  singleTonHandler.instance;
    }
}
``` 

>为什么序列化和反序列化会破坏单例模式（why）
> 因为一个单例类被序列化之后，再反序列化，会在创建一个对象，就破坏了单例的初衷
> 1. **因为反序列化会绕过类的构造函数，直接从序列化数据中恢复对象**
> 
> 如何解决（how）
> 2. 在单例类中实现readResolve（）方法，当进行反序列化时，，会调用这个方法，直接返回已经存在的单例，而不是创建新对象

>双检锁版本：
 ``` java
 class singleTon{
//    私有的构造方法
    private  singleTon(){
//        防止反射破解单例模式
        if(instance!=null){
            throw new RuntimeException();
        }

    };
//    静态私有成员变量
    private  static  volatile singleTon instance;

//    全局访问点
    public  static  singleTon getInstance(){
        if(instance==null){
            synchronized (singleTon.class){
                if(instance==null){
                    return instance=new singleTon();
                }
            }
        }
        return instance;
    }

}
``` 
- **反射为什么会破坏单例模式**？（why)
  - 因为单例模式的核心在于私有的构造函数，外部无法访问到，但是反射可以绕开这一限制，从而成功初始化对象

- 那个防止反射的代码是怎么起作用的？（how）
  - 如果通过反射创建了实例，那么instance就不为空，直接抛出异常，不往下执行

## 什么时候用单例模式（when）
    当对象的状态不可变的时候，可以尝试使用









