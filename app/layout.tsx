import "./globals.css";

export const metadata = {
  title: "U-dite — Your University Life, Simplified.",
  description: "University student portal"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}