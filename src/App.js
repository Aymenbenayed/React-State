import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import photo from "./photo.png";
import "./App.css";

class App extends Component {
  state = {
    Person: {
      fullName: "Aymen Ben Ayed",
      bio: "I'm curently student in UMT and i'm learning React in GoMyCode",
      imgSrc:<img src={photo} alt="myImage"></img> ,
      profession: "Student",
    },
    show: true,
  };
  handleClickShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="container">
        <Button variant="info" onClick={this.handleClickShowPerson}>
          Show Profile
        </Button>
        {this.state.show && (
          <div className="profile">
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img width="20%" src={photo} alt="myImage"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </div>
        )}
      </div>
    );
  }
}
export default App;
