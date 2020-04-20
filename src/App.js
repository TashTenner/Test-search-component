import React, { Component } from "react";
import MyFilteringComponent from "./components/MyFilteringComponent";

class App extends Component {
  render() {
    const countries = ["Afghanistan", "Åland Islands", "Albania", "Algeria"];

    return <MyFilteringComponent content={countries} />;
  }
}

export default App;
