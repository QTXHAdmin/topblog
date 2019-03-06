This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

项目搭建：

1.暂定安装依赖包：antd  	axios 	fetch	 less	 less-loader 	node-sass 	sass-loader 	react-redux	 react-router-dom	 react-transition-group	 redux redux-saga	 redux-thunk 

2.修改webpack配置文件：可以自定义ant-design主题颜色，按需自动引入UI库的css

3.项目技术：

​	3.1 css样式采用Less

​	3.2 状态管理用react-redux 辅助 redux

​	3.3 异步处理用redux-thunk / redux-saga 两者二选一

​	3.4 后台管理采用ant-design UI库：按需引入组件即可，不用引css文件（第2点已处理）

 	3.5 数据交互采用axios / fetch 二选一

​	3.6 路由react-router-dom

4. 目录介绍

     4.1  components -->  公共组件

     4.2  pages --> 前后台页面

     4.3  nomatch --> 404页面

     4.4  system  --> 后台

     4.5  src目录下的store --> 总的store

     4.6  可以在每个页面中创建一个store ，利于管理数据。

   5.yarn   /   npm install     --> yarn start   直接启用即可打开页面