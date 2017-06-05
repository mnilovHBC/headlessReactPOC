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
    "cta1_label": "Shop for him"
};



 export default class NewLayout extends React.Component {
   render() {
     return (
         <Fifty50Editorial headline={BEresponse.headline}  hexcolor={BEresponse.headline_color}  ctaurlbehave={BEresponse.url_behave}/>
   );
  }
 }
