"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface ButtonActionProps {
  id: string;
}

const ButtonAction: FC<ButtonActionProps> = ({ id }) => {
  const router = useRouter();

  const { mutate: delerePost, isPending } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/post/${id}`);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  return (
    <div>
      <Link href={`/edit/${id}`} className="btn mr-2">
        <Pencil /> Edit
      </Link>
      <button
        className="btn btn-error"
        onClick={() => delerePost()}
        disabled={isPending}
      >
        {isPending ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <>
            <Trash /> Delete
          </>
        )}
      </button>
    </div>
  );
};

export default ButtonAction;
