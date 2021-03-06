import React, { Component } from 'react';
import './App.module.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
           <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;