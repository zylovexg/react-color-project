## yarn (yarn add) 安装依赖

## yarn start 启动本地环境，在浏览器里查看项目。
可以添加颜色、评分、删除颜色列表里的颜色。
每次添加颜色、评分、删除后，都可以在控制台里查看数据的 State 变化。

## 这个小项目主要学习 props 和 state。将 state 全部都在父组件间里去管理。
react 中，改变数据状态要用 this.setState()。当利用这个方法改变数据后，会自动更新 render 里面得操作，这样就实现了，DOM的重新渲染。

## 校验 props，安装了第三方插件：prop-types。

## 自动添加 ID，安装了第三方插件：uuid。

## 移除脚手架默认的一些文件，只要有 index.js 就行。

## 项目分添加颜色、颜色列表两大块（AddColor, ColorList）
颜色列表里面又分了 Color (单个的颜色块)。然后单个的颜色块又引入了 StarRating 组件。这个组件是用来通过传递的星星数量，遍历出 Star 这个组件。
