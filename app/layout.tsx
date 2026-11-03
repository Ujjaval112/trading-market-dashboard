import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MarketPulse Pro',
  description:
    'Trading market dashboard for shares, forex, crypto, news, and strategy backtesting.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
