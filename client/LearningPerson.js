import React from 'react';
import Person from './Person';

const LearningPerson = (props) => {
  return (
    <div className="learning person">
      <div className="learning person idx">{props.idx + 1} / {props.count}</div>
      <Person person={props.person} />
      <span className="next person" onClick={props.nextPerson}>Next</span>
    </div>
  )
}

export default LearningPerson
