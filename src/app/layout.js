// app/layout.js (or app/layout.tsx for TypeScript)
import "./globals.css";

export const metadata = {
  title: "Frontend Studio",
  description: "An HTML , CSS AND JS COMPLIER ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
