import classes from "./posts.module.scss";
import MyButton from "../../UI/MyButton/MyButton";
const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.header}>
                <div className={classes.title}>
                    <strong className={classes.id}>{props.number}</strong>
                    <div className={classes.post__name}>{props.post.title}</div>
                </div>
                <div className={classes.body}>{props.post.body}</div>
            </div>
            <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
        </div>
    );
};

export default Post;
