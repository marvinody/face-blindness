import React from 'react';
import Person from './Person';

const LearningPerson = (props) => {
  return (
    <div className="learning-person">
      <Person person={props.person} />
      <span>Next</span>
    </div>
  )
}

export default LearningPerson
