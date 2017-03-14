import React, { Component } from 'react'

class App extends Component {
  render () {
    return <div>
      <div className='wrapper'>
        <div className='box a'>A</div>
        <div className='box b'>B</div>
        <div className='box c'>C</div>
        <div className='box d'>D</div>
        <div className='box e'>E</div>
        <div className='box f'>F</div>
      </div>
      <div className='wrapper2'>
        <div className='box header'>Header</div>
        <div className='box sidebar'>Sidebar</div>
        <div className='box sidebar2'>Sidebar 2</div>
        <div className='box content'>Content
          <br /> More content than we had before so this column is quite tall</div>
        <div className='box footer'>Footer</div>
      </div>
      <div className='wrapper3'>
        <div className='box3'>1</div>
        <div className='box3'>2</div>
        <div className='box3'>3</div>
        <div className='box3'>4</div>
        <div className='box3'>5</div>
        <div className='box3'>6</div>
        <div className='box3'>7</div>
        <div className='box3'>8</div>
        <div className='box3'>9</div>
        <div className='box3'>10</div>
        <div className='box3'>11</div>
        <div className='box3'>12</div>
      </div>
    </div>
  }
}

export default App
