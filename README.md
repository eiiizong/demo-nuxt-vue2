# demo-nuxtjs-2

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

资源目录 assets 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript。

[关于 assets 目录的更多信息](https://www.nuxtjs.cn/guide/assets).

### `components`

组件目录 components 用于组织应用的 Vue.js 组件。Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 asyncData 方法的特性。

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

布局目录 layouts 用于组织应用的布局组件。

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

插件目录 plugins 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。

[关于插件的更多信息](https://www.nuxtjs.cn/guide/plugins).


### `static`

静态文件目录 static 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。

举个例子: /static/robots.txt 映射至 /robots.txt

若无额外配置，该目录不能被重命名。

[关于静态文件的更多信息](https://www.nuxtjs.cn/guide/assets#%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6).

### `store`

store 目录用于组织应用的 Vuex 状态树 文件。 Nuxt.js 框架集成了 Vuex 状态树 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置。

若无额外配置，该目录不能被重命名。

[关于静态文件的更多信息](https://www.nuxtjs.cn/guide/vuex-store).
