import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
//import Post from "./Post";
import PostForm from "./PostForm";

const PostList = () => {
  const { posts, getAllPosts } = useContext(PostContext);

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="cards-column">
          {posts.map((post) => (
            <PostForm key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;
