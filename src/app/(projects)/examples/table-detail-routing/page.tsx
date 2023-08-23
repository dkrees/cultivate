"use client";
import { Cities, Employees, Titles } from "@/app/data/employees";
import { CheckIcon, ChevronDownIcon, Cross1Icon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EXAMPLE_PATH } from "./layout";

const TablePage = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Any City");
  const [title, setTitle] = useState("Any Title");

  const cities = [{ city: "Any City", country: "" }, ...Cities];
  const titles = [{ title: "Any Title" }, ...Titles];

  const filteredEmployees = [...Employees]
    .filter((item) =>
      item.employeeName.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((item) => (city === "Any City" ? true : item.city.includes(city)))
    .filter((item) =>
      title === "Any Title" ? true : item.title.includes(title),
    );

  return (
    <>
      <div className="mb-4 grid gap-4 md:grid-cols-3">
        {/* Search Names */}
        <div className="w-full">
          <div className="inline-flex w-full items-center justify-end">
            <input
              type="text"
              className="w-full rounded border-gray-400 py-1 hover:border-sky-500"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="absolute grid h-8 w-8 cursor-pointer select-none place-content-center hover:text-sky-500 active:text-sky-600"
              onClick={() => setSearch("")}
            >
              <Cross1Icon />
            </button>
          </div>
        </div>

        {/* City Filter */}
        <Select.Root value={city} onValueChange={(e) => setCity(e)}>
          <Select.Trigger className="group inline-flex w-full items-center justify-between gap-2 rounded border border-gray-400 px-3 py-1 hover:border-sky-500 hover:text-sky-500">
            <Select.Value />
            <Select.Icon className="text-gray-500 group-hover:text-sky-500">
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="overflow-hidden rounded-md bg-white shadow-md">
              <Select.Viewport className="">
                {cities.map((city) => (
                  <Select.Item
                    key={city.city}
                    value={city.city}
                    className="flex cursor-pointer select-none items-center rounded px-2 py-1 pl-8 outline-none hover:bg-sky-50"
                  >
                    <Select.ItemText>
                      {city.city}
                      {city.country && <span>, {city.country}</span>}
                    </Select.ItemText>
                    <Select.ItemIndicator className="absolute left-0 inline-flex w-8 items-center justify-center">
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>

        {/* Title Filter */}
        <Select.Root value={title} onValueChange={(e) => setTitle(e)}>
          <Select.Trigger className="group inline-flex w-full items-center justify-between gap-2 rounded border border-gray-400 px-3 py-1 hover:border-sky-500 hover:text-sky-500">
            <Select.Value />
            <Select.Icon className="text-gray-500 group-hover:text-sky-500">
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="overflow-hidden rounded-md bg-white shadow-md">
              <Select.Viewport className="">
                {titles.map((title) => (
                  <Select.Item
                    key={title.title}
                    value={title.title}
                    className="flex cursor-pointer select-none items-center rounded px-2 py-1 pl-8 outline-none hover:bg-sky-50"
                  >
                    <Select.ItemText>{title.title}</Select.ItemText>
                    <Select.ItemIndicator className="absolute left-0 inline-flex w-8 items-center justify-center">
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      {/* TABLE */}
      <table className="w-full table-auto border-collapse rounded bg-white">
        <thead>
          <tr className="h-8 border-b border-slate-300 text-left text-base font-medium text-gray-500">
            <th className="">Name</th>
            <th className="">Title</th>
            <th className="">City</th>
            <th className="">Country</th>
          </tr>
        </thead>
        <tbody>
          {!filteredEmployees.length && (
            <tr className="h-10 border-b border-slate-200">
              <td className="">No results</td>
            </tr>
          )}
          {filteredEmployees.map((employee) => (
            <tr
              key={employee.employeeID}
              className="h-10 cursor-pointer border-b border-slate-200 hover:bg-sky-50 hover:text-sky-500 hover:underline"
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey) {
                  // For allowing ctrl/cmd click opening in a new tab.
                  const win = window.open(
                    EXAMPLE_PATH + employee.employeeID,
                    "_blank",
                  );
                  win?.focus();
                } else {
                  // Otherwise use the standard next router navigation:
                  router.push(EXAMPLE_PATH + employee.employeeID);
                }
              }}
            >
              <td>{employee.employeeName}</td>
              <td>{employee.title}</td>
              <td>{employee.city}</td>
              <td>{employee.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TablePage;
