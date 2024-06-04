import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BoardInsert.css";

const BoardEdit = ({ posts, onEditPost }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id === Number(id));
  const [form, setForm] = useState({
    title: post.title,
    content: post.content,
    username: post.username,
    password: post.password,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditPost({ ...post, ...form });
    navigate("/board");
  };

  return (
    <form className="BoardInsert" onSubmit={handleSubmit}>
      <div className="board_title2">
        <h1>게시글 수정</h1>
      </div>
      <div>
        <input
          type="text"
          name="title"
          value={form.title}
          placeholder="제목"
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={form.content}
          placeholder="내용"
          onChange={handleChange}
          rows="15"
          cols="50"
        />
      </div>
      <div>
        <input
          type="text"
          name="username"
          value={form.username}
          placeholder="작성자명"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="사용자 확인을 위한 비밀번호"
          onChange={handleChange}
        />
      </div>
      <div className="bt_div">
        <button type="submit" className="BT1">
          수정 완료
        </button>
      </div>
    </form>
  );
};

export default BoardEdit;
