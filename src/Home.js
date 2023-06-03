import React from "react";
import { Navigate, useNavigate, withRouter } from "react-router-dom";
import Color from "./Color";
import logo from './assets/images/khqs.jpg';
import { connect } from 'react-redux'; 

class Home extends React.Component {
    componentDidMount() {
        console.log('prop', this.props)
        // setTimeout(() => {
        //     this.props.history.push('TodoApp')
        // }, 3000) home redirect TodoApp ListUser
    }

    handleDeleteUser = (user) =>
    {
        console.log('delete')
        this.props.deleteUserRedux(user)
    }

    handleCreateUser = () =>
    {
        this.props.addUserRedux()
    }

    render() {
        console.log('dataRedux: ', this.props.dataRedux)
        let listUser = this.props.dataRedux;
        return (
            <>
                <div>Hello World!</div>
                <div>
                    <img src={logo} style={{ width: '200px', height: '200px', marginTop: '20px' }}/>
                </div>
                <div>
                    {
                        listUser && listUser.length > 0 &&
                        listUser.map((item, index) =>
                        {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add</button>
                </div>
            </>
        )
    }
}

// const Home = () => {
//     // let a = useNavigate ();
//     // setTimeout(() => {
//     //     a('TodoApp');
//     // }, 3000);
//     return (
//         <div>Hello World!</div>
//     )
// } --v6

const mapStateToProps = (state) =>
{
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'CREATE_USER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color/*withRouter*/(Home));