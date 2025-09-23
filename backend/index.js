import { createBloomFilter } from "./Bloom/bloomFilter.js";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const bloom = createBloomFilter();


app.post("/add-username", (req, res) => {
  const { username } = req.body;
  try {
    if (bloom.contains(username)) {
      console.log(`"${username}" already exists`);
      return res.status(409).json({ message: "Username already exists" });
    } else {
      bloom.add(username);
      console.log(`"${username}" did not exist, now added`);
      return res.status(201).json({ message: "Username added successfully" });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});