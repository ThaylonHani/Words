import './globals.css';

export const metadata = {
  title: 'WordsForMe',
  description: 'Palavras boas para pessoas boas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}</body>
    </html>
  )
}
