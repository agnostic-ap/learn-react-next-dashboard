/*
 * @Author: gaotian dc23byte@163.com
 * @Date: 2024-07-07 00:56:38
 * @LastEditors: gaotian dc23byte@163.com
 * @LastEditTime: 2024-08-28 22:27:38
 * @FilePath: /hydra-react-admin/nextjs-dashboard/app/layout.tsx
 * @Description:
 */
import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
