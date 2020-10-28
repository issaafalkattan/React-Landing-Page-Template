import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Services from './components/services';
import Team from './components/Team';
import JsonData from './data/data.json';
import './App.scss';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Services data={this.state.landingPageData.Services} />
        <Team data={this.state.landingPageData.Team} />
      </div>
    )
  }
}

export default App;
