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

# 贪心算法

贪心算法是一种在求解最优化问题时常用的方法，通常适用于那些具有最优子结构的问题。这里列举几个常见的贪心算法题目以及它们的解法。

### 1. 分配饼干

```java
import java.util.Arrays;

public class AssignCookies {
    public int findContentChildren(int[] children, int[] cookies) {
        Arrays.sort(children);  // 将小朋友的满足度和饼干的尺寸都从小到大排序
        Arrays.sort(cookies);
        int childPtr = 0, cookiePtr = 0;  // 设定两个指针，分别指向小朋友和饼干
        int count = 0;  // 记录满足的小朋友数
        while (childPtr < children.length && cookiePtr < cookies.length) {
            if (children[childPtr] <= cookies[cookiePtr]) {
                count++;
                childPtr++;
            }
            cookiePtr++;
        }
        return count;
    }
}
```

### 2. 买卖股票的最佳时机 II

```java
public class BestTimeToBuyAndSellStockII {
    public int maxProfit(int[] prices) {
        int profit = 0;  // 初始化利润为0
        for (int i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {  // 如果今天的价格高于昨天的价格，就在昨天买入今天卖出
                profit += prices[i] - prices[i - 1];
            }
        }
        return profit;
    }
}
```

### 3. 买卖股票的最佳时机

```java
public class BestTimeToBuyAndSellStockIII {
    public int maxProfit(int[] prices) {
        if (prices.length < 2) {
            return 0;
        }
        int buy1 = Integer.MAX_VALUE, buy2 = Integer.MAX_VALUE;  // 设置初始买入价格为整型最大值
        int profit1 = 0, profit2 = 0;  // 初始化利润为0
        for (int price : prices) {
            buy1 = Math.min(buy1, price);  // 更新第一次买入的最低价格
            profit1 = Math.max(profit1, price - buy1);  // 更新第一次交易的最大利润
            buy2 = Math.min(buy2, price - profit1);  // 更新第二次买入的最低价格
            profit2 = Math.max(profit2, price - buy2);  // 更新第二次交易的最大利润
        }
        return profit2;
    }
}
```

### 4. 零钱兑换

```java
import java.util.Arrays;

public class CoinChange {
    public int coinChange(int[] coins, int amount) {
        Arrays.sort(coins);  // 将硬币面额从小到大排序
        int[] dp = new int[amount + 1];  // dp数组记录每个金额所需的最少硬币数
        Arrays.fill(dp, amount + 1);  // 初始化为amount+1，表示无法凑出对应金额
        dp[0] = 0;  // 金额为0时需要0枚硬币
        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);  // 更新dp数组
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
}
```



以上是一些常见的贪心算法题目及其解法。每个题目都有不同的解法，但它们都遵循贪心策略，即每一步都选择局部最优解，以期望达到全局最优解。

## 如何确定贪心策略？
理解贪心选择策略的实际方法是通过具体问题的案例和模式。以下是一些常见的贪心选择策略及其相关的问题，这些示例可以帮助你更具体地理解：

1. **最大化利益/收益**：
    - **问题示例：**「买卖股票的最佳时机」系列，包括「买卖股票的最佳时机 II」和「买卖股票的最佳时机 III」。
    - **贪心策略：** 在每一步选择能够立即获得最大利润的动作，即每次在价格上涨时买入并在价格下跌时卖出（贪心地获得局部最优解）。

2. **最大化数量**：
    - **问题示例：**「分配饼干」、「切割绳子」。
    - **贪心策略：** 尽可能地满足更多的需求或者切割更多的绳子长度，因为这样可以最大程度地利用资源。

3. **最小化代价/成本**：
    - **问题示例：**「最小花费爬楼梯」、「买卖股票的最佳时机 IV」。
    - **贪心策略：** 在每一步选择能够最小化总体代价或成本的动作，即尽可能选择更便宜的选项来达到目标。

4. **最小化覆盖范围**：
    - **问题示例：**「无重叠区间」、「加油站」。
    - **贪心策略：** 在每一步选择能够覆盖最小范围的动作，以便留出更多的空间来处理后续的需求。

5. **最小化失误/风险**：
    - **问题示例：**「投资组合问题」。
    - **贪心策略：** 在每一步选择能够最小化可能的风险或者失误的动作，以确保整体风险最小化。

通过具体的问题案例和相应的贪心策略，你可以更加直观地理解贪心算法的实际应用。