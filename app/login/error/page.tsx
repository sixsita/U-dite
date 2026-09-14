import Link from "next/link";

export default function ErrorPage() {
  return (
    <main className="center-page">
      <div className="simple-card">
        <h1>Something went wrong</h1>
        <p className="muted">Please return to login and try again.</p>
        <Link className="primary-link" href="/login">Back to login</Link>
      </div>
    </main>
  );
}