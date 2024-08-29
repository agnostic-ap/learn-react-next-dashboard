/*
 * @Author: gaotian dc23byte@163.com
 * @Date: 2024-08-28 22:55:41
 * @LastEditors: gaotian dc23byte@163.com
 * @LastEditTime: 2024-08-28 22:57:20
 * @FilePath: /hydra-react-admin/nextjs-dashboard/app/dashboard/layout.tsx
 * @Description:
 */
import SideNav from '@/app/ui/dashboard/sidenav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}
