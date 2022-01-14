import React, { useState} from 'react'
import './styles.css'
import {PostListUserProfile} from '../PostListUserProfile'
import {Popup} from '../Popup'
import { useAuth } from '../../context/AuthContext'
import { CreatePost } from '../CreatePost'

export const UserProfile = () => {
    const { user } = useAuth();
    const [showPopup, setShowPopup] = useState(false);
    const [image, setImage] = useState(null);

    const fileSelectHandler = (e) => {
        setImage(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    const fileUploadHandler = (e) => {
        // const formData = new FormData();
        // formData.append('file', file, file.name);
        // try {
        //     const {
        //         data: { location }
        //     } = axios.post('https://aidooit-app.herokuapp.com/images/s3', formData, {
        //         headers: { Authorization: localStorage.getItem('token') },
        //     });
        //     console.log(location);
        // }
        // catch (error) {
        //     console.log(error);
        // }
    }


    return (
        <>
            <div className='user-summary-wrapper'>
                <div className='user-photo'>
                    <button 
                      className='user-photo-icon'
                      onClick={() => setShowPopup(!showPopup)}
                      >
                        <i class="fas fa-camera icon-camera"></i>
                    </button>
                </div>
                <div className='user-name-container'>
                    <h1 className='user-name'>{user.first_name} {user.last_name}</h1>
                </div>
            </div>
            <Popup trigger={showPopup} setTrigger={setShowPopup}>
                <h4>Upload User Image</h4>
                <input type='file' />
                
                <button className = 'btn'
                    onClick={() => fileUploadHandler()}
                >
                    <i class="fas fa-upload"></i>
                </button>
            </Popup>
            <PostListUserProfile/>
            <CreatePost/>
        </>

    )
}


