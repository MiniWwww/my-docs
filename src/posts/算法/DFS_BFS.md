---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-05-05
category:
  - 算法
tag:
  - 红
  - 圆
star: true
sticky: true
---

# 搜索算法

## BFS
模板题：
https://leetcode.cn/problems/find-bottom-left-tree-value/

> 如下文的1、2、3、4步
```java

class Solution {
    public int findBottomLeftValue(TreeNode root) {
//        1.加入根节点，
        queue.offer(root);
            int leftval=0;
//         2.只要不为空  
        while(!queue.isEmpty()){
            // 3.获取当前层数：
            int size=queue.size();
            // 获取当前层最左节点
            leftval=queue.peek().val;
            // 4.处理当前层
            for(int i=0;i<size;i++){
                TreeNode node=queue.poll();
                if(node.left!=null){
                    queue.offer(node.left);
                }
                if(node.right!=null){
                    queue.offer(node.right);
                }
            }
        }
 return leftval;
    }
}
```

### 题目：二叉树的层序遍历

给定一个二叉树，返回其按层序遍历的节点值。即逐层地，从左到右访问所有节点。

例如，给定二叉树:

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其层序遍历结果为：

```
[
  [3],
  [9,20],
  [15,7]
]
```

### 解法：

```java
import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

public class LevelOrderTraversal {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            List<Integer> currentLevel = new ArrayList<>();
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                currentLevel.add(node.val);
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            result.add(currentLevel);
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        // Example usage:
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        
        LevelOrderTraversal solution = new LevelOrderTraversal();
        List<List<Integer>> result = solution.levelOrder(root);
        System.out.println(result);
    }
}
```

这段代码中，我们利用BFS的思想来进行二叉树的层序遍历。我们使用一个队列来辅助进行遍历，每次遍历一层，然后依次将该层的节点加入到结果列表中。

好的，我会一一给出常见的基于BFS的题目，附带解法代码，并且为代码添加中文注释。


### 题目2：最短路径问题

给定一个无向图，每个边都有相同的权重1，找到从起点到终点的最短路径的长度。

```java
import java.util.*;

public class ShortestPath {
    public int shortestPathLength(int[][] graph, int start, int end) {
        int n = graph.length;
        Queue<Integer> queue = new LinkedList<>();
        boolean[] visited = new boolean[n];
        
        queue.offer(start);
        visited[start] = true;
        
        int steps = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int current = queue.poll();
                if (current == end) return steps;
                for (int neighbor : graph[current]) {
                    if (!visited[neighbor]) {
                        queue.offer(neighbor);
                        visited[neighbor] = true;
                    }
                }
            }
            steps++;
        }
        return -1; // 如果没有找到路径，返回-1
    }
}
```

这段代码使用了BFS来找到从起点到终点的最短路径。我们使用一个队列来辅助进行BFS遍历，每一步我们将当前节点的所有未访问邻居加入队列，并标记为已访问，直到找到终点为止。

### 题目3：拓扑排序

给定一个有向无环图，返回其拓扑排序序列。如果图中不存在拓扑排序，则返回空列表。

```java
import java.util.*;

public class TopologicalSort {
    public List<Integer> topologicalSort(int numCourses, int[][] prerequisites) {
        List<Integer> result = new ArrayList<>();
        if (numCourses <= 0) return result;
        
        int[] indegree = new int[numCourses];
        Map<Integer, List<Integer>> graph = new HashMap<>();
        
        // 构建图和入度数组
        for (int[] edge : prerequisites) {
            int from = edge[1];
            int to = edge[0];
            indegree[to]++;
            graph.putIfAbsent(from, new ArrayList<>());
            graph.get(from).add(to);
        }
        
        // 将入度为0的节点加入队列
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (indegree[i] == 0) {
                queue.offer(i);
            }
        }
        
        // BFS遍历
        while (!queue.isEmpty()) {
            int from = queue.poll();
            result.add(from);
            if (graph.containsKey(from)) {
                for (int to : graph.get(from)) {
                    indegree[to]--;
                    if (indegree[to] == 0) {
                        queue.offer(to);
                    }
                }
            }
        }
        
        // 如果结果列表大小与课程数不一致，则存在环
        if (result.size() != numCourses) {
            result.clear();
        }
        
        return result;
    }
}
```

这段代码实现了拓扑排序算法。我们首先构建图和入度数组，然后将入度为0的节点加入队列，依次处理队列中的节点，更新其邻居节点的入度，并将入度为0的节点加入队列。最终如果结果列表大小与课程数不一致，则表示存在环，返回空列表。
### 延伸
  
> Queue接口

Queue接口代表了一个先进先出（FIFO）的队列。

常用的Queue实现类包括：

1. **LinkedList**：LinkedList实现了Queue接口，因此可以用作队列。它基于双向链表，因此在队列的两端进行操作的性能较好。

   ```java
   Queue<ElementType> queue = new LinkedList<>();
   ```
   常用API：
    - `add(element)` / `offer(element)`：向队列尾巴中添加元素。
    - `remove()` / `poll()`：移除并返回队列的头部元素。
    - `element()` / `peek()`：返回队列的头部元素但不移除。
    - `size()`：获取队列大小。

2. **ArrayDeque**：ArrayDeque也实现了Queue接口，它是基于数组的双端队列实现。

   ```java
   Queue<ElementType> queue = new ArrayDeque<>();
   ```

   常用API与LinkedList类似。

Queue接口还有其他实现类，但LinkedList和ArrayDeque是最常见的两种实现。

使用队列时，常见的操作包括添加元素到队列尾部（enqueue）、移除并返回队列头部的元素（dequeue）、以及获取队列头部的元素但不移除（peek）。


贪心算法通常用于解决最优化问题，它每一步都采取当前状态下最优的选择，希望通过一系列最优选择达到整体的最优解。以下是一些常见的贪心算法题目，以及它们的解法：

题目1：分发饼干
题目描述：有一组孩子和一组饼干，每个孩子有一个满足度，每个饼干都有一个大小。只有孩子的满足度小于等于饼干的大小时，孩子才能得到满足。求解最多可以满足多少个孩子。

java
Copy code
import java.util.*;

public class AssignCookies {
public int findContentChildren(int[] children, int[] cookies) {
Arrays.sort(children);
Arrays.sort(cookies);
int childIndex = 0;
int cookieIndex = 0;
int count = 0;
while (childIndex < children.length && cookieIndex < cookies.length) {
if (children[childIndex] <= cookies[cookieIndex]) {
count++;
childIndex++;
}
cookieIndex++;
}
return count;
}
}
解法说明：首先对孩子和饼干的大小进行排序，然后从最小的孩子和最小的饼干开始，尽量满足满足度最小的孩子。如果当前饼干满足当前孩子，就继续考虑下一个孩子和下一个饼干；如果当前饼干不满足当前孩子，就考虑下一个更大的饼干。