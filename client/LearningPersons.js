import React from 'react';
import LearningPerson from './LearningPerson';

const LearningPersons = props => {
  const person = props.people[props.idx];
  let body = <h1>Loading Data</h1>
  if (props.people.length > 0) {
    body = <LearningPerson person={person} />
  }
  return (
    <div>
      {body}
    </div>
  )
}

export default LearningPersons;
