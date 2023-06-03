import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import './Nav.scss';

class Nav extends React.Component
{
    render ()
    {
        return (
            <div className="topnav">
                <NavLink to='/' /*activeclassname="active" --v6*/ activeClassName="active" /*exact="true" --v6*/ exact={true}>Home</NavLink>
                <NavLink to='/TodoApp'>TodoApp</NavLink>
                <NavLink to='/ListUser'>Users</NavLink>
            </div>
        )
    }
}

export default Nav;