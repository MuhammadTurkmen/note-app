"use client";

import { deleteNote, undoArchivedNote, undoNote } from "@/utils/actions";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ArchivedNotes = ({ notes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-40">
      {notes.map((note) => {
        return (
          note.isArchived &&
          !note.isDeleted && (
            <div
              className="border border-gray-300 rounded-lg p-4 mt-4 pb-10 group relative"
              key={note.id}
            >
              {note.img && (
                <Image
                  src={note.img}
                  width={50}
                  height={50}
                  className="w-full h-50 object-cover rounded mb-6"
                  alt={note.title}
                />
              )}
              <h1 className="font-bold text-xl mb-5">{note.title}</h1>
              <p>{note.content}</p>
              <span
                className="hidden group-hover:block group-hover:absolute  group-hover:top-4 group-hover:right-4 cursor-pointer hover:bg-gray-300  hover:rounded-full group-hover:p-2 group-hover:transition-all group-hover:duration-500"
                onClick={() => setIsOpen((oldState) => !oldState)}
              >
                <HiOutlineDotsVertical />

                {isOpen && (
                  <div className="absolute shadow-sm shadow-slate-400 top-9 -left-20 md:left-0  rounded-sm bg-white w-32">
                    <p
                      className="p-2 px-3 hover:bg-gray-300 capitalize"
                      onClick={() => undoArchivedNote(note.id)}
                    >
                      undo note
                    </p>
                    <p
                      className="p-2 px-3 hover:bg-gray-300 capitalize"
                      onClick={() => deleteNote(note.id)}
                    >
                      delete
                    </p>
                  </div>
                )}
              </span>
            </div>
          )
        );
      })}
    </div>
  );
};

export default ArchivedNotes;
