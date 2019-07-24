import React from "react"
import Form from "./form"
import Folder from "/.folder"
import "./App.css"

class App extends React.Component {
	render() {
		return(
			<div className="AppContainer">
				<Form>
				</Form>
				<Folder>
				</Folder>
			</div>
		);
	}
}

export default App;