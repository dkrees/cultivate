"use client";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cross1Icon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import * as Select from "@radix-ui/react-select";
import { useState } from "react";

export default function LeavePlannerPage() {
  let [filtersOpen, setFiltersOpen] = useState(false);
  const [searchUser, setSearchUser] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const users = [
    "Arlene Mccoy",
    "Devon Webb",
    "Hellen Schmidt",
    "Tanya Fox",
    "Tom Cook",
    "Wade Cooper",
  ];

  const [searchLocation, setSearchLocation] = useState("");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const locations = [
    "Bristol",
    "Copenhagen",
    "Edinburgh",
    "Glasgow",
    "Leeds",
    "London",
    "Newcastle",
  ];

  return (
    <div>
      <div className="flex justify-between px-6 py-2">
        <div className="flex justify-start gap-4">
          <button
            type="button"
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="inline-flex items-center space-x-2 rounded border border-gray-400 bg-white px-4 py-2 hover:bg-gray-200 active:translate-y-0.5"
          >
            <MixerHorizontalIcon />
            <span>Filters</span>
          </button>
          <button
            type="button"
            className="rounded border border-gray-400 bg-white px-4 py-2 hover:bg-gray-200 active:translate-y-0.5"
          >
            Clear All
          </button>
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="rounded border border-gray-400 bg-white px-4 py-2 hover:bg-gray-200 active:translate-y-0.5"
          >
            Saved Views
          </button>
          <button
            type="button"
            className="rounded border border-gray-400 bg-white px-4 py-2 hover:bg-gray-200 active:translate-y-0.5"
          >
            Export
          </button>
        </div>
      </div>

      {filtersOpen && (
        <div className="px-6">
          <div className="flex w-full flex-col gap-4">
            <div className="flex gap-2">
              <div className="flex w-full flex-1 flex-col gap-1">
                <label className="text-sm text-gray-600">Name</label>
                <Popover.Root>
                  <Popover.Trigger className="rounded border border-gray-400 px-2 py-1">
                    Select User
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content
                      sideOffset={2}
                      align="center"
                      className="w-full rounded bg-white p-2 shadow"
                    >
                      <div className="w-full">
                        <input
                          className="w-full rounded border border-gray-400 px-2 py-1"
                          placeholder="search..."
                          type="text"
                          value={searchUser}
                          onChange={(e) => setSearchUser(e.target.value)}
                        />
                        <ul>
                          {users
                            .filter((user) =>
                              user
                                .toLowerCase()
                                .includes(searchUser.toLowerCase()),
                            )
                            .map((user) => (
                              <li
                                onClick={() =>
                                  setSelectedUsers([...selectedUsers, user])
                                }
                                key={user}
                              >
                                {user}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </div>
              <div className="flex flex-1 items-end">
                <div className="flex flex-wrap">
                  {selectedUsers.map((user) => (
                    <div
                      className="m-0.5 inline-flex items-center gap-1 rounded-full border px-2 py-1 leading-none"
                      key={user}
                    >
                      <span>{user}</span>
                      <Cross1Icon className=" cursor-pointer" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex w-full flex-1 flex-col gap-1">
                <label className="text-sm text-gray-600">Locations</label>
                <Popover.Root>
                  <Popover.Trigger className="rounded border border-gray-400 px-2 py-1">
                    Select Location
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content
                      sideOffset={2}
                      align="center"
                      className="w-full rounded bg-white p-2 shadow"
                    >
                      <div className="w-full">
                        <input
                          className="w-full rounded border border-gray-400 px-2 py-1"
                          placeholder="search..."
                          type="text"
                          value={searchLocation}
                          onChange={(e) => setSearchLocation(e.target.value)}
                        />
                        <ul>
                          {locations
                            .filter((location) =>
                              location
                                .toLowerCase()
                                .includes(searchLocation.toLowerCase()),
                            )
                            .map((location) => (
                              <li
                                onClick={() =>
                                  setSelectedLocations([
                                    ...selectedLocations,
                                    location,
                                  ])
                                }
                                key={location}
                              >
                                {location}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </div>
              <div className="flex flex-1 items-end">
                <div className="flex flex-wrap">
                  {selectedLocations.map((location) => (
                    <div
                      className="m-0.5 inline-flex items-center gap-1 rounded-full border px-2 py-1 leading-none"
                      key={location}
                    >
                      <span>{location}</span>
                      <Cross1Icon className=" cursor-pointer" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Disciplines</label>
              <input
                type="text"
                className="rounded border border-gray-400 px-2 py-1"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Grade</label>
              <input
                type="text"
                className="rounded border border-gray-400 px-2 py-1"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Manager</label>
              <input
                type="text"
                className="rounded border border-gray-400 px-2 py-1"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Account</label>
              <input
                type="text"
                className="rounded border border-gray-400 px-2 py-1"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Date Range</label>
              <div className="flex w-full items-center gap-2">
                <input
                  type="date"
                  className="flex-1 rounded border border-gray-400 px-2 py-1"
                />
                to
                <input
                  type="date"
                  className="flex-1 rounded border border-gray-400 px-2 py-1"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
