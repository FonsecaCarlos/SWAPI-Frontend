import React, { Component } from 'react'

import api from '../../../service/api'

import '../style.css'

class Film extends Component {
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
        const resp = await api.get('films/')
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
                <h3 className='sub-title'>Filmes</h3>
                <div className='page-wrapper'>
                    {list.results.sort((a, b) => a.episode_id > b.episode_id ? 1 : -1).map((item) => (
                        <div key={item.url} className='page-wrapper-box'>
                            <p><strong>Titulo: </strong>{item.title}</p>
                            <p><strong>Data de Lançamento: </strong>{item.release_date}</p>
                            <p><strong>Produtor: </strong>{item.producer}</p>
                            <p><strong>Epsódio: </strong>{item.episode_id}</p>
                            <p><strong>Diretor: </strong>{item.director}</p>
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

export default Film