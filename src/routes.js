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

        <Route exact path='/SWAPI-Frontend' component={Main} />
        {/*<Route exact path='/' render={() => (<Redirect to="/SWAPI-Frontend" />)} />*/}

        <Route path='/SWAPI-Frontend/personagens' component={People} />
        <Route path='/SWAPI-Frontend/filmes' component={Film} />

        <Route path='/SWAPI-Frontend/planetas' component={Planet} />
        <Route path='/SWAPI-Frontend/especies' component={Species} />
        <Route path='/SWAPI-Frontend/naves' component={Starships} />
        <Route path='/SWAPI-Frontend/veiculos' component={Vehicles} />

        <Footer />
    </Router>
)