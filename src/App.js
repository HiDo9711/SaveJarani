import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Board from "./Board/Board";
import AccidentChart from "./Accident/AccidentChart";
import Accident from "./Accident/Accident";
import LawAbout from "./Law/LawAbout";
import BoardInsert from "./Board/BoardInsert";
import LawHome from "./Law/LawHome";
import BoardEdit from "./Board/BoardEdit";
import BoardList from "./Board/BoardList";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 5,
      title: "다섯번째 게시글 제목",
      content: "다섯번째 게시글 내용",
      username: "5번 유저",
      password: 5,
      date: new Date().toISOString().split("T")[0],
    },
    {
      id: 4,
      title: "네번째 게시글 제목",
      content: "네번째 게시글 내용",
      username: "4번 유저",
      password: 4,
      date: new Date().toISOString().split("T")[0],
    },
    {
      id: 3,
      title: "세번째 게시글 제목",
      content: "세번째 게시글 내용",
      username: "3번 유저",
      password: 3,
      date: new Date().toISOString().split("T")[0],
    },
    {
      id: 2,
      title: "두번째 게시글 제목",
      content: "두번째 게시글 내용",
      username: "4번 유저",
      password: 2,
      date: new Date().toISOString().split("T")[0],
    },
    {
      id: 1,
      title: "첫번째 게시글 제목",
      content: "첫번째 게시글 내용",
      username: "1번 유저",
      password: 1,
      date: new Date().toISOString().split("T")[0],
    },
  ]);
  const navigate = useNavigate();

  const addPost = (newPost) => {
    newPost.id = posts.length + 1;
    newPost.date = new Date().toISOString();
    setPosts((prevPosts) => [...prevPosts, newPost]);
    navigate("/board");
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    navigate("/board");
  };

  const editPost = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Accident />} />
          <Route path="/" element={<AccidentChart />} />
          <Route
            path="/board"
            element={<Board posts={posts} onDelete={deletePost} />}
          />
          <Route
            path="/board/insert"
            element={<BoardInsert onAddPost={addPost} />}
          />
          <Route
            path="/board/:id"
            element={<BoardList posts={posts} onDelete={deletePost} />}
          />
          <Route
            path="/board/edit/:id"
            element={<BoardEdit posts={posts} onEditPost={editPost} />}
          />{" "}
          <Route path="/LawAbout" element={<LawAbout />} />
          <Route path="/LawHome" element={<LawHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
