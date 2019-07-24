import React, { Component } from 'react';
import TdeeResults from './TdeeResults';

class WeightForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gender: '',
			weight: 0,
			age: 0,
			heightFeet: 0,
			heightInches: 0,
			activity: '1'
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
			gender: this.state.gender,
			heightFeet: this.state.heightFeet,
			heightInches: this.state.heightInches,
			activity: this.state.activity
		}

	}



  render() {
	return (
	  <div>
		<h1>TDEE Calculator</h1>
		<form onSubmit={this.onSubmit}>
			<div>
				<field>
					<label>
						<input 
						type="radio" 
						name="gender"
						value="male" 
						onChange={this.onChange}/>
						Male
					</label>
					<label>
						<input 
						type="radio" 
						name="gender"
						value="female" 
						onChange={this.onChange}/>
						Female
					</label>
				</field>	
			</div>
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
				<select
				name="activity"
				type="number"
				onChange={this.onChange}>
					<option
					value="1">Sedentary</option>
					<option
					value="2">Light Exercise</option>
					<option
					value="3">Moderate Exercise</option>
					<option
					value="4">Heavy Exercise</option>
					<option
					value="5">Athlete</option>
				</select>
			</div>
			<br/>
			<button href='/results' handler={TdeeResults} type="submit">Submit</button>
		</form>
	  </div>
	)
  }
}

export default WeightForm
