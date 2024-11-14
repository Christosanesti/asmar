// import { NextResponse } from "next/server";
// import Groq from "groq-sdk";

// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// export async function POST(request: Request) {
//   try {
//     const { message } = await request.json();

//     if (!message) {
//       return NextResponse.json(
//         { message: "داشتن محتوای پیغام الزامی است" },
//         { status: 400 }
//       );
//     }
//     const chatCompletion = await groq.chat.completions.create({
//       messages: [
//         {
//           role: "user",
//           content: message,
//         },
//       ],
//       model: "llama3-8b-8192",
//     });
//     const responseMessage =
//       chatCompletion.choices[0]?.message?.content ||
//       "پاسخی از هوش مصنوعی دریافت نشد";

//     return NextResponse.json({ message: responseMessage });
//   } catch (err) {
//     console.error("error in API", err);
//     return NextResponse.json({ error: "خطایی رخ داده است" }, { status: 500 });
//   }
// }
// // export async function main() {
// //   const chatCompletion = await getGroqChatCompletion();
// //   // Print the completion returned by the LLM.
// //   console.log(chatCompletion.choices[0]?.message?.content || "");
// // }

// // export async function getGroqChatCompletion() {
// //   return groq.chat.completions.create({
// //     messages: [
// //       {
// //         role: "user",
// //         content: "Explain the importance of fast language models",
// //       },
// //     ],
// //     model: "llama3-8b-8192",
// //   });
// // }

//^^^^ API FOR GROQ AI
import React from "react";
const hello = "hell world";
