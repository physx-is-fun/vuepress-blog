import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export const AVATAR = '<svg xmlns="http://www.w3.org/2000/svg" aria-label="Research Gate" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#00d0af"/> <g fill="#feffff"> <path d="m271 383c-15-4-23-10-36-26-9-12-26-39-35-53l-6-11h-24l0 34c1 43 0 42 19 45l10 1 0 4 0 4h-80l0-4c0-4 1-4 9-6 10-2 14-5 15-14 1-4 1-31 1-79-0-70-1-72-3-77-3-5-7-7-18-8-4-1-5-1-5-5v-4l43-1c55-1 65 0 81 11 15 10 22 24 20 43-1 21-17 42-37 50-4 1-7 3-7 3 0 2 17 28 28 43 15 21 27 32 36 37 4 2 9 3 10 3 3 0 3 1 3 4 0 3-1 5-2 5-5 2-19 2-26 0zm-57-109c14-7 22-18 23-35 1-13-2-22-10-30-9-10-25-14-48-12l-10 1v39c0 36 0 40 2 40 1 0 9 1 18 0 14-0 17-1 24-4z"/> <path d="m321 228c-25-4-34-20-32-61 1-21 3-30 11-38 7-7 13-9 25-10 13-1 21 2 29 8 5 4 9 10 9 13 0 1-3 2-6 4l-6 3-3-3c-5-6-9-9-14-11-10-3-20 2-25 11-3 5-3 6-3 29 0 22 0 25 3 29 4 7 12 11 21 10 13-1 20-10 20-24v-7l-10-0-10-0v-13h36l-0 15c-0 12-1 16-3 22-6 15-23 24-42 22z"/> </g> </svg>';


export default hopeTheme({
  hostname: "",

  author: {
    name: "Balázs Tari",
    url: "",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "",

  repo: "",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "",

  displayFooter: true,

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  blog: {
    description: "Physicist",
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com/physx-is-fun",
      Linkedin: "https://www.linkedin.com/in/balázs-tari-203bb9213/",
      Researchgate: ["https://www.researchgate.net/profile/Balazs-Tari-2", AVATAR]
    },
  },

  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: true,

    // install @waline/client before enabling it
    // WARNING: This is a test server for demo only.
    // You should create and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
