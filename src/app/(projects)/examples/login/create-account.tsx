import Spinner from "@/app/components/Spinner";
import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";
import { Cross1Icon } from "@radix-ui/react-icons";
import { FormEvent, useState } from "react";

interface Props {
  triggerClassName?: string;
}

// CREATE ACCOUNT MODAL
const CreateAccount = ({ triggerClassName }: Props) => {
  let [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={triggerClassName}>
        Create an account
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/75" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 py-4 text-gray-600 shadow dark:bg-slate-800 dark:text-slate-400">
          <div className="mb-2 flex items-center justify-between">
            <Dialog.Title className="text-xl">
              Create A New Account
            </Dialog.Title>
            <Dialog.DialogClose
              aria-label="close"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-400"
            >
              <Cross1Icon />
            </Dialog.DialogClose>
          </div>
          <NewAccountForm didSave={() => setOpen(false)} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

// NEW ACCOUNT FORM
const NewAccountForm = ({ didSave }: { didSave: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setLoading(true);
    new Promise((resolve) => setTimeout(resolve, 2000)).then(() => didSave());
  };

  return (
    <Form.Root id="login" className="grid" onSubmit={handleSubmit}>
      <Form.Field name="email" className="mb-3 grid">
        <Form.Label className="cursor-pointer pb-1 text-sm">Email</Form.Label>
        <Form.Control
          type="email"
          className="rounded border border-gray-400 dark:bg-slate-800"
          placeholder="you@example.com"
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
        <Form.Label className="cursor-pointer pb-1 text-sm">
          Password
        </Form.Label>
        <Form.Control
          type="password"
          className="rounded border border-gray-400 dark:bg-slate-800"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Form.Message
          match="valueMissing"
          className="mt-1 text-sm text-red-600"
        >
          Password is required.
        </Form.Message>
      </Form.Field>

      <Form.Field name="confirmPassword" className="mb-3 grid">
        <Form.Label className="cursor-pointer pb-1 text-sm">
          Confirm Password
        </Form.Label>
        <Form.Control
          type="password"
          className="rounded border border-gray-400 dark:bg-slate-800"
          placeholder="••••••••"
          required
        />
        <Form.Message
          match={(confirmPassword) => confirmPassword !== password}
          className="mt-1 text-sm text-red-600"
        >
          Passwords must match.
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
          {loading ? <Spinner /> : <span>Sign In</span>}
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default CreateAccount;
