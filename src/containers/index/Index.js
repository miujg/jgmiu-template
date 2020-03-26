/**
 Crate by jgmiu on 20/03/10.
*/
import React from 'react'
import {connect} from 'react-redux'

import {person} from 'action/index' 

const mapStateToProps = (state) => {
    return {
        person: state.person
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeName: (name) => {
            dispatch({type: person.CHANGE_NAME, name: name} )
        }
    }
}

class Index extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: props.person.name
        }
    }

    componentDidMount() {
    }

    handleClickBtn = () => {
        this.props.onChangeName('miujg')
    }

    render() {
        return(
            <div className={'Index'}>
                <h1>{this.props.person.name}</h1>
                <button onClick={this.handleClickBtn}>change name</button>
            </div>
        )
    }
}

Index.protoTypes = {}
Index.defaultProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Index)