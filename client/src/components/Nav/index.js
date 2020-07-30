import React from 'react';

import { Navbar, Icon } from 'react-bulma-components';


export default function Nav(){
    return (
      <Navbar>
        <Navbar.Brand>
          
          <Navbar.Item href="/">
          
            <Icon icon="fas fa-info" />
              About
            </Navbar.Item>
            <Navbar.Item href="/resume">
            <Icon icon="fas fa-file-alt" />
              Resume
            </Navbar.Item>
            <Navbar.Item href="/portfolio">
            <Icon icon="fas fa-th-list" />
              Portfolio
            </Navbar.Item>
            <Navbar.Item href="/contact">
            <Icon icon="fas fa-envelope" />
              Contact
            </Navbar.Item>
        </Navbar.Brand>

        
         
          
      </Navbar>
    )
  }