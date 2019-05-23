import axios from 'axios'

export const urlBase = axios.create({
    baseURL: 'https://swapi.co/api/',
    timeout: 10000,
    responseType: 'json'
})