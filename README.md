README
===========================

#### 使用步骤
1. 克隆项目或者下载项目

2. npm install 安装依赖

3. npm run dll 下载完依赖之后请执行一次打包动态连接库。如果后续打包的依赖有升级的情况，请再执行一次。

4. npm run dev 在开发中使用。

5. npm run build 进行打包。


#### 目录结构描述
```
├── Readme.md                   
├── package.json
├── build                      
│   ├── build-config.js         // 提取的webpack的配置文件
│   ├── webpack.config.js       // 基本webpack设置
│   ├── webpack.dev.js          // 开发环境webpack配置
│   ├── webpack.dll.js          // webpack动态连接库打包配置
│   └── webpack.prod.js         // 打包配置文件
├── dll
│   ├── _dll_react.js           // dll打包之后的库
│   └── manifest.json           // dll映射文件
├──  src                      
│   ├── component               // 组件
│   ├── containers              // 容器组件（如：路由组件）
│   ├── mock                    // mock相关
│   ├── public                  // 公共图片，及公共jsfang
│   ├── redux                   // redux相关
│   ├── index.html              // 模版html
│   └── index.js                // 入口js
│
└── .gitignore                  

```