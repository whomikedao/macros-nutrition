import { ADD_FOOD } from './types';

export function fetchFoods() {
    return function (dispatch) {
        console.log('fetching');
        fetch('http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=iGp9gMh7BR6ItfHXmVRT25PCd88Bf32e10Pg7fxT&nutrients=205&nutrients=204&nutrients=208&nutrients=269')
        .then(results => results.json())
        .then(foods => dispatch({ 
            type: 'ADD_FOOD',
            payload: foods.report.foods
        }));  
    }
}