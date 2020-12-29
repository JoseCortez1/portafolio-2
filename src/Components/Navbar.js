import React, { Component } from 'react'
import {
    Link,
} from 'react-router-dom'
import '../Styles/Navbar.css'
export default class Navbar extends Component {

    render() {
        let home;

        if(this.props.home){
            home = <Link className="navbar__container__link" to="/"> Home </Link>
        }
        return (
            <div className="navbar">
                <nav className="navbar__container">
                    <Link className="navbar__container__link" to="Experience"> Experience </Link>
                    <Link className="navbar__container__link" to="Projects"> Projects </Link>
                    <Link className="navbar__container__link" to="Contact"> Contact </Link>
                    {home}
                </nav>
                <div className="white_bar">
                </div>
            </div>
        )
    }
}
