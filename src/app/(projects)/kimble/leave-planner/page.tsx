"use client";
import {
  CaretDownIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cross1Icon,
  DownloadIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import {
  Badge,
  Box,
  Button,
  Container,
  DropdownMenu,
  Flex,
  Grid,
  TextField,
  Theme,
} from "@radix-ui/themes";
import { useState } from "react";

export default function LeavePlannerPage() {
  let [filtersOpen, setFiltersOpen] = useState(false);

  const users = [
    "Arlene Mccoy",
    "Devon Webb",
    "Hellen Schmidt",
    "Tanya Fox",
    "Tom Cook",
    "Wade Cooper",
  ];

  const locations = [
    "Bristol",
    "Copenhagen",
    "Edinburgh",
    "Glasgow",
    "Leeds",
    "London",
    "Newcastle",
  ];

  const disciplines = [
    "Delivery",
    "Development",
    "General and Admin",
    "Service Management",
    "Shinobi",
    "Testing",
    "UX",
  ];

  const grades = [
    "Junior",
    "Associate",
    "Standard",
    "Senior",
    "Lead",
    "Principal",
    "Head",
    "Director",
  ];

  const managers = [
    "Alexia Walker",
    "Edgar	Murray",
    "Frederick Scott",
    "Lyndon Parker",
    "Sydney Campbell",
  ];

  const accounts = [
    "Account One",
    "Account Two",
    "Account Three",
    "Account Four",
    "Account Five",
  ];

  return (
    <Theme accentColor="blue">
      <Flex
        gap="3"
        py="2"
        px="6"
        justify="between"
        className="border-b border-gray-300"
      >
        <Flex gap="4" justify="start">
          <Button onClick={() => setFiltersOpen(!filtersOpen)}>
            <MixerHorizontalIcon />
            Filters
          </Button>
          <Button variant="outline">Clear All</Button>
        </Flex>
        <Flex gap="4" justify="end">
          <Button variant="outline">Saved Views</Button>
          <Button variant="outline">
            <DownloadIcon /> Export
          </Button>
        </Flex>
      </Flex>

      {filtersOpen && (
        <Container px="6" className="shadow-md" py="4">
          <Grid gap="4">
            <Filter filters={users} label="Select Users" />
            <Filter filters={locations} label="Select Locations" />
            <Filter filters={disciplines} label="Select Disciplines" />
            <Filter filters={grades} label="Select Grades" />
            <Filter filters={managers} label="Select Managers" />
            <Filter filters={accounts} label="Select Accounts" />

            <Grid>
              <label className="text-sm text-gray-600">Date Range</label>
              <Flex gap="2" align={"center"}>
                <input
                  type="date"
                  className="flex-1 rounded border border-gray-400 px-2 py-1"
                />
                to
                <input
                  type="date"
                  className="flex-1 rounded border border-gray-400 px-2 py-1"
                />
              </Flex>
            </Grid>
          </Grid>
        </Container>
      )}
    </Theme>
  );
}

function Filter({ filters, label }: { filters: string[]; label: string }) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  return (
    <Grid gap="4" columns="2">
      <Grid>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="outline">
              {label}
              <CaretDownIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {filters.map((filter, index) => (
              <DropdownMenu.Item
                key={index}
                onClick={() => setSelectedFilters([...selectedFilters, filter])}
              >
                {filter}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Grid>

      <Grid align={"end"}>
        <Flex wrap="wrap" justify="start" gap={"2"}>
          {selectedFilters.map((filter, index) => (
            <Badge variant="outline" radius="full" key={index}>
              {filter}{" "}
              <Cross1Icon
                className="cursor-pointer"
                onClick={() => {
                  selectedFilters.splice(index, 1);
                  setSelectedFilters([...selectedFilters]);
                }}
              />
            </Badge>
          ))}
        </Flex>
      </Grid>
    </Grid>
  );
}
