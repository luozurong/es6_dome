// Reflect 对象与proxy 对象一样为了操作对象提供的api

// 将Object 对象的一些明显的语言内部方法放到Reflect 对象上
// 如：Object.defineProperty 变成 Reflect.difinePorpery

// 修改某些Object方法返回结果更加合理
// Object.defineProperty(obj, name, desc) 抛出错误
// Reflect.definePropery(obj, name, desc) 返回false

// 让Object 操作变为函数行为
// 'assign' in Object    Reflect.has(Object, 'assign')

//Reflect 和proxy 对应的方法一致
// var loggedObj = new Proxy(obj, {
//   get (target, name) {
//     console.log('get', target, name)
//     return Reflect.get(target, name)
//   },
//   deleteProperty (target, name) {
//     console.log('delect' + name)
//     return Reflect.deleteProperty(target, name)
//   },
//   has(target, name) {
//     console.log('has' + name)
//     return Reflect.has(target, name)
//   }
// })

// const person = observable({
//   name: '张三',
//   age: 20
// })
// function print(){
//   console.log(`${person.name}, ${person.age}`)
// }
// observable(print);
// person.name = '里斯'

const queuedobservers = new Set()
const observe = fn => {
  queuedobservers.add(fn)
}
const observable = obj => new Proxy(obj, {set});
function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver)
  queuedobservers.forEach(observe => observe())
  return result
}