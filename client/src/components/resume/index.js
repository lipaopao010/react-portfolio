import React from "react";

import { Section, Button, Icon, Heading } from "react-bulma-components";

export default function ResumeSection() {
  return (
    <Section className="section is-large" id="resume">
      <Heading title size={2}>
        Resume
      </Heading>
      <Heading subtitle size={5}>
        More about my past
      </Heading>
      <Button a href="#" size="medium">
        <Icon icon="fas fa-file-alt"></Icon>
      </Button>
      <span>Download My Resume</span>
    </Section>
  );
}
