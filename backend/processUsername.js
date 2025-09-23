//this script was used to populate the bloom filter with usernames from a CSV file

import fs from "fs";
import csv from "csv-parser";
import { createBloomFilter } from "./Bloom/bloomFilter.js";

const bloom = createBloomFilter();

fs.createReadStream("username_data/users.csv")
  .pipe(csv({ headers: ["username"], skipLines: 0 })) // force single column named "username"
  .on("data", (row) => {
    const username = row.username?.trim();
    if (!username) return;

    bloom.add(username);
    console.log(`✅ Added: ${username}`);
  })
  .on("end", () => {
    console.log("🎉 Bloom filter populated with all usernames from CSV.");
  });
