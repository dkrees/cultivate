"use client";
import { DownloadIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import {
  Theme,
  Flex,
  Button,
  Table,
  Container,
  Heading,
  Tabs,
  Box,
  Text,
  Grid,
  Card,
  Avatar,
  Dialog,
  TextField,
} from "@radix-ui/themes";
import { EmployeeType, Employees } from "@/app/data/employees";
import { useState } from "react";

const ThemePage = () => {
  const [employees, setEmployees] = useState(Employees);

  return (
    <Theme
      accentColor="cyan"
      grayColor="gray"
      panelBackground="solid"
      radius="small"
    >
      <Container size="2" p="4">
        <Flex gap="3" justify="between" align="baseline" my="3">
          <Heading as="h1" size="4">
            Employees
          </Heading>
          <Flex justify="end" gap="2">
            <Button variant="outline">
              <DownloadIcon /> Export
            </Button>
            <AddEmployeeDialog
              didSave={(newEmployee: EmployeeType) =>
                setEmployees([...employees, newEmployee])
              }
            />
          </Flex>
        </Flex>

        <Tabs.Root defaultValue="table">
          <Tabs.List>
            <Tabs.Trigger value="table">Table</Tabs.Trigger>
            <Tabs.Trigger value="cards">Cards</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="table">
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Location</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {employees.map((employee) => (
                  <Table.Row key={employee.employeeID}>
                    <Table.RowHeaderCell>
                      {employee.employeeName}
                    </Table.RowHeaderCell>
                    <Table.Cell>{employee.title}</Table.Cell>
                    <Table.Cell>
                      {employee.city}, {employee.country}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Tabs.Content>

          <Tabs.Content value="cards">
            <Grid my="3" columns="3" gap="3" width="auto">
              {employees.map((employee) => (
                <Card key={employee.employeeID}>
                  <Flex gap="3" align="center">
                    <Avatar
                      size="3"
                      src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                      radius="full"
                      fallback="T"
                    />
                    <Box>
                      <Text as="div" size="2" weight="bold">
                        {employee.employeeName}
                      </Text>
                      <Text as="div" size="2" color="gray">
                        {employee.title}
                      </Text>
                    </Box>
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Tabs.Content>
        </Tabs.Root>
      </Container>
    </Theme>
  );
};

const AddEmployeeDialog = ({
  didSave,
}: {
  didSave: (employee: EmployeeType) => void;
}) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSave = () => {
    let newEmployee = {
      employeeID: "0",
      employeeName: name,
      title: role,
      city: city,
      country: country,
      reportsTo: "0",
    };
    didSave(newEmployee);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="solid">
          <PlusCircledIcon /> Add Employee
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Add Employee</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Add the employee details below.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Input
              defaultValue=""
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Name"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Role
            </Text>
            <TextField.Input
              defaultValue=""
              value={role}
              onChange={(e) => setRole(e.currentTarget.value)}
              placeholder="Role"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              City
            </Text>
            <TextField.Input
              defaultValue=""
              value={city}
              onChange={(e) => setCity(e.currentTarget.value)}
              placeholder="City"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Country
            </Text>
            <TextField.Input
              defaultValue=""
              value={country}
              onChange={(e) => setCountry(e.currentTarget.value)}
              placeholder="Country"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleSave}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ThemePage;
