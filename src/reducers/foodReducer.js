//evaluate any action that are committed 
//we have to do constants which are types
import { ADD_FOOD } from '../actions/types';

const initialState = {
    //represent the post that comes from our actions
    foods: [],
    food: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case ADD_FOOD:
        console.log('reducer')
            return{
                ...state,
                items: action.payload
            }
        default:
            return state;
            
    }
}