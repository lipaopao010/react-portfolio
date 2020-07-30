import React from 'react';


import { Container, Hero, Heading } from 'react-bulma-components';


function HeroSection() {

    return(
       
        <Hero color="primary" size="medium" >
        <Hero.Body>
        <Container>
            Hello! I am
            <Heading title size={1}>
            Shuo Li
            </Heading>

            <Heading subtitle size={3}>
            Full Stack Web Developer
            </Heading>
        </Container>
        </Hero.Body>
      </Hero>

        
    );

}


export default HeroSection;