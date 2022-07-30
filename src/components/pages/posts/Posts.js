import React, { useState } from 'react';
import { v4 } from "uuid";
import Header from '../header/Header';
import {posts} from "../../../constants"
import Post from "./Post"
const Posts = () => {
    const [postList, setPostList] = useState(posts);

    const removePost = (post) => {
        setPostList(postList.filter(p => p.id !== post.id))
    }
    return (
        <div className='Post-list'>
            <Header/>
            <h1 className="post-list__title">Пости :D</h1>
            {postList.map((post, index) => 
                <Post remove={removePost} number={index + 1} post={post} key={v4()}></Post>
            )}
        </div>
    );
};

export default Posts;