import React, { Component } from 'react'
import {
    Link,
} from 'react-router-dom'
import '../Styles/Navbar.css'
export default class Navbar extends Component {

    render() {
        let home;
        let menuOpen;
        let navbar_css;
        if(this.props.home){
            home = <Link className="navbar__container__link"  to="Home" > Home </Link>
        }
        let openMenu = ()=>{
            console.log("Open menu")
            menuOpen = {
                display:"none"
            }
            navbar_css ={
                display: "block"
            }
        }
        return (
            <div>
                <div onClick={openMenu} style={menuOpen} className="burger_menu">
                    <svg width="124" height="121" viewBox="0 0 124 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="11" y="14" width="102" height="19" rx="9" fill="white"/>
                    <rect x="11" y="51" width="102" height="19" rx="9" fill="white"/>
                    <rect x="11" y="88" width="102" height="19" rx="9" fill="white"/>
                    </svg>
                </div>
                <div style={navbar_css}  className={this.props.navbar_class + " navbar"}>
                    <nav className="navbar__container">
                        <Link className="navbar__container__link" to="Experience" > Experience </Link>
                        <Link className="navbar__container__link" to="Projects" > Projects </Link>
                        <Link className="navbar__container__link" to="Contact" > Contact </Link>
                        {home}
                    </nav>
                    <div className="white_bar">
                    </div>
                </div>
            </div>
        )
    }
}
