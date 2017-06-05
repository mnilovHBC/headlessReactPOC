import React from 'react';

// All diag
// headline
// hexColor
// ctaurlbehave

export default class Fifty50Editorial extends React.Component {

  
  render() {

    const hexcolor = this.props.hexcolor;

    const headline = this.props.headline;

    const ctaurlbehave = this.props.ctaurlbehave;

    const subhead1 = this.props.subhead1;

    const cta1Url = this.props.cta1_url;

    const cta1Label = this.props.cta1_label;

    const imagePanel = this.props.image_panel;

      return (
        <div classname={"framework-component"}>
          <div classname={"container editorial-common editorial-fifty-fifty editorial-fifty-fifty--text-left"}>
            <div className={"editorial-fifty-fifty__main"}>
              <div className={"editorial-fifty-fifty__panel-wrapper"}>

                <div className={"editorial-fifty-fifty__panel editorial-fifty-fifty__text-panel"}>
                  <div className={"editorial-fifty-fifty__text-panel--inner"}>
                    <div classname={"editorial-panel-text editorial-panel-text--black "}>

                    <h1 className={"editorial-panel-text__headline editorial-panel-text__headline--hero1"} itemprop="name">
                      {headline}
                    </h1>

                    <span className={"editorial-panel-text__subhead-text editorial-panel-text__subhead-text--subhead2"}>
                      {subhead1}
                    </span>

                    <div className={"editorial-panel-text__cta-wrapper"}>
                      <a href={cta1Url} target="_self" class="hbc-button hbc-button--link editorial-panel-text__cta" role="button" itemprop="url" data-reactid="20">
                        <span className={"hbc-button__text editorial-panel-text__cta-text"}>
                          <span >{cta1Label}</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                  <div className={"editorial-fifty-fifty__panel editorial-fifty-fifty__image-panel"}>
                    <img className={"editorial-fifty-fifty__promo"} itemprop="image" src={this.props.image_panel} alt="alt text"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

