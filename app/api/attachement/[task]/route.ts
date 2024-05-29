import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: any, context: any) {
  const { params } = context;

  let task = params.task;
  // Extract the comment content from the request body
  const { formData } = await req.json();

  try {
    const response = await axios.post(
      `https://api.clickup.com/api/v2/task/${task}/attachment`,
      formData,
      {
        headers: {
          ...formData.getHeaders(), // Get headers from FormData for proper file upload
          Authorization: process.env.CLICKUP_API_KEY,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}
