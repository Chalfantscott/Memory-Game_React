import React, { Component } from 'react';
import './Jobs.css';
import './App.css';
import JobsListItem from './JobsListItem';
import axios from 'axios';
import Job from './Job.js';
import { Switch, Route } from 'react-router-dom';


class Jobs extends Component {
    constructor () {
        super();
        this.state = {
            jobs: []
        }
    }
    
    componentWillMount() {
        axios.get('/api/jobs')
        .then(({ data }) => {
            this.setState( {jobs: data} )
        })
    }
    

    render() {
        var jobsJSX = this.state.jobs.map((job, index) => {
            return <JobsListItem key={index} {...job} />
        });
        return (
            <div>
                <header className="App-header">
                <h1 className="App-title">Jobs in Atlanta</h1>
                <p className="App-subtitle">Click to Explore</p>
                </header>
                <div className="Jobs">
                    <Switch>
                        <Route exact path="/jobs" render={ () => jobsJSX } />
                        <Route path="/jobs/:id" component={Job} /> 
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Jobs;