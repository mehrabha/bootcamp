import React from "react"
import ContactCard from "./ContactCard";
import Decrement from "./Decrement";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            num_: 3
        }
        this.decrement = this.decrement.bind(this);
    }

    decrement() {
        if (this.state.num_ > 0) {
            this.setState({num_: this.state.num_ - 1});
        } else {
            alert("Cannot be less than zero");
        }
    }

    render() {
        return (
            <div className="container">
              <ContactCard name={"Steve"} number={"929-123-4444"} email={"steve.b@email.com"}>
              </ContactCard>
              <ContactCard name={"Kayle"} number={"122-421-7878"} email={"kb123@email.com"}>
              </ContactCard>
              <ContactCard name={"Ramos"} number={"123-456-7898"} email={"dragonSlayer212@email.com"}>
              </ContactCard>
              <Decrement num={this.state.num_} decrement={this.decrement}>
              </Decrement>
            </div>
        );
    }
}

export default App;