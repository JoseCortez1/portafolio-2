import React, { Component } from 'react'
import Navbar from './Navbar'

import Project from './Project_Component'
import {projects} from '../Resources/projects.json'

import '../Styles/Projects.css'
import '../index.css'
export default class Projects extends Component {
    render() {
        return (
            <div className="projects background_black">
                <Navbar home={true}/>
                <div className="container_projects">
                    {projects.map( project =>(
                        <Project data={project} />
                    ))}
                </div>
            </div>
        )
    }
}
