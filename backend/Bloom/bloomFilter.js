import MurmurHash3 from "imurmurhash";
import fs from "fs";

export function createBloomFilter(size = 10_000_000, numHashes = 7, file = "bloom.bin") {
  const numBytes = Math.ceil(size / 8);
  let filter;

  // Load or initialize bloom filter
  if (fs.existsSync(file)) {
    filter = fs.readFileSync(file);
    if (filter.length !== numBytes) {
      filter = Buffer.alloc(numBytes);
    }
    console.log("Bloom filter loaded from file");
  } else {
    filter = Buffer.alloc(numBytes);
    console.log("New bloom filter created");
  }

  function save() {
    fs.writeFileSync(file, filter);
  }

  function hash1(str) {
    return new MurmurHash3(str, 0x9747b28c).result() >>> 0;
  }

  function hash2(str) {
    return new MurmurHash3(str, 0x12345678).result() >>> 0;
  }

  function getHashes(str) {
    const h1 = hash1(str);
    const h2 = hash2(str);
    const positions = [];
    for (let i = 0; i < numHashes; i++) {
      positions.push((h1 + i * h2) % size);
    }
    return positions;
  }

  function add(str) {
    const positions = getHashes(str);
    positions.forEach(pos => {
      const byteIndex = Math.floor(pos / 8);
      const bitIndex = pos % 8;
      filter[byteIndex] |= (1 << bitIndex);
    });
    save();
  }

  function contains(str) {
    const positions = getHashes(str);
    for (let pos of positions) {
      const byteIndex = Math.floor(pos / 8);
      const bitIndex = pos % 8;
      if ((filter[byteIndex] & (1 << bitIndex)) === 0) {
        return false; // 🚨 no auto-add anymore
      }
    }
    return true;
  }

  // Public API
  return {
    add,
    contains,
  };
}
