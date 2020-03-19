import React from 'react'
import {render} from 'react-dom'

import './index.scss'

import Router from 'con/router/Router'

import {createMock} from './mock/index'

import axios from 'axios'

createMock()

axios.get('/test').then(data => {
    console.log(data)
})

render(<h1>JSX</h1>,
    document.getElementById('root'))

// 热更新配置， 那个模块更新了 执行某个方法

// if (module.hot) {
//     module.hot.accept('con/Router/Router.js', () => {
        
//     })
// }
