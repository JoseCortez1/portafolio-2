import React, { Component } from 'react'
import '../Styles/Home.css'

import {
    Link,
} from 'react-router-dom'
import Background_img from '../Img/background.svg'
export default class Home extends Component {
    render() {
        return (
            <div className="Home__main">
               <div className="Home__main__title">
                   <div className="Home__title__principal">
                        <h1>
                            Web
                        </h1>
                        <h1>
                            Developer
                        </h1>
                   </div>
                   <div className="Home__main__secondary">
                        <h4>Jose Eduardo Vazquez Cortez</h4>
                   </div>
               </div>


                <Link to="Experience"> Experience </Link>
                <Link to="Projects"> Project </Link>
                <Link to="Contact"> Contact </Link>
                <Link to="/"> Home </Link>
            </div>
        )
    }
}

