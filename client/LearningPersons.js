import React from 'react';
import LearningPerson from './LearningPerson';

const LearningPersons = props => {
  const person = props.people[props.idx];
  let body = <h1>Loading Data</h1>
  if (props.people.length > 0) {
    body = <LearningPerson nextPerson={props.nextPerson} person={person} idx={props.idx} count={props.people.length} />
  }
  return (
    <div>
      {body}
    </div>
  )
}

export default LearningPersons;
