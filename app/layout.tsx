import type { Metadata } from "next";
import "@/app/ui/styles/global.css";
import { inter } from "@/app/ui/styles/fonts";

export const metadata: Metadata = {
  title: "A - Главное происходит здесь",
  description:
    "Главные новости, развлечения, спорт и политика — узнавайте обо всем и читайте комментарии в реальном времени.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
