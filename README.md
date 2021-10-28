## avue项目搭建过程

```
1、全局安装vue-cli
npm install @vue-cli -g

2、创建vue项目
vue create project

3、项目引入elementUI
3.1 安装依赖：
npm i element-ui -S
3.2 使用elementUI：
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

4、项目引入avue
4.1 安装依赖：
yarn add  @smallwei/avue -S 或者：npm i @smallwei/avue -S
4.2 使用avue：
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
Vue.use(Avue);
```

## avue项目运行
```
npm install  #安装项目依赖

npm run serve  #运行开发环境

npm run build  #运行生产环境
```

## 参考文档
|  |  |
| :-----| :---- |
| vue-cli | https://cli.vuejs.org/zh/guide/installation.html |
| vue-router | https://router.vuejs.org/zh/guide/ |
| elementui | https://element.eleme.io/#/zh-CN/component/installation |
| avue | 1、https://www.avuejs.com/plugins/avue-cli.html <br> 2、https://www.bookstack.cn/read/avue-2.x/crud.md |
|  |  |