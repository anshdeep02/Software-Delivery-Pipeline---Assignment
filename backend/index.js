// // Assuming you have set up your project and installed dependencies (express, node-fetch, Groq library)

// // Import required modules
// import express from 'express';
// import 'dotenv/config'
// import Groq from "groq-sdk";

// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// export async function main() {
//   const chatCompletion = await getGroqChatCompletion();
//   // Print the completion returned by the LLM.
//   console.log(chatCompletion.choices[0]?.message?.content || "");
// }
// export async function getGroqChatCompletion() {
//     return groq.chat.completions.create({
//       messages: [
//         {
//           role: "user",
//           content: "Explain the importance of fast language models",
//         },
//       ],
//       model: "llama3-8b-8192",
//     });
//   }

// // Initialize Express app
// const app = express();

// // Define the port to listen on
// const port = process.env.PORT || 5001;

// // Function to call the Llama-80b model using Groq
// async function getLLMResponse(question) {
//   // Build your Groq query to call Llama-80b (replace with your specific query)
//   const groq = `*[_type == "callLlama80b"]{ response}[0].response`;

//   // Use your Groq client to execute the query with the question as parameter
//   const response = await yourGroqClient.fetch(groq, { question });

//   // Return the LLM response
//   return response;
// }

// // check if backend is available
// app.get('/api/health', (req, res) => {
//   res.status(200).send({ message: 'Server is up and running' });
// });

// // API endpoint to receive user question
// app.get('/api/ask', async (req, res) => {
//   const question = req.query.question;

//   // Check if question is provided
//   if (!question) {
//     return res.status(400).send({ message: 'Missing question parameter' });
//   }

//   try {
//     // Call the function to get LLM response with the question
//     const llmResponse = await getLLMResponse(question);

//     // Send the LLM response back to the frontend
//     res.json({ response: llmResponse });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Internal server error' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// Import required modules
import express from "express";
import "dotenv/config";
import askRouter from "./src/api/ask.js"; // Import the ask controller router
import healthRouter from "./src/api/health.js"; // Import the health controller router

const app = express();
const port = process.env.PORT || 5001;

// Mount the individual API routers under the "/api" prefix
app.use("/api", askRouter);
app.use("/api", healthRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
