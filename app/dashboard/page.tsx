import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "./signout";

export default async function Dashboard() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  if (!data?.claims) redirect("/login");

  const userId = String(data.claims.sub);
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role, student_number, programme")
    .eq("id", userId)
    .maybeSingle();

  const name = profile?.full_name || "Student";
  const role = profile?.role || "student";

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span>🎓</span><div><strong>U-dite</strong><small>Your University Life, Simplified.</small></div></div>
        <nav>
          <a className="active" href="/dashboard">⌂ <span>Dashboard</span></a>
          <a href="#">▣ <span>Courses</span></a>
          <a href="#">▦ <span>Timetable</span></a>
          <a href="#">▤ <span>Assignments</span></a>
          <a href="#">◇ <span>Exams</span></a>
          <a href="#">▥ <span>Results</span></a>
          <a href="#">◌ <span>Messages</span><b>3</b></a>
          <a href="#">♧ <span>Notifications</span><b>5</b></a>
          <a href="/profile">♙ <span>Profile</span></a>
          <a href="#">⚙ <span>Settings</span></a>
        </nav>
        <div className="sidebar-note">Better<br/>Students<br/><em>Brighter Futures</em></div>
      </aside>

      <section className="dashboard-main">
        <header className="topbar">
          <div className="search">⌕ <input placeholder="Search courses, assignments, or anything..." /></div>
          <div className="bell">♧ <i>5</i></div>
          <a href="/profile" className="user"><div className="avatar">{name.slice(0,2).toUpperCase()}</div><div><strong>{name}</strong><small>{role}</small></div></a>
        </header>

        <div className="content">
          <section className="hero">
            <div><h1>Good Morning, {name.split(" ")[0]} 👋</h1><p>Keep going, your goals are within reach.</p></div>
          </section>

          <section className="stats">
            {[
              ["🎓","My Courses","0","Connect your courses"],
              ["📝","Assignments","0","Pending submission"],
              ["🗓️","Upcoming Exams","0","This semester"],
              ["🔔","Notifications","0","Unread messages"]
            ].map(([icon,label,value,sub]) => (
              <div className="stat" key={label}><div className="stat-icon">{icon}</div><div><small>{label}</small><h2>{value}</h2><span>{sub}</span></div></div>
            ))}
          </section>

          <section className="panels">
            <div className="panel">
              <div className="panel-head"><h2>▣ Today's Schedule</h2><span>Connect timetable</span></div>
              <div className="empty">Your real timetable will appear here once courses and schedules are added.</div>
            </div>
            <div className="panel">
              <div className="panel-head"><h2>🔗 Quick Links</h2></div>
              <div className="quick"><a href="#">View Courses →</a><a href="#">Submit Assignment →</a><a href="#">Check Results →</a><a href="#">University Library →</a></div>
            </div>
          </section>

          <section className="panels">
            <div className="panel">
              <div className="panel-head"><h2>📣 Recent Announcements</h2><span>View all →</span></div>
              <div className="empty">No announcements yet.</div>
            </div>
            <div className="panel">
              <div className="panel-head"><h2>⚙ Academic Progress</h2></div>
              <div className="progress-empty"><strong>0%</strong><span>Add results to calculate GPA and progress.</span></div>
            </div>
          </section>

          <div className="account-strip">
            <div><strong>{profile?.student_number || "Student account"}</strong><span>{profile?.programme || "Programme not set yet"}</span></div>
            <form action={signOut}><button>Sign out</button></form>
          </div>
        </div>
      </section>
    </main>
  );
}