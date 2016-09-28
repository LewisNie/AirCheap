/**
 * Created by luyuann on 9/27/2016.
 */
import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {ReduceStore} from 'flux/utils';

class TicketStore extends ReduceStore{
    getInitialState(){
        return [];
    }
    reduce(state,action){
        switch (action.type){
            case constants.FETCH_TICKETS_SUCCESS:
                return action.payload.response;
            default:
                return state;
        }
    }
}

export default new TicketStore(AppDispatcher);