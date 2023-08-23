import Link from "next/link";
import { ReactNode } from "react";

export const EXAMPLE_PATH = "/examples/table-detail-routing/";

const EmployeeTableLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav className="flex h-10 items-center bg-slate-800 text-white">
        <div className="container mx-auto px-6">
          <Link
            href={EXAMPLE_PATH}
            className="hover:text-sky-500 hover:underline"
          >
            Employees
          </Link>
        </div>
      </nav>
      <main className="container mx-auto px-6 py-4">{children}</main>
    </div>
  );
};

export default EmployeeTableLayout;
