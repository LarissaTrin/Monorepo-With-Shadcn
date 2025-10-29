// apps/web/tailwind.config.ts

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}", 
  ],
  prefix: "ui-", 
  presets: [sharedConfig],
};

export default config;