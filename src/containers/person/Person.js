/**
 Crate by jgmiu on 20/03/10.
*/
import React from 'react'
import {HashRouter, Switch ,Route, Link} from 'react-router-dom'
import {Password} from 'com/index'
export default class Person extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return(
            <div className={'Person'}>
                <HashRouter>
                    <Link to='/person/password'>password</Link>
                    <Switch>
                        <Route path='/person/password' component={Password} />  
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}

Person.protoTypes = {}
Person.defaultProps = {}