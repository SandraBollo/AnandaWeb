import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="header">
      <header>
        <h2>What Does WWF Do?</h2>
        <span>
          <input className="basic-slide" id="name" type="text" placeholder="Your best name" /><label for="name">Name</label>
        </span>

      </header>
      </div>
    )
  }
}
export default Home;
