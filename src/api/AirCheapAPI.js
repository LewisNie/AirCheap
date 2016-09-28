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
    },
    fetchTickets(){
      fetch('flights.json')
          .then((response)=>response.json())
          .then((responseData)=>{
                AirportActionCreators.fetchTicketsSuccess(responseData);
          })
          .catch((error)=>{
                AirportActionCreators.fetchTicketsError(error);
          })
    }
}

export default AirCheapApi;