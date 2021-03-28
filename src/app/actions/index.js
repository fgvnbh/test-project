import ActionTypes from '../constants/actionTypes'
import axios from 'axios'

export const getWeather = (townName) => async dispatch => {

    try{
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${townName}&appid=bad46dfee1ae1125ec4faf31e63449de`)
        dispatch( {
            type: ActionTypes.SEARCH_WEATHER,
            payload: res.data,
        })
    }
    catch(e){
        dispatch( {
            type: ActionTypes.TOWN_ERROR,
            payload: e,
        })
    }

}