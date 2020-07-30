import React from 'react';

import { Footer, Container, Hero, Content } from 'react-bulma-components';


export default function FooterSection (){
    return(

    <Hero size="fullheight">
      <Hero.Head renderAs="header" />
      <Hero.Body />
      <Hero.Footer>
        <Footer>
          <Container>
            <Content style={{ textAlign: 'center' }}>
              
              Made by <a href="https://lipaopao010.github.io/Portfolio/">Shuo Li</a>
              
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>
    </Hero>
  )}