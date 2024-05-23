// pages/api/folder/[client].js

import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: any, context: any) {
  const { params } = context;

  let project = params.project;

  try {
    const response = await axios.get(
      `https://api.clickup.com/api/v2/list/${project}/task`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.CLICKUP_API_KEY,
        },
      }
    );

    const taskId = response?.data?.tasks[1].id;

    const structureResponse = await axios.get(
      `https://api.clickup.com/api/v2/task/${taskId}?include_subtasks=true`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.CLICKUP_API_KEY,
        },
      }
    );
    const structure = structureResponse.data;
    console.log(response);

    return NextResponse.json({
      data: response.data,
      structure: structure,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}
