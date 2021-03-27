/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tea Cup Docs',
  tagline: 'Documentation for Tea Cup projects and more',
  url: 'https://docs.theteacup.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TheTeaCup', // Usually your GitHub org/user name.
  projectName: 'docs.theteacup.dev', // Usually your repo name.
  scripts: [
    {
      src: "https://arc.io/widget.min.js#PbkwEST4"
    }
  ],
  themeConfig: {
    navbar: {
      title: 'Tea Cup',
      logo: {
        alt: 'Logo',
        src: 'img/teacup.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/TheTeaCup/docs.theteacup.dev',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Main Website',
              href: 'https://theteacup.dev',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/GvvAV8zRBK',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Tea_Cup99',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/TheTeaCup',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tea Cup. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/TheTeaCup/docs.theteacup.dev',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TheTeaCup/docs.theteacup.dev/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
