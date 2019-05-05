import React from 'react';

const PersonImageList = props => {
  return (
    <div className="person image list">
      {props.people.map((person, idx) => {
        let picture = 'empty-profile-grey.jpg';
        if (props.learningIdx > idx) {
          picture = person.image;
        }
        return (
          <div key={person.id} >
            <img src={picture} width="128" height="128" />
          </div>
        )
      })}
    </div>
  )
}

export default PersonImageList
