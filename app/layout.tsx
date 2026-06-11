import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/components/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — AI & ML Developer`,
  description: siteConfig.subHeadline,
  openGraph: {
    title: `${siteConfig.name} — AI & ML Developer`,
    description: siteConfig.subHeadline,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} — AI & ML Developer`,
    description: siteConfig.subHeadline,
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = stored ? stored === 'dark' : prefersDark;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
