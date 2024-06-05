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

export async function POST(req: any, context: any) {
  const { params } = context;

  let task = params.task;
  // Extract the comment content from the request body
  const { comment_text } = await req.json();

  try {
    const response = await axios.post(
      `https://api.clickup.com/api/v2/task/${task}/comment`,
      {
        comment_text,
        notify_all: true,
      },
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
