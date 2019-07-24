import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFoods } from '../actions/addFoodAction'

class FoodResults extends Component {
    componentWillMount() {
        this.props.fetchFoods();

    }

  render() {
    const foodItems = this.props.foods.map(food => (
        <div key={food.id}>
            <h3>{food.name}</h3>
            <p>Calories: {food.nutrients[0].value}</p>
        </div>
    ));
    return (
      <div>
        <h1>SearchResults</h1>
        {foodItems}
      </div>
    )
  }
}

Props.propTypes = {
    fetchFoods: PropTypes.func.isRequired,
    foods: Proptypes.array.isRequired
}

const mapStateToProps = state => ({
    foods: state.foods.items
})

export default connect(mapStateToProps, { fetchFoods })(FoodResults)
