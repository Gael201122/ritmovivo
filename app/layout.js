import "./globals.css";

export const metadata = {
  title: "RitmoVivo | Tu mundo musical",
  description: "Géneros, artistas y canciones populares",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
