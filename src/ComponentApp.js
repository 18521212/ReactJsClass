import React from 'react';
import ChildComponent from './ChildComponent';

class ComponentApp extends React.Component
{
    state = 
    {
        title: '',
        salary: '',
    }
    handleTitle = (event) =>
    {
        this.setState({
            title: event.target.value
        })
    }
    handleSalary = (event) =>
    {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) =>
    {
        event.preventDefault();
        let job = {id: Math.floor(Math.random()*11), title: this.state.title, salary: this.state.salary}
        let addJob = this.props.addJob;
        addJob(job);
    }
    render ()
    {
        return (
            <form>
                <label htmfor="fname">Title: {this.state.title}</label><br/>
                <input type="text" id="fname" onChange={(event) => this.handleTitle(event)} value={this.state.title}/><br/>
                <label htmfor="lname">Salary: {this.state.salary}</label><br/>
                <input type="text" id="lname" onChange={(event) => this.handleSalary(event)} value={this.state.salary}/><br/><br/>
                <input type="submit" onClick={(event) => this.handleSubmit(event)} value="Submit"/>
            </form> 
        )
    }
}

export default ComponentApp;