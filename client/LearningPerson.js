import React from 'react';
import Person from './Person';

const LearningPerson = (props) => {
  return (
    <div className="learning person">
      <Person person={props.person} />
      <span className="next person">Next</span>
    </div>
  )
}

export default LearningPerson
