import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Kaaya from "../assets/pictures/kaaya.jpeg";
import Terry from "../assets/pictures/terry.png";
import Asya from "../assets/pictures/asyam.jpg";
import Aditi from "../assets/pictures/aditi.jpg";
import Kaelen from "../assets/pictures/kaelen.png";
import "../styles/Contact.scss";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      show5: true,
    };
  }

  componentDidMount() {
    document.body.style.background =
      "#1c3384 url('../images/contact-blob.svg') no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  componentWillUnmount() {
    document.body.style.background = "#1c3384";
  }

  render() {
    return (
      <div id="Contact">
        <Container>
          <Row>
            <Col class="col">
              <div
                style={{ display: this.state.show1 ? "block" : "none" }}
                class="front"
                onClick={(e) =>
                  this.setState((prevState) => ({
                    show1: !prevState.show1,
                  }))
                }
              >
                <img src={Kaaya} />
              </div>
              <div
                style={{ display: this.state.show1 ? "none" : "block" }}
                class="back"
                onClick={(e) =>
                  this.setState((prevState) => ({
                    show1: !prevState.show1,
                  }))
                }
              >
                <p>
                  Kaaya is a first year Computer Science major at the University
                  of Texas.
                  <br />
                  Interested in cybersecurity, data, and web technologies.
                </p>
              </div>
              <h3>Kaaya</h3>
            </Col>

            <Col class="col">
              <div
                style={{ display: this.state.show2 ? "block" : "none" }}
                class="front"
                onClick={(e) =>
                  this.setState((prevState) => ({
                    show2: !prevState.show2,
                  }))
                }
              >
                <img src={Terry} />
              </div>
              <div
                style={{ display: this.state.show2 ? "none" : "block" }}
                class="back"
                onClick={(e) =>
                  this.setState((prevState) => ({
                    show2: !prevState.show2,
                  }))
                }
              >
                <p>
                  Terry is a freshman studying Aerospace Engineering at the
                  University of Texas.
                </p>
              </div>
              <h3>Terry</h3>
            </Col>
          </Row>

          <Row>
            <Col class="col">
              <div
                style={{ display: this.state.show3 ? "block" : "none" }}
                class="front"
                onClick={(e) =>
                  this.setState((prevState) => ({
                    show3: !prevState.show3,
                  }))
                }
              >
                <img src={Asya} />
              </div>
              <div
                style={{ display: this.state.show3 ? "none" : "block" }}
                class="back"
                onClick={(e) =>
                  this.setState((prevState) => ({
                    show3: !prevState.show3,
                  }))
                }
              >
                <p>Asya is a graduating senior at the University of Texas.</p>
              </div>
              <h3>Asya</h3>
            </Col>

            <Col class="col">
              <div
                style={{ display: this.state.show4 ? "block" : "none" }}
                class="front"
                onClick={(e) =>
                  this.setState((prevState) => ({
                    show4: !prevState.show4,
                  }))
                }
              >
                <img src={Aditi} />
              </div>

              <div
                style={{ display: this.state.show4 ? "none" : "block" }}
                class="back"
                onClick={(e) =>
                  this.setState((prevState) => ({
                    show4: !prevState.show4,
                  }))
                }
              >
                <p>
                  Aditi is a third year Computer Science major at the University
                  of Texas at Austin.
                  <br />
                  Interested in cybersecurity, and advancing diversity and
                  inclusion within STEM.
                </p>
              </div>
              <h3>Aditi</h3>
            </Col>

            <Col class="col">
              <div
                style={{ display: this.state.show5 ? "block" : "none" }}
                class="front"
                onClick={(e) =>
                  this.setState((prevState) => ({
                    show5: !prevState.show5,
                  }))
                }
              >
                <img src={Kaelen} />
              </div>
              <div
                style={{ display: this.state.show5 ? "none" : "block" }}
                class="back"
                onClick={(e) =>
                  this.setState((prevState) => ({
                    show5: !prevState.show5,
                  }))
                }
              >
                <p>
                  Kaelen is a third year Mathematics major at the University of
                  Texas.
                  <br />
                  Interested in data, accessible web technologies, UI/UX design,
                  and environmental sustainability.
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
