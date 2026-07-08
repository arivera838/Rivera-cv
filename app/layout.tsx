import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';
const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit',
});
export const metadata: Metadata = {
  title: 'Andrés Rivera -- 3D Creator',
  description: 'Senior Software Engineer | React Native | Tech Lead',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${kanit.variable} font-sans bg-[#0C0C0C] text-[#D7E2EA] antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
