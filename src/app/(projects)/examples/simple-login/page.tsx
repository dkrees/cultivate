/* eslint-disable react/no-unescaped-entities */
"use client";
import * as Form from "@radix-ui/react-form";
import { PersonIcon } from "@radix-ui/react-icons";

const SimpleLoginPage = () => {
  return (
    <main className="min-h-screen bg-slate-200 px-6 py-6 md:py-16">
      <div className="mb-6 flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-slate-600 bg-gradient-to-b from-slate-400 shadow-md">
          <PersonIcon className="h-8 w-8 text-white" />
        </div>
      </div>
      <div className="container mx-auto max-w-sm rounded-lg bg-white p-6">
        <Form.Root className="grid" onSubmit={(e) => e.preventDefault()}>
          <Form.Field name="email" className="mb-3 grid">
            <Form.Label className="pb-1 text-sm text-gray-600">
              Email
            </Form.Label>
            <Form.Control
              type="email"
              className="rounded border border-gray-400"
              placeholder="you@example.com"
            />
          </Form.Field>

          <Form.Field name="password" className="mb-3 grid">
            <div className="flex items-center justify-between pb-1 text-sm text-gray-600">
              <Form.Label className="">Password</Form.Label>
              <button
                type="button"
                className="text-xs italic hover:text-sky-600"
              >
                Forgot your password?
              </button>
            </div>
            <Form.Control
              type="password"
              className="rounded border border-gray-400"
              placeholder="••••••••"
            />
          </Form.Field>
          <Form.Submit className="inline-flex items-center justify-center justify-self-end rounded bg-emerald-600 px-3 py-2 font-medium text-white hover:bg-emerald-700 active:translate-y-0.5 disabled:opacity-50">
            Sign In
          </Form.Submit>
        </Form.Root>
      </div>
      <div className="container mx-auto mt-4 max-w-sm rounded-lg bg-white p-6">
        <h2 className="text-md text-center text-gray-700">
          Don't have an account yet?
        </h2>
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="w-full rounded border border-gray-400 p-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 active:translate-y-0.5"
          >
            Create an account
          </button>
        </div>
      </div>
    </main>
  );
};

export default SimpleLoginPage;
