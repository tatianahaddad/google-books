import React, { Component } from 'react'
import List from '../List/list'
import FilterList from '../FilterList/filterList'

export class searchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results :[]
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const url ='https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyA-M-JTCCmmUEx-JS_yiTPTjWTnJlq-32E';

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        const volInfo= data.items
          .map(item => item.volumeInfo)
            this.setState({
              results: volInfo,
              error: null
            });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  render() {
    return (
      <div>
        <form className= 'form' onSubmit={e => this.handleSubmit(e)}>>
          <label htmlFor="search">Search:</label>
          <input 
            type="text" 
            name="search" 
            id="search" 
            placeholder="Henry"
            //value='flowers'
          />
          <button type= 'submit'>Search</button>
        </form>
        <FilterList />
        <List results={this.state.results} />
      </div>
    )
  }
}

export default searchBar
