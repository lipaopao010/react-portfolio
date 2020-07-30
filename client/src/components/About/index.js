import React from "react";

import {
  
  Button,
  Card,
  Columns,
  Content,
  Container,
  Icon,
  Progress,
  Section,
  Heading,
  Table
} from "react-bulma-components";
import image from "../../assets/images/profile.JPG"


export default function About(){
  return (
<Section id="about">
  
    
    <Heading title size={2}>
      About Me
      </Heading>
      <Heading subtitle={5}>A pharmacist who loves coding</Heading>
      <Container>
        <p>
          Looking for an opportunity to work and upgrade, as well as being involved in an organization that
          believes
          in gaining a competitive edge and giving back to the community.</p>
      </Container>
   

    <Columns className="has-same-height is-gapless">
        <Columns.Column>
          
          <Card>
          
                    {/* <Card.Header>
                        <Card.Header.Title>{item.title}</Card.Header.Title>
                    </Card.Header>

                    
                        <Media> */}
            <Card.Content>
              <Heading title size={4}>Profile</Heading>
  
              <Card.Content>
              <Table>
                <thead>
        
                
                  <tr>
                    <th colspan="1"></th>
                    <th colspan="2"></th>
                  </tr>
                  <tr>
                    <td>Location:</td>
                    <td>Perth, Western Australia</td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>0433506530</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>shuo.li88@hotmail.com</td>
                  </tr>
                
      </thead>
                </Table> 
              </Card.Content>
              
              <Button.Group  hasAddons={true} position={"centered"}>
              
                        <Button renderAs="a" href="https://github.com/lipaopao010">Github</Button>
                        <Button renderAs="a" href="https://www.linkedin.com/in/shuo-li-03a74869/">LinkedIn</Button>
                    </Button.Group>
                
              
            </Card.Content>
          </Card>
    </Columns.Column>

    <Columns.Column>

  
    <Card>
    <Card.Image alt="profile image" src = {image} />
                        
                        
   
        
          
      </Card>
      </Columns.Column>
    

    <Columns.Column>
     
      <Card>
      <Card.Content className="skills-content">

          <Heading size={4}>Skills</Heading>
          
              <Content>
                
                  <p>
                    <strong>React.js</strong>
                   
                    <Progress max={100} value={75} color="primary"/>
                  </p>
                
              
                
                <p>
                  <strong>JavaScript:</strong>
                 
                  <Progress max={100} value={75} color="primary"/>
                </p>
              
           
                
                <p>
                  <strong>HTML5/CSS</strong>
                 
                  <Progress max={100} value={75} color="primary"/>
                </p>
              
            </Content>
              </Card.Content>
              </Card>
              </Columns.Column>
           

              {/* <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Node.js:</strong>
                      <br>
                      <Progress max={100} value={75} color="primary"/>
                      
                    </p>
                  </div>
                </div>
              </article>

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>HTML5/CSS3</strong>
                      <br>
                      <progress class="progress is-primary" value="95" max="100"></progress>
                    </p>
                  </div>
                </div>
              </article> */}
              </Columns>
</Section>
)}