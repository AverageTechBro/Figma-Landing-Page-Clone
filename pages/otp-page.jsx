import Image from "next/image";
import Link from "next/link";
export default function SendOTP() {
  return (
    <div className="otp-container">
      <div className="loginpage-container">
        <div className="left-side">
          <Image src={"/bpt-loginpage-bg.svg"} width={600} height={300} />
        </div>
        <div className="right-side">
          <Image src={"/bpt-logo-2.svg"} width={400} height={100} />
          <input
            className="search-boxes"
            type="text"
            placeholder="Enter Mobile Number"
          />
          <button className="big-button">Send OTP</button>

          <p className="privacy">
            By continuing, you agree to BT Planet{" "}
            <Link href="/a">Terms of Use and Privacy Policy</Link>
          </p>

          <p>
            Already a Member? <Link href="/login-page">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
