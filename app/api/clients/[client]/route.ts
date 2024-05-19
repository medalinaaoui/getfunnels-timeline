// pages/api/folder/[client].js

import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: any, context: any) {
  const { params } = context;

  let client = params.client;

  try {
    const response = await axios.get(
      `https://api.clickup.com/api/v2/folder/${client}/list`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.CLICKUP_API_KEY,
        },
      }
    );
    console.log(response);

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}
