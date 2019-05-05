import React from 'react';
function capitalizeName(name) {
  return name.replace(/\b(\w)/g, s => s.toUpperCase());
}
const Person = (props) => {
  const name = capitalizeName(props.person.firstName) + ' ' + capitalizeName(props.person.lastName);
  return (
    <div className="person profile">
      <div>
        <img src={props.person.image} />
      </div>
      <div>
        <span className="person name">{name}</span>
      </div>
    </div >
  )
}

export default Person
