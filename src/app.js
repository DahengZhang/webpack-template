// 与此文件相关的js也被热更新，不添加词段代码，js更改时不会触发热更新
if (module.hot) {
  module.hot.accept()
}

import Axios from 'axios'
import '@/style.scss'
import appStyle from '@/app.css'
import publicStyle from '@/public.css'

let text = 'Hello World!'
let arr = [1, 2, 3, 4]
let arrB = arr.map(item => {
  return item * 2
})

arr.includes(8)
console.log(new Set(arrB))
document.getElementById('root').innerHTML = `
<div class='${appStyle.module}'>${text}</div>
<div class='${publicStyle.module}'>${text}</div>
`

// Axios.get('/api/test').then(function (response) {
//   console.log('response', response.data)
//   document.getElementById('root').innerHTML = response.data
// }).catch(function (error) {
//   console.log(error)
// })

const page = 'b'
if (page === 'a')
  import(/* webpackChunkName: 'componentA' */
    '@/components/component.a').then(component => {
      console.log('异步加载组建A: ', component)
    })
else
  import(/* webpackChunkName: 'componentB' */
    '@/components/component.b').then(component => {
      console.log('异步加载组建B: ', component)
    })
