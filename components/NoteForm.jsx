"use client";

import { useEffect, useRef, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { creatNote } from "@/utils/actions";

const NoteForm = () => {
  const [openTextArea, setOpenTextArea] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [input, setInput] = useState("");
  const formRef = useRef(); // Reference for the form
  const [imgSrc, setImgSrc] = useState(null);
  const [bindedFunction, setBindedFunction] = useState(null);
  const ref = useRef();

  const handleClick = (e) => {
    ref.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleOutSideClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setOpenTextArea(false); // Close the text area if clicked outside
      if ((input && textArea) || imgSrc) {
        creatNote({
          title: input,
          content: textArea,
          img: imgSrc,
        });
        console.log("Note  saved ");
        setInput("");
        setTextArea("");
        setImgSrc(null);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [openTextArea, input, imgSrc, textArea]);

  let Title = "Take  a  note...";
  if (openTextArea) {
    Title = "Title";
  }

  return (
    // All inputs form

    <form
      ref={formRef}
      className="flex items-center shadow-sm shadow-slate-400 rounded-lg pr-2 gap-4 mt-5 md:mt-20"
      onSubmit={handleSubmit}
    >
      {/* Title and  */}
      <div className="w-full">
        <input
          type="text"
          placeholder={Title}
          className="w-full py-2 rounded-lg pl-4 outline-none font-bold"
          onClick={() => setOpenTextArea(true)}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        {/* Text Area for taking note  */}
        {openTextArea && (
          <textarea
            className="w-full outline-none p-2 pl-4 resize-none"
            onChange={(e) => setTextArea(e.target.value)}
            value={textArea}
            placeholder="Take  a  note..."
            onSubmit={handleSubmit}
          />
        )}
      </div>

      {/* Choose file button */}
      <button
        onClick={handleClick}
        type="button"
        className={openTextArea ? "mb-auto mt-2" : ""}
      >
        {/* choose file input */}
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
                  setImgSrc(fileReader.result);
                } else {
                  console.log("Note an Image file");
                }
              };
              fileReader.readAsDataURL(file);
            }
          }}
        />
        {/* choose file Icon */}
        <span className="text-2xl">
          <CiImageOn />
        </span>
      </button>
      {imgSrc && (
        <img src={imgSrc} className="w-20 h-20 object-cover" alt="a disk" />
      )}
    </form>
  );
};

export default NoteForm;
