"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

export const creatNote = async (note) => {
  await prisma.notes.create({
    data: {
      title: note.title,
      content: note.content,
      img: note.img,
    },
  });

  revalidatePath("/");
};

export const deleteNote = async (id) => {
  await prisma.notes.update({
    where: {
      id,
    },
    data: {
      isDeleted: true,
      isArchived: false,
      isPinned: false,
    },
  });

  revalidatePath("/");
  revalidatePath("/archive");
};

export const undoNote = async (id) => {
  await prisma.notes.update({
    where: {
      id,
    },
    data: {
      isDeleted: false,
    },
  });

  revalidatePath("/delete");
};

export const removeNoteFromTrash = async (id) => {
  await prisma.notes.delete({
    where: {
      id,
    },
  });
  revalidatePath("/delete");
};

export const archiveNote = async (id) => {
  await prisma.notes.update({
    where: {
      id,
    },
    data: {
      isArchived: true,
    },
  });
  revalidatePath("/archive");
  revalidatePath("/");
};

export const undoArchivedNote = async (id) => {
  await prisma.notes.update({
    where: {
      id,
    },
    data: {
      isArchived: false,
    },
  });
  revalidatePath("/");
  revalidatePath("/archive");
};

// export const deleteFromArchive = async (id) => {
//     await prisma.notes.update({
//         where: {
//             id
//         },
//         data: {
//             isArchived: false,
//             isDeleted:
//         }
//     })
// }

export const pinneNote = async (id) => {
  await prisma.notes.update({
    where: {
      id,
    },
    data: {
      isPinned: true,
    },
  });

  revalidatePath("/");
};

export const unPinneNote = async (id) => {
  await prisma.notes.update({
    where: {
      id,
    },
    data: {
      isPinned: false,
    },
  });

  revalidatePath("/");
};

// export const deleteImage = async (id) => {
//   await prisma.notes.update({
//     where: {
//       id,
//     },
//     data: {
//       img: null,
//     },
//   });

//   revalidatePath(`/edit/${id}`);
// };

export const editNote = async (id, img, title, content) => {
  await prisma.notes.update({
    where: {
      id,
    },
    data: {
      title,
      img,
      content,
    },
  });

  revalidatePath("/");
  redirect("/");
};

export const searchNote = async (title) => {
  const searchedNote = await prisma.notes.findMany({
    where: {
      title: {
        contains: title,
      },
    },
  });

  // if (searchedNote.length === 0) {
  //   return ["No matching result found"];
  // }
  return searchedNote;
};
