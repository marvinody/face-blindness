import axios from 'axios';
import React from 'react';
import LearningPersons from './LearningPersons';
import PersonImageList from './PersonImageList';
export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
      learning: {
        still: true,
        idx: 0,
      },
      guessing: {
        idx: 0,
      }
    }
    this.nextPerson = this.nextPerson.bind(this);
  }
  nextPerson() {
    let newIdx = this.state.learning.idx + 1;
    if (newIdx < this.state.people.length && this.state.learning.still) {
      this.setState({
        learning: {
          still: true,
          idx: newIdx,
        }
      })
    } else {
      this.setState({
        learning: {
          still: false,
          idx: this.state.people.length,
        }
      })
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
      body = <LearningPersons nextPerson={this.nextPerson} people={this.state.people} idx={this.state.learning.idx} />
    } else {
      body = <h1>UNIMPLEMENTED</h1>
    }
    return (
      <div id="main" className="row container">
        {body}
        <PersonImageList people={this.state.people} learningIdx={this.state.learning.idx} guessingIdx={this.state.guessing.idx} />
      </div>
    )
  }
}
