import fs from "fs";
import path from "path";

// 1. Fill in your mapping here:
const gidMap: Record<string, string> = {
  "laptops-desktops.md": "658319452", // <-- Replace with actual gid
  "servers.md": "1966414049",          // <-- Replace with actual gid
  "networking.md": "637810809",      // <-- Replace with actual gid
  "cards.md": "634340236",           // <-- Replace with actual gid
  "drives.md": "1030159871",          // <-- Replace with actual gid
  "gpu.md": "302295510",             // <-- Replace with actual gid
  "memory.md": "2023041348",          // <-- Replace with actual gid
  "phones.md": "1812324705",          // <-- Replace with actual gid
  "processors.md": "882296196",      // <-- Replace with actual gid
  "storage.md": "1752306421",         // <-- Replace with actual gid
  "tablets.md": "1116239162"          // <-- Replace with actual gid
};

const productDir = path.join(__dirname, "../docs/product-training");

const embedBlock = (gid: string) => `
## Technical Cutlines

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRKEG_k78qv7qXWAQu3WnnRl7jO-3KWSH1t6PemKWB_UHERHi2SUIlhPcaqQQJhiw/pubhtml?widget=true&headers=false&gid=${gid}&single=true"
  width="100%"
  height="800"
  style={{ border: 'none', borderRadius: '8px' }}
  title="Technical Cutlines"
  allowfullscreen
></iframe>
`;

for (const [file, gid] of Object.entries(gidMap)) {
  const filePath = path.join(productDir, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    continue;
  }
  let content = fs.readFileSync(filePath, "utf8");

  // Remove all existing Google Sheets iframe blocks (with any gid)
  content = content.replace(
    /## Technical Cutlines[\s\S]*?<iframe[\s\S]*?src="https:\/\/docs\.google\.com\/spreadsheets[^"]*gid=[^"&]+[\s\S]*?<\/iframe>\s*/gi,
    ""
  );

  // Add the new block at the end
  content = content.trimEnd() + "\n\n" + embedBlock(gid) + "\n";

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Updated: ${file}`);
} 