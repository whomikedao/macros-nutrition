import React, { Component } from 'react'

//key: iGp9gMh7BR6ItfHXmVRT25PCd88Bf32e10Pg7fxT
class FoodNutrition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: []
        }
    }

    componentWillMount() {
        fetch('http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=iGp9gMh7BR6ItfHXmVRT25PCd88Bf32e10Pg7fxT&nutrients=205&nutrients=204&nutrients=208&nutrients=269')
        .then(res => res.json())
        .then(data => this.setState({ foods: data.report.foods}));
    }

  render() {
    //   const foodItems = this.state.foods.map(food =>(
    //       <div key={food.nbno}>
    //         <h3>{food.name}</h3>
    //         <p>Calories: {food.nutrients[0].value}</p>
    //       </div>
    //   ));
    return (
      <div>
        <h1>Food Nutrition</h1>
        <br />
        {foodItems}
      </div>
    )
  }
}

export default FoodNutrition;
