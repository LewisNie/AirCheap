/**
 * Created by luyuann on 9/26/2016.
 */
import React , {Component} from 'react';
import {render} from 'react-dom';
import {Container} from 'flux/utils';
import Autosuggest from 'react-autosuggest';
import AirportStore from './stores/AirportStore';
import AirportActionCreators from './actions/AirportActionCreators';

class App extends Component{
    getSuggestions(input,callback){
        const escapeInput = input.trim().toLowerCase();
        const airportMatchRegex = new RegExp('\\b' + escapeInput, 'i');
        const suggestions = this.state.airports.filter((airport=>airportMatchRegex.test(airport.city))).sort((airport1,airport2)=>{
            return airport1.city.toLowerCase().indexOf(escapeInput)-airport2.city.toLowerCase().indexOf(escapeInput)
        }).slice(0,7).map(airport=>`${airport.city} - ${airport.country} (${airport.code})`);
        callback(null,suggestions);
    }

    componentDidMount(){
        AirportActionCreators.fetchAirports();
    }

    render(){
        return (
            <div>
                <header>
                    <div className="header-brand">
                        <img src="logo.png"/>
                        <p>Check discount ticket price and pay using your AirCheap points</p>
                    </div>
                    <div className="header-route">
                        <Autosuggest id="origin" inputAttributes = {{placeholder:'From'}} suggestions={this.getSuggestions.bind(this)}
                        />
                        <Autosuggest id="destination" inputAttributes = {{placeholder:'To'}} suggestions={this.getSuggestions.bind(this)}
                        />
                    </div>
                </header>
            </div>
        )
    }
}

App.getStores = ()=>([AirportStore]);
App.calculateState = (prevState) => ({
    airports:AirportStore.getState()
});

const AppContainer = Container.create(App);

render(<AppContainer/>,document.getElementById('root'));