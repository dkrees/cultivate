import Link from "next/link";

export default function CultivatePage() {
  return (
    <main className="container mx-auto bg-white p-6">
      <h1 className="text-3xl mb-3">Cultivate</h1>
      <h2 className="text-2xl mb-2">Project Pages</h2>
      <ul>
        <li className="border-b border-gray-600 p-2">
          <Link className="hover:text-sky-600" href="kimble/leave-planner">Kimble Leave Planner</Link>
        </li>
        <li className="border-b border-gray-600 p-2">
          <Link className="hover:text-sky-600" href="demo/login">Demo Login</Link>
        </li>
      </ul>
    </main>
  )
}