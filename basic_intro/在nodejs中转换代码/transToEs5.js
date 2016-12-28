// 读取 es6 代码
const fs = require('fs');
const path = require('path');
const babelCore = require('babel-core');

var sourceCode = fs.readFileSync(path.join(__dirname,'es6.js'), 'utf8'); // 同步读取该文件
var es5Code = babelCore.transform(sourceCode,{presets:["es2015"]}).code;

// 写入文件
fs.writeFile(path.join(__dirname,'es5.js'),es5Code, (err) => {
    if (err) throw err;
    console.log('es5.js file saved!');
});