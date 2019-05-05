import axios from 'axios';
import React from 'react';
import LearningPersons from './LearningPersons';
export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
      learning: {
        still: true,
        idx: 0,
      }
    }
  }
  async componentDidMount() {
    const res = await axios.get('/api/people/random?limit=9')
    this.setState({
      people: res.data
    })

  }
  render() {
    let body;
    if (this.state.learning.still) {
      body = <LearningPersons people={this.state.people} idx={this.state.learning.idx} />
    } else {

    }
    return (
      <div id="main" className="row container">
        {body}
      </div>
    )
  }
}
