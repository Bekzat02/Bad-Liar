import React from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'Add-Post'});
    }
    let post = props.postData.map(m => <Post message={m.message} likecount={m.likesCount}
                                             img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ0-g8vswsaeEKDYEYiBWtgYBXH0Zhy06CAw&usqp=CAU'/>);

    let updateText = () => {
        let text = newPostElement.current.value;
        let action = {type:'Update-Post-Message', newText: text};
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.defaultText}
                              onChange={updateText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    );
};

export default MyPosts;