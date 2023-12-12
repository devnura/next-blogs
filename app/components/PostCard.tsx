import { Tag } from "@prisma/client";
import Link from "next/link";
import { FC } from "react";

interface PostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    tag: Tag;
  };
}
const PostCard: FC<PostCardProps> = ({ post }) => {
  const { id, title, content, tag } = post;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body space-y-2">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-between items-center">
          <span className="badge badge-neutral p-3">{tag.name}</span>
          <Link href={`/blog/${id}`} className="hover:underline">
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
