// 与此文件相关的js也被热更新，不添加词段代码，js更改时不会触发热更新
if (module.hot) {
   module.hot.accept()
}

import '@/style.scss'

let text = 'Hello World!'
let arr = [1, 2, 3, 4]
let arrB = arr.map(item => {
   return item * 2
})

arr.includes(8)
console.log(new Set(arrB))

document.getElementById('root').innerText = text