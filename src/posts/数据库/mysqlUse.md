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


# 2.常用 SQL 语句

## SQL 分类

- DDL（数据定义语言）
  - 定义数据库对象：`create`、`alter`、`drop`
- DML（数据操纵语言）
  - CRUD（增删改查）
- DCL（数据控制语言）
  - 可对数据访问权进行控制的指令

### DML 语言（数据操作语言）主要功能增删改查（CRUD）

- 查:（how）

>Select

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
- 降序：**DESC**

6. **GROUP BY**：根据一个或多个列对结果进行分组。

- 示例：`SELECT COUNT(*), column1 FROM table_name GROUP BY column1;`
- 解释：对"table_name"表中的数据按照"column1"列进行分组，并统计每个分组中的行数。

7. **HAVING**：对 GROUP BY 子句的结果进行过滤。

- 示例：`SELECT COUNT(*), column1 FROM table_name GROUP BY column1 HAVING COUNT(*) > 1;`

- 解释：对"table_name"表中的数据按照"column1"列进行分组，并只返回分组中行数大于 1 的分组结果。

  - 举例：

  > 让我们为你创建一个简单的表格来演示。假设我们有一个名为`students`的表格，其中包含学生姓名和他们所在的班级。我们可以使用`HAVING`子句来过滤出每个班级中学生人数大于 1 的情况。

| 学生姓名 | 班级 |
| -------- | ---- |
| 小明     | 1班  |
| 小红     | 1班  |
| 小华     | 2班  |
| 小强     | 2班  |
| 小亮     | 3班  |

现在，我们执行以下 SQL 查询：

```sql
SELECT COUNT(*), class FROM students GROUP BY class HAVING COUNT(*) > 1;
```

这将返回如下结果：

| COUNT(*) | 班级 |
| -------- | ---- |
| 2        | 1班  |
| 2        | 2班  |

这说明在 1 班和 2 班中都有至少两个学生。

8. **LIMIT**：限制返回的行数。

- 示例：`SELECT column1 FROM table_name LIMIT 10;`
- 解释：从"table_name"表中选择"column1"列的数据，最多返回 10 行。

### 辅助关键词：

- Distinct：（what)去重，有可能返回多个相同的行，只要一行
 ```java
SELECT DISTINCT
  vend_id FROM products;
  ```

> 这个 SQL 查询语句的意思是从名为"products"的表中选择唯一的"vend_id"列。
> 它告诉数据库系统只返回"products"表中不重复的"vend_id"值。
> 这意味着如果"products"表中有多行具有相同的"vend_id"值，
> 那么在结果集中只会显示一个该值，不会重复出现。

## 函数

在 SQL 中，有许多常用的函数可以用于对数据进行操作、计算和转换。

> tips：先记住聚合函数吧

1. **聚合函数**：

- **COUNT()**：计算行数或非 NULL 值的数量。
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
- **COALESCE()**：返回参数列表中的第一个非 NULL 值。

5. **数学函数**：

- **ROUND()**：四舍五入到指定的小数位数。
- **ABS()**：返回绝对值。
- **CEIL()** / **FLOOR()**：向上取整 / 向下取整。

6. **类型转换函数**：

- **CAST()**：将一个类型转换为另一个类型。
- **CONVERT()**：将一个类型转换为另一个类型。


## 多表查询

#### 为了改善多表查询，产生了子查询、连接

如果不采用子查询、连接查询，那么返回的是多个表的笛卡尔积

> 例子：

假设我们有两个表，一个是产品表，另一个是颜色表。

**Products 表：**

| ProductID | ProductName |
| --------- | ----------- |
| 1         | Phone       |
| 2         | Laptop      |
| 3         | Tablet      |

**Colors 表：**

| ColorID | ColorName |
| ------- | --------- |
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
| ----------- | --------- |
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

## 子查询

1. what

> 说法1：SQL语句中嵌套SELECT语句，称为嵌套查询，又称子查询。
>
> 说法2：子查询就是将一个查询的结果作为另一个 SQL 语句（主查询）的数据来源，或者判断条件

2. 为什么要用子查询（why)
   使用子查询是因为有几个优势

> - 为了简化更复杂的查询，对数据进行过滤和筛选
> - 为了可以进行数据比较，主查询可以利用子查询的结果进行进一步的条件判断

3. 如何使用子查询？（how）

根据子查询结果不同，分为：

1. 标量子查询（子查询结果为单个值）

   > 子查询返回的结果是单个值（数字、字符串、日期等），最简单的形式，这种子查询称为标量子查询。
   > 常用的操作符：= <> > >= < <=

2. 列子查询(子查询结果为一列或者多列)

   > 如果这里的“多列”恰好包含那个表一行的所有列，那么也相当于行查询了吧
   > 常用的操作符：IN 、NOT IN 、 ANY 、SOME 、 ALL

   | 操作符 | 描述                                   |
      | ------ | -------------------------------------- |
   | IN     | 在指定的集合范围内，多选1              |
   | NOT IN | 不在指定的集合范围内                   |
   | ANY    | 子查询返回列表中，有任意一个满足即可   |
   | SOME   | 与ANY同等，使用SOME的地方都可以使用ANY |
   | ALL    | 子查询返回列表的所有制必须满足         |



3. 行子查询(子查询结果为一行或多行)

   >  常用的操作符：= 、<> 、IN 、NOT IN

4. 表子查询(子查询结果为多行多列)

   > 常用的操作符：IN

​	根据子查询位置，分为：

1. WHERE之后
2. FROM之后
3. SELECT之后

### 例子

好的，下面我将根据子查询的不同类型提供详细的例子，包括数据表和解释。

### 1. 标量子查询

**数据表：**

**Employees 表：**

| EmployeeID | EmployeeName | Salary |
| ---------- | ------------ | ------ |
| 1          | Alice        | 5000   |
| 2          | Bob          | 7000   |
| 3          | John         | 6000   |
| 4          | Mary         | 8000   |

**示例：**

```sql
SELECT EmployeeName, Salary
FROM Employees
WHERE Salary = (SELECT MAX(Salary) FROM Employees);
```

**解释：**

此查询会返回薪水最高的员工姓名和薪水。子查询`(SELECT MAX(Salary) FROM Employees)`返回的是 Employees 表中的最高薪水，这个值是一个单一的数值。主查询使用这个值来筛选具有该薪水的员工。

**结果：**

| EmployeeName | Salary |
| ------------ | ------ |
| Mary         | 8000   |

### 2. 列子查询(子查询结果为一列或者多列)

**数据表：**

**Orders 表：**

| OrderID | CustomerID | OrderDate  |
| ------- | ---------- | ---------- |
| 1       | 101        | 2024-05-01 |
| 2       | 102        | 2024-05-02 |
| 3       | 103        | 2024-05-03 |
| 4       | 102        | 2024-05-04 |

**Customers 表：**

| CustomerID | CustomerName |
| ---------- | ------------ |
| 101        | John         |
| 102        | Alice        |
| 103        | Bob          |
| 104        | Mary         |

**示例：**

```sql
SELECT CustomerName
FROM Customers
WHERE CustomerID IN (SELECT CustomerID FROM Orders WHERE OrderDate = '2024-05-02');
```

**解释：**

此查询会返回在 2024-05-02 下了订单的顾客姓名。子查询`(SELECT CustomerID FROM Orders WHERE OrderDate = '2024-05-02')`返回在 2024-05-02 下订单的所有顾客 ID（只有这一列），这些 ID 组成了一个集合。主查询使用 IN 操作符筛选出顾客表中 ID 在这个集合中的顾客姓名。

**结果：**

| CustomerName |
| ------------ |
| Alice        |

### 3. 行子查询

**数据表：**

**Products 表：**

| ProductID | ProductName | SupplierID |
| --------- | ----------- | ---------- |
| 1         | Phone       | 200        |
| 2         | Laptop      | 201        |
| 3         | Tablet      | 202        |
| 4         | Monitor     | 200        |

**Suppliers 表：**

| SupplierID | SupplierName |
| ---------- | ------------ |
| 200        | Supplier A   |
| 201        | Supplier B   |
| 202        | Supplier C   |
| 203        | Supplier D   |

**示例：**

```sql
SELECT ProductName
FROM Products
WHERE (ProductID, SupplierID) IN (SELECT ProductID, SupplierID FROM Products WHERE SupplierID = 200);
```

**解释：**

此查询会返回由供应商 200 提供的产品名称。子查询`(SELECT ProductID, SupplierID FROM Products WHERE SupplierID = 200)`返回所有由供应商 200 提供的产品 ID 和供应商 ID 组成的行。主查询使用这些行来筛选出对应的产品名称。

**结果：**

| ProductName |
| ----------- |
| Phone       |
| Monitor     |

### 4. 表子查询

**数据表：**

**Orders 表：**

| OrderID | CustomerID | OrderDate  |
| ------- | ---------- | ---------- |
| 1       | 101        | 2024-05-01 |
| 2       | 102        | 2024-05-02 |
| 3       | 103        | 2024-05-03 |
| 4       | 102        | 2024-05-04 |

**OrderDetails 表：**

| OrderDetailID | OrderID | ProductID | Quantity |
| ------------- | ------- | --------- | -------- |
| 1             | 1       | 1         | 10       |
| 2             | 2       | 2         | 5        |
| 3             | 3       | 3         | 7        |
| 4             | 4       | 1         | 3        |

**示例：**

```sql
SELECT OrderID, OrderDate
FROM Orders
WHERE OrderID IN (SELECT OrderID FROM OrderDetails WHERE Quantity > 5);
```

**解释：**

此查询会返回订单数量大于 5 的订单 ID 和订单日期。子查询`(SELECT OrderID FROM OrderDetails WHERE Quantity > 5)`返回所有订单数量大于 5 的订单 ID 组成的集合。主查询使用这些订单 ID 来筛选出相应的订单日期和订单 ID。

**结果：**

| OrderID | OrderDate  |
| ------- | ---------- |
| 1       | 2024-05-01 |
| 3       | 2024-05-03 |

### 根据子查询位置

### 1. 在 WHERE 之后

**示例：**

```sql
SELECT EmployeeName
FROM Employees
WHERE Salary = (SELECT MAX(Salary) FROM Employees);
```

**解释：**

在 WHERE 子句中使用子查询筛选出薪水最高的员工。

### 2. 在 FROM 之后

**示例：**

```sql
SELECT AVG(Salary)
FROM (SELECT Salary FROM Employees WHERE Salary > 5000) AS HighSalaryEmployees;
```

**解释：**

在 FROM 子句中使用子查询，创建一个临时表 HighSalaryEmployees，计算该表中薪水的平均值。

### 3. 在 SELECT 之后

**示例：**

```sql
SELECT EmployeeName,
       (SELECT MAX(Salary) FROM Employees) AS MaxSalary
FROM Employees;
```

**解释：**

在 SELECT 子句中使用子查询，返回每个员工的姓名以及公司中的最高薪水。

## 连接查询

- 什么是连接？

  - 连接（join）是一种用于将两个或多个表中的数据组合在一起的操作。（先记住这一个）
  - 连接通常基于表之间的共同列（通常是主键和外键），并且它们允许您在查询中使用相关联的数据。
  - 连接表时需要在每个表中选择一个字段，并对这些字段的值进行比较，值相同的两条记录将合并为一条，连接表的本质就是将不同表的记录合并起来，形成一张新表。当然，这张新表只是**临时**的，它仅存在于本次查询期间。

- 为什么需要连接（why)?

  - 连接有以下这些优势
    - 数据整合，通过连接可以将多个表的数据整合起来
    - 数据分析和报告，通过数据整合可以生成所需要的分析与报告

- 如何使用连接？（how)

  >常见的连接类型包括：

1. 内连接（Inner Join）：返回两个表中共有的行，这些行满足连接条件。

   > 语法分为隐式内连接、显示内连接两种

2. 外连接（Outer Join）：包括左外连接（Left Outer Join）、右外连接（Right Outer Join）和全外连接（Full Outer Join），它们分别返回左表的所有行、右表的所有行或者两个表的所有行，以及匹配的行。

   > 而我们在日常开发使用时，更偏向于左外连接。

3. 自连接（Self Join）：将表与自身连接，常用于比较同一表中不同行的数据。

   3.1 对于普通自连接查询，可以是内连接查询，也可以是外连接查询

   > 注意事项: 在自连接查询中，必须要为表起别名，要不然我们不清楚所指定的条件、返回的字段，到底 是哪一张表的字段

   3.2 联合查询

   对于union查询，就是把多次查询的结果合并起来，形成一个新的查询结果集。

   > 对于联合查询的多张表的列数必须保持一致，字段类型也需要保持一致（所以一般是自连接，两张相同的表联合查询）。
   > ` union all` 会将全部的数据直接合并在一起，`union `会对合并之后的数据去重。

#### 用图表看出差别：

1.内连接（取交集）

2.外连接（取交集和一边的数据）

以下是一些具有示例数据的表和相应的连接查询。

假设我们有两个表：`Orders`（订单）和 `Customers`（顾客）。

**Orders 表：**

| OrderID | CustomerID | OrderDate  |
| ------- | ---------- | ---------- |
| 1       | 101        | 2024-05-01 |
| 2       | 102        | 2024-05-02 |
| 3       | 103        | 2024-05-03 |
| 4       | 102        | 2024-05-04 |

**Customers 表：**

| CustomerID | CustomerName |
| ---------- | ------------ |
| 101        | John         |
| 102        | Alice        |
| 103        | Bob          |
| 104        | Mary         |

### 1. **内连接（Inner Join）**：

```sql
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
```

**结果：**

| OrderID | CustomerName |
| ------- | ------------ |
| 1       | John         |
| 2       | Alice        |
| 3       | Bob          |
| 4       | Alice        |

### 2. **左外连接（Left Outer Join）**：

```sql
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
LEFT JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
```

**结果：**

| OrderID | CustomerName |
| ------- | ------------ |
| 1       | John         |
| 2       | Alice        |
| 3       | Bob          |
| 4       | Alice        |

注意：左外连接将保留左表（即 Orders 表）的所有行，即使右表（即 Customers 表）中没有匹配的行。

### 3.全外连接（将多个表左右拼起来，联合查询是将多个表上下拼起来）

全外连接（Full Outer Join）是一种连接操作，它返回两个表中所有行，即使它们没有匹配的行。全外连接的结果集包括左表和右表中的所有行，对于没有匹配的行，结果集中对应的列会包含空值（NULL）。

全外连接的语法通常是：

```sql
SELECT *
FROM table1
FULL OUTER JOIN table2
ON table1.common_column = table2.common_column;
```

**示例数据表：**

**Employees 表：**

| EmployeeID | EmployeeName | DepartmentID |
| ---------- | ------------ | ------------ |
| 1          | Alice        | 10           |
| 2          | Bob          | 20           |
| 3          | John         | 30           |
| 4          | Mary         | NULL         |

**Departments 表：**

| DepartmentID | DepartmentName |
| ------------ | -------------- |
| 10           | HR             |
| 20           | Engineering    |
| 30           | Sales          |
| 40           | Marketing      |

**全外连接查询：**

```sql
SELECT Employees.EmployeeID, Employees.EmployeeName, Employees.DepartmentID,
       Departments.DepartmentName
FROM Employees
FULL OUTER JOIN Departments
ON Employees.DepartmentID = Departments.DepartmentID;
```

**结果：**

| EmployeeID | EmployeeName | DepartmentID | DepartmentName |
| ---------- | ------------ | ------------ | -------------- |
| 1          | Alice        | 10           | HR             |
| 2          | Bob          | 20           | Engineering    |
| 3          | John         | 30           | Sales          |
| 4          | Mary         | NULL         | NULL           |
| NULL       | NULL         | 40           | Marketing      |

**解释：**

- 表 `Employees` 中的 `EmployeeID` 列值为 1、2 和 3 的行，分别匹配到表 `Departments` 中的 `DepartmentID` 列值为 10、20 和 30 的行。
- 表 `Employees` 中 `EmployeeID` 列值为 4 的行，其 `DepartmentID` 为 `NULL`，因此结果集中 `DepartmentName` 列值也为 `NULL`。
- 表 `Departments` 中 `DepartmentID` 列值为 40 的行没有匹配到表 `Employees` 中的行，因此结果集中 `EmployeeID`、`EmployeeName` 和 `DepartmentID` 列值为 `NULL`。

全外连接的结果集是左外连接（Left Outer Join）和右外连接（Right Outer Join）结果集的并集。





### 4. **自连接（Self Join）**：

假设我们有一个员工表，包含员工的 ID、姓名和经理的 ID。

**Employees 表：**

| EmployeeID | EmployeeName | ManagerID |
| ---------- | ------------ | --------- |
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
| -------- | ------- |
| Alice    | John    |
| Bob      | John    |
| Mary     | Bob     |



### 5.联合查询（联合查询是将多个表上下拼起来）

联合查询（UNION）用于将多个查询的结果合并成一个结果集。使用 `UNION` 时，查询的结果集必须具有相同的列数和相同的数据类型。`UNION ALL` 会将所有结果集直接合并在一起，而 `UNION` 会对合并后的结果进行去重。

**示例数据表：**

**Table3 表：**

| ID   | Name  | Age  |
| ---- | ----- | ---- |
| 1    | Alice | 25   |
| 2    | Bob   | 30   |

**Table4 表：**

| ID   | Name  | Age  |
| ---- | ----- | ---- |
| 2    | Bob   | 30   |
| 3    | Carol | 27   |

### 使用 `UNION` 去重的查询：

```sql
SELECT ID, Name, Age FROM Table3
UNION
SELECT ID, Name, Age FROM Table4;
```

**结果：**

| ID   | Name  | Age  |
| ---- | ----- | ---- |
| 1    | Alice | 25   |
| 2    | Bob   | 30   |
| 3    | Carol | 27   |

### 使用 `UNION ALL` 不去重的查询：

```sql
SELECT ID, Name, Age FROM Table3
UNION ALL
SELECT ID, Name, Age FROM Table4;
```

**结果：**

| ID   | Name  | Age  |
| ---- | ----- | ---- |
| 1    | Alice | 25   |
| 2    | Bob   | 30   |
| 2    | Bob   | 30   |
| 3    | Carol | 27   |

在这个示例中，`UNION` 去除了重复的行，而 `UNION ALL` 则保留了所有行，包括重复的行。



