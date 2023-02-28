import Image from "next/image";
import Link from "next/link";
export default function LoginPage() {
  return (
    <div className="loginpage-container">
      <div className="left-side">
        <Image src={"/bpt-loginpage-bg.svg"} width={600} height={300} />
      </div>
      <div className="right-side">
        <Image src={"/bpt-logo-2.svg"} width={400} height={100} />
        <input
          className="search-boxes"
          type="text"
          placeholder="Enter username"
        />
        <input className="search-boxes" type="text" placeholder="Password" />
        <div className="login-confirmation">
          <p>
            <input type="checkbox" />
            Remember me
          </p>
          <Link href="/ahah">Forgot Password?</Link>
        </div>
        <button className="big-button">LOGIN</button>
        <h3>-OR-</h3>
        <div className="alt-login-option">
          <button className="google">Sign in with Google</button>
          <button className="facebook">Login with Facebook</button>
        </div>
        <p>
          Dont Have an Account? <Link href="/registration">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
