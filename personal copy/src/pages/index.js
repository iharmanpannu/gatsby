import React, {Component} from 'react';
import Typist from 'react-typist';
import billboardmp4 from './showcase2.mp4';
import Particles from "react-particles-js";


import {SiteTitle, MainWrapper} from '../components/Headings';

export default class Index extends Component {
  render() {
    return <div className="TypistExample">
        <Particles params={{ particles: { line_linked: { shadow: { enable: true, blur: 1 } } } }} params={{}} style={{ width: "100%", position: "fixed", bottom: "0", minWidth: "100%", minHeight: "100%", width: "auto", height: "auto", zIndex: "-100", left: "1%", transform: "translateX(-50%)," }} />
        <MainWrapper>
          <SiteTitle>I am Harman Pannu</SiteTitle>
          <Typist >
            Just a Dev under construction
            <br />
            <br />
            I love Css and JavaScript
          </Typist>
        </MainWrapper>
      </div>;
  }
}
