import React, { Component } from 'react'

import api from '../../../service/api'

import '../style.css'

class People extends Component {
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
        const resp = await api.get('people/')
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
                <h3 className='sub-title'>Personagens</h3>
                <div className='page-wrapper'>
                    {list.results.map((item) => (
                        <div key={item.url} className='page-wrapper-box'>
                            <p><strong>Nome: </strong>{item.name}</p>
                            <p><strong>Altura: </strong>{item.height}</p>
                            <p><strong>Cor do Cabelo: </strong>{item.hair_color}</p>
                            <p><strong>Cor da Pele: </strong>{item.skin_color}</p>
                            <p><strong>Cor dos Olhos: </strong>{item.eye_color}</p>
                            <p><strong>Ano de Nascimento: </strong>{item.birth_year}</p>
                            <p><strong>Genero: </strong>{item.gender}</p>
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

export default People