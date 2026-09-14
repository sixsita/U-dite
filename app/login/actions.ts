"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) redirect("/login?error=Invalid%20email%20or%20password");

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  if (password.length < 8) {
    redirect("/login?error=Password%20must%20be%20at%20least%208%20characters");
  }

  const { error } = await supabase.auth.signUp({ email, password });
  if (error) redirect("/login?error=Could%20not%20create%20account");

  redirect("/login?message=Check%20your%20email%20to%20confirm%20your%20account");
}