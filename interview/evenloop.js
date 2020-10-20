// 有关evenloop的题目
console.log('script start');  // 主1

setTimeout(() => { // 宏1
  console.log('北歌');
}, 1 * 2000);

Promise.resolve()
.then(function() { // 微1
  console.log('promise1');
}).then(function() {
  console.log('promise2'); // 微4
});


async function foo() {
  await bar() // 主2
  console.log('async1 end') // 微2
} 
foo() 

async function errorFunc () {
  try {
    await Promise.reject('error!!!') 
  } catch(e) {
    console.log(e) // 微3
  }
  console.log('async1'); // 微5
  return Promise.resolve('async1 success')
}
errorFunc().then(res => console.log(res)) // 微6

function bar() {
  console.log('async2 end') 
}

console.log('script end'); // 主3

// start -> async2 end -> end -> p1 -> as end -> p2 -> error-> as1-> as1 success -> 北歌