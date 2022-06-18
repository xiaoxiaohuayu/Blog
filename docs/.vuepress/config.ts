import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "小桦鱼",
  description: "vuepress-theme-hope",

  base: "/",

  theme,
});
