import React, { Component } from 'react';
import './Jobs.css';
import './App.css';
import JobsListItem from './JobsListItem';
import axios from 'axios';


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
                    {jobsJSX}
                </div>
            </div>
        )
    }
}

export default Jobs;