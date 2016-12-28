备注： 这些代码在浏览器环境中测试，并不是在node 或者repl中测试的

- 其他：
在ES5 中声明变量的方法有两种，var 和 function
在ES6 中有6种，其他四种有：let const import class

- 有关全局对象属性
在nodejs REPL 中有没有window对象，所有全局挂载到global上的

- ES6中规定：
 var  function 命令声明变量依旧是全局对象属性
 (此处仅限于浏览器环境)
而 let const class 声明的全局变量不属于全局对象的属性。
