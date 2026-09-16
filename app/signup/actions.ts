"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function signupStudent(formData: FormData) {
  const supabase = await createClient();

  const fullName = String(formData.get("full_name") || "");
  const university = String(formData.get("university") || "");
  const studentNumber = String(formData.get("student_number") || "");
  const programme = String(formData.get("programme") || "");
  const yearOfStudy = String(formData.get("year_of_study") || "");
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  if (password.length < 8) {
    redirect("/signup?error=Password%20must%20be%20at%20least%208%20characters");
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        university,
        student_number: studentNumber,
        programme,
        year_of_study: yearOfStudy,
      },
    },
  });

  if (error || !data.user) {
    redirect("/signup?error=Could%20not%20create%20account");
  }


  redirect("/login?message=Check%20your%20email%20to%20confirm%20your%20account");
}
