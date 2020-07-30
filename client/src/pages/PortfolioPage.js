import React from "react";
import Nav from "../components/Nav";
import { Section, Container, Heading, Columns } from "react-bulma-components";
import PortfolioListItem from "../components/PortfolioListItem";
import FooterSection from "../components/Footer";
import image3 from "../assets/images/company-dashboard.png";
import image4 from "../assets/images/one-fine-day.png";
import image2 from "../assets/images/google-book.png";

class PortfolioPage extends React.Component {
  state = {
    items: [
      {
        id: 1,
        title: "Tidier",

        imgSrc: image3,
        imgalt: "tidier screenshot",

        preview: "https://pacific-bayou-03953.herokuapp.com/",
        code: "https://github.com/milesgalli/project-2",
      },
      {
        id: 2,
        title: "google book",

        imgSrc: image2,
        imgalt: "google book screenshot",

        preview: "https://google-book-240720.herokuapp.com/",
        code: "https://github.com/lipaopao010/google-book-search",
      },
      {
        id: 3,
        title: "The hackathon Finder",

        imgSrc: image3,
        imgalt: "hackathon finder screenshot",

        preview: "https://pacific-bayou-03953.herokuapp.com/",
        code: "https://github.com/milesgalli/project-2",
      },
      {
        id: 4,
        title: "ONE FINE DAY",

        imgSrc: image4,
        imgalt: "one fine day screenshot",

        preview: "https://rehamilton.github.io/One-Fine-Day/",
        code: "https://github.com/rehamilton/One-Fine-Day",
      },
    ],
  };

  render() {
    return (
      <>
        <Nav />

        <Section id="portfolio">
          <Container>
            <Heading title size={2}>
              Portfolio
            </Heading>
            <Heading subtitle size={5}>
              My latest works
            </Heading>

            <Container>
              <Columns>
                <PortfolioListItem items={this.state.items} />
                
              </Columns>
            </Container>
          </Container>
        </Section>

        <FooterSection />
      </>
    );
  }
}

export default PortfolioPage;
