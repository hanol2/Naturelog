import { Link } from "react-router-dom";

export default function SignupForm() {
  const onSubmit = () => {};
  return (
    <form action="/post" method="POST" className="form form--lg">
      <h1 className="form__title">회원가입</h1>
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
        <input
          type="password"
          name="password_confirm"
          id="password_confirm"
          required
          placeholder="비밀번호 확인(영문, 숫자, 특수문자 조합)"
        ></input>
      </div>
      <div className="form__block">
        계정이 이미 있으신가요?
        <Link to="/login" className="form__link">
          로그인하기
        </Link>
      </div>
      <div className="form__block">
        <input type="submit" value="회원가입" className="form__btn--submit" />
      </div>
    </form>
  );
}
