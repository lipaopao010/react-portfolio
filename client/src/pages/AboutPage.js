import React from 'react';


function AboutPage(props) {

    return(
        
            <Section class="section" id="about">
  
    <div class="section-heading">
      <h3 class="title is-2">About Me</h3>
      <h4 class="subtitle is-5">A pharmacist who loves coding</h4>
      <div class="container">
        <p>
          Looking for an opportunity to work and upgrade, as well as being involved in an organization that
          believes
          in gaining a competitive edge and giving back to the community.</p>
      </div>
    </div>

    <div class="columns has-same-height is-gapless">
        <div class="column">
          <!-- Profile -->
          <div class="card">
            <div class="card-content">
              <h3 class="title is-4">Profile</h3>
  
              <div class="content">
                <table class="table-profile">
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
                </table>
              </div>
              <br>
              <div class="buttons has-addons is-centered">
                <a href="https://github.com/lipaopao010" class="button is-link">Github</a>
                <a href="https://www.linkedin.com/in/shuo-li-03a74869/" class="button is-link">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <div class="column">

    <!-- Profile picture -->
    <div class="card">
        <div class="card-image">
          <figure class="image is-3by4">
            <img src="profile.JPG" alt="Placeholder image">
          </figure>
        </div>
      </div>
    </div>
    <div class="column">
      <!-- Skills -->
      <div class="card">
        <div class="card-content skills-content">
          <h3 class="title is-4">Skills</h3>
          <div class="content">

            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>JavaScript:</strong>
                    <br>
                    <progress class="progress is-primary" value="90" max="100"></progress>
                  </p>
                </div>
              </div>
            </article>

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Node.js:</strong>
                      <br>
                      <progress class="progress is-primary" value="75" max="100"></progress>
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
              </article>
    );

}

export default AboutPage;