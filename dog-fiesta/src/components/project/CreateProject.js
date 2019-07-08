import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectAction'

class CreateProject extends Component {
    state = {
        title: "",
        content: "",
        isUploading: false,
        progress: 0,
        image: [],
        url: "",
    };

    handleChangeTitle = event => this.setState({ title: event.target.value });
    handleChangeContent = event => this.setState({ content: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
    };
    handleUploadSuccess = (filename) => {
        this.setState({ image: [...this.state.image, filename], progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ url: url }))
    };

    handleCreate = () => {
        this.props.createProject(this.state)
    }

    render() {
        return (
            <div className='row'>
                <div className="col m2"></div>
                <form className='white center col m8 form-showing'>
                    <h5 className='grey-text text-darken-3'>Креирај Нов Оглас</h5>
                    <div className='input-field'>
                        <label htmlFor='title'>Наслов</label>
                        <input type='text' value={this.state.title} id='title' onChange={this.handleChangeTitle} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='content'>Содржина на оглас</label>
                        <textarea id='content' value={this.state.content} className='materialize-textarea' onChange={this.handleChangeContent}></textarea>
                    </div>
                    <label className="progress-label">Прогрес:</label>
                    {this.state.isUploading && <p>Прогрес: {this.state.progress}</p>}
                    {this.state.url && <img src={this.state.url} />}
                    <FileUploader
                        accept="image/*"
                        name="image"
                        randomizeFilename
                        storageRef={firebase.storage().ref("images")}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />
                    <button className='btn light-green z-depth-0' onClick={this.handleCreate}>Креирај</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
