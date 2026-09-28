// Builds a static, API-free export of the site into ./out for a shareable preview.
// API route handlers can't be statically exported, so they are moved aside for the build and restored after.
import { execSync } from "node:child_process";
import { existsSync, renameSync } from "node:fs";

const api = "app/api";
const parked = "_api_disabled";
const moved = existsSync(api);
if (moved) renameSync(api, parked);
try {
  execSync("next build", {
    stdio: "inherit",
    env: { ...process.env, STATIC_PREVIEW: "1", NEXT_PUBLIC_PREVIEW: "1" },
  });
} finally {
  if (moved) renameSync(parked, api);
}
