import fs from "fs";
import path from "path";

// 1. Fill in your mapping here:
const gidMap: Record<string, string> = {
  "laptops-desktops.mdx": "956631618", // <-- Replace with actual gid
  "servers.mdx": "816388005",          // <-- Replace with actual gid
  "networking.mdx": "1345533357",      // <-- Replace with actual gid
  "cards.mdx": "785219754",           // <-- Replace with actual gid
  "drives.mdx": "255372992",          // <-- Replace with actual gid
  "gpu.mdx": "628871544",             // <-- Replace with actual gid
  "memory.mdx": "2095076836",          // <-- Replace with actual gid
  "phones.mdx": "1205348412",          // <-- Replace with actual gid
  "processors.mdx": "433613894",      // <-- Replace with actual gid
  "storage.mdx": "708310103",         // <-- Replace with actual gid
  "tablets.mdx": "1164082397"          // <-- Replace with actual gid
};

const productDir = path.join(__dirname, "../docs/product-training");

const embedBlock = (gid: string) => `
## Technical Cutlines

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRBKY_e6e1XBdjLn4WTFw5W5o5j8lyFAAsApDK6FXAvNri0Wh5QAVNY3hFJZTjNdg/pubhtml?widget=true&headers=false&gid=${gid}&single=true"
  width="100%"
  height="800"
  style="border: none; border-radius: 8px;"
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