"use client";

import { removeNoteFromTrash, undoNote } from "@/utils/actions";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { TbTrashOff } from "react-icons/tb";

const DeletedNotes = ({ notes }) => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [modle, setModle] = useState(false);
  //   const noteRef = useRef(null);

  const handleUndo = (id) => {
    undoNote(id);
  };

  //   const handleModle = () => {
  //       setModle(false);
  //       setModle(true);
  // };

  const handleRemove = (id) => {
    removeNoteFromTrash(id);
  };

  //   useEffect(() => {
  //     const handleHover = (e) => {
  //       if (noteRef.current && !noteRef.current.contains(e.target)) {
  //         setIsOpen(false);
  //       }
  //     };

  //     document.body.addEventListener("mouseover", handleHover);
  //     return () => {
  //       document.body.removeEventListener("mouseover", handleHover);
  //     };
  //   }, []);

  return (
    <div className="mb-40">
      {notes.map((note, index) => {
        return (
          note.isDeleted && (
            <div
              className="border border-gray-300 rounded-lg p-4 mt-4 pb-10 group relative"
              key={note.id}
              //   ref={noteRef}
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
                className="hidden group-hover:flex group-hover:gap-4 group-hover:absolute  group-hover:top-4 group-hover:right-4 "
                onClick={() => setIsOpen((oldState) => !oldState)}
              >
                {/* <HiOutlineDotsVertical /> */}
                <span
                  className="hover:bg-green-300 p-2 rounded-full cursor-pointer hover:transition-all hover:duration-500 text-gray-600"
                  onClick={() => handleUndo(note.id)}
                >
                  <FaRegTrashAlt />
                </span>
                <span
                  className="hover:bg-red-300 p-2 rounded-full cursor-pointer hover:transition-all hover:duration-500 text-gray-600"
                  onClick={() => handleRemove(note.id)}
                >
                  <TbTrashOff />
                </span>
                {/* {isOpen && (
                  <div className="absolute shadow-sm shadow-slate-400 top-9 -left-20 md:left-0  rounded-sm bg-white w-32">
                    <p
                      className="p-2 px-3 hover:bg-gray-300 capitalize"
                      onClick={() => handleUndo(note.id)}
                    >
                      undo note
                    </p>
                    <p
                      className="p-2 px-3 hover:bg-gray-300 capitalize"
                      onClick={() => handleRemove(note.id)}
                    >
                      remove from trash
                    </p>
                  </div>
                )} */}
              </span>
              {/* {modle && (
                <>
                  <div className="overlay"></div>
                  <div className="bg-red-300 shadow-lg rounded-lg fixed top-[30%] bottom-[30%] left-[25%] right-[25%] p-3">
                    <h1 className="text-center text-3xl w-full">
                      Are you sure you wanna remove this note?
                    </h1>
                    <div className="flex gap-5 justify-center mt-5">
                      <button onClick={() => handleRemove(note.id)}>Yes</button>
                      <button onClick={() => setModle(false)}>No</button>
                    </div>
                  </div>
                </>
              )} */}
            </div>
          )
        );
      })}
    </div>
  );
};

export default DeletedNotes;
