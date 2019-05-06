import React from 'react';

const PersonImageList = props => {
  return (
    <div className="person image list">
      {props.people.map((person, idx) => {
        const isActive = props.guessingIdx === idx;
        console.log(props.guessingIdx, idx, isActive);
        let picture = 'empty-profile-grey.jpg';
        if (props.learningIdx > idx) {
          picture = person.image;
        }
        return (
          <div key={person.id} className={'person headshot ' + (isActive ? 'active' : 'inactive')} >
            <img src={picture} width="64" height="64" />
          </div>
        )
      })}
    </div>
  )
}

export default PersonImageList
