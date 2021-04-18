export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '607c936a78459ac6c698cccb',
                  title: 'Sanity Studio',
                  name: 'my-web-page-studio',
                  apiId: 'c52eed3c-90ce-42d7-9151-7fa288cfa33e'
                },
                {
                  buildHookId: '607c936ba4ca122660773c7d',
                  title: 'Blog Website',
                  name: 'my-web-page-web',
                  apiId: 'a4ff894e-3bb0-45d3-a97d-0f2ccedd2481'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sameepa87/My-Web-Page-',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://my-web-page-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
