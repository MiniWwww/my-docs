import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [

      // {
      //   text: "数据库",
      //   icon: "pen-to-square",
      //   prefix: "数据库/",
      //   children: [
      //     { text: "实战-sql语句", icon: "pen-to-square", link: "mysqlUse" },
      //
      //
      //   ],
      // },
      {
        text: "设计模式",
        icon: "pen-to-square",
        prefix: "设计模式/创建型模式",
        children: [
          { text: "单例模式", icon: "pen-to-square", link: "SingleTon" },

        ],
      },

      //直接引用文章的：
      // "tomato",
      // "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
