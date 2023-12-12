import { db } from "@/lib/db";
import { buildResponse } from "@/lib/helper";
import { NextResponse } from "next/server";

interface contexProps {
  params: {
    postId: string;
  };
}

export async function GET(req: Request, contex: contexProps) {
  try {
    const { params } = contex;

    const post = await db.post.findFirstOrThrow({
      where: {
        id: params.postId,
      },
      include: {
        tag: true,
      },
    });
    const response = buildResponse(true, 200, "Success", post);
    return NextResponse.json(response, { status: response.code });
  } catch (error: any) {
    const response = buildResponse(
      false,
      (error as any).statusCode || 500,
      error.message || "could not delete post",
      {}
    );
    return NextResponse.json(response, { status: response.code });
  }
}

export async function DELETE(req: Request, contex: contexProps) {
  try {
    const { params } = contex;

    await db.post.findFirstOrThrow({
      where: {
        id: params.postId,
      },
    });

    await db.post.delete({
      where: {
        id: params.postId,
      },
    });

    const response = buildResponse(true, 200, "Success", {});
    return NextResponse.json(response, { status: response.code });
  } catch (error: any) {
    const response = buildResponse(
      false,
      (error as any).statusCode || 500,
      error.message || "could not delete post",
      {}
    );
    return NextResponse.json(response, { status: response.code });
  }
}

export async function PUT(req: Request, contex: contexProps) {
  try {
    const { params } = contex;

    const body = await req.json();

    await db.post.findFirstOrThrow({
      where: {
        id: params.postId,
      },
    });

    await db.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tag,
      },
    });

    const response = buildResponse(true, 200, "Success", {});

    return NextResponse.json(response, { status: response.code });
  } catch (error: any) {
    const response = buildResponse(
      false,
      (error as any).statusCode || 500,
      error.message || "could not update post",
      {}
    );

    return NextResponse.json(response, { status: response.code });
  }
}
