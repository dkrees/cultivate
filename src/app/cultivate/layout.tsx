"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CultivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const links = [
    { name: "🚀 Cultivate", path: "/cultivate" },
    { name: "About", path: "/cultivate/about" },
  ];
  return (
    <div className="-pb-12 flex min-h-screen flex-col bg-gray-50 bg-gradient-to-b from-gray-100">
      <div className="bg-slate-700 text-white">
        <nav className="container mx-auto flex h-12 flex-row items-center gap-6 px-6">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                className={isActive ? "text-orange-400" : ""}
                href={link.path}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <main className="container mx-auto flex min-h-screen flex-col bg-white p-6">
        {children}
      </main>
    </div>
  );
}
