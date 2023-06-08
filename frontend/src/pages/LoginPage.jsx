import BackgroundLogin from "../assets/BackgroundLogin.png";

export default function LoginPage() {
  return (
    <div className="main">
      <img className="BackgroundLogin" src={BackgroundLogin} alt="img" />
      <div>
        <div className="center">
          <h1>Login</h1>
          <form method="post">
            <div className="txt_field">
              <span />
              <label>
                Username
                <input type="text" required />
              </label>
            </div>
            <div className="txt_field">
              <span />
              <label>
                Password
                <input type="password" required />
              </label>
            </div>
            <div className="pass">Forgot Password?</div>
            <input type="submit" value="Login" />
            <div className="signup_link">
              Not a member? <a href="Test">Signup</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
