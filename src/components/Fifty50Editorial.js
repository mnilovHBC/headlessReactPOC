import React from 'react';

// All diag
// headline
// hexColor
// ctaurlbehave

export default class Fifty50Editorial extends React.Component {
  render() {

    const hexcolor = this.props.hexcolor;;

    const headline = this.props.headline;

    const ctaurlbehave = this.props.ctaurlbehave;


    return (
     <h1>
     {hexcolor}

     <br/>
     {headline}
    
     <br/>
  
     {ctaurlbehave}
     </h1>
    );
  }
}

