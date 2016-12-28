### 安装

1. npm i --save-dev babel-core babel-preset-es2015
2. 在根目录建立 .babelrc文件
    ```json
    {
        "presets":["es2015"]
    }
    ```
3. 最后在脚本中调用 babel-core 的 transform 方法
4. 示例:
    ```javascript

    var es5Code = 'let x= n => n + 1';
    var es6Code = require('babel-core').transform(es5Code,{presets:['es2015']}).code

    ```

5. 最后执行 `$  node transToEs5.js` 会生成es5.js文件