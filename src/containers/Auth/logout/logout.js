import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class Logout extends Component {
    componentDidMount () {
        this.props.onLogout();
        this.props.onClear();
    }

    render () {
        return <Redirect />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout()),
        onClear:() => dispatch(actions.clearCart())
        
    };
};

export default connect(null, mapDispatchToProps)(Logout);