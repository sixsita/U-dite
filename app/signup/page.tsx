import Link from "next/link";
import { signupStudent } from "./actions";

const navy = "#0b2f63";
const gold = "#ffbf00";
const pageBg = "#f3f7fc";
const cardBorder = "#e4eaf2";
const text = "#243b53";
const muted = "#7b8794";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const error = params.error;

  return (
    <main className="signup-page">
      <section className="brand-panel">
        <div className="brand-content">
          <div className="logo">
            <span className="cap">🎓</span>
            <span>U-dite</span>
          </div>

          <div className="tagline">Your University Life, Simplified.</div>

          <div className="brand-copy">
            <h1>Everything you need.<br />One university hub.</h1>
            <p>
              Manage your university life in one simple place — courses,
              assignments, exams, results and everything in between.
            </p>
          </div>

          <div className="chips">
            <span>Courses</span>
            <span>Assignments</span>
            <span>Exams</span>
            <span>Results</span>
          </div>
        </div>
      </section>

      <section className="form-area">
        <div className="signup-card">
          <div className="card-logo">
            <span>🎓</span> U-dite
          </div>

          <h2>Create your account</h2>
          <p className="intro">
            Join U-dite and manage your university life in one hub.
          </p>

          {error && <div className="error">{error}</div>}

          <form action={signupStudent}>
            <div className="grid">
              <label>
                Full name
                <input
                  name="full_name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                />
              </label>

              <label>
                University
                <input
                  name="university"
                  type="text"
                  required
                  placeholder="Enter your university"
                />
              </label>

              <div className="two">
                <label>
                  Student number
                  <input
                    name="student_number"
                    type="text"
                    required
                    placeholder="e.g. UDS/001"
                  />
                </label>

                <label>
                  Year of study
                  <select
                    name="year_of_study"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select year</option>
                    <option value="1">Year 1</option>
                    <option value="2">Year 2</option>
                    <option value="3">Year 3</option>
                    <option value="4">Year 4</option>
                    <option value="5">Year 5</option>
                    <option value="6">Year 6</option>
                  </select>
                </label>
              </div>

              <label>
                Programme
                <input
                  name="programme"
                  type="text"
                  required
                  placeholder="e.g. Bachelor of Computer Science"
                />
              </label>

              <label>
                University email
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="student@university.ac.ke"
                />
              </label>

              <label>
                Password
                <input
                  name="password"
                  type="password"
                  required
                  minLength={8}
                  placeholder="Create a password"
                />
              </label>

              <p className="password-help">
                Password must be at least 8 characters.
              </p>

              <button type="submit">
                Create student account <span>→</span>
              </button>
            </div>
          </form>

          <p className="signin">
            Already have an account?{" "}
            <Link href="/login">Sign in</Link>
          </p>

          <p className="terms">
            By creating an account, you agree to our{" "}
            <span>Terms</span> and <span>Privacy Policy</span>.
          </p>
        </div>
      </section>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .signup-page {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 38% 62%;
          background: ${pageBg};
          color: ${text};
          font-family: Arial, Helvetica, sans-serif;
        }

        .brand-panel {
          min-height: 100vh;
          background: ${navy};
          color: white;
          display: flex;
          align-items: center;
          padding: 55px 8%;
          position: relative;
          overflow: hidden;
        }

        .brand-content {
          max-width: 540px;
          position: relative;
          z-index: 2;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 25px;
          font-weight: 800;
          color: ${gold};
        }

        .cap {
          font-size: 25px;
        }

        .tagline {
          font-size: 8px;
          font-weight: 600;
          margin-left: 34px;
          margin-top: -2px;
          color: #dbe7f7;
        }

        .brand-copy {
          margin-top: 105px;
        }

        .brand-copy h1 {
          font-size: clamp(34px, 4vw, 52px);
          line-height: 1.08;
          letter-spacing: -1.5px;
          margin: 0 0 25px;
        }

        .brand-copy p {
          color: #c9d8eb;
          font-size: 15px;
          line-height: 1.7;
          max-width: 480px;
          margin: 0;
        }

        .chips {
          display: flex;
          gap: 9px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .chips span {
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 20px;
          padding: 7px 12px;
          font-size: 11px;
          color: #dce8f6;
        }

        .brand-panel:after {
          content: "";
          position: absolute;
          width: 330px;
          height: 330px;
          border-radius: 50%;
          border: 70px solid rgba(255,191,0,.06);
          bottom: -190px;
          left: -100px;
        }

        .form-area {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 45px;
        }

        .signup-card {
          width: 100%;
          max-width: 620px;
          background: white;
          border: 1px solid ${cardBorder};
          border-radius: 14px;
          padding: 32px;
          box-shadow: 0 8px 28px rgba(11,47,99,.07);
        }

        .card-logo {
          color: ${navy};
          font-size: 20px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 14px;
        }

        .card-logo span {
          font-size: 19px;
        }

        .signup-card h2 {
          color: ${navy};
          margin: 0 0 6px;
          font-size: 27px;
        }

        .intro {
          color: ${muted};
          font-size: 13px;
          margin: 0 0 22px;
        }

        .grid {
          display: grid;
          gap: 13px;
        }

        label {
          display: grid;
          gap: 6px;
          color: ${text};
          font-size: 12px;
          font-weight: 700;
        }

        input,
        select {
          width: 100%;
          height: 43px;
          border: 1px solid #dbe3ed;
          border-radius: 8px;
          padding: 0 12px;
          background: #fff;
          color: ${text};
          font-size: 13px;
          outline: none;
        }

        input:focus,
        select:focus {
          border-color: ${navy};
          box-shadow: 0 0 0 2px rgba(11,47,99,.08);
        }

        .two {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .password-help {
          margin: -5px 0 0;
          color: ${muted};
          font-size: 11px;
        }

        button {
          width: 100%;
          height: 45px;
          border: 0;
          border-radius: 8px;
          background: ${gold};
          color: ${navy};
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          margin-top: 2px;
        }

        button span {
          margin-left: 7px;
          font-size: 16px;
        }

        button:hover {
          filter: brightness(.97);
        }

        .signin {
          text-align: center;
          color: ${muted};
          font-size: 12px;
          margin: 19px 0 0;
        }

        .signin a {
          color: ${navy};
          font-weight: 800;
          text-decoration: none;
        }

        .terms {
          text-align: center;
          color: #98a2b3;
          font-size: 9px;
          margin: 15px 0 0;
        }

        .terms span {
          color: ${navy};
        }

        .error {
          background: #fff1f0;
          color: #b42318;
          border: 1px solid #ffd6d2;
          border-radius: 8px;
          padding: 10px 12px;
          font-size: 12px;
          margin-bottom: 15px;
        }

        @media (max-width: 800px) {
          .signup-page {
            grid-template-columns: 1fr;
          }

          .brand-panel {
            min-height: 300px;
            padding: 38px 24px;
          }

          .brand-copy {
            margin-top: 48px;
          }

          .brand-copy h1 {
            font-size: 32px;
          }

          .form-area {
            min-height: auto;
            padding: 22px 15px 35px;
          }

          .signup-card {
            padding: 24px 19px;
          }
        }

        @media (max-width: 430px) {
          .two {
            grid-template-columns: 1fr;
          }

          .brand-copy p {
            font-size: 13px;
          }

          .brand-panel {
            min-height: 270px;
          }
        }
      `}</style>
    </main>
  );
}
