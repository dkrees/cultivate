export default function RootPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-sky-800 from-10% to-emerald-500 to-90%">
      <div className="container mx-auto mt-24 flex max-w-sm flex-col gap-6 rounded-lg border-2 border-emerald-600 bg-white p-6 text-center font-light">
        <h1 className="text-4xl ">Nothing to see here.</h1>
        <p className="text-lg text-gray-700">
          A blank canvas for designing and building high fidelity prototypes.
        </p>
        <p>
          Edit the{" "}
          <code className="rounded-md bg-gray-200 px-2 py-1">
            src/app/page.tsx
          </code>{" "}
          to get started.
        </p>
        <p className="text-sm">
          Or visit the{" "}
          <a className="text-sky-600 underline" href="/cultivate">
            Cultivate
          </a>{" "}
          page for more information and project pages.
        </p>
      </div>
    </div>
  );
}
