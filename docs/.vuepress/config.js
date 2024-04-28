import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",

  title: "Tree Hole OCR",
  description: "Tree Hole OCR Docs Site",

  theme: defaultTheme({
    logo: "/logo.png",

    navbar: ["/", "/about"],
  }),

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US",
      title: "Tree Hole OCR",
      description: "Open source free text recognition tool",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "树洞OCR",
      description: "开源免费的文字识别工具",
    },
  },

  bundler: viteBundler(),
});
