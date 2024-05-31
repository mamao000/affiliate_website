"use client";

import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const ADD_POST = gql`
  mutation AddPost($title: String!, $content: String!) {
    addPost(title: $title, content: $content) {
      id
      title
      content
      created_at
    }
  }
`;

const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [addPost] = useMutation(ADD_POST);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addPost({ variables: { title, content } });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPostPage;
