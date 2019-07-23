import React, { Component } from 'react'

class WeightForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weight: 0,
			age: 0,
			heightFeet: 0,
			heightInches: 0,
			activity: 0
		}
		
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		const post = {
			weight: this.state.weight,
			age: this.state.age,
			heightFeet: this.state.heightFeet,
			heightInches: this.state.heightInches,
			activity: this.state.activity
		}
	}



  render() {
	return (
	  <div>
		<h1>Input</h1>
		<form onSubmit={this.onSubmit}>
			<div>
				<label>Weight: </label><br/>
				<input 
				type="number"
				name="weight"
				placeholder="Pounds"
				onChange={this.onChange} />
			</div>
			<div>
				<label>Age: </label><br/>
				<input 
				type="number"
				name="age" 
				onChange={this.onChange} />
			</div>
			<div>
				<label>Height</label><br/>
				<input
				type="number"
				name="heightFeet" 
				placeholder="Feet"
				onChange={this.onChange} />
				<input 
				type="number"
				name="heightInches"
				placeholder="Inches"
				onChange={this.onChange} />
			</div>
			<div>
				<label>Activity</label><br/>
				<input 
				type="text"
				name="activity" />
			</div>
			<br/>
			<button type="submit">Submit</button>
		</form>
	  </div>
	)
  }
}

export default WeightForm
