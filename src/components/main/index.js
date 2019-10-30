import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './style.css'

export default class Main extends Component {
    render() {

        return (
            <section className='main-wrapper'>
                <Link className='card-main' to='/SWAPI-Frontend/filmes'> <strong>Filmes</strong></Link>
                <Link className='card-main' to='/SWAPI-Frontend/personagens'> <strong>Personagens</strong></Link>
                <Link className='card-main' to='/SWAPI-Frontend/planetas'> <strong>Planetas</strong></Link>
                <Link className='card-main' to='/SWAPI-Frontend/especies'> <strong>Espécies</strong></Link>
                <Link className='card-main' to='/SWAPI-Frontend/naves'> <strong>Naves Estelares</strong></Link>
                <Link className='card-main' to='/SWAPI-Frontend/veiculos'> <strong>Veículos</strong></Link>
            </section>    
        )
    }
}
