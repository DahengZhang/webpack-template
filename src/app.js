// 与此文件相关的js也被热更新，不添加词段代码，js更改时不会触发热更新
if (module.hot) {
   module.hot.accept()
}

import '@/style.scss'

let text = 'Hello World!'

document.getElementById('root').innerText = text
