import { useState } from "react";
import { LogoipsumLong } from "@assets/index";

import "../../assets/styles/auth.css";

export default function Auth() {
  const [toogleSign, setToogleSign] = useState<boolean>(false);

  function toggleSign() {
    setToogleSign(!toogleSign);
  }

  return (
    <div className="body">
      <main className={`container ${toogleSign && "active"}`} id="container">
        <section className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <img src={LogoipsumLong} alt="logo" className="w-36 h-7" />
            </div>
            <p>or use your email for registration</p>
            <input type="text" placeholder="Name" aria-label="Name" />
            <input type="email" placeholder="Email" aria-label="Email" />
            <input
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
            <button type="submit">Sign Up</button>
          </form>
        </section>

        <section className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <img src={LogoipsumLong} alt="logo" className="w-36 h-7" />
            </div>
            <p>or use your email password</p>
            <input type="email" placeholder="Email" aria-label="Email" />
            <input
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
            <a href="#">Forget Your Password?</a>
            <button type="submit">Sign In</button>
          </form>
        </section>

        <aside className="toggle-container">
          <div className="toggle">
            <article className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hd" id="login" onClick={toggleSign}>
                Sign In
              </button>
            </article>
            <article className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button className="hd" id="register" onClick={toggleSign}>
                Sign Up
              </button>
            </article>
          </div>
        </aside>
      </main>
    </div>
  );
}
