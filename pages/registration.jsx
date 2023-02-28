import Image from "next/image";
import Link from "next/link";
export default function Regitration() {
  return (
    <div className="registration-container">
      <div className="loginpage-container">
        <div className="left-side">
          <Image src={"/bpt-loginpage-bg.svg"} width={600} height={300} />
        </div>
        <div className="right-side">
          <Image src={"/bpt-logo-2.svg"} width={400} height={100} />
          <h4>Create your Account</h4>
          <label htmlFor="Username">Username</label>
          <input
            className="search-boxes"
            type="text"
            name="Username"
            placeholder="Enter username"
          />
          <label htmlFor="email">Email Adress</label>
          <input
            type="text"
            className="search-boxes"
            placeholder="example@gmail.com"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="search-boxes"
            name="password"
            type="text"
            placeholder="Password"
          />
          <div className="login-confirmation">
            <p>
              <input type="checkbox" />
              Remember me
            </p>
            <Link href="/ahah">Forgot Password?</Link>
          </div>
          <button className="big-button">
            <Link href="/otp-page">CREATE AN ACCOUNT</Link>
          </button>
          <h3>-OR-</h3>
          <div className="alt-login-option">
            <button className="google">Sign in with Google</button>
            <button className="facebook">Login with Facebook</button>
          </div>
          <p>
            Already a Member? <Link href="/login-page">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
