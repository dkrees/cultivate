import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Projects = {
  id: number;
  name: string;
  path: string;
  description?: string;
};

export default function CultivatePage() {
  let id = 0;

  const projects: Projects[] = [
    {
      id: id++,
      name: "Basic Page",
      path: "examples/basic",
      description: "A very basic page layout.",
    },
    {
      id: id++,
      name: "A Form",
      path: "examples/form",
      description: "A contact form with customised form element styles.",
    },
    {
      id: id++,
      name: "A List",
      path: "examples/list",
      description: "Some list examples.",
    },
    {
      id: id++,
      name: "A Table with routing to detail page",
      path: "examples/table-detail-routing",
      description: "An example of table with routing to a detail page.",
    },
    {
      id: id++,
      name: "Simple Login Demo",
      path: "examples/simple-login",
      description:
        "A simple login form demonstrating form design with validation.",
    },
    {
      id: id++,
      name: "Full Login Demo",
      path: "examples/login",
      description:
        "Expands on the simple form demo with further interactions, user journey and modals.",
    },
    {
      id: id++,
      name: "Using Radix Themes",
      path: "examples/theme",
      description:
        "An example of using the Radix Themes. Be warned, this may clash with TailwindCSS.",
    },
  ];

  return (
    <>
      <h1 className="mb-3 text-3xl">🚀 Cultivate</h1>
      <h2 className="mb-2 text-2xl">Examples</h2>
      <p>A collection of examples:</p>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.path}
            className="group grid gap-1 rounded-md border border-gray-300 bg-white p-2 hover:border-sky-500 hover:text-sky-600"
          >
            <h3 className="text-md flex items-center justify-between font-medium underline">
              {project.name}{" "}
              <ArrowRightIcon className="hidden h-4 w-4 text-gray-400 group-hover:inline group-hover:text-sky-500" />
            </h3>
            <div className="text-sm text-gray-600">{project.description}</div>
            <div className="place-self-end text-xs text-gray-400">
              {project.path}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
