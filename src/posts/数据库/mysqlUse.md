---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-05-05
category:
  - 数据库
tag:
  - 红
  - 圆
star: true
sticky: true
---

# 2.常用sql语句
## SQL分类
- DDL（数据定义语言）
  - 定义数据库对象，create、Alter、Drop
- DML（数据操纵语言）
  - CRUD（增删改查）
- DCL（数据控制语言）
  - 可对数据访问权进行控制的指令
### DML语言（数据操作语言）主要功能增删改查（CRUD）
- 查:（how）
>
> Select
### 汇总
1. **SELECT**：从数据库中选择数据。
- 示例：`SELECT column1, column2 FROM table_name;`
- 解释：从"table_name"表中选择"column1"和"column2"列的数据。

2. **FROM**：指定要查询数据的表。
- 示例：`SELECT column1 FROM table_name;`
- 解释：从"table_name"表中选择"column1"列的数据。

3. **WHERE**：筛选符合特定条件的行。
- 示例：`SELECT column1 FROM table_name WHERE condition;`
- 解释：从"table_name"表中选择"column1"列的数据，其中满足特定条件的行。

4. **DISTINCT**：去除结果中的重复行。
- 示例：`SELECT DISTINCT column1 FROM table_name;`
- 解释：从"table_name"表中选择唯一的"column1"值。

5. **ORDER BY**：对结果进行排序。
- 示例：`SELECT column1 FROM table_name ORDER BY column1 ASC;`
- 解释：从"table_name"表中选择"column1"列的数据，并按升序对结果进行排序。

6. **GROUP BY**：根据一个或多个列对结果进行分组。
- 示例：`SELECT COUNT(*), column1 FROM table_name GROUP BY column1;`
- 解释：对"table_name"表中的数据按照"column1"列进行分组，并统计每个分组中的行数。

7. **HAVING**：对GROUP BY子句的结果进行过滤。
- 示例：`SELECT COUNT(*), column1 FROM table_name GROUP BY column1 HAVING COUNT(*) > 1;`
- 解释：对"table_name"表中的数据按照"column1"列进行分组，并只返回分组中行数大于1的分组结果。

8. **LIMIT**：限制返回的行数。
- 示例：`SELECT column1 FROM table_name LIMIT 10;`
- 解释：从"table_name"表中选择"column1"列的数据，最多返回10行。


### 辅助关键词：
  - Distinct：（what)去重，有可能返回多个相同的行，只要一行
  ```java
  SELECT DISTINCT
    vend_id FROM products;
  ```
  > 这个SQL查询语句的意思是从名为"products"的表中选择唯一的"vend_id"列。
  > 它告诉数据库系统只返回"products"表中不重复的"vend_id"值。
  > 这意味着如果"products"表中有多行具有相同的"vend_id"值，
  > 那么在结果集中只会显示一个该值，不会重复出现。
  明白了，我会列出一些在SQL查询中常见的关键字和语句，以及它们的解释和示例：
## 函数
在SQL中，有许多常用的函数可以用于对数据进行操作、计算和转换。

> tips：先记住聚合函数吧

1. **聚合函数**：
  - **COUNT()**：计算行数或非NULL值的数量。
  - **SUM()**：计算数值列的总和。
  - **AVG()**：计算数值列的平均值。
  - **MIN()**：找出数值列的最小值。
  - **MAX()**：找出数值列的最大值。

2. **字符串函数**：
  - **CONCAT()**：连接字符串。
  - **SUBSTRING()**：提取子字符串。
  - **UPPER()**：将字符串转换为大写。
  - **LOWER()**：将字符串转换为小写。
  - **LENGTH()**：返回字符串的长度。

3. **日期和时间函数**：
  - **NOW()**：返回当前日期和时间。
  - **DATE()**：从日期时间值中提取日期部分。
  - **TIME()**：从日期时间值中提取时间部分。
  - **DATEDIFF()**：计算两个日期之间的天数差。
  - **DATE_ADD()** / **DATE_SUB()**：对日期进行加减操作。

4. **逻辑函数**：
  - **IF()** / **CASE WHEN**：条件判断函数。
  - **COALESCE()**：返回参数列表中的第一个非NULL值。

5. **数学函数**：
  - **ROUND()**：四舍五入到指定的小数位数。
  - **ABS()**：返回绝对值。
  - **CEIL()** / **FLOOR()**：向上取整 / 向下取整。

6. **类型转换函数**：
  - **CAST()**：将一个类型转换为另一个类型。
  - **CONVERT()**：将一个类型转换为另一个类型。


## 子查询
1. what
> 子查询就是将一个查询的结果作为另一个SQL语句（主查询）的数据来源，或者判断条件
2. 为什么要用子查询（why)
  使用子查询是因为有几个优势
> - 为了简化更复杂的查询，对数据进行过滤和筛选
> - 为了可以进行数据比较，主查询可以利用子查询的结果进行进一步的条件判断

3. 如何使用子查询？（how）

3种常见用法：

1. **子查询作为表达式**：子查询可以在SELECT语句中作为一个单独的列或表达式使用。
  - 示例：
    ```sql
    SELECT column1, (SELECT MAX(column2) FROM table2) AS max_value FROM table1;
    ```
  - 解释：在表"table1"的每一行中，子查询`(SELECT MAX(column2) FROM table2)`会计算"table2"中"column2"列的最大值，并将该值作为新列"max_value"返回。

2. **子查询作为条件**：子查询可以在WHERE子句中用作条件，用于过滤主查询的结果。
  - 示例：
    ```sql
    SELECT column1 FROM table1 WHERE column2 = (SELECT MAX(column2) FROM table1);
    ```
  - 解释：此查询将返回"table1"中具有与"column2"列的最大值相等的行中的"column1"值。

3. **子查询作为表**：子查询可以在FROM子句中用作表，供主查询使用。
  - 示例：
    ```sql
    SELECT t1.column1, t2.column2
    FROM (SELECT * FROM table1 WHERE condition) AS t1
    JOIN table2 AS t2 ON t1.id = t2.id;
    ```
  - 解释：在此示例中，子查询`(SELECT * FROM table1 WHERE condition)`返回一个临时表，然后在主查询中将其命名为"t1"，与表"table2"进行连接操作。

## 连接
- 什么是连接？
  - 连接（join）是一种用于将两个或多个表中的数据组合在一起的操作。（先记住这一个）
  - 连接通常基于表之间的共同列（通常是主键和外键），并且它们允许您在查询中使用相关联的数据。
  - 连接表时需要在每个表中选择一个字段，并对这些字段的值进行比较，值相同的两条记录将合并为一条，连接表的本质就是将不同表的记录合并起来，形成一张新表。当然，这张新表只是**临时**的，它仅存在于本次查询期间。
- 为什么需要连接（why)?
  - 连接有以下这些优势
    - 数据整合，通过链接可以将多个表的数据整合起来
    - 数据分析和报告，通过数据整合可以生成所需要的分析与报告
- 如何使用连接？（how)
  > 
常见的连接类型包括：

1. 内连接（Inner Join）：返回两个表中共有的行，这些行满足连接条件。
2. 外连接（Outer Join）：包括左外连接（Left Outer Join）、右外连接（Right Outer Join）和全外连接（Full Outer Join），它们分别返回左表的所有行、右表的所有行或者两个表的所有行，以及匹配的行。
3. 自连接（Self Join）：将表与自身连接，常用于比较同一表中不同行的数据。
4. 交叉连接（Cross Join）：返回两个表的笛卡尔积，即第一个表中的每一行都与第二个表中的每一行组合。

以下是一些具有示例数据的表和相应的连接查询。

假设我们有两个表：`Orders`（订单）和 `Customers`（顾客）。

**Orders 表：**

| OrderID | CustomerID | OrderDate |
|---------|------------|-----------|
| 1       | 101        | 2024-05-01|
| 2       | 102        | 2024-05-02|
| 3       | 103        | 2024-05-03|
| 4       | 102        | 2024-05-04|

**Customers 表：**

| CustomerID | CustomerName |
|------------|--------------|
| 101        | John         |
| 102        | Alice        |
| 103        | Bob          |
| 104        | Mary         |

1. **内连接（Inner Join）**：

```sql
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
```

**结果：**

| OrderID | CustomerName |
|---------|--------------|
| 1       | John         |
| 2       | Alice        |
| 3       | Bob          |
| 4       | Alice        |

2. **左外连接（Left Outer Join）**：

```sql
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
LEFT JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
```

**结果：**

| OrderID | CustomerName |
|---------|--------------|
| 1       | John         |
| 2       | Alice        |
| 3       | Bob          |
| 4       | Alice        |

注意：左外连接将保留左表（即 Orders 表）的所有行，即使右表（即 Customers 表）中没有匹配的行。

3. **自连接（Self Join）**：

假设我们有一个员工表，包含员工的ID、姓名和经理的ID。

**Employees 表：**

| EmployeeID | EmployeeName | ManagerID |
|------------|--------------|-----------|
| 1          | Alice        | 3         |
| 2          | Bob          | 3         |
| 3          | John         | NULL      |
| 4          | Mary         | 2         |

```sql
SELECT e1.EmployeeName AS Employee, e2.EmployeeName AS Manager
FROM Employees e1
INNER JOIN Employees e2 ON e1.ManagerID = e2.EmployeeID;
```

**结果：**

| Employee | Manager |
|----------|---------|
| Alice    | John    |
| Bob      | John    |
| Mary     | Bob     |

4. **交叉连接（Cross Join）**：

假设我们有两个表，一个是产品表，另一个是颜色表。

**Products 表：**

| ProductID | ProductName |
|-----------|-------------|
| 1         | Phone       |
| 2         | Laptop      |
| 3         | Tablet      |

**Colors 表：**

| ColorID | ColorName |
|---------|-----------|
| 1       | Red       |
| 2       | Blue      |
| 3       | Green     |

```sql
SELECT Products.ProductName, Colors.ColorName
FROM Products
CROSS JOIN Colors;
```

**结果：**

| ProductName | ColorName |
|-------------|-----------|
| Phone       | Red       |
| Phone       | Blue      |
| Phone       | Green     |
| Laptop      | Red       |
| Laptop      | Blue      |
| Laptop      | Green     |
| Tablet      | Red       |
| Tablet      | Blue      |
| Tablet      | Green     |

这些示例演示了在 SQL 中不同类型的连接以及它们如何应用于具体的表和数据。


