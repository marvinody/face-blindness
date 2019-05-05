import axios from 'axios';
import React from 'react';
import Person from './Person';
export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
    }
  }
  async componentDidMount() {
    const res = await axios.get('/api/people/random?limit=10')
    this.setState({
      people: res.data
    })

  }
  render() {
    return (
      <div id="main" className="row container">
        {this.state.people.map(p => <Person person={p} key={p.id} />)}
      </div>
    )
  }
}
