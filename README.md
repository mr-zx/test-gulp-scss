### 安装使用
git clone下来之后，安装依赖

```
npm i
```

然后执行


```
gulp
```

这样scss文件夹里面的scss文件就编译成css文件了，改变scss文件，会实时编译成css文件


### 讲一下原理
1、首先要创建一个gulp的配置文件，文件名叫gulpfile.js

2、通过require导入依赖包，这就是我们刚刚本地安装的原因

3、编写gulp的task方法

4、当前文件夹下，命令行运行该方法即可：gulp 方法名

### 介绍一下使用gulp编译sass的方法

node装好之后，可以新建一个叫test-gulp-scss的文件夹，在这个文件夹下面打开命令行窗口，先执行npm init的命令配置好package.json，然后再在当前目录下本地安装gulp，执行命令npm install gulp --save-dev（我通常安装淘宝镜像，所以执行cnpm install gulp --save-dev），安装好gulp之后继续安装gulp-sass插件：npm install gulp-sass --save-dev（都是局部安装的，方便require引入），到这，相关前期准备就算好了

然后编写gulpfile.js

完事执行gulp命令即可
