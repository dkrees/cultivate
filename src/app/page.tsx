export default function RootPage() {
  return (
    <div className="min-h-screen bg-blue-600 py-6">
      <div className="container mx-auto rounded-md bg-white p-6">
        <h1 className="mb-4 text-2xl">Sign In</h1>
        <div className="mb-4 flex flex-col gap-1">
          <label htmlFor="email" className="text-gray-600">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="rounded-md border-gray-400"
            placeholder="you@exmple.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-gray-600">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="rounded-md border-gray-400"
            placeholder="*****"
          />
        </div>
        <div className="mt-2 flex justify-end">
          <button className="rounded-md bg-blue-400 px-3 py-2 text-white hover:bg-blue-600 active:translate-y-0.5 active:bg-blue-700">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
