import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Asya from "../assets/pictures/asyam.jpg";
import Kaelen from "../assets/pictures/kaelen.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/Contact.scss";

library.add(faLinkedin);
class Contact extends Component {
  render() {
    return (
      <div id="Contact">
        <Container>
          <Row>
            <Col class="col">
              <div class="front">
                <img src={Asya} />
              </div>
              <div class="back">
                <p>
                  Asya is a graduating senior at the University of Texas.
                  <br />
                  <a href="" target="_blank">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                </p>
              </div>
              <h3>Asya</h3>
            </Col>

            <Col class="col">
              <div class="front">{/* <img src={} /> */}</div>
              <div class="back">
                <p>
                  Kaaya is a first year Computer Science major at the University
                  of Texas.
                  {/* Interested in cybersecurity, data, and web
                  technologies. */}
                  <br />
                  <a href="" target="_blank">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                </p>
              </div>
              <h3>Kaaya</h3>
            </Col>

            <Col class="col">
              <div class="front">{/* <img src={} /> */}</div>
              <div class="back">
                <p>
                  Terry is a freshman studying Aerospace Engineering at the
                  University if Texas.
                  <br />
                  <a
                    href="https://www.linkedin.com/in/terry-murray-478b0b1ba"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                </p>
              </div>
              <h3>Terry</h3>
            </Col>
          </Row>

          <Row>
            <Col class="col">
              <div class="front">{/* <img src={} /> */}</div>

              <div class="back">
                <p>
                  About
                  <br />
                  <a href="" target="_blank">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                </p>
              </div>
              <h3>Aditi</h3>
            </Col>

            <Col class="col">
              <div class="front">{/* <img src={} /> */}</div>
              <div class="back">
                <p>
                  About
                  <br />
                  <a href="" target="_blank">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                </p>
              </div>
              <h3>Sebastian</h3>
            </Col>

            <Col class="col">
              <div class="front">
                <img src={Kaelen} />
              </div>
              <div class="back">
                <p>
                  Kaelen is a third year Mathematics major at the University of
                  Texas.
                  {/* Interested in data, accessible web technologies,
                    UI/UX design, and environmental sustainability.  */}
                  {/* Website:
                    https://kaelensayth.me/ */}
                  <br />
                  <a
                    href="https://www.linkedin.com/in/kaelensayth/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                </p>
              </div>
              <h3>Kaelen</h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
