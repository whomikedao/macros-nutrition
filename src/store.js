import { createStore, applyMiddleware } from 'redux';
import { combineForms, createForms } from 'react-redux-form';
  

const initialUserState = {
    weight: 0,
    age: 0,
    heightFeet: 0,
    heightInches: 0,
    activity: 0
};

const store = createStore(combineForms({
    user: initialUserState,
}))