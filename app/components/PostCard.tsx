import Link from "next/link";

const PostCard = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body space-y-2">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link href={"/blog/1"} className="hover:underline">Read More...</Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
