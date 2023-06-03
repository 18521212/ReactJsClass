import React from "react";
import {withRouter} from 'react-router-dom';
import axios from "axios";

class DetailUser extends React.Component
{
    state = 
    {
        user: {}
    }
    async componentDidMount ()
    {
        if (this.props.match && this.props.match.params)
        {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }
    handleOnClick = () =>
    {
        this.props.history.push('/ListUser')
    }
    render ()
    {
        let {user} = this.state // out render
        return (
            <>
                <div>
                    Name: {user.first_name} {user.last_name}
                </div>
                <div>
                    Email: {user.email}
                </div>
                <div>
                    <img src={user.avatar} />
                </div>
                <div>
                    <button onClick={() => this.handleOnClick()}>Back</button>
                </div>
            </>
        )
    }
}

export default withRouter(DetailUser);
