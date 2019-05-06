import React from 'react';

const GuessingPersons = props => {
  const person = props.people[props.guessing.idx];
  const names = [person.firstName].concat(...props.guessing.wrongNames);
  return (
    <div className="person guessing main">
      <div className="person headshot guess">
        <img src={person.image} />
      </div>
      <div className="names">
        {shuffle(names).map((n, idx) => <span key={idx} onClick={() => props.guessPerson(n)}>{n}</span>)}
      </div>
    </div>
  )
}


// https://stackoverflow.com/questions/6274339
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default GuessingPersons;
