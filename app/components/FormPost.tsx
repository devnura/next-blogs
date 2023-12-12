"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { FormInputPost } from "../types";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tag } from "@prisma/client";
import { Trash } from "lucide-react";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  label: String;
  initialValue?: FormInputPost;
}
const FormPost: FC<FormPostProps> = ({ submit, label, initialValue }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormInputPost>({
    defaultValues: initialValue,
  });

  // fetch list tags
  const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const { data } = await axios.get("/api/tags");
      return data.data;
    },
  });

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Post title..."
        className="input input-bordered w-full max-w-lg"
      />

      <textarea
        {...register("content", { required: true })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post content..."
      />

      {isLoadingTags ? (
        <span className="loading loading-spinner loading-sm"></span>
      ) : (
        <select
          {...register("tagId", { required: true })}
          className="select select-bordered w-full max-w-lg"
          defaultValue={""}
        >
          <option disabled value="">
            Select tags
          </option>
          {dataTags?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}
      <button
        className="btn btn-primary w-full max-w-lg"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <>
            {label} {isSubmitting}
          </>
        )}
      </button>
    </form>
  );
};

export default FormPost;
