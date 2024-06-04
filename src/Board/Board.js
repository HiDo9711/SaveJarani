import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Board.css";

const Board = ({ posts = [] }) => {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="board_wrap">
        <div className="board_title">
          <h1>자전거 사고 제보 게시판</h1>
          <p></p>
        </div>
        <table className="board_list_wrap">
          <thead className="board_list">
            <tr className="board_tr">
              <th scope="col" className="num">
                게시글 번호
              </th>
              <th scope="col" className="title">
                제목
              </th>
              <th scope="col" className="writer">
                작성자
              </th>
              <th scope="col" className="date">
                작성일
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedPosts.map((item, index) => (
              <tr key={item.id} className="board_tr">
                <th scope="row">{sortedPosts.length - index}</th>
                <td className="bd_title">
                  <Link to={`/board/${item.id}`}>{item.title}</Link>
                </td>
                <td>{item.username}</td>
                <td>{formatDate(item.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Outlet />
        <div className="bt_div">
          <Link to="/board/insert">
            <button className="bt2">작성하기</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Board;
