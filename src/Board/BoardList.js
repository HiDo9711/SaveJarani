import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BoardList = ({ posts, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id === Number(id));
  const [password, setPassword] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [showEditButton, setShowEditButton] = useState(true);
  const [showDeleteButton, setShowDeleteButton] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEdit = () => {
    if (!showPasswordInput) {
      setShowPasswordInput(true);
      setShowDeleteButton(false);
    } else if (password === "") {
      alert("비밀번호를 입력해주세요.");
    } else if (password === post.password) {
      navigate(`/board/edit/${id}`);
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  const handleDelete = () => {
    if (!showPasswordInput) {
      setShowPasswordInput(true);
      setShowEditButton(false);
    } else if (password === "") {
      alert("비밀번호를 입력해주세요.");
    } else if (password === post.password) {
      onDelete(post.id);
      navigate("/board");
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  const handleGoBack = () => {
    navigate("/board");
  };

  if (!post) {
    return <div>게시글이 존재하지 않습니다.</div>;
  }

  return (
    <div className="BoardInsert">
      <br />
      <div className="BoardList">
        <p>{post.title}</p>
      </div>
      <div className="BoardList1">
        <p>{post.username}</p>
      </div>
      <div className="BoardList2">
        <p>{post.content}</p>
      </div>
      {showPasswordInput && (
        <input
          type="password"
          placeholder="  비밀번호"
          value={password}
          onChange={handlePasswordChange}
        />
      )}
      <div className="bt_div">
        {showEditButton && (
          <button onClick={handleEdit} className="BT1">
            {showPasswordInput ? "확인" : "수정하기"}
          </button>
        )}
        {showDeleteButton && (
          <button onClick={handleDelete} className="BT2">
            {showPasswordInput ? "확인" : "삭제하기"}
          </button>
        )}
        <button onClick={handleGoBack} className="BT3">
          목록
        </button>
      </div>
    </div>
  );
};

export default BoardList;
