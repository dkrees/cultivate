"use client";
import { Cross1Icon } from "@radix-ui/react-icons";
import React, { ChangeEvent, FormEvent, useState } from "react";
import classNames from "classnames";

export default function ListPageExample() {
  const list = ["Item One", "Item Two", "Item Three", "Item Four"];

  const [objectList, setObjectList] = useState([
    { title: "Item One", description: "Item One Description", done: false },
    { title: "Item Two", description: "Item Two Description", done: false },
    { title: "Item Three", description: "Item Three Description", done: false },
    { title: "Item Four", description: "Item Four Description", done: false },
  ]);

  const [crudList, setCrudList] = useState([...objectList]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    done: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.title) {
      return;
    }
    setCrudList([...crudList, formData]);
    setFormData({
      title: "",
      description: "",
      done: false,
    });
  };

  const handleRemoveItem = (index: number) => {
    crudList.splice(index, 1);
    setCrudList([...crudList]);
  };

  const handleItemDone = (index: number) => {
    const items = [...crudList];
    items[index].done = !items[index].done;
    setCrudList(items);
  };

  return (
    <div className="container mx-auto py-4">
      <header>
        <h1 className="mb-4 text-2xl">List Examples</h1>
      </header>

      <main>
        {/* BASIC LIST */}
        <section className="mb-4 border-b border-gray-400 py-4">
          <h2 className="mb-2 text-xl">Basic List</h2>
          <ul>
            {list.map((item, index) => (
              <li key={index} className="border-b">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* LIST OF OBJECTS */}
        <section className="mb-4 border-b border-gray-400 py-4">
          <h2 className="mb-2 text-xl">List of Objects</h2>
          <ul>
            {objectList.map((item, index) => (
              <li
                className="flex items-baseline justify-start gap-2 border-b"
                key={index}
              >
                <span>{item.title}</span>
                <span className="text-sm text-gray-500">
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* EDITABLE LIST */}
        <section className="mb-4 border-b border-gray-400 py-4">
          <h2 className="mb-2 text-xl">Editible List of Objects</h2>
          <form
            onSubmit={handleSubmit}
            className="my-2 flex items-end justify-between gap-2"
          >
            <div className="grid w-full">
              <label className="text-sm text-gray-600">Title</label>
              <input
                className="h-8 rounded border border-gray-400 px-2 py-1"
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid w-full">
              <label className="text-sm text-gray-600">Description</label>
              <input
                className="h-8 rounded border border-gray-400 px-2 py-1"
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="h-8 rounded bg-cyan-500 px-3 py-1 text-white hover:bg-cyan-600 active:bg-cyan-700"
            >
              Add
            </button>
          </form>

          <ul>
            {crudList.map((item, index) => (
              <li
                className="flex items-center justify-between border-b"
                key={index}
              >
                <div className="flex items-center justify-start gap-2">
                  <input
                    type="checkbox"
                    name="done"
                    checked={item.done}
                    onChange={() => handleItemDone(index)}
                  />
                  <div
                    className={classNames("flex items-baseline gap-2", {
                      "line-through": item.done,
                    })}
                  >
                    {item.title}
                    <span className="text-sm text-gray-500">
                      {item.description}
                    </span>
                  </div>
                </div>

                <button type="button" onClick={() => handleRemoveItem(index)}>
                  <Cross1Icon />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
