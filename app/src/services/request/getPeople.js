import { urlBase } from '../urlBaseSWAPI'
import { fetchData, fetchDataFulfilled, fetchDataRejected } from '../../redux/reducers/peopleReducer'
import axios from 'axios'
 
export const getPeople = () => {
    return async dispatch => {
        dispatch(fetchData(true))
        urlBase.get('/people')
            .then(res => {
                console.log(res.data.results)
                console.log(dispatch)
                dispatch(fetchDataFulfilled(res.data.results))
                setTimeout(() => {dispatch(getPokemon())}, 3000)
                // dispatch(getPokemon())
                
            })
            .catch(err => {
                console.log(err.message)
                dispatch(fetchDataRejected(String(err.message)))
            })
    }
}


export const getPokemon = () => {
    return async dispatch => {
        axios.get('https://pokeapi.co/api/v2/ability/')
            .then(res => dispatch(fetchDataFulfilled(res.data.results)))
            .catch(err => console.log(err))
    }
}