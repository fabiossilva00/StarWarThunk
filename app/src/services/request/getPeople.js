import { urlBase } from '../urlBaseSWAPI'
import { fetchData, fetchDataFulfilled, fetchDataRejected } from '../../redux/reducers/peopleReducer'

export const getPeople = () => {
    return async dispatch => {
        dispatch(fetchData(true))
        urlBase.get('/people')
            .then(res => {
                console.log(res.data.results)
                dispatch(fetchDataFulfilled(res.data.results))
            })
            .catch(err => {
                console.log(err.message)
                dispatch(fetchDataRejected(String(err.message)))
            })
    }
}
