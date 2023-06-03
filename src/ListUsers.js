import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import './ListUser.scss';
// import { Navigate, useNavigate } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ListUser extends React.Component {
    state =
        {
            ListUser: []
        }
    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        // .then(res => {
        //     console.log('res: ', res.data.data)
        // })

        let a = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            ListUser: a && a.data && a.data.data ? a.data.data : []
        })
    }
    handleOnClick = (user) =>
    {
        // {<Navigate replace to='/TodoApp' />}
        this.props.history.push(`/ListUser/${user.id}`) //ref
    }
    render() {
        let { ListUser } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    List user
                </div>
                <div className="list-user-content">
                    {
                        ListUser && ListUser.length > 0 &&
                        ListUser.map((item, index) => {
                            return (
                                <div className="child" key={item.id} onClick={() => this.handleOnClick(item)}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

// const ListUser = () => {
//     const [listUser, setlistUser] = useState([])
//     useEffect(() => {
//         const b = async () => {
//             let a = await axios.get('https://reqres.in/api/users?page=2')
//             this.setState({
//                 ListUser: a && a.data && a.data.data ? a.data.data : []
//             })
//         }
//     })
//     handleOnClick = (user) => {
//         let a = useNavigate();
//         a('TodoApp');
//     }
//     let { ListUser } = this.state;
//     return (
//         <div className="list-user-container">
//             <div className="title">
//                 List user
//             </div>
//             <div className="list-user-content">
//                 {
//                     ListUser && ListUser.length > 0 &&
//                     ListUser.map((item, index) => {
//                         return (
//                             <div className="child" key={item.id} onClick={(item) => this.handleOnClick(item)}>
//                                 {index + 1} - {item.first_name} {item.last_name}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

export default withRouter(ListUser);