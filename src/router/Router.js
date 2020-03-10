/**
 Crate by jgmiu on 20/03/10.
*/
import React from 'react'

import {BrowserRouter, Switch ,Route} from 'react-router-dom'

export default class Router extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route  />
                </Switch>
            </BrowserRouter>
        )
    }
}

Router.protoTypes = {}
Router.defaultProps = {}