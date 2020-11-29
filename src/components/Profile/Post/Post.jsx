import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={props.img}/>
            {props.message}
            <div>
                <span>likes</span> {props.likecount}
            </div>
            <br/>
        </div>
    );
};

export default Post;