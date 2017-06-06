import React from 'react';
import { Link } from 'react-router';
import Fifty50Editorial from './Fifty50Editorial';

const BEresponse  = {
    "live_copy_position": "left",
    "cta2_url": "/content/sof/en_us/storesandcorporate.html",
    "body_copy1": "body copy body copy",
    "headline_font": "kepler",
    "headline_color": "#D4AF37",
    "body_copy2": "Photography",
    "subhead1": "50 50 Editorial Left",
    "subhead2": "subhead2",
    "subhead3": "sub head three",
    "cta2_label": "Shop for her",
    "cta1_url": "/content/sof/en_us/shippingandreturns.html",
    "headline": "Retail",
    "url_behave": "_self",
    "cta1_label": "Shop for him",
    "image_panel": "http://content.hbc.com/content/dam/saksoff5th/homepage/18_053117_PUB/HP/18_060217_HP_CP_SUB_1.jpg"
};

  /* React fetch code is from https://facebook.github.io/react-native/releases/0.27/docs/sample-application-movies.html' */

  export default class NewLayout extends React.Component {

   constructor(props) {

    super(props);

     // From handling state in React 
     // https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c

    this.state = {headline: null, 
                  hexcolor: null,  
                  ctaurlbehave: null,
                  subhead1: null,
                  cta1_label: null,
                  cta1_url: null,
                  image_pane: null
                  };
   }

   componentDidMount() { 
       this.fetchData(); 
   }

   fetchData() { 
      const REQUEST_URL='http://localhost:8080/Fifty50data.json'; 
      fetch(REQUEST_URL) 
      .then((response) => response.json()) 
      .then((responseData) => { 
         this.setState({ 
            headline: responseData.headline, 
            hexcolor: responseData.hexcolor,                      
            ctaurlbehave: responseData.ctaurlbehave,
            subhead1:  responseData.subhead1,
            cta1_label: responseData.cta1_label,
            cta1_url: responseData.cta1_url,
            image_pane: responseData.image_pane 
         }); 
      }) 
      .done(); 
   }

   render() {
     return (
         <Fifty50Editorial headline={this.state.headline}  
                           hexcolor={this.state.hexcolor}  
                           ctaurlbehave={this.state.ctaurlbehave}
                           subhead1={this.state.subhead1} 
                           cta1_label={this.state.cta1_label} 
                           cta1_url={this.state.cta1_url} 
                           image_panel={this.state.image_panel}/>
   );
  }
 }
