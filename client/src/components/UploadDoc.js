import React, { Component } from 'react'
import './uploadDoc.css'
import File from "../img/icons/save-file.svg"

class UploadDoc extends Component {


    constructor(props){
        super(props)
        this.state={fileNameAndSize: ""}
    }

    changeHandler = (e) => {
          
          this.setState({
            fileNameAndSize: e.target.files[0].name
          })
        
        }


    render() {
        return (
            <>
            <div className="uploadFile">
            <input onChange={this.changeHandler} type="file" name="file" id="file" className="inputFile" data-multiple-caption="{count} files selected" multiple/>
            <img className="save-file" src={File} alt="save-file"/>
            <label className="labelFile" for="file" >Choisis un fichier...</label>
            </div>
            <div className="file-name-div">
            <p className="file-name-p" >{this.state.fileNameAndSize}</p>
            </div>
            </>
        )
    }
}

export default UploadDoc