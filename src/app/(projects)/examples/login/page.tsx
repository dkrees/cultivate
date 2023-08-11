/* eslint-disable react/no-unescaped-entities */
"use client";
import * as Form from "@radix-ui/react-form";
import { PersonIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import ResetPassword from "./reset-password";
import Spinner from "@/app/components/Spinner";
import CreateAccount from "./create-account";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
      router.push("/cultivate"),
    );
  };

  return (
    <main className="min-h-screen bg-slate-200 px-6 py-6 dark:bg-slate-900 md:py-16">
      <div className="mb-6 flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-slate-600 bg-gradient-to-b from-slate-400 shadow-md dark:border-slate-500">
          <PersonIcon className="h-8 w-8 text-white dark:text-slate-300" />
        </div>
      </div>
      <div className="container mx-auto max-w-sm rounded-lg bg-white p-6 text-gray-600 dark:bg-slate-800 dark:text-slate-400">
        <Form.Root id="login" className="grid" onSubmit={handleSubmit}>
          <Form.Field name="email" className="mb-3 grid">
            <Form.Label className="cursor-pointer pb-1 text-sm">
              Email
            </Form.Label>
            <Form.Control
              type="email"
              className="rounded border border-gray-400 dark:bg-slate-800"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Message
              match="valueMissing"
              className="mt-1 text-sm text-red-600"
            >
              Email is required.
            </Form.Message>
            <Form.Message
              match="typeMismatch"
              className="mt-1 text-sm text-red-600"
            >
              Please enter a valid email.
            </Form.Message>
          </Form.Field>

          <Form.Field name="password" className="mb-3 grid">
            <div className="flex items-center justify-between pb-1 text-sm">
              <Form.Label className="cursor-pointer">Password</Form.Label>
              <ResetPassword className="" key={email} email={email} />
            </div>
            <Form.Control
              type="password"
              className="rounded border border-gray-400 dark:bg-slate-800"
              placeholder="••••••••"
              required
            />
            <Form.Message
              match="valueMissing"
              className="mt-1 text-sm text-red-600"
            >
              Password is required.
            </Form.Message>
          </Form.Field>

          <Form.Submit
            className="inline-flex items-center justify-center justify-self-end rounded bg-sky-600 px-3 py-2 font-medium text-white hover:bg-sky-700 active:translate-y-0.5 disabled:opacity-50 dark:bg-sky-800 dark:text-slate-200"
            disabled={loading}
          >
            {loading ? <Spinner /> : <span>Sign In</span>}
          </Form.Submit>
        </Form.Root>
      </div>
      <div className="container mx-auto mt-4 max-w-sm rounded-lg bg-white p-6 text-gray-600 dark:bg-slate-800 dark:text-slate-400">
        <h2 className="text-md text-center">Don't have an account yet?</h2>
        <div className="mt-4 flex justify-center">
          <CreateAccount triggerClassName="w-full rounded border border-gray-400 p-3 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 dark:hover:text-slate-200 hover:text-gray-900 active:translate-y-0.5" />
        </div>
      </div>
    </main>
  );
}
