import localFont from 'next/font/local'
import './globals.css'

const myFont = localFont({
  src: [
    {
      path: './fonts/Gilroy-Light.ttf',
      weight: '300',
      style: 'Light',
    },
    {
      path: './fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'Bold',
    },
    {
      path: './fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'Regular',
    }
  ]} )


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}  >{children}</body>
    </html>
  )
}
