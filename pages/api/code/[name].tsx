import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "@vercel/og";
import qrcode from "yaqrcode";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest, res: NextResponse) {
  const url = new URL(req.url);

  const base64 = qrcode("hello world", {
    size: 500,
  });

  console.log(base64);

  return new ImageResponse(<img alt="Vercel" height={500} src={base64} width={500} />, {
    width: 500,
    height: 500,
  });
}
