// import axios from "axios";
// import { NextResponse } from "next/server";
// import FormData from "form-data";

// export async function POST(req: any, context: any) {
//   const { params } = context;
//   const task = params.task;

//   try {
//     const formData = await req.formData();
//     console.log("formData: ", formData);

//     // Get the attachment stream
//     const attachment = formData.get("attachment");
//     console.log("attachment: ", attachment);

//     // Ensure that the attachment is a readable stream
//     if (!attachment || typeof attachment.pipe !== "function") {
//       throw new Error("Attachment is not a readable stream");
//     }

//     // Create a new FormData object
//     const data = new FormData();

//     // Append the attachment to the FormData object
//     data.append("attachment", attachment, {
//       filename: "attachment", // Provide a filename if it's not already set
//     });

//     // Configure axios request
//     const response = await axios.post(
//       `https://api.clickup.com/api/v2/task/${task}/attachment`,
//       data,
//       {
//         headers: {
//           Authorization: process.env.CLICKUP_API_KEY,
//           ...data.getHeaders(),
//         },
//         maxBodyLength: Infinity,
//       }
//     );

//     console.log("API Response: ", response.data);

//     return NextResponse.json(response.data);
//   } catch (error: any) {
//     console.error("Error posting to ClickUp API: ", error);

//     if (error.response) {
//       console.error("Error response data: ", error.response.data);
//       console.error("Error response status: ", error.response.status);
//       console.error("Error response headers: ", error.response.headers);
//     }

//     return NextResponse.json({ message: error.message });
//   }
// }
