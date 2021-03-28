import ActionTypes from '../constants/actionTypes'
import axios from 'axios'
import token from '../constants/apiToken'
export const getWeather = (townName) => async dispatch => {

    try{
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${townName}&appid=${token.apiToken}`)
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