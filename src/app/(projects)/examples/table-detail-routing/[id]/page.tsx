"use client";
import { EmployeeType, Employees } from "@/app/data/employees";
import * as Avatar from "@radix-ui/react-avatar";
import { notFound, useRouter } from "next/navigation";
import { EXAMPLE_PATH } from "../layout";

const EmployeeDetail = ({ params: { id } }: { params: { id: string } }) => {
  const router = useRouter();

  const employees = [...Employees];

  const employee: EmployeeType = employees.filter(
    (employee) => employee.employeeID === id,
  )[0];

  const reportsTo: EmployeeType | null = employees.filter(
    (staff) => staff.employeeID === employee.reportsTo,
  )[0];

  const reports: EmployeeType[] | null = employees.filter(
    (staff) => staff.reportsTo === employee.employeeID,
  );

  if (!employee) {
    notFound();
  }

  return (
    <div>
      <header className="mb-4 flex flex-col items-center justify-start gap-4 border-b border-gray-300 pb-2 sm:flex-row">
        <Avatar.Root className="inline-flex h-20 w-20 select-none items-center justify-center overflow-hidden rounded-full align-middle">
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src={employee.avatar}
            alt={employee.employeeName}
          />
          <Avatar.Fallback
            className="leading-1 flex h-full w-full items-center justify-center rounded-[inherit] bg-sky-500 text-3xl font-medium text-white"
            delayMs={600}
          >
            {employee.avatarFallback}
          </Avatar.Fallback>
        </Avatar.Root>
        <div className="text-center sm:text-left">
          <h1 className="text-2xl">{employee.employeeName}</h1>
          <h2 className="text-gray-600">{employee.title}</h2>
          <div className="text-sm text-gray-600">
            {employee.city}, {employee.country}
          </div>
        </div>
      </header>

      {/* REPORTS TO */}
      {reportsTo && (
        <div className="mb-4">
          <div className="text-sm text-gray-600">Reports To:</div>
          <div
            className="group flex cursor-pointer items-center gap-4 rounded border border-gray-200 p-2 hover:border-sky-500"
            onClick={() => router.push(EXAMPLE_PATH + reportsTo.employeeID)}
          >
            <Avatar.Root className="inline-flex h-12 w-12 select-none items-center justify-center overflow-hidden rounded-full align-middle">
              <Avatar.Image
                className="h-full w-full rounded-[inherit] object-cover"
                src={reportsTo.avatar}
                alt={reportsTo.employeeName}
              />
              <Avatar.Fallback
                className="leading-1 flex h-full w-full items-center justify-center rounded-[inherit] bg-sky-500 font-medium text-white"
                delayMs={600}
              >
                {reportsTo.avatarFallback}
              </Avatar.Fallback>
            </Avatar.Root>
            <div className="group-hover:text-sky-500">
              {reportsTo.employeeName}
            </div>
          </div>
        </div>
      )}

      {/* DIRECT REPORTS */}
      <div>
        {reports.length > 0 && (
          <div className="text-sm text-gray-600">Direct Reports:</div>
        )}
        {reports?.map((report) => (
          <div
            className="group mb-2 flex cursor-pointer items-center gap-4 rounded border border-gray-200 p-2 hover:border-sky-500"
            key={report.employeeID}
            onClick={() => router.push(EXAMPLE_PATH + report.employeeID)}
          >
            <Avatar.Root className="inline-flex h-12 w-12 select-none items-center justify-center overflow-hidden rounded-full align-middle">
              <Avatar.Image
                className="h-full w-full rounded-[inherit] object-cover"
                src={report.avatar}
                alt={report.employeeName}
              />
              <Avatar.Fallback
                className="leading-1 flex h-full w-full items-center justify-center rounded-[inherit] bg-sky-500 font-medium text-white"
                delayMs={600}
              >
                {report.avatarFallback}
              </Avatar.Fallback>
            </Avatar.Root>
            <div className="group-hover:text-sky-500">
              {report.employeeName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDetail;
