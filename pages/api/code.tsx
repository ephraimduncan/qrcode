import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "@vercel/og";
import qrcode from "yaqrcode";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest, res: NextResponse) {
  const url = new URL(req.url);
  const text = url.searchParams.get("text");
  const size = Number(url.searchParams.get("size") || "500");

  const base64 = qrcode(text ? text : req.nextUrl.href, {
    size,
  });

  // eslint-disable-next-line @next/next/no-img-element
  return new ImageResponse(<img alt="Vercel" height={size} src={base64} width={size} />, {
    width: size,
    height: size,
  });
}
