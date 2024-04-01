import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Software development",
      icon: "pen-to-square",
      prefix: "software_development/",
      children: "structure",
    },
    {
      text: "Articles",
      icon: "book",
      prefix: "articles/",
      children: "structure",
    },
  ],
});
