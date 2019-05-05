import React from 'react';

const Person = (props) => {
  return (
    <div className="person">
      <img src={props.person.image} />
      <span>{props.person.firstName} {props.person.lastName}</span>
    </div >
  )
}

export default Person
