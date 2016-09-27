/**
 * Created by luyuann on 9/26/2016.
 */
import 'whatwg-fetch';
import AirportActionCreators from '../actions/AirportActionCreators';

let AirCheapApi = {
    fetchAirports(){
        fetch('airports.json')
            .then((response)=>response.json())
            .then((responseData) => {
                AirportActionCreators.fetchAirportsSuccess(responseData);
            })
            .catch((error)=>{
                AirportActionCreators.fetchAirportsError(error);
            })
    }
}

export default AirCheapApi;