export const projectdir = `
├─.browserslistrc
├─.editorconfig
├─.eslintrc.js
├─.gitignore
├─.prettierignore
├─.prettierrc
├─babel.config.js
├─commitlint.config.js
├─package-lock.json
├─package.json
├─README.md
├─treer.txt
├─tsconfig.json
├─vue.config.js
├─src
|  ├─App.vue
|  ├─main.ts
|  ├─shims-vue.d.ts
|  ├─views
|  |   ├─NOTFOUND
|  |   |    └not-found.vue
|  |   ├─main
|  |   |  ├─main.vue
|  |   |  ├─system
|  |   |  |   ├─user
|  |   |  |   |  ├─user.vue
|  |   |  |   |  ├─config
|  |   |  |   |  |   ├─content.config.ts
|  |   |  |   |  |   ├─modal.config.ts
|  |   |  |   |  |   └search.config.ts
|  |   |  |   ├─role
|  |   |  |   |  ├─role.vue
|  |   |  |   |  ├─config
|  |   |  |   |  |   ├─content.config.ts
|  |   |  |   |  |   ├─modal.config.ts
|  |   |  |   |  |   └search.config.ts
|  |   |  |   ├─menu
|  |   |  |   |  ├─menu.vue
|  |   |  |   |  ├─config
|  |   |  |   |  |   └content.config.ts
|  |   |  |   ├─department
|  |   |  |   |     ├─department.vue
|  |   |  |   |     ├─config
|  |   |  |   |     |   ├─content.config.ts
|  |   |  |   |     |   ├─modal.config.ts
|  |   |  |   |     |   └search.config.ts
|  |   |  ├─product
|  |   |  |    ├─goods
|  |   |  |    |   ├─goods.vue
|  |   |  |    |   ├─config
|  |   |  |    |   |   └content.config.ts
|  |   |  |    ├─category
|  |   |  |    |    ├─catagory.vue
|  |   |  |    |    ├─config
|  |   |  |    |    |   ├─content.config.ts
|  |   |  |    |    |   ├─modal.config.ts
|  |   |  |    |    |   └search.config.ts
|  |   |  ├─analysis
|  |   |  |    ├─overview
|  |   |  |    |    ├─overview.vue
|  |   |  |    |    ├─config
|  |   |  |    |    |   └project-dir.ts
|  |   |  |    ├─dashboard
|  |   |  |    |     └dashboard.vue
|  |   ├─login
|  |   |   ├─login.vue
|  |   |   ├─cpns
|  |   |   |  ├─login-account.vue
|  |   |   |  ├─login-panel.vue
|  |   |   |  └login-phone.vue
|  |   |   ├─config
|  |   |   |   ├─account-config.ts
|  |   |   |   └phone-config.ts
|  ├─util
|  |  ├─cache.ts
|  |  ├─date-format.ts
|  |  └map-menus.ts
|  ├─store
|  |   ├─index.ts
|  |   ├─type.ts
|  |   ├─main
|  |   |  ├─system
|  |   |  |   ├─system.ts
|  |   |  |   └type.ts
|  |   |  ├─analysis
|  |   |  |    ├─dashboard.ts
|  |   |  |    └type.ts
|  |   ├─login
|  |   |   ├─login.ts
|  |   |   └type.ts
|  ├─service
|  |    ├─index.ts
|  |    ├─request
|  |    |    ├─config.ts
|  |    |    ├─index.ts
|  |    |    └type.ts
|  |    ├─main
|  |    |  ├─system
|  |    |  |   └system.ts
|  |    |  ├─analysis
|  |    |  |    └dashboard.ts
|  |    ├─login
|  |    |   ├─login.ts
|  |    |   └type.ts
|  ├─router
|  |   ├─index.ts
|  |   ├─main
|  |   |  ├─system
|  |   |  |   ├─user
|  |   |  |   |  └user.ts
|  |   |  |   ├─role
|  |   |  |   |  └role.ts
|  |   |  |   ├─menu
|  |   |  |   |  └menu.ts
|  |   |  |   ├─department
|  |   |  |   |     └department.ts
|  |   |  ├─product
|  |   |  |    ├─goods
|  |   |  |    |   └goods.ts
|  |   |  |    ├─category
|  |   |  |    |    └catagory.ts
|  |   |  ├─analysis
|  |   |  |    ├─overview
|  |   |  |    |    └overview.ts
|  |   |  |    ├─dashboard
|  |   |  |    |     └dashboard.ts
|  ├─hooks
|  |   ├─use-page-modal.ts
|  |   ├─use-page-search.ts
|  |   └use-permission.ts
|  ├─globel
|  |   ├─index.ts
|  |   └register-properties.ts
|  ├─components
|  |     ├─statistical-panel
|  |     |         ├─index.ts
|  |     |         ├─src
|  |     |         |  └statistical-panel.vue
|  |     ├─searchPage
|  |     |     ├─index.ts
|  |     |     ├─src
|  |     |     |  └searchPage.vue
|  |     ├─page-echarts
|  |     |      ├─index.ts
|  |     |      ├─utils
|  |     |      |   ├─convertData.ts
|  |     |      |   └coordinate-data.ts
|  |     |      ├─types
|  |     |      |   └index.ts
|  |     |      ├─src
|  |     |      |  ├─bar-echart.vue
|  |     |      |  ├─line-echart.vue
|  |     |      |  ├─map-echart.vue
|  |     |      |  ├─pie-echart.vue
|  |     |      |  └rose-echart.vue
|  |     ├─nav-menu
|  |     |    ├─index.ts
|  |     |    ├─src
|  |     |    |  └nav-menu.vue
|  |     ├─nav-header
|  |     |     ├─index.ts
|  |     |     ├─src
|  |     |     |  ├─nav-header.vue
|  |     |     |  └useInfo.vue
|  |     ├─modalPage
|  |     |     ├─index.ts
|  |     |     ├─src
|  |     |     |  └modalPage.vue
|  |     ├─contentPage
|  |     |      ├─index.ts
|  |     |      ├─src
|  |     |      |  └contentPage.vue
|  ├─base-ui
|  |    ├─table
|  |    |   ├─index.ts
|  |    |   ├─src
|  |    |   |  └table.vue
|  |    ├─form
|  |    |  ├─index.ts
|  |    |  ├─type
|  |    |  |  └index.ts
|  |    |  ├─src
|  |    |  |  └form.vue
|  |    ├─echart
|  |    |   ├─index.ts
|  |    |   ├─src
|  |    |   |  └base-echart.vue
|  |    |   ├─hooks
|  |    |   |   └useEchart.ts
|  |    |   ├─data
|  |    |   |  └china.json
|  |    ├─count-up
|  |    |    ├─index.ts
|  |    |    ├─src
|  |    |    |  └countup.vue
|  |    ├─card
|  |    |  ├─index.ts
|  |    |  ├─src
|  |    |  |  └card.vue
|  |    ├─breadcrumb
|  |    |     ├─index.ts
|  |    |     ├─type
|  |    |     |  └index.ts
|  |    |     ├─src
|  |    |     |  └breadcrumb.vue
|  ├─assets
|  |   ├─img
|  |   |  ├─login-bg.svg
|  |   |  └logo.svg
|  |   ├─css
|  |   |  ├─base.css
|  |   |  └index.css
├─public
|   ├─favicon.ico
|   └index.html
├─.husky
|   ├─pre-commit
|   ├─_
|   | ├─.gitignore
|   | └husky.sh
`
