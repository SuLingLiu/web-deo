# 侧边栏工具条
## 能学到什么
1. 使用sass更好的书写css
2. 使用requirejs进行模块化开发，编写出方便复用的代码
3. 使用css3实现简单的动画效果

## sass工具
1. 下koala，安装
2. 在设置（一个齿轮图标）里设置中文简体
3. 关闭软件重启
4. sass文件以.scss结尾
5. 把放有sass文件夹的父文件夹拖到koala里就会时时刷新
6. 不能有中文的目录，如果.scss有中文需要在
	C:\Program Files (x86)\Koala\rubygems\gems\sass-3.5.2\lib\sass\engine.rb文件里的module Sass前增加
	Encoding.default_external = Encoding.find('utf-8')

## 为什么使用requirejs
1. 有效的防止命名冲突
2. 声明不同js文件之间的依赖
3. 可以让我们的代码以模块化的方式组织

## requirejs常用的方法
1. requirejs.config 通常用来指定别名
2. requirejs
3. define 定义模块

## 案例实现方式
1. 使用背景图片的方式
2. 使用图标字体的方式
3. 利用before和after伪类的方式

