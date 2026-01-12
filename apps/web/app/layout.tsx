import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'IIM Web',
  description: 'Web application for IIM',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
