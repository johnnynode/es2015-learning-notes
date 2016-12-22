class Calc {
  constructor(){
    console.log('Calc constuctor');
  }
  add(a,b){
    return a + b;
  }
}
var c= new Calc();
console.log(c.add(4,5)); // 9