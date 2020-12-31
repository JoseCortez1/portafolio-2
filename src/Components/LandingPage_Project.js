import React, { Component } from 'react'

import '../Styles/Landing_page.css'
import '../index.css'
import {projects} from '../Resources/projects.json'
import {useParams} from 'react-router-dom'
export default class LandingPage_Project extends Component {
    render() {
        return (
            <div className="landing_page__main background_black"> 
                <Landing />
            </div>
        )
    }
}

function Landing(){
    let {id} = useParams();
    let data_project = projects[id];
    let dir_base = window.location.href.split('P')[0] + "img/"
    
    return(
        <div className="landing_page">
            <img className="landing_page__img" src={dir_base + data_project.img} alt="Imagen del proyecto" srcset=""/>
            <div className="landing_page__description">
                <h1>
                    {data_project.title}
                </h1>
                <p>
                    {data_project.description_project}

                </p>
                
            </div>
        </div>
    )
}