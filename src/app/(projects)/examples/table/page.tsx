import { Employees } from "@/app/data/employees";

const TablePage = () => {
  return (
    <main className="min-h-screen bg-neutral-200 p-6">
      <div className="container mx-auto max-w-lg rounded bg-white p-4">
        <table className="w-full table-auto border-collapse ">
          <thead className=" ">
            <tr className="border-b border-slate-300">
              <th className="px-2 text-left text-base font-medium">Name</th>
              <th className="px-2 text-left text-base font-medium">City</th>
              <th className="px-2 text-left text-base font-medium">Country</th>
            </tr>
          </thead>
          <tbody>
            {Employees.map((employee, index) => (
              <tr key={index} className="border-b border-slate-300">
                <td className="px-2">{employee.employeeName}</td>
                <td className="px-2">{employee.city}</td>
                <td className="px-2">{employee.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default TablePage;
