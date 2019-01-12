import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
font-size: 14px;
font-weight: 300;
font-style: normal;
font-stretch: normal;
line-height: 1.71;
letter-spacing: normal;
text-align: right;
color: ${props => props.active ? "pink" : "#ffffff"};
padding-right: 33px;
border-right: 1px dotted #fff;
margin: 0 auto;
&:hover {
    color: #8d8d8d;
    text-decoration: none;
}

&:last-child {
    border-right:none;
}
`

class Link extends Component {
    render() {
      return (
          <StyledLink href={this.props.link}>{this.props.text}</StyledLink>
      )
    }
  }
  
  export default Link;