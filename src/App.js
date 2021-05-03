import logo from './logo.svg';
import './App.css';
import React from 'react';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import Viewer from './components/Viewer/Viewer'

class App extends React.Component {
  state = {
    path: "/",
    pathContents: null,
  }

  async componentDidMount() {
    try {
      let fetchRes = await fetch('/path'+this.state.path)
      if (!fetchRes.ok) throw new Error("Fetch failed.")
      let pathData = await fetchRes.json()
      this.setState({pathContents: pathData})

    } catch(err) {
      console.error(err)
    }
  }

  render() {
    return (
      <div className="App">
      <Breadcrumbs path={this.state.path} pathContents={this.state.pathContents} />
      <Viewer path={this.state.path} pathContents={this.state.pathContents} />
      </div>
    );
  }
}

export default App;
