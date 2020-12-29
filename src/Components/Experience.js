import React, { Component } from 'react'
import '../Styles/Experience.css'
import '../index.css'
import Navbar from './Navbar'
import {jobs} from '../Resources/experience.json'
export default class Experience extends Component {
    render() {
        return (
            <div className="experience background_black">
                <Navbar home={true}/>
                <div className="experience__container">
                    {
                        jobs.map( job => (
                            <div className="experience__job" key={job.title} >
                                <p className="experience__job__title">{job.title}</p>
                                <p className="experience__job__date">{job.date_start} to {job.date_end}</p>
                                <p className="experience__job__description">{job.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
