import Navigation from './Navigation'
import React, { Component, Fragment } from 'react'
import axios from 'axios'

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps() {

    // Make request for posts.
    const response = await axios.get( 'http://box5232.temp.domains/~miaoxins/wp-json/wp/v2/posts' )

    // Return response to posts object in props.
    return {
      posts: response.data
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation/>
        <h1>hOur Posts Page!</h1>
        <ul>
          {
            this.props.posts.map( post => {
              return (
                <li key={ post.id }>{ post.title.rendered }</li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}