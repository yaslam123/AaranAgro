import { Metadata } from "next";
import "../styles/index.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aaranagritrade.com"),
  keywords: [
    "Aaran Agritrade",
    "aaran agritrade",
    "aaran agro",
    "aran agritrade",
    "aaran bakaro",
  ],
  title: "Aaran - Aaran Agritrade LTD",
  description: "Aaran - Aaran Agritrade LTD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
