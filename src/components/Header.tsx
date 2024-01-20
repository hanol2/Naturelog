import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <Link to="/" className="header__logo">
          Naturelog
        </Link>
        <div>
          <Link to="/posts/new" className="post__button">
            글쓰기
          </Link>
          <Link to="/posts">게시글</Link>
          <Link to="/profile">프로필</Link>
        </div>
      </header>
    </>
  );
}
