import { Link } from "react-router-dom";

export default function LoginForm() {
  const onSubmit = () => {};
  return (
    <form action="/post" method="POST" className="form form--lg">
      <h1 className="form__title">로그인</h1>
      <div className="form__block">
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="이메일 입력"
        ></input>
      </div>
      <div className="form__block">
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="비밀번호 입력(영문, 숫자, 특수문자 조합)"
        ></input>
      </div>
      <div className="form__block">
        계정이 없으신가요?
        <Link to="/signup" className="form__link">
          회원가입하기
        </Link>
      </div>
      <div className="form__block">
        <input type="submit" value="로그인" className="form__btn--submit" />
      </div>
    </form>
  );
}
