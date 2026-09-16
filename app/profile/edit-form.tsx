"use client";

import { useState } from "react";

export default function EditProfileForm({
  profile,
}: {
  profile: {
    full_name: string;
    student_number: string | null;
    programme: string | null;
  };
}) {
  const [fullName, setFullName] = useState(profile.full_name || "");
  const [studentNumber, setStudentNumber] = useState(profile.student_number || "");
  const [programme, setProgramme] = useState(profile.programme || "");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("Saving...");

    const response = await fetch("/profile/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: fullName,
        student_number: studentNumber,
        programme,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      setMessage(result.error || "Could not save profile.");
      return;
    }

    setMessage("Profile updated successfully.");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "25px" }}>
      <h2>Edit Profile</h2>

      <label>Full Name</label>
      <input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <label>Student Number</label>
      <input
        value={studentNumber}
        onChange={(e) => setStudentNumber(e.target.value)}
      />

      <label>Programme</label>
      <input
        value={programme}
        onChange={(e) => setProgramme(e.target.value)}
      />

      <button type="submit">Save Profile</button>

      {message && <p>{message}</p>}
    </form>
  );
}
