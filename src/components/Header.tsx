import { Link } from "react-router-dom";

export default function Header () {
    return (
        <header>
            <div>
                <Link to="/posts/new">글쓰기</Link>
                <Link to="/posts/new">게시글</Link>
                <Link to="/posts/new">프로필</Link>
            </div>
        </header>
    )
}