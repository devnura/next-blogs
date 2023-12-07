import BackButton from "@/app/components/BackButton";
import ButtonAction from "@/app/components/ButtonAction";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mb-8">
        <BackButton />
        <h2 className="text-2xl font-bold my-4">Post One</h2>
        <ButtonAction />
      </div>
      <p className="text-slate-700">Post one content</p>
    </>
  );
};

export default page;
