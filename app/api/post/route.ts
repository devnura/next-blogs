import { db } from "@/lib/db";
import { buildResponse } from "@/lib/helper";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const post = await db.post.create({
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      },
    });

    const response = buildResponse(true, 200, "Success", post);
    return NextResponse.json(response, { status: response.code });
  } catch (error: any) {
    const response = buildResponse(false, 500, "could not create post", {});
    return NextResponse.json(response, { status: response.code });
  }
}
