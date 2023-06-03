import React from "react";
import ComponentApp from "./ComponentApp";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component
{
    state = 
    {
        arrJobs: [
            {id: 1, title:'Developer', salary: 1000},
            {id: 2, title:'Tester', salary: 500},
            {id: 3, title:'Product Manager', salary: 2000}
        ]
    }
    addJob = (job) =>
    {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteJob = (job) =>
    {
        let a = this.state.arrJobs.filter (item => item.id!=job.id);
        this.setState({
            arrJobs: a
        })
    }
    render ()
    {
        return (
            <>
                <ComponentApp addJob={this.addJob}/>
                <ChildComponent
                a={this.state.arrJobs}
                deleteJob = {this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent;