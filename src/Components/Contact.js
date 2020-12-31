import React, { Component } from 'react'
import Navbar from './Navbar'
import '../index.css'
import '../Styles/Contact.css'
export default class Contact extends Component {
    render() {
        return (
            <div className="contact background_black">
                <Navbar home={true}/>
                <Form />
            </div>
        )
    }
}

function Form(){
    return(
        <div>
            Hello
        </div>
    )
}