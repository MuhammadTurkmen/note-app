import EditForm from "@/components/EditForm";
import prisma from "@/utils/db";
import React from "react";

const SingleEditPage = async ({ params }) => {
  const { id } = await params;
  const singleNote = await prisma.notes.findUnique({
    where: {
      id: id,
    },
  });
  return <EditForm note={singleNote} />;
};

export default SingleEditPage;
