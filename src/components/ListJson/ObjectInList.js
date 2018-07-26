import React, { Component } from 'react'
import './styles.css'

export default class ObjectInList extends Component {
    render(){
        return (
            <div className='pervert'>
                {this.props.title}
            </div>
        )
    }
}