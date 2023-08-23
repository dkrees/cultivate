// FAKE DATA (btw)
export type CityType = {
  city: string;
  country: string;
};

export type TitleType = {
  title: string;
};

export type EmployeeType = {
  employeeID: string;
  employeeName: string;
  title: string;
  avatar: string;
  avatarFallback: string;
  city: string;
  country: string;
  reportsTo: string | null;
};

export const Cities: CityType[] = [
  { city: "New York", country: "USA" },
  { city: "London", country: "UK" },
];

export const Titles: TitleType[] = [
  { title: "Vice President Sales" },
  { title: "Sales Manager" },
  { title: "Sales Representative" },
];

export const Employees: EmployeeType[] = [
  {
    employeeID: "1",
    employeeName: "Nancy Davolio",
    title: "Sales Representative",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    avatarFallback: "ND",
    city: "New York",
    country: "USA",
    reportsTo: "8",
  },
  {
    employeeID: "2",
    employeeName: "Andrew Fuller",
    title: "Vice President Sales",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3560&q=80",
    avatarFallback: "AF",
    city: "New York",
    country: "USA",
    reportsTo: null,
  },
  {
    employeeID: "3",
    employeeName: "Janet Leverling",
    title: "Sales Representative",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    avatarFallback: "JL",
    city: "New York",
    country: "USA",
    reportsTo: "8",
  },
  {
    employeeID: "4",
    employeeName: "Margaret Peacock",
    title: "Sales Representative",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    avatarFallback: "MP",
    city: "New York",
    country: "USA",
    reportsTo: "8",
  },
  {
    employeeID: "5",
    employeeName: "Steven Buchanan",
    title: "Sales Manager",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    avatarFallback: "SB",
    city: "London",
    country: "UK",
    reportsTo: "2",
  },
  {
    employeeID: "6",
    employeeName: "Michael Suyama",
    title: "Sales Representative",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    avatarFallback: "MS",
    city: "London",
    country: "UK",
    reportsTo: "5",
  },
  {
    employeeID: "7",
    employeeName: "Robert King",
    title: "Sales Representative",
    avatar:
      "https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80",
    avatarFallback: "RK",
    city: "London",
    country: "UK",
    reportsTo: "5",
  },
  {
    employeeID: "8",
    employeeName: "Laura Callahan",
    title: "Sales Manager",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    avatarFallback: "LC",
    city: "New York",
    country: "USA",
    reportsTo: "2",
  },
  {
    employeeID: "9",
    employeeName: "Anne Dodsworth",
    title: "Sales Representative",
    avatar:
      "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    avatarFallback: "AD",
    city: "London",
    country: "UK",
    reportsTo: "5",
  },
  {
    employeeID: "10",
    employeeName: "Robert Jones",
    title: "Sales Representative",
    avatar:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1366&q=80",
    avatarFallback: "RJ",
    city: "New York",
    country: "USA",
    reportsTo: "5",
  },
];
