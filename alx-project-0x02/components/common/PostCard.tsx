// components/PostCard.tsx
import { PostProps } from "@/interfaces";
import React from "react";

const PostCard = ({ post }: { post: PostProps }) => {
  console.log(post);
  return (
    <div
      style={{
        marginBottom: "1.5rem",
        padding: "1rem",
        border: "1px solid #ccc",
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
