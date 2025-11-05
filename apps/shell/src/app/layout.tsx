import React from 'react';

// Este layout NUNCA será visto pelo usuário.
// Ele só existe para o 'next build' do 'shell' não falhar.
// Todo o tráfego é roteado para 'web' ou 'docs'.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}