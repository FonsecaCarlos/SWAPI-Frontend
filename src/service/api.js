import axios from 'axios'

const baseURL = 'https://swapi.co/api/'

const api = axios.create({ baseURL })

export default api