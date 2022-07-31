import React, { useState } from "react";
import { instaPosts } from "../../../constants";
import Header from "../header/Header";
import InstaPost from "./InstaPost";
const InstaPosts = () => {
    const [posts, setPosts] = useState(instaPosts);

    return (
        <div className="InstaPosts">
            <Header />
            {posts.map((post) => (
                <InstaPost post={post} />
            ))}
        </div>
    );
};

export default InstaPosts;
