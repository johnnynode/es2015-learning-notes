var traceur = require('traceur');
var fs = require('fs');
var path = require('path');

// 将ES6脚本转换为字符串
var contents = fs.readFileSync(path.join(__dirname,'calc.js')).toString();

var res = traceur.compile(contents,{
  filename:'calc.js',
  sourceMap:true,
  // 其他设置
  modules:'commonjs'
});

if(res.err){
  throw res.error;
}

console.log(typeof res);

fs.writeFileSync(path.join(__dirname,'out.js'),res);