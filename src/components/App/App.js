import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import Card from "../Card/Card";



const name=require('@rstacruz/startup-name-generator');

class App extends Component {
  state = {
    headerText: "Name It!",
    headerExpanded: true,
    suggestedNames:[],
  };

  handleInputChange = (inputText) => {
    
    this.setState({ headerExpanded: !inputText ,
        suggestedNames: inputText ? name(inputText):[],
        });
  };

  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <Card suggestedNames={this.state.suggestedNames}/>

      </div>
    );
  }
}
export default App;
