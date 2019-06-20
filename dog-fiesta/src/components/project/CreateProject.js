import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectAction'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { storage } from '../../config/fbConfig';

class CreateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            image: null,
            url: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                // this.setState({ progress });
            },
            (error) => {
                // error function ....
                console.log(error);
            },
            () => {
                // complete function ....
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ url: url });
                })
            });
        
        // this.props.createProject(this.state);
        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    handleChangeImage = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className='container'>
                <form className='white' onSubmit={this.handleSubmit}>
                    <h5 className='grey-text text-darken-3'>Креирај Нов Оглас</h5>
                    <div className='input-field'>
                        <label htmlFor='title'>Наслов</label>
                        <input type='text' id='title' onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='content'>Содржина на оглас</label>
                        <textarea id='content' className='materialize-textarea' onChange={this.handleChange}></textarea>
                    </div>
                    {/* <button onClick={this.gotoUploadImage}>Прикачи фотографии</button> */}
                    <div className='input-field'>
                        <input type='file' id='image' onChange={this.handleChangeImage} />
                        {/* <button onClick={this.handleUpload}>Прикачи</button> */}
                    </div>

                    <div className='input-field'>
                        <button className='btn light-green z-depth-0'>Креирај</button>
                    </div>
                </form>
            </div>
        )
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
