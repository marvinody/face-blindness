import React from 'react';

const Person = (props) => {
  return (
    <div className="person">
      <span>{props.person.firstName} {props.person.lastName}</span>
      <img src={props.person.image} />
    </div >
  )
}

export default Person
