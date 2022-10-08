export default {

    lang: 'en-US',

    title: 'Cevi.Tools',
    description: 'Automatic Walk-Time Tables',

    // TODO: configure nginx to support this!
    // cleanUrls: 'without-subfolders',

    themeConfig: {

        // logo: '/imgs/logo.svg',

        nav: [
            {
                text: 'Home', link: '/'
            },
            {
                text: 'Documentation', link: '/documentation/introduction/getting-started'
            }
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    {
                        text: 'Getting Started', link: '/documentation/introduction/getting-started'
                    },
                    {
                        text: 'Application Structure', link: '/documentation/introduction/structure'
                    },
                    {
                        text: 'Runtime Modes & Environments', link: '/documentation/introduction/environment'
                    },
                ]
            },
            {
                text: 'Webinterface',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: 'About', link: '/documentation/webinterface/about'
                    },
                    {
                        text: 'Local Setup', link: '/documentation/webinterface/local-setup'
                    },
                ]
            },
            {
                text: 'Backend & API',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: 'About', link: '/documentation/backend/about'
                    },
                    {
                        text: 'API Endpoints', link: '/documentation/backend/API_endpoints'
                    },
                ]
            },
            {
                text: 'Swiss TLM API',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: 'About', link: '/documentation/swiss_TLM_API/about'
                    },
                    {
                        text: 'API Endpoints', link: '/documentation/swiss_TLM_API/API_endpoints'
                    },
                    {
                        text: 'Testing', link: '/documentation/swiss_TLM_API/testing'
                    },
                ]
            },
            {
                text: 'PDF Creator',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: 'About', link: '/documentation/pdf_creator/about'
                    },
                ]
            },
            {
                text: 'Route Server',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: 'About', link: '/documentation/route_server/about'
                    },
                ]
            },
            {
                text: 'Documentation',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: 'About', link: '/documentation/documentation/about'
                    },
                ]
            }
        ],
        editLink: {
            pattern: 'https://github.com/cevi/automatic_walk-time_tables/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
        },
        socialLinks: [
            {
                icon: 'github', link: 'https://github.com/cevi/automatic_walk-time_tables'
            }
        ],

    }

}