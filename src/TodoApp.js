import React, { isValidElement } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import  './TodoApp.scss';

class TodoApp extends React.Component
{
    state =
    {
        todoList: 
        [
            {id: 1, title: 'Coding React'},
            {id: 2, title: 'Developing App'},
            {id: 3, title: 'Document OLAP'}
        ]
    }
    AddTodo = (todo) =>
    {
        this.setState({
            todoList: [...this.state.todoList, todo]
        })
    }
    DeleteTodo = (todo) =>
    {
        console.log('todo');
        this.setState({
            todoList: this.state.todoList.filter(item => item.id != todo.id)
        })
    }
    render ()
    {
        return (
            <div className="todo-app">
                <AddTodo AddTodo={this.AddTodo}/>
                <ListTodo todoList={this.state.todoList} DeleteTodo={this.DeleteTodo}/>
            </div>
        )
    }
}

export default TodoApp;