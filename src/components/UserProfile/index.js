import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { PostListUserProfile } from "../PostListUserProfile";
import { useAuth } from "../../context/AuthContext";
import { UserPhotoImg } from "./styles";

export const UserProfile = () => {
  const { user, updateUser } = useAuth();
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);


  useEffect(() => {
    try {
      const getImageLocation = async () => {
        const formData = new FormData();
        formData.append("file", image, image.name);
        const {
          data: { location },
        } = await axios.post(
          "https://aidooit-app.herokuapp.com/images/s3",
          formData,
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        );
        console.log(location);
        updateUser({user_image: location})
        setLocation(location);
      };
      getImageLocation();
    } catch (error) {
      console.log(error);
    }
  }, [image]);

  return (
    <>
      <div className="user-summary-wrapper">
        <div className="user-photo">
          <div class="image-upload">
            <label for="file-input">
              {location ? (
                <UserPhotoImg src={location} alt="" />
              ) : user.user_image ? (
                <UserPhotoImg src={user.user_image} alt="" />
              ) : (
                <i class="fas fa-camera icon-camera user-photo-icon"></i>
              )}
            </label>
            <input
              id="file-input"
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </div>
         
        </div>
        <div className="user-name-container">
          <h1 className="user-name">
            {user.first_name} {user.last_name}
          </h1>
        </div>
      </div>
      <PostListUserProfile />
    </>
  );
};
