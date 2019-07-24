import React from "react"
import "./folder.css"

class Folder extends React.Component {
	constructor() {
	    super();
	    this.state = {
	        File1: "File 1",
	        File2: "File 2",
	        File3: "File 3",
	        invisible: false
	    }
	    this.toggle = this.toggle.bind(this);
	}

	toggle() {
	    if (this.state.invisible) {
	        this.setState({invisible: false});
	    } else {
	        this.setState({invisible: true});
	    }
	}

	render() {
	    if (this.state.invisible) {
	        return(
			    <div className="folder-container">
			      <div className="folder">Home:</div>
			      <button onClick={this.toggle}>toggle</button>
                </div>
		    );
	    } else {
	        return(
			    <div className="folder-container">
			      <div className="folder">Home:</div>
	              <div className="file">{this.state.File1}</div>
                  <div className="file">{this.state.File2}</div>
                  <div className="file">{this.state.File3}</div>
                  <button onClick={this.toggle}>toggle</button>
                </div>
		    );
	    }
	}
}

export default Folder;