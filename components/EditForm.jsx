"use client";

import { editNote } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

const EditForm = ({ note }) => {
  const [newTitle, setNewTitle] = useState(note.title);
  const [newContent, setNewContent] = useState(note.content);
  const [newImageSrc, setNewIMageSrc] = useState(note.img);
  const ref = useRef();

  const handleChooseFile = () => {
    ref.current.click();
  };

  const editNoteFormFunction = editNote.bind(
    null,
    note.id,
    newImageSrc,
    newTitle,
    newContent
  );

  return (
    <form
      action={editNoteFormFunction}
      className="p-4 rounded-lg border border-gray-500 mt-5"
    >
      {newImageSrc && (
        <>
          <Image
            className="w-full rounded-lg mb-5"
            width={50}
            height={50}
            src={newImageSrc}
            alt={note.title}
          />
        </>
      )}
      <button
        type="button"
        className="py-2 px-5 bg-green-700 hover:shadow-lg hover:shadow-slate-300 rounded-lg text-white"
        onClick={handleChooseFile}
      >
        Upload Image
        <input
          type="file"
          hidden
          ref={ref}
          onChange={(e) => {
            const file = e.target.files[0];

            if (file) {
              const fileReader = new FileReader();
              fileReader.onload = () => {
                if (file.type.startsWith("image/")) {
                  setNewIMageSrc(fileReader.result);
                }
              };

              fileReader.readAsDataURL(file);
            }
          }}
        />
      </button>
      {/* edit title input */}
      <input
        className="w-full font-bold mt-10 outline-none text-xl"
        type="text"
        name=""
        id=""
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        required
        placeholder="Title"
      />

      {/* edit content textArea */}
      <textarea
        className="w-full resize-none mt-4 outline-none"
        onChange={(e) => setNewContent(e.target.value)}
        placeholder="Take a note.."
        value={newContent || ""}
      ></textarea>

      {/* Cancel and Edit Buttons */}
      <div>
        <div className="flex gap-5 justify-end mt-4">
          <Link
            href={`/`}
            className="py-2 px-5 bg-red-700 hover:shadow-lg hover:shadow-slate-300 rounded-lg text-white"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="py-2 px-5 bg-green-700 hover:shadow-lg hover:shadow-slate-300 rounded-lg text-white"
          >
            Edit
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
