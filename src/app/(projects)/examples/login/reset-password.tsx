// RESET PASSWORD MODAL

"use client";
import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";
import { Cross1Icon } from "@radix-ui/react-icons";
import { FormEvent, useState } from "react";
import Spinner from "@/app/components/Spinner";

interface Props {
  email?: string;
  className?: string;
}

const ResetPassword = ({ email, className }: Props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState(email ? email : "");

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      setOpen(false);
      setLoading(false);
    });

    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className={`text-xs italic hover:text-sky-600 ${className}`}
      >
        Forgot your password?
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/75" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 py-4 text-gray-600 shadow dark:bg-slate-800 dark:text-slate-400">
          <div className="mb-2 flex items-center justify-between">
            <Dialog.Title className="text-xl">Reset Password</Dialog.Title>
            <Dialog.DialogClose
              aria-label="close"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-400"
            >
              <Cross1Icon />
            </Dialog.DialogClose>
          </div>
          <Form.Root id="resetPassword" className="grid" onSubmit={handleReset}>
            <Form.Field name="email" className="mb-3 grid">
              <Form.Label className="cursor-pointer pb-1 text-sm">
                Email
              </Form.Label>
              <Form.Control
                type="email"
                className="rounded border border-gray-400 dark:bg-slate-800"
                placeholder="you@example.com"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
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
            <div className="flex items-center justify-end space-x-4">
              {!loading && (
                <Dialog.Close className="px-4 py-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-400">
                  Cancel
                </Dialog.Close>
              )}
              <Form.Submit
                className="inline-flex items-center justify-center justify-self-end rounded bg-sky-600 px-3 py-2 font-medium text-white hover:bg-sky-700 active:translate-y-0.5 disabled:opacity-50 dark:bg-sky-800 dark:text-slate-200"
                disabled={loading}
              >
                {loading ? <Spinner /> : <span>Reset Password</span>}
              </Form.Submit>
            </div>
          </Form.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ResetPassword;
