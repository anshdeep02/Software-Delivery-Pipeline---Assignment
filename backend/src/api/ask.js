import express from "express";
// Import the Groq service
import { getGroqChatCompletion } from "../utils/groq.js";

const router = express.Router();

router.get("/ask", async (req, res) => {
  const question = req.query.question;

  // Check if question is provided
  if (!question) {
    return res.status(400).send({ message: "Missing question parameter" });
  }

  try {
    // Call the Groq service to get LLM response with the question
    console.log(question);
    const llmResponse = await getGroqChatCompletion(question);
    // Send the LLM response back to the frontend
    res.json({ response: llmResponse });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

export default router;
