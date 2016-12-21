### 说明
- 需要先安装 `babelify` 和 `babel-preset-es2015`
- 全局安装 `browserify`
- 在package.json 中添加下面的代码，则不必每次都输入参数。
```json
{
    "browserify":{
        "transform":[["babelify",{"presets":["es2015"]}]]
    }
}
```