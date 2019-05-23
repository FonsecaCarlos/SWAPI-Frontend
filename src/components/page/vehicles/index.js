import React, { Component } from 'react'

import api from '../../../service/api'

import '../style.css'

class Vehicles extends Component {
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
        const resp = await api.get('vehicles/')
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
                <h3 className='sub-title'>Veículos</h3>
                <div className='page-wrapper'>
                    {list.results.map((item) => (
                        <div key={item.url} className='page-wrapper-box'>
                            <p><strong>Nome: </strong>{item.name}</p>
                            <p><strong>Modelo: </strong>{item.model}</p>
                            <p><strong>Fabricante: </strong>{item.manufacturer}</p>
                            <p><strong>Custo em Cŕedito: </strong>{item.cost_in_credits}</p>
                            <p><strong>Comprimento: </strong>{item.length}</p>
                            <p><strong>Velocidade Máxima: </strong>{item.max_atmosphering_speed}</p>
                            <p><strong>Equipe Técnica: </strong>{item.crew}</p>
                            <p><strong>Passageiros: </strong>{item.passengers}</p>
                            <p><strong>Capacidade de Carga: </strong>{item.cargo_capacity}</p>
                            <p><strong>Consumo: </strong>{item.consumables}</p>
                            <p><strong>Classe da Nave: </strong>{item.vehicle_class}</p>
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

export default Vehicles