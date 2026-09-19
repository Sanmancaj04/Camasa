import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Camasa — Aprende idiomas a tu ritmo',
  description: 'Aprendizaje privado y local de inglés, japonés, francés y ruso.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <div className="camasa-companion" aria-hidden="true">
          <div className="camasa-companion__bubble">¡Tú puedes!</div>
          <img
            className="camasa-companion__image"
            src="/mascot/camasa-flamingo-v1.png"
            alt=""
          />
        </div>
      </body>
    </html>
  );
}
