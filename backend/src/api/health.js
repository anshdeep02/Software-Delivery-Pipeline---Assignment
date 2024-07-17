import express from "express";

const router = express.Router();

// Example environment variable for demonstration
const API_KEY = process.env.GROQ_API_KEY;

// Health check endpoint
router.get("/healthcheck", (req, res) => {
  // Check essential environment conditions
  if (!API_KEY) {
    return res.status(500).send({ error: "API key is not defined" });
  }

  // If everything is fine, return status 200 with diagnostic data
  res.status(200).send({
    message: "Server is up and running",
    timestamp: new Date().toISOString(),
    apiKeyStatus: "defined",
    // Add more diagnostic data as needed
  });
});

export default router;
