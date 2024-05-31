import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsBox from './components/NewsBox';
export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container d-flex justify-content-between align-items-center">
          <NewsBox title="First" detail="First Detail" />
          <NewsBox title="Second" detail="Second Detail" />
          <NewsBox title="Third" detail="Third Detail" />

        </div>
      </>
    )
  }
}

