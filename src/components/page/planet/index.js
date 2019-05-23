import React, { Component } from 'react'

import api from '../../../service/api'

import '../style.css'

class Planet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: undefined,
            list: {
                results: []
            }
        }
    }

    //codigo da internet
    redirectView = (elem) => {
        window.scroll({
            top: document.querySelector(elem),
            behavior: 'auto'// smooth - tem um animação
        });
    }

    componentDidMount() {
        this.findAplication()
    }

    findAplication = async () => {
        const resp = await api.get('planets/')
        const list = resp.data
        this.setState({ list })
    }

    navegation = async (url) => {
        const resp = await api.get(`${url}`)
        const list = resp.data
        this.setState({ list })
        this.redirectView('topo')
    }

    render() {
        const { list } = this.state
        
        return (
            <div>
                <h3 className='sub-title'>Planetas</h3>
                <div className='page-wrapper'>
                    {list.results.map((item) => (
                        <div key={item.url} className='page-wrapper-box'>
                            <p><strong>Nome: </strong>{item.name}</p>
                            <p><strong>Período de rotação: </strong>{item.rotation_period}</p>
                            <p><strong>Período da órbita: </strong>{item.orbital_period}</p>
                            <p><strong>Diâmetro: </strong>{item.diameter}</p>
                            <p><strong>Clima: </strong>{item.climate}</p>
                            <p><strong>Gravidade: </strong>{item.gravity}</p>
                            <p><strong>Terreno: </strong>{item.terrain}</p>
                            <p><strong>Água da superfice: </strong>{item.surface_water}</p>
                            <p><strong>População: </strong>{item.population}</p>
                        </div>
                    ))}
                </div>


                <div className='navegation'>
                    {list.previous ? <button
                        onClick={() => this.navegation(list.previous)}>Anterior</button> : null}
                    {list.next ? <button
                        onClick={() => this.navegation(list.next)}>Próximo</button> : null}
                </div>
            </div>
        )
    }
}

export default Planet