// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
    title: 'RealWorld',
    tagline: 'The mother of all demo apps',
    url: 'https://realworld-docs.netlify.app/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'gothinkster', // Usually your GitHub org/user name.
    projectName: 'realworld', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://pr.new/github.com/gothinkster/realworld/edit/main/documentation/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/gothinkster/realworld/tree/main/docs/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'RealWorld',
                logo: {
                    alt: 'RealWorld Logo',
                    src: 'img/realworld-logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Documentation',
                    },
                    /* {to: '/blog', label: 'Blog', position: 'left'}, */
                    {
                        position: 'right',
                        to: 'docs/implementation-creation/introduction',
                        html: '<a>contribute</a>',
                        className: "header-contribute-link",
                    },
                    {
                        href: 'https://github.com/gothinkster/realworld',
                        "aria-label": 'GitHub repository',
                        className: "header-github-link",
                        position: 'right',
                    }
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'CodebaseShow',
                                href: 'https://codebase.show/projects/realworld'
                            },
                            {
                                label: 'GitHub Discussions',
                                href: 'https://github.com/gothinkster/realworld/discussions',
                            },
                            /*
                          {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                          },

                             */
                        ],
                    }
                    /*
                  {
                    title: 'More',
                    items: [
                      {
                        label: 'Blog',
                        to: '/blog',
                      },
                      {
                        label: 'GitHub',
                        href: 'https://github.com/gothinkster/realworld',
                      },
                    ],
                  },

                     */
                ]
            },
            colorMode: {
                disableSwitch: true
            }
        }),
};

module.exports = config;

