import React, { useState, useEffect} from 'react'
import './styles.css'
import axios from 'axios'
import {PostListUserProfile} from '../PostListUserProfile'
import {Popup} from '../Popup'
import { useAuth } from '../../context/AuthContext'

export const UserProfile = () => {
    const { user } = useAuth();
    const [showPopup, setShowPopup] = useState(false);
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState(null);


    useEffect(() => {
        try {
          const getImageLocation = async () => {
            const formData = new FormData();
            formData.append('file', image, image.name);
            const { data: { location } } = await axios.post('https://aidooit-app.herokuapp.com/images/s3', formData, {
              headers: { Authorization: localStorage.getItem('token') }
            });
            console.log(location);
            setLocation(location);
          };
          getImageLocation();
        } catch (error) {
          console.log(error);
        }
      }, [image]);
      

    return (
        <>
            <div className='user-summary-wrapper'>
                <div className='user-photo'>
                    <div class="image-upload">
                        <label for="file-input">
                            <i class="fas fa-camera icon-camera user-photo-icon"></i>
                        </label>

                        <input id="file-input" type="file" 
                            onChange={(e) => {
                                setImage(e.target.files[0]);
                            }
                        }/>
                    </div>
                    {/* <button 
                      className='user-photo-icon'
                      onClick={() => setShowPopup(!showPopup)}
                      >
                        <i class="fas fa-camera icon-camera"></i>
                    </button> */}
                </div>
                <div className='user-name-container'>
                    <h1 className='user-name'>{user.first_name} {user.last_name}</h1>
                </div>
            </div>
            {/* <Popup trigger={showPopup} setTrigger={setShowPopup}>
                <h4>Upload User Image</h4>
                <input type='file' />
                
                <button className = 'btn'
                    onClick={() => fileUploadHandler()}
                >
                    <i class="fas fa-upload"></i>
                </button>
            </Popup> */}
            <PostListUserProfile/>
        </>

    )
}


