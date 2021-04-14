
import axios from 'axios';
import React, { Component } from "react";
import "../styles/Form.scss";

class Form extends Component {
  state = {
    selectedFile: null
  };

  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const formData = new FormData();

    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    axios.post("api/uploadFile", formData);
  };

  fileData = () => {
    if (this.state.selectedFile) {

      return(
        <div>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
        </div>
      )
    }
  }
  


  render() {
    
    return (
      <div id="Form">
        <h1>Submit form</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Company" />
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Submit!</button>
        </form>
        {this.fileData()}
      </div>
    );
  }
}



export default Form;
