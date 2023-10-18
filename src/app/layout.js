import "./globals.css";
import { Gabarito } from "next/font/google";

const montserrat = Gabarito({ subsets: ["latin"], weight: ['400', '500']});

export const metadata = {
  title: "Mi Portfolio",
  description: "Portfolio de Maité de León",
};





export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
