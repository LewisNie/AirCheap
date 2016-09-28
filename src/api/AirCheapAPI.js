/**
 * Created by luyuann on 9/26/2016.
 */
import 'whatwg-fetch';
import AirportActionCreators from '../actions/AirportActionCreators';

let AirCheapApi = {
    fetchAirports(){
        fetch('airports.json')
            .then((response)=>response.json());
    },
    fetchTickets(origin,destination){
      fetch('flights.json')
          .then((response)=>response.json());
    }
}

export default AirCheapApi;