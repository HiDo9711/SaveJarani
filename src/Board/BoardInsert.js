import React, { useState } from "react";

const BoardInsert = ({ onAddPost }) => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    username: "",
    password: "",
    date: new Date().toISOString().split("T")[0],
  });

  const { title, content, username, password, date } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const validateTitleAndContent = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용을 모두 입력해주세요.");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password.trim() === "") {
      alert("비밀번호를 입력해주세요.");
      return false;
    }
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validateTitleAndContent() || !validatePassword()) {
      return;
    }

    onAddPost(form);
    setForm({
      title: "",
      content: "",
      username: "",
      password: "",
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <form className="BoardInsert" onSubmit={onSubmit}>
      <h1>게시글 작성</h1>
      <div>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="제목"
          onChange={onChange}
        />
      </div>
      <div>
        <textarea
          type="text"
          name="content"
          value={content}
          placeholder="내용"
          onChange={onChange}
          rows="15"
          cols="50"
        />
      </div>
      <div>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="작성자명"
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="사용자 확인을 위한 비밀번호입니다. "
          onChange={onChange}
        />
      </div>
      <button type={"submit"} className="BT1">
        등록
      </button>
    </form>
  );
};

export default BoardInsert;
