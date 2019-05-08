import React, { Component } from 'react'

export class list extends Component {
  render() {
    console.log(this.props.results)
    const items = (this.props.results)
      .map(key => { console.log(key.imageLinks)
        return <div>
                <div>{key.title}</div>
                <div>{key.authors}</div>
                <img alt= 'flowers'src={key.imageLinks} />
              </div>
        })
    return (
      <div>
        {items}
      </div>
    )
  }
}

export default list
