import React from 'react';
import './App.css';
import WeightForm from './components/WeightForm';


//katch-mcardle formula
//BMR = 370 + (21.6*Lean body mass(kg))
//Mifflin St Jeor BMR
//BMR men (kcal / day) = 10 * weight (kg) + 6.25 * height (cm) – 5 * age (y) + 5 (kcal / day)
//BMR women (kcal / day)= 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161 (kcal / day)
//lean body mass = (weight(kg) * (100-(body fat)))/100
//lean body mass without fat men = 0.407 * weight + 0.267 * height * 100 - 19.2
//lean body mass without fat women = 0.252 * weight + 0.473 * height * 100 - 48.3

function App() {
  return (
    <div>
      <WeightForm />
    </div>
      
 
  );
}

export default App;
