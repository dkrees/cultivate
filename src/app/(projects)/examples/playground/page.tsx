"use client";
import Alert from "@/app/components/Alert";
import Button from "@/app/components/Button";
import Select from "@/app/components/Select";
import { ExclamationTriangleIcon, StarFilledIcon } from "@radix-ui/react-icons";

const Playground = () => {
  return (
    <main className="container mx-auto px-4 py-4">
      <header className="mb-4">
        <h1 className="mb-2 text-2xl">Playground</h1>
        <p className="text-sm text-gray-600">
          Just a place to play with ideas and components. Not a page to precious
          about.
        </p>
      </header>

      <section className="container mx-auto mb-4 flex flex-wrap gap-2 rounded border p-8">
        <Button variant="primary">primary button</Button>
        <Button variant="secondary">
          <StarFilledIcon />
          secondary button
        </Button>
        <Button variant="light">light button</Button>
        <Button variant="ghost">ghost button</Button>
        <Button>
          <StarFilledIcon />
        </Button>
      </section>

      <section className="container mx-auto mb-4 flex flex-wrap gap-4 rounded border p-8">
        <button
          type="button"
          className="rounded-md bg-blue-600 px-3 py-2 text-white"
        >
          Checkout
        </button>
        <button
          type="button"
          className="rounded-md border border-blue-800 bg-blue-500  px-3 py-2 text-white disabled:border-gray-400 disabled:bg-gray-300 disabled:opacity-50"
          disabled
        >
          Checkout
        </button>
      </section>

      <section className="container mx-auto mb-4 flex flex-wrap gap-2 rounded border p-8">
        <Alert variant="danger">
          <div className="flex items-center justify-start gap-4 text-sm">
            <ExclamationTriangleIcon className="h-6 w-6" />
            This is an Alert
          </div>
        </Alert>
      </section>

      <section className="container mx-auto mb-4 flex flex-wrap gap-2 rounded border p-8">
        <Select
          items={[{ text: "One" }, { text: "Two" }, { text: "Three" }]}
        ></Select>
      </section>
    </main>
  );
};

export default Playground;
