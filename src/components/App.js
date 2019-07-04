import React, { Component } from 'react';
import Services from './services/Services';
import Header from './layouts/Header';
import css from '../style/index.css';
import Side from './layouts/Side';
import Footer from './layouts/Footer';

class App extends Component {
  render() {
    return (
      <div className={css.root}>
        <Side />
        <div style={{ width: '100%' }}>
          <Header />
          <Services />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
