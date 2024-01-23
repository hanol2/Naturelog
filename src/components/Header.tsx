import { Link } from "react-router-dom";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useContext } from "react";
import ThemeContext from "context/ThemeContext";
import { FaUser } from "react-icons/fa6";

export default function Header() {
  const context = useContext(ThemeContext);
  return (
    <header>
      <Link to="/" className="header__logo">
        Naturelog
      </Link>
      <div>
        {context.theme === "light" ? (
          <BsSunFill
            onClick={context.toggleMode}
            className="header__theme-btn"
          />
        ) : (
          <BsMoonFill
            onClick={context.toggleMode}
            className="header__theme-btn"
          />
        )}
        <Link to="/posts/new" className="post__button">
          글쓰기
        </Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">
          <FaUser />
        </Link>
      </div>
    </header>
  );
}
