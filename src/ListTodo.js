import React from "react";
import { toast } from "react-toastify";

class ListTodo extends React.Component
{
    state =
    {
        todo: {}
    }
    handleEdit = (item) =>
    {
        this.setState({
            todo: item
        })
    }
    handleSave = () =>
    {
        let title = this.state.todo.title;
        if (title == '')
        {
            toast.error('empty');
            return;
        }
        let todoList = this.props.todoList;

        let objIndex = todoList.findIndex((item => item.id === this.state.todo.id));

        todoList[objIndex].title = this.state.todo.title;
        toast.success('todo');
        this.setState({
            todo: {}
        })
    }
    handleOnChange = (event) =>
    {
        this.setState({
            todo: {...this.state.todo, title: event.target.value}
        })
    }
    render ()
    {
        let {todoList, DeleteTodo} = this.props;
        return (
            <div className="list-todo">
                {
                    todoList.map((item, index) => {
                        return (
                            this.state.todo.id != item.id?
                            <div key={item.id} className="todo">
                                {index+1} - {item.title} <button className="edit" onClick={() => this.handleEdit(item)}>Edit</button><button onClick={() => DeleteTodo(item)}>Delete</button>
                            </div>
                            :
                            <div key={item.id} className="todo">
                            {index+1} - <input value={this.state.todo.title} onChange={this.handleOnChange}/> <button className="edit" onClick={this.handleSave}>Save</button>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ListTodo;