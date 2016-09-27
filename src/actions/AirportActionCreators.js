/**
 * Created by luyuann on 9/26/2016.
 */
import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import AirCheapAPI from '../api/AirCheapAPI';

let AirportActionCreators = {
    fetchAirports(){
        AirCheapAPI.fetchAirports();
        AppDispatcher.dispatch({
            type:constants.FETCH_AIRPORTS
        })
    },
    fetchAirportsSuccess(response){
        AppDispatcher.dispatch({
            type: constants.FETCH_AIRPORTS_SUCCESS,
            payload:{response}
        });
    },
    fetchAirportsError(error){
        AppDispatcher.dispatch({
            type: constants.FETCH_AIRPORTS_SUCCESS,
            payload:{error}
        });
    }
}

export default AirportActionCreators;