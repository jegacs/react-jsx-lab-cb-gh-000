import React from 'react';
import FillerText from './FillerText';
class Webpage extends React.Component {
  render() {
    const title = "The world\'s coolest webpage";
    return(
      <div>
        <p>{title}</p>
        <FillerText />
        <FillerText />
      </div>
    );
  }
}

export default Webpage;
