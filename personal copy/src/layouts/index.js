import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'typeface-lato';
import 'typeface-inconsolata';
import {rhythm} from '../utils/typography';
import { SocialIcon, SocialIcons } from "react-social-icons";

import {
  SiteHeader,
  SiteNav,
  NavLink,
  SubHeader,
  Logo,
  Name,
  Main
} from '../components/Headings';
import {SocialLinks, SocialLink} from '../components/Footer';

const FooterLinks = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/iharmanpannu',
    color: '#00aced'
  }, {
    name: 'Github',
    link: 'https://github.com/iharmanpannu',
    color: '#4183c4'
  }, {
    name: 'Facebook',
    link: 'https://www.facebook.com/iharpannu',
    color: '#3b5998'
  }
];

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.function
  }

  render() {
    return <div>
        <Helmet title="Harman Pannu" meta={[{ name: "description", content: "Sample" }, { name: "keywords", content: "sample, something" }]} />

        <SiteHeader>
          <Link to="/">
            <Logo page={this.props.location.pathname.replace("/", "")}>
              HP
            </Logo>
            <Name>Harman Pannu</Name>
          </Link>
          <SiteNav>
            <ul>
              <li>
                <NavLink underline="#16a085" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink underline="#e74c3c" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink underline="#2980b9" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </SiteNav>
        </SiteHeader>

        <Main>{this.props.children()}</Main>

        <footer className="footer">
          <SubHeader>Social</SubHeader>
          <SocialLinks>
            <SocialIcon network="twitter" url="https://twitter.com/iharmanpannu" style={{ marginRight: 10 }} />
            <SocialIcon network="facebook" url="https://www.facebook.com/iharpannu" style={{ marginRight: 10 }} />
            <SocialIcon network="github" url="https://www.github.com/iharmanpannu" color="#fff" style={{ marginRight: 10 }} />
            <SocialIcon network="codepen" url="https://www.codepen.io/iharmanpannu" color="#fff" />
          </SocialLinks>
        </footer>
      </div>;
  }
}
    
    //  {
    //    FooterLinks.map(link => <div />);
    //     {
    //       /* <li key={link.name}>
    //             <SocialLink target="_blank" rel="nofollow" color={link.color} href={link.link}>
    //               {link.name} 
    //             </SocialLink>
    //           </li> */
    //     }
    //  }