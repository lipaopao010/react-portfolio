import React from "react";

import {
  Container,
  Box,
  Button,
  Icon,
  Section,
  Heading,
  Columns
} from "react-bulma-components";
import { Form } from 'react-bulma-components';

const { Input, Field, Control, Label, Textarea} = Form;


export default function ContactFormSection() {
  return (
    <Section id="contact">
      <Container>
        <Heading title size={2}>
          Contact
        </Heading>
        <Heading subtitle size={5}>
          Get in touch
        </Heading>

        <Columns>
          <Columns.Column is-6 is-offset-3>
            <Box>
              <Field>
                <Label>Name</Label>
                <Control>
                  <Input placeholder="Text input" />
                </Control>
              </Field>

               <Field>
                <Label>Email</Label>
                <Control iconLeft>
                  <Input type="email" placeholder="Email Input" value="" />
                  <Icon align="left" icon="fas fa-envelope" />
                </Control>
              </Field>

              <Field>
                <Label>Message</Label>
                <Control>
                  <Textarea placeholder="Textarea" />
                </Control>
              </Field>

              <Field kind="group">
                <Control>
                  <Button type="primary">
                    <Icon align="left" icon="fas fa-envelope" />
                    Submit
                  </Button>
                </Control>
              </Field> 
            </Box>
          </Columns.Column> 
        </Columns>
      </Container>
    </Section>
  );
}


