import React from "react"

class Decrement extends React.Component {
    render() {
        return (
            <div className="card">
              <div className="card-element num">{this.props.num}</div>
              <button className="btn" onClick={this.props.decrement}>Decrement></button>
            </div>
        );
    }
}

export default Decrement;