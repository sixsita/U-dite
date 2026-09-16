import { login, signup } from "./actions";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string; message?: string }> }) { const params = await searchParams;
  return (
    <main className="auth-page">
      <section className="auth-brand">
        <div className="logo">🎓 <strong>U-dite</strong></div>
        <p>Your University Life, Simplified.</p>
        <div className="brand-message">
          <h2>Everything you need.<br/>One university hub.</h2>
          <p>Courses, assignments, exams, results and university communication in one place.</p>
        </div>
      </section>

      <section className="auth-card-wrap">
        <form className="auth-card">
          <div className="mini-logo">🎓 <strong>U-dite</strong></div>
          <h1>Welcome back</h1>
          <p className="muted">Sign in to continue to your student dashboard.</p>

          <label htmlFor="email">University email</label>
          <input id="email" name="email" type="email" placeholder="you@university.ac.ke" required />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="••••••••" required />

          <button className="primary" formAction={login}>Sign in</button>
          <a href="/signup" className="secondary">Create student account</a>

          <p className="tiny">By continuing, you agree to the U-dite terms and privacy policy.</p>
        </form>
      </section>
    </main>
  );
}