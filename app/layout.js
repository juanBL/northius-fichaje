import './globals.css'

export const metadata = {
  title: 'Fichaje Northius',
  description: 'Fichaje Northius',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body >{children}</body>
    </html>
  )
}
