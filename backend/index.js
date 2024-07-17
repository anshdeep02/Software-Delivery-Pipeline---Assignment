// Import required modules
import express from "express";
import "dotenv/config";
import askRouter from "./src/api/ask.js"; // Import the ask controller router
import healthRouter from "./src/api/health.js"; // Import the health controller router
import cors from "cors"; // Import the CORS middleware for handling cross-origin requests

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Mount the individual API routers under the "/api" prefix
app.use("/api", askRouter);
app.use("/api", healthRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
