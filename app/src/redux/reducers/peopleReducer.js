import { 
    GET_PEOPLE_PENDING, 
    GET_PEOPLE_FULFILLED, 
    GET_PEOPLE_REJECTED 
} from '../actions/actionTypes'

const initialState = {
    people: [],
    loading: false,
    errorMessage: ''
}

///Reducers

export const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PEOPLE_PENDING:
            return {
                ...state,
                loading: action.payload,
                errorMessage: '',
                people: []
            }
        case GET_PEOPLE_FULFILLED:
            return {
                ...state,
                people: action.payload,
                loading: action.loading,
                errorMessage: ''
            }
        case GET_PEOPLE_REJECTED:
            return {
                ...state,
                errorMessage: action.payload,
                loading: action.loading,
                people: []
            }
        default:
            return state
    }
}

///Actions

export const fetchData = loading => {
    return {
        type: GET_PEOPLE_PENDING,
        payload: loading
    }
}

export const fetchDataFulfilled = data => {
    return {
        type: GET_PEOPLE_FULFILLED,
        payload: data,
        loading: false
    }
}

export const fetchDataRejected = error => {
    return {
        type: GET_PEOPLE_REJECTED,
        payload: error,
        loading: false
    }
}

