import React, { useState} from 'react'
import './styles.css'
// import { UserPhoto, UserPhotoIcon, UserSummaryWrapper } from './styles'
import {PostListUserProfile} from '../PostListUserProfile'
import {Popup} from '../Popup'

export const UserProfile = () => {
    const [showPopup, setShowPopup] = useState(false);

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
                    <h1 className='user-name'>Christine Williams</h1>
                </div>
            </div>
            <Popup trigger={showPopup} setTrigger={setShowPopup}>
                <h3>Upload User Image</h3>
            </Popup>
            <PostListUserProfile/>
        </>

    )
}


