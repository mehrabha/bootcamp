import React from "react"
import "./form.css"

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			firstname: "Mike",
			lastname: "Gary",
			isEdit: false,
			form_firstname: "",
			form_lastname: "",
		}
		this.editForm = this.editForm.bind(this);
		this.submit = this.submit.bind(this);
		this.discardChanges = this.discardChanges.bind(this);
		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleLastNameChange = this.handleLastNameChange.bind(this);
	}

	editForm() {
		this.setState({isEdit: true});
	}

	submit(e) {
		this.setState({firstname: this.state.form_firstname});
		this.setState({lastname: this.state.form_lastname});
		this.setState({isEdit: false});
	}

	discardChanges() {
		this.setState({isEdit: false});
	}

	handleFirstNameChange(e) {
		this.setState({form_firstname: e.target.value});
	}

	handleLastNameChange(e) {
		this.setState({form_lastname: e.target.value});
	}

	render() {
		if (this.state.isEdit) {
			return(
				<form className="form-container" onSubmit={this.submit}>
				  <input type="text" placeholder="First Name" className="form-element" value={this.state.form_firstname} onChange={this.handleFirstNameChange}></input>
				  <input type="text" placeholder="Last Name" className="form-element" value={this.state.form_lastname} onChange={this.handleLastNameChange}></input>
				  <input type="submit" value="Save" className="form-element btn"></input>
				  <button className="form-element btn" onClick={this.discardChanges}>Cancel</button>
				</form>
			);
		} else {
			return(
				<div className="form-container">
				  <div className="form-element">{this.state.firstname}</div>
				  <div className="form-element">{this.state.lastname}</div>
				  <button className="form-element btn" onClick={this.editForm}>Edit</button>
				</div>
			);
		}
	}
}

export default Form;