export default {
    title: 'DSH', // 博客的标题
    description: 'DSH 的个人博客', // 博客的介绍
    base: '/blog/', // 如果想用 https://github.com/newbiename 访问，那么这句话必填
    themeConfig: {
        logo: "/images/logo.png", // 页面上显示的logo
        nav: [ // 页面右上角的导航
            { text: "Vue", link: "/articles/vue/上传素材到COS" },
            { text: "UniApp", link: "/articles/UniApp/一键登录" },
            {
                text: '博客文档',
                items: [ // 可以配置成下拉
                    { text: 'JavaScript 核心系列', link: '/articles/javaScript-core/构造函数、原型、原型链' },
                    { text: 'Vue 三方组件库', link: '/articles/libs/VForm3低代码初体验' },
                    { text: '其他', link: '/articles/other/NVM/nvm管理node' },
                ]
            }
        ],
        sidebar: { // 侧边栏，可以分组
            "/articles/vue/": [
                {
                    text: "基础",
                    items: [
                    ],
                },
                {
                    text: "代码段",
                    items: [
                        {
                            text: "上传素材到COS",
                            link: "/articles/vue/上传素材到COS",
                        },
                        {
                            text: "文件下载",
                            link: "/articles/vue/文件下载",
                        },
                    ],
                },
            ],
            "/articles/UniApp/": [
                {
                    text: "基础",
                    items: [
                    ],
                },
                {
                    text: "代码段",
                    items: [
                        {
                            text: "一键登录",
                            link: "/articles/UniApp/一键登录",
                        }
                    ],
                },
            ],
            "/articles/javaScript-core/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "1. 构造函数、原型、原型链",
                            link: "/articles/javaScript-core/构造函数、原型、原型链",
                        },
                        {
                            text: "2. 执行上下文和执行上下文栈",
                            link: "/articles/javaScript-core/执行上下文和执行上下文栈",
                        },
                        {
                            text: "3. this的指向",
                            link: "/articles/javaScript-core/this的指向",
                        },
                    ],
                },
                {
                    text: "进阶",
                    items: [
                        {
                            text: "xx",
                            link: "/xx",
                        },
                    ],
                },
            ],
            "/articles/libs/": [
                {
                    items: [
                        {
                            text: "1. VForm3低代码初体验",
                            link: "/articles/libs/VForm3低代码初体验",
                        },
                    ],
                }
            ],
            "/articles/other/": [
                {
                    items: [
                        {
                            text: "1. nvm管理node",
                            link: "/articles/other/NVM/nvm管理node",
                        },

                    ],

                },
                {
                    text: "1. CI/CD",
                    link: "/articles/other/CI-CD/CI-CD",
                },
                {
                    items: [
                        {
                            text: "1. Electron",
                            link: "/articles/other/Electron/Electron",
                        }
                    ]
                },
                {
                    items: [
                        {
                            text: "1. Nest",
                            link: "/articles/other/Nest/Nest",
                        },
                    ]
                },
            ],

        },
        socialLinks: [{ icon: "github", link: "https://github.com/newbiename" }], // 可以连接到 github
    },
}