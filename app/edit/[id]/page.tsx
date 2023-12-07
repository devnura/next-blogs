"use client";

import FormPost from "@/app/components/FormPost";
import { FormInputPost } from "@/app/types";
import { SubmitHandler } from "react-hook-form";

const page = () => {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Edit post</h1>
      <FormPost submit={handleEditPost} label={"Update"} />
    </div>
  );
};

export default page;
