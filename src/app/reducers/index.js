import ActionTypes from '../constants/actionTypes'

const initialState = {
    weatherData:[],
    townFound:undefined
};

export default function func(state = initialState, action){

    switch(action.type){

        case ActionTypes.SEARCH_WEATHER:
            return {
                ...state,
                weatherData:action.payload.list,
                townFound:true
            };
        case ActionTypes.TOWN_ERROR:
            return {
                ...state,
                townFound:false,
            };
        default: return state
    }

}