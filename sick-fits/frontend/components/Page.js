import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const MyButton = styled.button`
  background: red;
  font-size: ${(props) => (props.huge ? '100px' : '50px')};
  .poop {
    font-size: 100px;
  }
`;

class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Meta />
        <Header />
        <MyButton huge>
          Click Me!
          <span className="poop">+poop</span>
        </MyButton>

        <MyButton>
          Click Me!
          <span className="poop">+poop</span>
        </MyButton>
        {children}
      </div>
    );
  }
}

export default Page;
