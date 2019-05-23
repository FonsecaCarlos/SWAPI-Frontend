import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './style.css'

export default class Main extends Component {
    render() {

        return (
            <section className='main-wrapper'>
                <Link className='card-main' to='/filmes'> <strong>Filmes</strong></Link>
                <Link className='card-main' to='/personagens'> <strong>Personagens</strong></Link>
                <Link className='card-main' to='/planetas'> <strong>Planetas</strong></Link>
                <Link className='card-main' to='/especies'> <strong>Espécies</strong></Link>
                <Link className='card-main' to='/naves'> <strong>Naves Estelares</strong></Link>
                <Link className='card-main' to='/veiculos'> <strong>Veículos</strong></Link>
            </section>    
        )
    }
}

/*
<section>
    <button onClick={}> <strong>Filmes</strong></button>
    <button onClick={}> <strong>Personagens</strong></button>
    <button onClick={}> <strong>Planetas</strong></button>
    <button onClick={}> <strong>Espaçonaves</strong></button>
    <button onClick={}> <strong>Startships</strong></button>
    <button onClick={}> <strong>Veículos</strong></button>
</section>
*/