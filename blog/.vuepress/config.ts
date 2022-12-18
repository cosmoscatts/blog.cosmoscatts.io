import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  title: "Cosmoscatts",
  description: "Just infected with a disease called curiosity.",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: `/img/logo/favicon.png`
      }
    ],
    ["meta", { name: "application-name", content: "Cosmoscatts" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Cosmoscatts" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  bundler: viteBundler(),

  theme: gungnirTheme({
    repo: "cosmoscatts/blog.cosmoscatts.io",
    docsDir: "blog",
    docsBranch: "master",

    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "Cosmoscatts",
      avatar: "/img/avatar.jpg",
      description: "いつか、私がヒトじゃなくなっても",
      sns: {
        github: "cosmoscatts",
        bilibili: {
          icon: "ri-bilibili-line",
          link: "https://space.bilibili.com/434559284"
        },
        twitter: "barbotage7",
        zhihu: "ling-yun-81-14-57",
        email: "2138889191@qq.com",
        rss: "/rss.xml",
      }
    },

    searchText: 'Try search something...',

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgba(196, 176, 131, .1)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/img/home-bg/5.jpg"
      }
    ],

    // other pages
    pages: {
      tags: {
        title: 'Tags',
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        title: 'Links',
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      giscus: {
        lang: "zh-CN",
        repo: "cosmoscatts/blog.cosmoscatts.io",
        repoId: "R_kgDOIotW3g",
        category: "Announcements",
        categoryId: "DIC_kwDOIotW3s4CTIZS",
        darkTheme: "https://blog.cosmoscatts.ren/styles/giscus-dark.css"
      },
      mdPlus: {
        all: true
      },
      ga: "G-HCQSX53XFG",
      ba: "02a4d5282f3515af0e6ebd7714f28d55",
      rss: {
        siteURL: "https://blog.cosmoscatts.ren",
        copyright: "Cosmoscatts 2018-2022"
      },
      readingTime: {
        excludes: [],  // 不需要进行统计的页面路径（可选，默认：[]）
        includes : ["/links", "/post/.*"],  // 需要进行统计的页面路径，如果指定了这一项，那么 `excludes` 项无效（可选，默认：[]）
        wordsPerMinuteCN: 500,  // 一分钟可以阅读多少个中文字符（可选，默认：300）
        wordsPerMinuteEN: 200,  // 一分钟可以阅读多少个英文字符（可选，默认：160）
        excludeCodeBlock: true,  // 是否排除所有代码块内的字符（可选，默认：false）
        excludeTexBlock: true    // 是否排除所有公式块内的字符（可选，默认：false）
      }
    },

    navbar: [
      {
        text: "Home",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "Links",
        link: "/links/",
        icon: "fa-satellite-dish"
      },
      {
        text: "About",
        link: "https://cosmoscatts.ren",
        icon: "fa-paw"
      },
    ],

    footer: `
      &copy; <a href="https://github.com/cosmoscatts" target="_blank">Cosmoscatts</a> 2018-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
});
