import axios from 'axios';
import React from 'react';
import GuessingPersons from './GuessingPersons';
import LearningPersons from './LearningPersons';
import PersonImageList from './PersonImageList';
const states = Object.freeze({
  LEARNING: Symbol('learning'),
  GUESSING: Symbol('guessing'),
  RESULTS: Symbol('results')
});
export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      mode: states.LEARNING,
      people: [],
      learning: {
        idx: 0,
      },
      guessing: {
        idx: -1,
        wrongNames: [], // array of strings
        peopleGuessed: [],
      },
      results: {
        correct: 0,
        incorrect: 0,
      }
    }
    this.nextPersonToLearn = this.nextPersonToLearn.bind(this);
    this.nextPersonToGuess = this.nextPersonToGuess.bind(this);
    this.guessPerson = this.guessPerson.bind(this);
  }
  guessPerson(name) {
    const actualPerson = this.state.people[this.state.guessing.idx]
    if (actualPerson.name === name) {
      this.setState({
        results: { correct: this.state.results.correct + 1 }
      })
    } else {
      this.setState({
        results: { incorrect: this.state.results.incorrect + 1 }
      })
    }
  }
  nextPersonToGuess() {
    if (this.state.guessing.peopleGuessed.length === this.state.people.length) {
      this.setState({
        mode: states.RESULTS,
      })
    } else {
      const idxs = this.state.people.map((_, idx) => idx);
      const unpicked = idxs.filter(idx => !this.state.guessing.peopleGuessed.includes(idx));
      const currentToGuess = unpicked[Math.random() * unpicked.length | 0]
      const everyoneElse = this.state.people.filter((_, idx) => idx !== currentToGuess);
      const wrongNames = shuffle(everyoneElse).slice(0, 2).map(p => p.firstName);
      this.setState({
        guessing: {
          idx: currentToGuess,
          wrongNames,
          peopleGuessed: this.state.guessing.peopleGuessed,
        }
      })
    }
  }
  nextPersonToLearn() {
    let newIdx = this.state.learning.idx + 1;
    if (newIdx < this.state.people.length && this.state.mode === states.LEARNING) {
      this.setState({
        learning: {
          idx: newIdx,
        }
      })
    } else {
      this.setState({
        mode: states.GUESSING,
        learning: {
          idx: this.state.people.length,
        }
      })
      this.nextPersonToGuess();
    }
  }
  async componentDidMount() {
    const res = await axios.get('/api/people/random?limit=8')
    this.setState({
      people: res.data
    })
  }
  render() {
    let body;
    if (this.state.mode === states.LEARNING) {
      body = <LearningPersons nextPerson={this.nextPersonToLearn} people={this.state.people} idx={this.state.learning.idx} />
    } else {
      body = <GuessingPersons nextPerson={this.nextPersonToGuess} guessing={this.state.guessing} people={this.state.people} guessPerson={this.guessPerson} />
    }
    return (
      <div id="main" className="row container">
        {body}
        <PersonImageList people={this.state.people} learningIdx={this.state.learning.idx} guessingIdx={this.state.guessing.idx} />
      </div>
    )
  }
}

// https://stackoverflow.com/questions/6274339
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
