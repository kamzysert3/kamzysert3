import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { execSync } from "node:child_process";

function getCommit() {
  const fromVercel = process.env.VERCEL_GIT_COMMIT_SHA;
  if (fromVercel) return fromVercel.slice(0, 7);
  try {
    return execSync("git rev-parse --short HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim()
      .slice(0, 7);
  } catch {
    return "dev-build";
  }
}

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    __KRN_BUILD__: JSON.stringify({
      commit: getCommit(),
      buildTime: new Date().toISOString(),
    }),
  },
}));