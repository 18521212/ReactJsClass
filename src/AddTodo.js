import React from "react";
import { toast, ToastContainer } from 'react-toastify';

class AddTodo extends React.Component
{
    state = 
    {
        todo: ''
    }
    handleOnChange = (event) =>
    {
        this.setState({
            todo: event.target.value
        })
    }
    handleOnClick = () =>
    {
        if (this.state.todo=='')
        {
            toast.error('empty');
            return;
        }
        let todo = {id: Math.floor(Math.random()*1000), title: this.state.todo};
        let {AddTodo} = this.props;
        AddTodo(todo);
        toast.success("Wow so easy !");
        this.setState({
            todo: ''
        })
    }
    render ()
    {
        return (
            <div className="add-todo">
                <input type='text' value={this.state.todo} onChange={(event) => this.handleOnChange(event)}/>
                <button className="add" onClick={() => this.handleOnClick()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;