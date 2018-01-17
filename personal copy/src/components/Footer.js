import styled from 'styled-components';
import { media } from './Breakpoints';

const SocialLinks = styled.ul`
  display: flex; 
  list-style: none;
  /* margin: 0 4.25em; */
  padding-bottom: 2em;
  text-align: center;

  ${media.tablet`
    display: flex;
    justify-content: center;
    align-items: middle;

  `};
`;

// const SocialLink = styled.a`
//   /* padding: 5px 8px; */
//   border-radius: 3px;/
//   transition: all 0.3s ease;
//   color: #FFF;
//   background-color: ${props => props.color};
// `;

export {
  SocialLinks,
  // SocialLink,
};
