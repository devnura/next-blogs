"use client";

import FormPost from "@/app/components/FormPost";
import { FormInputPost } from "@/app/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { SubmitHandler } from "react-hook-form";

interface EditPostPage {
  params: {
    id: string;
  };
}

const EditPostPage: FC<EditPostPage> = ({ params }) => {
  const router = useRouter();
  const { data: dataPost, isLoading } = useQuery({
    queryKey: ["post", params.id],
    queryFn: async () => {
      const respose = await axios.get(`/api/post/${params.id}`);
      return respose.data;
    },
  });

  const { mutate: createPost, isSuccess } = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.post("api/post", newPost);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner"></span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Edit post</h1>
      <FormPost
        submit={handleEditPost}
        label={"Update"}
        initialValue={dataPost.data}
      />
    </div>
  );
};

export default EditPostPage;
