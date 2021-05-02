import axios from "axios";
import React, { Component } from "react";
import Confetti from "react-confetti";
import "../styles/Form.scss";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      showConfetti: false,
    };
  }


  componentDidMount() {
    document.body.style.background =
      "#1c3384 url('../images/form-blob.svg') no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  componentWillUnmount() {
    document.body.style.background = "#1c3384";
  }

  // checkExtension = (event) => {
  //   let files = event.target.files;
  //   let err = '';
  //   // const types = ['file/json']; necessary if more than one file type accepted
  //   for (var x = 0; x < files.length; x++) {
  //     if (files[x].type !== 'file/json') {
  //       err += files[x].type + ' is not a supported format\n';
  //     }
  //   };

  //   if (err != '') {
  //     event.target.value = null;
  //     console.log(err);
  //     return false;
  //   }
  //   return true;
  // }

  onFileChange = (event) => {
    // var files = event.target.files;
    // if(this.checkExtension(event)) {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
    // }
  };

  onFileUpload = (e) => {
    let formClass = document.querySelector('.form-class');

    e.preventDefault();
    const formData = new FormData();

    formData.append("myFile", this.state.selectedFile);

    axios({
      method: "post",
      url: "http://localhost:8000/",
      params: {
        formData,
      },
    })
      .then((response) => {
        this.setState(
          {
            showConfetti: true,
          },
          () => {
            setTimeout(() => {
              this.setState({ showConfetti: false });
            }, 10000);
          }
        );
        
      })
      .catch((error) => {
        alert("not wotking!");
        var btn = document.querySelector(".submit");
        btn.classList.toggle("fail");
      });

      formClass.reset();
  };

  render() {
    return (
      <div id="Form">
        <h1>Submit form</h1>
        <form className="form-class">
          <div className="group field">
            <input
              className="text"
              type="input"
              placeholder="name"
              name="name"
              id="name"
            />
            <label for="name" class="label">
              Name
            </label>
          </div>
          <div className="group field">
            <input
              className="text"
              type="input"
              placeholder="company"
              name="company"
              id="company"
            />
            <label for="name" class="label">
              Company
            </label>
          </div>
          <div className="form-group files">
            <input
              type="file"
              className="form-control"
              multiple=""
              onChange={this.onFileChange}
            />
          </div>
          <button className="submit" onClick={this.onFileUpload}>
            Submit!
          </button>
        </form>
        {this.state.showConfetti ? (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ position: "fixed" }}
            recycle={false}
          />
        ) : null}
      </div>
    );
  }
}

export default Form;
