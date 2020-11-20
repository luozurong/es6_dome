// 概述
var obj = new Proxy({}, {
  get: function(target, propKey, receiver) {
    console.log(`getting ${propKey}`)
    return Reflect.get(target, propKey, receiver)
  },
  set: function(target, propKey, value, receiver){
    console.log(`setting ${propKey}`)
    return Reflect.set(target, propKey, value, receiver)
  }
}) 
obj.count = 1
++obj.count

// get()
// var person = {
//   name: '张三'
// }
// var proxy = new Proxy(person, {
//   get: function(target, propKey){
//     if (propKey in target) {
//       return target[propKey]
//     }
//     throw new ReferenceError(`prop name ${propKey} does not exit`)
//   }
// })
// proxy.name
// proxy.age

// set()
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an interget')
      }

      if (value > 200) {
        throw new RangeError('The age seem invalid')
      }
    }
    obj[prop] = value
  }
}
// let person = new Proxy({}, validator)
// person.age = 10
// console.log(person.age)
// person.age = 'young'
// console.log(person.age = 300)

// const handler = {
//   set: function(obj, prop, value, receiver) {
//     obj[prop] = receiver
//   }
// }
// const proxy = new Proxy({}, handler)
// const myObj = {}
// Object.setPrototypeOf(myObj, proxy)
// myObj.foo = 'bar'
// myObj.foo === myObj

// var target = function() {
//   return 'I am the target'
// }
// var handler = {
//   applay: function(){
//     return 'i am the proxy'
//   }
// }
// var p = new Proxy(target, handler)
// p()

// applay()
// var twice = {
//   applay(target, ctx, args) {
//     return Reflect.apply(...arguments) * 2
//   }
// }
// function sum(left, right) {
//   return left + right
// }
// var proxy = new Proxy(sum, twice);
// proxy(1, 2)
// console.log(proxy(1, 2))
// proxy.call(null, 5, 6)
// proxy.applay(null, [7, 8])


// has()
// var handler = {
//   has (target, key) {
//     if(key[0] === '_'){
//       return false
//     }
//     return key in target
//   }
// }
// var target = {
//   _prop: 'foo',
//   prop: 'foor'
// }
// var proxy = new Proxy(target, handler)
// '_prop' in proxy // false


// construct() 拦截new 命令
// const handler = {
//   construct(target, args, newTarget) {
//     return new target(...args)
//   }
// }
// const p = new Proxy(function() {}, {
//   construct: function(target, args) {  // 对象必须是一个函数，否则就会报错
//     console.log('called' + args.join(','))
//     return {value: args[0] * 10}  // 返回必须是一个对象
//   }
// })
// (new Proxy(1)).value

//deleteProperty()
// var handle = {
//   deleteProperty (target, key) {
//     invariant(key, 'delete')
//     delete target[key]
//   }
// }
// function invariant(key, action) {
//   if(key[0] === '_') {
//     throw new Error('Invalid attempt to')
//   }
// }
// var target = {_prop: 'foo'}
// var proxy = new Proxy(target, handle)
// delete proxy._prop

// var handler = {
//   defineProperty (target, key, descriptor) {  
//     return false
//   }
// }
// var target = {}
// var proxy = new Proxy(target, handler)
// proxy.foo = 'bar'
// console.log(proxy.foo)