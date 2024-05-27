// pages/api/folder/[client].js

import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: any, context: any) {
  const { params } = context;

  let task = params.task;

  try {
    const response = await axios.get(
      `https://api.clickup.com/api/v2/task/${task}/?include_subtasks=true&include_markdown_description=true`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.CLICKUP_API_KEY,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}
