import React, { Component } from 'react'

export default class Project_Component extends Component {

     
    render() {
        
        return (
            <div className="project_component">
                <img src={this.props.data.img} alt="Imagen Site" srcset=""/>
                <div>
                    <h3>{this.props.data.title}</h3>
                    <p>Front-End</p>
                    {this.props.data.frontend.map(technology=>(
                        <div className="tecnologie_container">
                            <p className="technologie__title">
                                {technology.title}
                            </p>
                            <img src={technology.img} alt={technology.alt} />
                        </div>
                    ))}

                    <p>Back-End</p>
                    {this.props.data.backend.map(technology=>(
                        <div className="tecnologie_container">
                            <p className="technologie__title">
                                {technology.title}
                            </p>
                            <img src={technology.img} alt={technology.alt} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
