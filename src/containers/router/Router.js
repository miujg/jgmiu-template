/**
 Crate by jgmiu on 20/03/10.
*/
import React from 'react'

import {HashRouter, Switch ,Route} from 'react-router-dom'

import {Index, Person} from 'con/index'

export default class Router extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return(
            <HashRouter>
                <Switch>
                    <Route path='/person'> <Person /> </Route>
                    <Route path='/'> <Index /></Route>
                </Switch>
            </HashRouter>
        )
    }
}

Router.protoTypes = {}
Router.defaultProps = {}