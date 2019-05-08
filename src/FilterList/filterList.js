import React, { Component } from 'react'

export class filterList extends Component {
  render() {
    return (
      <div>
        <form className='type'>
        <label htmlFor='print-type'>Print type:</label>
          <select>
            <option value='None'>Select one...</option>
            <option value='None'>Second option</option>
          </select>
          <label htmlFor='book-type'>Book type:</label>
          <select>
            <option value='None'>Select one...</option>
            <option value='None'>Second option</option>
          </select>
        </form>
      </div>
    )
  }
}

export default filterList
