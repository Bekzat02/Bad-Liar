import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo img='https://i.pinimg.com/originals/fa/ee/cd/faeecdd470b95803ac418a510d9ee908.jpg'/>
            <MyPosts postData={props.profilePage.posts} defaultText={props.profilePage.defaultText} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;