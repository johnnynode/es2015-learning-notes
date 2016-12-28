// const 声明的常量，一旦声明，不能修改
const PI = 3.14;

// PI = 3; //  再次赋值报错

// const 定义的常量不会提升

// const 只保证指向的地址不变，而不保证数据不变

const a = [];

// a = [1,2]; // 报错，不能更换地址

a.push(1); // 数据改变
console.log(a); // [1]

// 不想要const 定义的对象数据改变，冻结
const foo = Object.freeze({name: 'foo'});
foo.age = 10; // 不起作用
foo.name = 'x'; // 修改属性，不起作用

console.log(foo); // {name:'foo'}

// 冻结对象的属性， 这个有意义吗？

var freezeObj = {
  'name': 1,
  'age': 10,
  'otherInfo':{
    'class':'cl01',
    'teacher':'zh3'
  }
};

// 开始冻结
// 此处并未像书上使用 goes to 语法
function freeze(obj) {
  "use strict";
  Object.freeze(obj); // 冻结自身
  Object.keys(obj).forEach(function (k, v) {
    if(typeof obj[k] === 'object'){
      freeze(obj[k]);
    }
  });
}

// 我觉得这样并没有什么意义。

// 开始调用
freeze(freezeObj);

// 然后尝试性修改对象属性

freezeObj.otherInfo.class = 'cl02'; // 并没有起作用哦。

console.log('freezeObj');
console.log(freezeObj);




















