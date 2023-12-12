import BackButton from "@/app/components/BackButton";
import ButtonAction from "@/app/components/ButtonAction";
import { db } from "@/lib/db";
import { FC } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const getPost = async (id: string) => {
  const respose = await db.post.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });

  return respose;
};

const Page: FC<PageProps> = async ({ params }) => {
  console.log(params.id);
  const post = await getPost(params.id);

  return (
    <>
      <div className="mb-8">
        <BackButton />
        <h2 className="text-2xl font-bold my-4">{post?.title}</h2>
        <ButtonAction id={params.id} />
      </div>
      <span className="badge badge-neutral">{post?.tag.name}</span>
      <p className="text-slate-700">{post?.content}</p>
    </>
  );
};

export default Page;
