# myApp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###TODO
```
玩玩国际化
由于本地node匹配的vue项目路径为： domain/vue/
所以history模式需要把vue.config.js中 baseUrl设为'/vue/'【baseUrl: '/vue/',】
必须配合后端代码看效果【http://localhost:3000/vue/】

若是存放于类似ng的非后端处理接口地址的静态目录内访问
则选用hash模式需要把baseUrl设为'/vue/'【baseUrl: './',】
打包出来的dist文件可以直接本地打开index.html查看效果【file:///D:/Vue3baseBe/be/vuePublic/hash%E5%9B%BD%E9%99%85%E5%8C%96%E9%A1%B9%E7%9B%AE/dist/index.html#/】

注：修改直接改vue.config.js不要去vue的项目管理器浏览器上改会自动生成一个publicUrl："/"导致打包出错
非node后台项目需要设置对应的匹配公共url格式 【http://localhost:3000/vue/XXX/XXXX/XXXX】统一返回对应的打包出来的入口index.html文件
```