import React from "react"

class ContactCard extends React.Component{
    render() {
        return(
            <div className="card">
              <div className="card-element">Name: {this.props.name}</div>
              <div className="card-element">Number: {this.props.number}</div>
              <div className="card-element">Email: {this.props.email}</div>
            </div>
        );
    }
}

export default ContactCard;