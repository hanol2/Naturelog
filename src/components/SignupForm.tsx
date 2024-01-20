import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { app } from "firebaseApp";

export default function SignupForm() {
  // 상태값을 저장해주기
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);

      toast.success("회원가입 성공!");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!value?.match(validRegex)) {
        setError("이메일 형식이 올바르지 않습니다.");
      } else {
        setError("");
      }
    }

    if (name === "password") {
      setPassword(value);

      const validRegex =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

      if (!value?.match(validRegex)) {
        setError(
          "비밀번호는 8자리 이상 영문,숫자,특수문자 조합으로 입력해주세요"
        );
      } else if (passwordConfirm?.length > 0 && value !== passwordConfirm) {
        setError("비밀번호와 비밀번호 확인 값이 다릅니다.");
      } else {
        setError("");
      }
    }

    if (name === "passwordConfirm") {
      setPasswordConfirm(value);

      const validRegex =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

      // 이 정규식 패턴은 다음과 같은 조건을 충족해야 합니다

      // (?=.*[a-zA-Z]): 최소한 하나의 영문자가 포함되어야 합니다.
      // (?=.*\d): 최소한 하나의 숫자가 포함되어야 합니다.
      // (?=.*[!@#$%^&*]): 최소한 하나의 특수문자가 포함되어야 합니다.
      // [a-zA-Z\d!@#$%^&*]{8,}: 영문자, 숫자, 특수문자로 이루어진 문자열이며, 최소 8자리 이상이어야 합니다.
      // 이 정규식 패턴은 비밀번호가 8자리 이상의 영문, 숫자, 특수문자의 조합을 포함하는지를 확인할 수 있습니다.

      if (!value?.match(validRegex)) {
        setError(
          "비밀번호는 8자리 이상 영문,숫자,특수문자 조합으로 입력해주세요"
        );
      } else if (value !== password) {
        setError("비밀번호와 값이 다릅니다.");
      } else {
        setError("");
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className="form form--lg">
      <h1 className="form__logo-title">Naturelog</h1>
      <h1 className="form__title">회원가입</h1>
      <div className="form__block">
        <input
          type="email"
          name="email"
          id="email"
          onChange={onChange}
          required
          placeholder="이메일 입력"
        ></input>
      </div>
      <div className="form__block">
        <input
          type="password"
          name="password"
          id="password"
          onChange={onChange}
          required
          placeholder="비밀번호 입력 (영문, 숫자, 특수문자 조합)"
        ></input>
      </div>
      <div className="form__block">
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          onChange={onChange}
          required
          placeholder="비밀번호 확인 (영문, 숫자, 특수문자 조합)"
        ></input>
      </div>
      {error && error?.length > 0 && (
        <div className="form__block">
          <div className="form__error">{error}</div>
        </div>
      )}

      <div className="form__block">
        계정이 이미 있으신가요?
        <Link to="/login" className="form__link">
          로그인하기
        </Link>
      </div>
      <div className="form__block">
        <input
          type="submit"
          value="회원가입"
          className="form__btn--submit"
          disabled={error?.length > 0}
        />
      </div>
    </form>
  );
}
