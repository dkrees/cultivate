"use client";

const FormExample = () => {
  return (
    <div className="min-h-screen bg-neutral-200 py-2 text-sm">
      <form
        className="container mx-auto w-full max-w-md rounded border border-neutral-300 bg-white px-6 py-2"
        noValidate
        onSubmit={(e) => e.preventDefault()}
      >
        <legend className="mb-2 text-xl">Contact Form</legend>
        <div className="mb-2">
          <label htmlFor="name" className="cursor-pointer text-gray-700">
            Name:
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-sm border border-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="email" className="cursor-pointer text-gray-700">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-sm border border-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="message" className="cursor-pointer text-gray-700">
            Message:
          </label>
          <textarea
            id="message"
            className="w-full rounded-sm border border-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="phone" className="cursor-pointer text-gray-700">
            Phone:
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full rounded-sm border border-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          />
        </div>

        <div className="mb-2">
          <label className="cursor-pointer text-gray-700">Contact Hours:</label>
          <div className="flex w-full flex-col">
            <div className="flex w-full items-center space-x-2">
              <input
                name="hours"
                id="work-hours"
                type="radio"
                value="work-hours"
                className="appearance-none border-gray-500 text-primary checked:border-primary focus:ring-primary active:bg-primary"
              />
              <label className="cursor-pointer text-base" htmlFor="work-hours">
                Work hours
              </label>
            </div>
            <div className="flex w-full items-center space-x-2">
              <input
                name="hours"
                id="non-work-hours"
                type="radio"
                value="non-work-hours"
                className="appearance-none border-gray-500 text-primary checked:border-primary focus:ring-primary active:bg-primary"
              />
              <label
                className="cursor-pointer text-base"
                htmlFor="non-work-hours"
              >
                Non Work hours
              </label>
            </div>
            <div className="flex w-full items-center space-x-2">
              <input
                name="hours"
                id="any"
                type="radio"
                value="any"
                className="appearance-none border-gray-500 text-primary checked:border-primary focus:ring-primary active:bg-primary"
              />
              <label className="cursor-pointer text-base" htmlFor="any">
                Any
              </label>
            </div>
          </div>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <input
            id="contactPrefs"
            type="checkbox"
            className="appearance-none border-gray-500 text-primary checked:border-primary checked:ring-primary focus:ring-primary active:bg-primary"
          />
          <label htmlFor="contactPrefs">
            {`I would like to hear about `}
            <a
              className="text-blue-600 underline outline-none visited:text-purple-800 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              href=""
            >
              {`events`}
            </a>
            {` and `}
            <a
              className="text-blue-600 underline outline-none visited:text-purple-800 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              href=""
            >
              {`deals`}
            </a>
          </label>
        </div>

        <div className="flex justify-center">
          <button
            className="border border-primary bg-primary px-3 py-2 text-white hover:border hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:translate-y-0.5"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormExample;
