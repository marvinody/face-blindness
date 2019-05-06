import React from 'react';
const Results = (props) => {
  return (
    <div className="results">
      <div className="correct"><h2>{props.results.correct.length} right!</h2></div>
      <div className="incorrect"><h2>{props.results.incorrect.length} wrong.</h2></div>
    </div>
  )
}

export default Results
