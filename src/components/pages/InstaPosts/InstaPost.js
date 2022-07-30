import React from 'react';
import classes from "./InstaPost.module.scss"
import LikeIcon from "../../icons/LikeIcon"
import CommentIcon from '../../icons/CommentIcon';
import SendIcon from '../../icons/SendIcon';
import SaveIcon from '../../icons/SaveIcon';
const InstaPost = ({post}) => {
    const {userIcon, userName, userSubtitle, image, likes, userText} = post;
    return (
        <div className={classes.InstaPost}>
            <header className={classes.header}>
                <img className={classes.userIcon} src={userIcon}/>
                <div className={classes.userInfo}>
                    <div className={classes.userName}>{userName}</div>
                    <div className={classes.userSubtitle}>{userSubtitle}</div>
                </div>
            </header>
            <main className={classes.main}>
                <img className={classes.image} src={image}/>
            </main>
            <footer className={classes.footer}>
                <div className={classes.actions}>
                <LikeIcon className={classes.like}/>
                <CommentIcon className={classes.comment}/>
                <SendIcon className={classes.send}/>
                <SaveIcon className={classes.save}/>
                </div>
                <div className={classes.activity}>
                    <div className={classes.views}>{likes} views</div>
                    <div className={classes.userText}>
                        <div className={classes.userName}>{userName}</div>
                        <div className={classes.text}>{userText}</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default InstaPost;