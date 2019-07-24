import React, { Component } from 'react';


class FoodSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            foods:[
                {
                    foodName: '',
                    calories: 0,
                    protein: 0,
                    fat: 0,
                    carbohydrate: 0
                }
            ]
        };

        onChange = e => {
            const { value } = e.target;
            this.setState({
                query: value
            });

            this.search(value);
        };

        search = query => {
            const url = `https://swapi.co/api/people?search=${query}`;
            const token = {};
            this.token = token;
        
            fetch(url)
              .then(results => results.json())
              .then(data => {
                if (this.token === token) {
                  this.setState({ people: data.results });
                }
              });
          };
    }

  render() {
    return (
      <div>
        <h1>SearchBar</h1>
        <input
        name="foodInput"
        placeholder="Enter Food" />
      </div>
    )
  }
}

export default FoodSearch
