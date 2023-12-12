import { db } from "@/lib/db";
import { buildResponse } from "@/lib/helper";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tags = await db.tag.findMany();
    const response = buildResponse(true, 200, "Success", tags);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    const response = buildResponse(false, 500, "could not fetch tags", {});
    return NextResponse.json(response, { status: response.code });
  }
}
