'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CultivateLayout({children}: {children: React.ReactNode}) {

  const pathname = usePathname();
  const links = [
    { name: 'Cultivate', path: '/cultivate' },
    { name: 'About', path: '/cultivate/about' }
  ];
  return (
    <div className="min-h-screen bg-gray-200 bg-gradient-to-b from-gray-300 dark:bg-gray-800 dark:from-gray-900">
      <div className="bg-slate-800 text-white">
        <nav className="container mx-auto h-12 flex flex-row items-center gap-6">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link className={isActive ? 'text-sky-300' : ''} href={link.path} key={link.name}>{link.name}</Link>
            )
          })}
        </nav>
      </div>

      { children }
    </div>
  )
}