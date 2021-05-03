import logo from './logo.svg';
import './App.css';
import React from 'react';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import Viewer from './components/Viewer/Viewer'

class App extends React.Component {
  state = {
    path: "",
  }

  render() {
    return (
      <div className="App">
      <Breadcrumbs />
      <Viewer />
      </div>
    );
  }
}

export default App;
