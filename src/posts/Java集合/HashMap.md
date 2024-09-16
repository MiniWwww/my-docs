---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-05-09
category:
  - Java集合
tag:
  - 红
  - 圆
star: true
sticky: true
---



# HashMap
![img.png](img.png)
## HashMap的put方法的具体流程

> 1. 判断键值对**数组table是否为空或为null**，否则执行**resize()进行扩容（初始化）**
>
> 2. 根据键值key的hash值计算得到数组索引i
>
> 3. 判断table[i]==null，条件成立，**直接新建节点添加**
>
> 4. 如果table[i]==null ,不成立
     >
     >    4.1 判断table[i]（当前位置）的key一样，**如果相同直接覆盖value**
     >
     >    4.2 **如果不同**：判断table[i] （当前这个桶存储了一个红黑树的头结点）是否为treeNode，即table[i] 是否是红黑树，**如果是红黑树，则直接在树中插入键值对**
     >
     >    4.3 **如果不是红黑树，那就是链表，遍历table[i]记录的链表，准备在链表的尾部插入数据**，然后判断链表长度是否大于8，大于8的话把链表转换为红黑树，遍历过程中若发现key已经存在直接覆盖value
>
> 5. 插入成功后，判断实际存在的键值对数量size是否超多了**最大容量threshold（数组长度*0.75）**，如果超过，进行扩容。

![img_1.png](img_1.png)