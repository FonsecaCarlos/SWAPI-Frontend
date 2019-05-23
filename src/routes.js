import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'

import Main from './components/main'

import People from './components/page/people'
import Film from './components/page/film'

import Planet from './components/page/planet'
import Species from './components/page/species'
import Starships from './components/page/startships'
import Vehicles from './components/page/vehicles'

export default props => (
    <Router>
        <Header title='Bem vindo ao SWAPI - Star Wars API'
            subtitle='Desbrave esse universo em um click!!!'/>

        <Route exact path='/' component={ Main } />
        <Route path='/personagens' component={ People } />
        <Route path='/filmes' component={ Film } />

        <Route path='/planetas' component={ Planet } />
        <Route path='/especies' component={ Species } />
        <Route path='/naves' component={ Starships } />
        <Route path='/veiculos' component={ Vehicles } />

        <Footer />
    </Router>
)