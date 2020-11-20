let flag = false
async function testAsync () {
  let aa = ''
  let a = await testFn().catch(err => {
    console.log(err)
    setTimeout(function() {
      aa = 111
    },100)
    // Promise.resolve('错误抛出')
  })
  console.log(1111)
  return a + ' ' +  111
}

function testFn() {
  return new Promise((resolve, reject) => {
    if (flag) {
      resolve(true)
      //return '12345'
    } else {
      // return '54321'
      reject(false)
    }
  })
}
testFn().then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})

testAsync().then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
