import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Agency Ad Accounts | Unlimited Spend + Support | AdsBuzz",
  description:
    "Get premium agency ad accounts with unlimited spend, zero bans, and instant approval. Scale your campaigns without limits. Start today.",
  metadataBase: new URL("https://adsbuzz.example.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#040719] text-white font-[var(--font-inter)]">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
