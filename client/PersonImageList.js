import React from 'react';

const PersonImageList = props => {
  const isDoneGuessing = (props.results.correct.length + props.results.incorrect.length) === props.people.length
  return (
    <div className="person image list">
      {props.people.map((person, idx) => {
        let extraClass = ''
        const isActive = props.guessingIdx === idx;
        if (isActive || isDoneGuessing) {
          extraClass += 'active ';
        } else {
          extraClass += 'inactive ';
        }

        if (isDoneGuessing) {
          if (props.results.correct.includes(idx)) {
            extraClass += 'correct ';
          } else if (props.results.incorrect.includes(idx)) {
            extraClass += 'incorrect ';
          }
        }

        let picture = 'empty-profile-grey.jpg';
        if (props.learningIdx > idx) {
          picture = person.image;
        }
        return (
          <div key={person.id} className={'person headshot ' + extraClass} >
            <img src={picture} width="64" height="64" />
          </div>
        )
      })}
    </div>
  )
}

export default PersonImageList
