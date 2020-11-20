// function Point(x, y) {
//   this.x = x
//   this.y = y
// }
// Point.prototype.toString = function () {
//   return '(' + this.x + ', ' + this.y + ')'
// }
// var p = new Point(1, 6)
// console.log(p.toString())
//Object.keys(Point.prototype)
// ['toString']


// class Point {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
  
//   toString() {
//     return '(' + this.x + ', ' + this.y + ')'
//   }
// }

// getter setter
// class Myclass{
//   constructor(){

//   }
//   get porp() {
//     return 'getter'
//   }
//   setProp(value) {
//     console.log('setter' + value)
//   }
// }

// let inst = new Myclass()
// inst.porp = 123;
// inst.porp

// let p = new Point(1, 4)
// console.log(p.toString())

// 类定义的方法都是不可以枚举的
// Object.keys(Point.prototype)
// []
// Object.getOwnPropertyNames(Point.prototype)
// ['contructor', 'toString']



// const myClass = class Me {
//   constructor(name) {
//     this.name = name
//   }
//   getClassName(name) {
//     return Me.name
//   }
// }
// let inst = new myClass('1')
// console.log(inst.getClassName())




