import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '菜单一', link: '/markdown-examples' },
      { text: '菜单二', link: '/haode' },
      { text: 'wode', link: '/wode'}
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'haode', link: '/haode'},
          { text: 'shabi',link: '/shabi'}
        
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'github', link: 'https://github.com/yuxiang456/111wenjuian.git'}
    ]
  }
})
footer: {
  message: '不会烧白开水'
  copyright: 'Copyright @ 2024-present'

}
