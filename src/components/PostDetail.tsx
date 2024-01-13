import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <div className="post__detail">
      <div className="post__box">
        <div className="post__title">I love you</div>
        <div className="post__profile-box">
          <div className="post__profile" />
          <div className="post__author-name">패스트캠퍼스</div>
          <div className="post__date">2024.01.12</div>
        </div>
        <div className="post__utils-box">
          <div className="post__delete">삭제</div>
          <div className="post__edit">
            <Link to={`/posts/edit/1`}>수정</Link>
          </div>
        </div>
        <div className="post__text">샬라샬라</div>
      </div>
    </div>
  );
}
