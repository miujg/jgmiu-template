import React, { Component } from 'react'
import {render} from 'react-dom'
import './index.scss'
import {Provider} from 'react-redux'
import {Router} from 'con/index'
import store from './redux/store'

render(
    <Provider store={store}>
        <Router />
    </Provider>,
   document.getElementById('root')
)