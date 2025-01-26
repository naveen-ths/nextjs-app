"use client";

import { createPosts } from "../../../actions/postActions";
import { useRef } from "react";
import SubmitButton from "../submitButton/SubmitButton";

export default function Forms() {
  // we are using useRef to reset the form after submission
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (FormData) => {
        ref.current?.reset();
        await createPosts(FormData);
      }}
      className="flex flex-col"
    >
      <h2 className="text-center text-green-400 font-bold">Add Post</h2>
      <label htmlFor="title" className="py-2">
        Title
      </label>
      <input type="text" name="title" className="mb-2 w-62 h-10 p-2 text-black" />
      <label htmlFor="description" className="py-2">
        Description
      </label>
      <textarea cols={30} rows={10} name="description" className="p-2 text-black" />
      <SubmitButton />
    </form>
  );
}
