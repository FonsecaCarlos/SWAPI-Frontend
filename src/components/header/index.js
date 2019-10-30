import React from 'react'

import { Link } from 'react-router-dom'

import './style.css'

export default (props) => {
    return (
        <header id='topo' className='header-wrapper'>
            <Link to='/SWAPI-Frontend' className='header-wrapper'>
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </Link>
        </header>
    )
}
