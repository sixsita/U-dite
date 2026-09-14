# U-dite — Real App Phase 1

This is the first production-oriented foundation for U-dite:
- Next.js App Router
- Supabase Auth
- Supabase Postgres
- Cookie-based SSR auth
- Protected dashboard
- Student profile created automatically after signup
- Database schema for courses, enrollments, assignments, submissions, exams, results, announcements and notifications
- Row Level Security policies

## Setup

1. Create a Supabase project.
2. Open Supabase SQL Editor and run `supabase/schema.sql`.
3. Copy `.env.example` to `.env.local`.
4. Put your Supabase project URL and publishable key in `.env.local`.
5. Run:
   npm install
   npm run dev
6. Open http://localhost:3000.

Important:
- Never put a Supabase service-role key in the browser or commit it to the repository.
- The SQL includes RLS policies; review/extend policies before production.

## Email confirmation

In Supabase Auth, configure the confirmation email URL for the SSR flow:
{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email

The official Supabase Next.js documentation recommends `@supabase/ssr` for cookie-based sessions and a server-side client/proxy flow.
