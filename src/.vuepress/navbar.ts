import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "java基础",
        icon: "pen-to-square",
        prefix: "Java基础/",
        children: [
          { text: "Java基础1", icon: "pen-to-square", link: "tomato" },
          { text: "Java基础2", icon: "pen-to-square", link: "JavaBase2" },

        ],
      },
      {
        text: "数据库",
        icon: "pen-to-square",
        prefix: "数据库/",
        children: [
          { text: "实战-sql语句", icon: "pen-to-square", link: "mysqlUse" },


        ],
      },
      {
        text: "设计模式",
        icon: "pen-to-square",
        prefix: "设计模式/",
        children: [
          { text: "设计模式先导", icon: "pen-to-square", link: "DesignPatternInto" },


        ],
      },
      {
        text: "后端开发",
        icon: "pen-to-square",
        prefix: "后端开发/",
        children: [
          { text: "处理流程理解", icon: "pen-to-square", link: "流程理解" },


        ],
      },
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
