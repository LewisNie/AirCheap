/**
 * Created by luyuann on 9/26/2016.
 */
import 'whatwg-fetch';

let AirCheapApi = {
    fetchAirports(){
        return fetch('airports.json')
            .then((response)=>response.json());
    },
    fetchTickets(origin,destination){
      return fetch('flights.json')
          .then((response)=>response.json());
    }
}

export default AirCheapApi;