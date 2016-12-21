### 安装

1. npm i --save-dev babel-core babel-preset-es2015
2. 在根目录建立 .babelrc文件

{
    "presets":["es2015"]
}

3. 最后在脚本中调用 babel-core 的 transform 方法

示例:
var es5Code = 'let x= n => n + 1';
var es6Code = require('babel-core').transform(es5Code,{presets:['es2015']}).code