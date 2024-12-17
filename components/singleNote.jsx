"use client";

import { MdEditNote } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

import React, { useEffect, useRef, useState } from "react";

import Notes from "./Notes";

const SingleNote = ({ notes, searchedNotes }) => {
  if (
    notes.length === 0 ||
    notes.every((note) => note.isDeleted || note.isArchived)
  ) {
    return (
      <div className="flex flex-col items-center  mt-36">
        <span className="text-6xl text-gray-300">
          <MdEditNote />
        </span>
        <h1 className="text-2xl text-gray-300 mt-4">
          Your Notes will appear here{" "}
        </h1>
      </div>
    );
  }

  if (searchedNotes) {
    if (searchedNotes.length === 0) {
      return (
        <h1 className="text-red-400 capitalize text-2xl text-center mt-32">
          no matching note found
        </h1>
      );
    }

    return (
      <div className="mt-5 mb-36">
        <h1>Searched Notes: </h1>
        {searchedNotes.map((note) => {
          return (
            <div key={note.id}>
              <Notes note={note} />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="mt-5 mb-36">
      {/* pinned notes */}
      {notes.some((note) => note.isPinned && !note.isDeleted) && (
        <h4 className="text-sm">Pinned</h4>
      )}
      {notes.map((note) => {
        return (
          note.isPinned &&
          !note.isDeleted && <Notes note={note} key={note.id} />
        );
      })}

      {/* Unpinned notes or others */}
      {notes.some(
        (note) => !note.isDeleted && !note.isArchived && !note.isPinned
      ) && <h4 className="my-4">Others</h4>}
      {notes.map((note) => {
        return (
          !note.isDeleted &&
          !note.isArchived &&
          !note.isPinned && <Notes note={note} key={note.id} />
        );
      })}
    </div>
  );
};

export default SingleNote;
