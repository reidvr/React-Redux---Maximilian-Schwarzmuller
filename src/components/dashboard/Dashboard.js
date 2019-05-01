import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../project/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const projects = this.props.project
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        project: state.firestore.ordered.projects
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard);