---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-05-05
category:
  - Java基础
tag:
  - 红
  - 圆
star: true
sticky: true
---
# 1.Java基础梳理
### 目录
1. Java基础概念：
    - Java的特点是什么？面向对象编程和跨平台性是如何体现的？
    - 什么是JDK、JRE和JVM？它们之间有什么关系？
    - Java的基本数据类型有哪些？它们的特点和区别是什么？

2. Java语法和语言特性：
    - Java中的访问修饰符有哪些？它们分别有什么作用？
    - 什么是包（package）？如何声明和使用包？
    - Java中的异常处理机制是什么？try-catch-finally块如何使用？
    - 什么是多线程？如何创建和管理线程？
    - Java中的面向对象编程概念，如类与对象、继承、多态和封装等。

3. Java核心类库：
    - Java中常用的集合类有哪些？它们之间的区别和适用场景是什么？
    - 字符串处理在Java中如何进行？String类的常用方法有哪些？
    - 如何进行文件操作？Java中的输入输出流有哪些？

4. Java开发工具和环境：
    - 常用的Java集成开发环境（IDE）有哪些？如何使用它们进行Java开发？
    - 如何编译和运行Java程序？命令行和IDE两种方式有什么区别？

5. Java程序设计实践：
    - 如何设计和实现一个简单的Java应用程序？例如，一个控制台输入输出的小程序或者一个简单的GUI程序。
    - 如何进行调试和测试Java程序？常用的调试技巧有哪些？
# Java基础知识点梳理
你需要掌握并能回答以下问题：

1. Java基础概念：
    - Java的特点是什么？面向对象编程和跨平台性是如何体现的？
   >（Java语言和c++的区别）
   > 1. Java语言的特性在于首先在于平台无关性，由于JVM的存在，java代码可以在任何支持jvm的平台上云霄，无需修改；
    c++在不同的操作系统和硬件框架上需要重新编译，所以移植性较差
   > 2. 第二个，在内存管理里方面，java有自动垃圾回收机制，c++则需要手动分配和释放内存
   > 3. 第三个，在性能方面，java由于jvm的存在，jvm要将字节码转换为机器代码执行，所以java的执行速度比c++要稍慢
        c++直接编译成机器代码，因此更高效
   > 4. 第4个，在语法方面，java和c++虽然都支持面向对象，c++支持操作符重载和方法重在，而java不支持方法重载（why:增加了复杂性，与java最初的设计思想不符）
   >    c++支持多继承，java支持单继承，也就是一个类只能继承一个父类，但是jav可以实现多个接口
   >    但是java的语法更简洁，并且不使用指针和内存管理，c++则支持指针和内存管理，
### 面向对象的三大特性，请说一下：
   1. 封装：将输出和操作数据的方法放在同一个对象内部里，隐藏对象的内部状态和细节
   2. 继承：使用`extends`关键字，继承是在已存在类的基础上创建新类的机制，实现父类的代码复用
   3. 多态：多态允许同一个方法在不同的对象上有不同的行为，通过方法重写（覆盖）和方法重载来实现（how）
      1. 可能会提问到重写和重载的区别(what)：
         >      1.重载发生在同一个类中，根据不同的参数做出不同的逻辑处理，重载的特点是方法名称相同，但参数必须不同
         >      2.重写发生在子类中，来重新定义父类的的某个方法，重写的特点是方法名称和参数列表必须相同，返回值类型可以比父类的小（两小一大）
         >   BUT:
         >   1.父类方法被private\static\final修饰，那么就不能被重写，但是被static修饰的方法可以被再次声明
         >   2.构造方法无法再被重写（但可以被重载）
         >    3.返回值类型是基本类型和void那么返回值类型就不可被修改
   （在自我介绍中要不要提到三大特性让它提问？）
   （说到方法重载或者重写之后该如何把话题引回来？）

    ### Java基础概念


### 2. 什么是JDK、JRE和JVM？它们之间有什么关系？

- **JDK (Java Development Kit)**: Java开发工具包，包含JRE以及开发者使用的工具，如编译器（javac）、调试器（jdb）等。开发Java程序时需要安装JDK。

- **JRE (Java Runtime Environment)**: Java运行时环境，包含JVM以及Java核心类库和支持文件，用于运行Java程序。用户只需安装JRE来运行已编译的Java程序。

- **JVM (Java Virtual Machine)**: Java虚拟机，负责执行Java字节码，提供内存管理、垃圾回收和安全机制。JVM是Java实现跨平台性的关键。

##### 它们的关系

- JVM是JRE的一部分，负责执行Java字节码。
- JRE包含JVM以及Java核心类库和支持文件。
- JDK包含JRE以及开发工具，是开发Java应用程序所需的完整工具包。

#### 3. Java的基本数据类型有哪些？它们的特点和区别是什么？

Java有八种基本数据类型，分为四类：整数型、浮点型、字符型和布尔型。

- **整数型**:
   - `byte`: 8位，范围为-128到127。
   - `short`: 16位，范围为-32,768到32,767。
   - `int`: 32位，范围为-2^31到2^31-1。
   - `long`: 64位，范围为-2^63到2^63-1。

- **浮点型**:
   - `float`: 32位，单精度，适合节省内存的浮点运算。
   - `double`: 64位，双精度，适合更高精度的浮点运算。

- **字符型**:
   - `char`: 16位，表示单个字符，范围为0到65,535，支持Unicode字符集。

- **布尔型**:
   - `boolean`: 只有两个值：`true`和`false`，用于逻辑判断。

##### 特点和区别

- 整数型数据类型用于表示没有小数部分的数值，不同的数据类型根据其存储范围选择使用。
- 浮点型数据类型用于表示有小数部分的数值，根据需要的精度选择使用。
- 字符型用于表示单个字符或Unicode字符。
- 布尔型用于表示逻辑值，用于条件判断和控制流。



### 2.Java语法和语言特性

#### 1. Java中的访问修饰符有哪些？它们分别有什么作用？

Java提供了四种主要的访问修饰符，用于控制类、方法和变量的访问权限：

- `public`: 任何类都可以访问。
- `protected`: 同一个包内的类和所有子类可以访问。
- `default` (无修饰符): 只有同一个包内的类可以访问。
- `private`: 只有同一个类内可以访问。

#### 2. 什么是包（package）？如何声明和使用包？

包（package）是用于组织类和接口的命名空间，避免类名冲突，便于管理大型项目。

声明包：
```java
package com.example.myapp;
```

使用包中的类：
```java
import com.example.myapp.MyClass;
```

#### 3. Java中的异常处理机制是什么？try-catch-finally块如何使用？

Java使用异常处理机制来处理运行时错误。主要通过`try-catch-finally`块来处理异常：

```java
try {
    // 可能产生异常的代码
} catch (ExceptionType1 e1) {
    // 处理异常
} catch (ExceptionType2 e2) {
    // 处理异常
} finally {
    // 必须执行的代码（无论是否发生异常）
}
```

#### 4. 什么是多线程？如何创建和管理线程？

多线程是指在一个程序中同时运行多个线程，以实现并发操作。创建线程的主要方法有两种：

- 继承`Thread`类：
```java
class MyThread extends Thread {
    public void run() {
        // 线程执行的代码
    }
}
MyThread t = new MyThread();
t.start();
```

- 实现`Runnable`接口（创建一个任务丢给线程）：
```java
class MyRunnable implements Runnable {
    public void run() {
        // 线程执行的代码
    }
}
Thread t = new Thread(new MyRunnable());
t.start();
```
- 实现`callable`接口（创建一个任务丢给线程）：
#### 5. Java中的面向对象编程概念

- **类与对象**: 类是对象的蓝图，对象是类的实例。
- **继承**: 使用`extends`关键字，子类继承父类的属性和方法。
- **多态**: 同一方法在不同对象中的不同实现。
- **封装**: 通过访问修饰符隐藏对象的内部状态和实现细节。

### 3.Java核心类库

#### 1. Java中常用的集合类有哪些？它们之间的区别和适用场景是什么？

- `List`接口：有序集合，允许重复元素。常用实现类有`ArrayList`、`LinkedList`。
- `Set`接口：无序集合，不允许重复元素。常用实现类有`HashSet`、`TreeSet`。
- `Map`接口：键值对集合，不允许键重复。常用实现类有`HashMap`、`TreeMap`。

#### 2. 字符串处理在Java中如何进行？String类的常用方法有哪些？

`String`类是不可变的字符串。常用方法包括：

- `length()`: 返回字符串长度。
- `charAt(int index)`: 返回指定索引处的字符。
- `substring(int beginIndex, int endIndex)`: 返回子字符串。
- `indexOf(String str)`: 返回子字符串的索引。
- `toUpperCase()`: 转换为大写。
- `toLowerCase()`: 转换为小写。

#### 3. 如何进行文件操作？Java中的输入输出流有哪些？

Java提供了多种方式进行文件操作，主要通过输入输出流：

- `FileInputStream`/`FileOutputStream`: 处理二进制文件。
- `FileReader`/`FileWriter`: 处理字符文件。
- `BufferedReader`/`BufferedWriter`: 提供缓冲功能，提高读写效率。

### 4.Java开发工具和环境

#### 1. 常用的Java集成开发环境（IDE）有哪些？如何使用它们进行Java开发？

常用的Java IDE有：

- `Eclipse`: 开源IDE，功能强大，插件丰富。
- `IntelliJ IDEA`: 商业IDE，支持多种语言，智能提示和重构功能强大。
- `NetBeans`: 开源IDE，集成度高，适合快速开发。

#### 2. 如何编译和运行Java程序？命令行和IDE两种方式有什么区别？

- 命令行方式：
```sh
javac MyClass.java    // 编译Java文件
java MyClass          // 运行编译后的字节码文件
```

- IDE方式：在IDE中创建项目，编写代码，点击“运行”按钮即可编译并运行程序。

### 5.Java程序设计实践

#### 1. 如何设计和实现一个简单的Java应用程序？

示例：一个控制台输入输出的小程序
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入您的名字：");
        String name = scanner.nextLine();
        System.out.println("您好，" + name + "!");
    }
}
```

#### 2. 如何进行调试和测试Java程序？常用的调试技巧有哪些？

- 使用IDE的调试功能，设置断点，逐行执行代码，查看变量值。
- 使用日志记录（如`java.util.logging`或`log4j`）记录程序运行信息。
- 编写单元测试（如使用`JUnit`），自动化测试代码功能。

通过上述内容，您可以对Java的基础知识、核心类库、开发工具和实践有一个全面的了解。


